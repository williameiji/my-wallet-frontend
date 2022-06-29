import styled from "styled-components";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import UserContext from "../context/UserContext";

export default function HistoryScreen() {
	const { userInfo, controlHistory, setControlHistory } =
		useContext(UserContext);
	const [saveUserHistory, setSaveUserHistory] = useState([]);
	const [saveUser, setSaveUser] = useState([]);
	const navigate = useNavigate();

	let config = {
		headers: {
			Authorization: `Bearer ${userInfo}`,
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

	if (controlHistory) {
		axios
			.get("http://localhost:5000/user", config)
			.then((response) => {
				setSaveUser(response.data);
			})
			.catch((err) => {
				alert(err);
			});
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
				<p>{`Olá, ${saveUser}`}</p>
				<ion-icon name="log-out-outline"></ion-icon>
			</TopBar>
			<HistoryContainer>
				{saveUserHistory.length ? (
					<>
						<List>
							{saveUserHistory.map((history, index) => (
								<li key={index}>
									<div>
										<span>{history.date}</span>
										<Description>{history.description}</Description>
									</div>
									<Value color={history.color}>{history.value}</Value>
								</li>
							))}
						</List>
						<Balance>
							<p>SALDO</p>
							<TotalBalance
								color={saveUserHistory
									.map((item) => Number(item.value))
									.reduce(function (acumulador, valorAtual) {
										return acumulador + valorAtual;
									})}
							>
								{saveUserHistory
									.map((item) => Number(item.value))
									.reduce(function (acumulador, valorAtual) {
										return acumulador + valorAtual;
									})}
							</TotalBalance>
						</Balance>
					</>
				) : (
					<Text>Não há registros de entrada ou saída</Text>
				)}
			</HistoryContainer>
			<BottomBar>
				<ContainerBottom onClick={addInput}>
					<ion-icon name="add-circle-outline"></ion-icon>
					<p>Nova entrada</p>
				</ContainerBottom>
				<ContainerBottom onClick={addOutput}>
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
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 65vh;
	background-color: white;
	border-radius: 5px;
	margin: 0 0 15px 0;
	padding: 10px;
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

const Text = styled.p`
	font-size: 16px;
	margin: 0 auto;
`;

const List = styled.ul`
	display: flex;
	flex-direction: column;
	font-size: 20px;

	li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		margin-top: 5px;
	}
`;

const Balance = styled.div`
	display: flex;
	position: absolute;
	bottom: 10px;
	width: 83vw;
	justify-content: space-between;

	p {
		font-size: 20px;
	}
`;

const TotalBalance = styled.p`
	color: ${(props) => (props.color > 0 ? "#03AC00" : "#C70000")};
`;

const Description = styled.span`
	color: black;
	margin-left: 15px;
`;

const Value = styled.span`
	color: ${(props) => props.color};
`;
