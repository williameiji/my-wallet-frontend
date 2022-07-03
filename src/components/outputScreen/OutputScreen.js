import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import UserContext from "../context/UserContext";
import url from "../services/api";

export default function OutputScreen() {
	const [registerDataOutput, setRegisterDataOutput] = useState({
		value: "",
		description: "",
	});
	const { setControlHistory, userInfo } = useContext(UserContext);
	const navigate = useNavigate();

	function handleFormChange(e) {
		let inputData = { ...registerDataOutput };
		inputData[e.target.name] = e.target.value;
		setRegisterDataOutput(inputData);
	}

	let config = {
		headers: {
			Authorization: `Bearer ${userInfo.token}`,
		},
	};

	function registerOutput(e) {
		e.preventDefault();

		axios
			.post(
				url.history,
				{
					...registerDataOutput,
					value: `-${registerDataOutput.value}`,
					type: "output",
				},
				config
			)
			.then(() => {
				setControlHistory(true);
				navigate("/history");
			})
			.catch((err) => {
				alert(err.response.data);
				if (err.response.status === 401) {
					navigate("/");
				}
			});
	}

	return (
		<Box>
			<Title>Nova saída</Title>
			<Forms onSubmit={registerOutput}>
				<input
					type="text"
					name="value"
					placeholder="Valor"
					inputMode="numeric"
					step=".01"
					pattern="[0-9]+\.[0-9]2|[0-9]+"
					onChange={(e) => handleFormChange(e)}
					value={registerDataOutput.value}
					required
				/>
				<p>Ex: 10 ou 10.48</p>
				<input
					type="text"
					name="description"
					placeholder="Descrição"
					onChange={(e) => handleFormChange(e)}
					value={registerDataOutput.description}
					required
				/>
				<Button type="submit">Salvar saída</Button>
			</Forms>
		</Box>
	);
}

const Box = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	padding: 25px;

	p {
		margin: 5px 0 0 0;
		font-size: 15px;
		color: white;
	}
`;

const Forms = styled.form`
	display: flex;
	flex-direction: column;

	input[type="text"],
	input[type="number"] {
		width: 100%;
		height: 55px;
		background-color: #ffffff;
		border: 1px solid #d5d5d5;
		border-radius: 5px;
		margin-top: 10px;
		padding: 0 0 0 10px;

		::placeholder {
			font-family: "Raleway", sans-serif;
			font-size: 20px;
			color: black;
		}
	}
`;

const Button = styled.button`
	font-family: "Raleway", sans-serif;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 45px;
	margin-top: 10px;
	background: #a328d6;
	border-radius: 5px;
	color: white;
	font-size: 20px;
	border: none;
`;

const Title = styled.h1`
	font-size: 26px;
	margin: 0 0 40px 0;
	color: white;
`;
