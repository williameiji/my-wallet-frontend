import styled from "styled-components";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import UserContext from "../context/UserContext";

export default function HistoryScreen() {
	const { userInfo, controlHistory, setControlHistory } =
		useContext(UserContext);
	const [saveUserHistory, setSaveUserHistory] = useState([]);
	const navigate = useNavigate();

	let config = {
		headers: {
			email: userInfo.email,
		},
	};

	if (controlHistory) {
		axios
			.get("http://localhost:5000/history", config)
			.then((userHistory) => {
				setControlHistory(false);
				setSaveUserHistory(userHistory.data);
			})
			.catch((err) => {
				alert(err);
			});
	}

	function addInput() {
		navigate("/newinput");
	}

	return (
		<Box>
			<TopBar>
				<p>{`Olá, `}</p>
				<ion-icon name="log-out-outline"></ion-icon>
			</TopBar>
			<HistoryContainer>
				<ul>
					{saveUserHistory.length
						? "a"
						: "Não há registros de entrada ou saída"}
				</ul>
			</HistoryContainer>
			<BottomBar>
				<ContainerBottom onClick={addInput}>
					<ion-icon name="add-circle-outline"></ion-icon>
					<p>Nova entrada</p>
				</ContainerBottom>
				<ContainerBottom>
					<ion-icon name="remove-circle-outline"></ion-icon>
					<p>Nova saída</p>
				</ContainerBottom>
			</BottomBar>
		</Box>
	);
}

const Box = styled.div`
	width: 100vw;
	max-height: 90vh;
	padding: 20px;
`;

const TopBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	margin: 15px 0 25px 0;

	p {
		font-weight: 700;
		font-size: 26px;
		color: white;
	}

	ion-icon {
		font-size: 26px;
		color: white;
	}
`;

const HistoryContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 65vh;
	background-color: white;
	border-radius: 5px;
	margin: 0 0 15px 0;
	color: #868686;
`;

const BottomBar = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 100%;

	div:first-child {
		margin-right: 5px;
	}

	div:last-child {
		margin-left: 5px;
	}
`;

const ContainerBottom = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 100px;
	background-color: #a328d6;
	border-radius: 5px;
	padding: 10px;

	p {
		font-weight: 700;
		font-size: 17px;
		color: white;
		max-width: 10px;
	}

	ion-icon {
		font-size: 26px;
		color: white;
	}
`;
