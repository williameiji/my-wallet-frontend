import styled from "styled-components";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import UserContext from "../context/UserContext";
import BottomBar from "./BottomBar";
import Balance from "./Balance";
import List from "./List";

export default function HistoryScreen() {
	const { userInfo, controlHistory, setControlHistory } =
		useContext(UserContext);
	const [saveUserHistory, setSaveUserHistory] = useState([]);
	const navigate = useNavigate();

	let config = {
		headers: {
			Authorization: `Bearer ${userInfo.token}`,
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

	function exitApp() {
		navigate("/");
	}

	function deleteInfo(element) {
		if (window.confirm("Deseja realmente excluir?")) {
			axios
				.delete(`http://localhost:5000/history/${element}`, config)
				.then(() => {
					setControlHistory(true);
				})
				.catch((err) => {
					alert(err);
				});
		}
	}

	function editInformation(type, id) {
		if (type === "input") {
			navigate(`/editinput/${id}`);
		} else {
			navigate(`/editoutput/${id}`);
		}
	}

	function addInput() {
		navigate("/newinput");
	}

	function addOutput() {
		navigate("/newoutput");
	}

	return (
		<Box>
			<TopBar>
				<p>{`Olá, ${userInfo.name}`}</p>
				<ion-icon name="log-out-outline" onClick={exitApp}></ion-icon>
			</TopBar>
			{saveUserHistory.length ? (
				<>
					<HistoryContainer>
						<div>
							<List
								saveUserHistory={saveUserHistory}
								deleteInfo={deleteInfo}
								editInformation={editInformation}
							/>
						</div>
					</HistoryContainer>
					<Balance saveUserHistory={saveUserHistory} />
				</>
			) : (
				<ContainerText>
					<Text>Não há registros de entrada ou saída</Text>
				</ContainerText>
			)}

			<BottomBar addInput={addInput} addOutput={addOutput} />
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
	flex-direction: column;
	width: 100%;
	height: 63vh;
	overflow: auto;
	background-color: white;
	border-radius: 5px 5px 0 0;
	padding: 0 10px 0 10px;
	color: #868686;
	border-bottom-style: none;
`;

const ContainerText = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 65vh;
	overflow: auto;
	background-color: white;
	border-radius: 5px;
	padding: 10px;
	color: #868686;
	margin-bottom: 15px;
`;

const Text = styled.p`
	font-size: 16px;
	margin: 0 auto;
`;
