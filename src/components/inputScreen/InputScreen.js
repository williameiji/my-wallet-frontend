import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import UserContext from "../context/UserContext";
import url from "../services/api";
import Loading from "../../assets/loading/Loading";

export default function InputScreen() {
	const [registerDataInput, setRegisterDataInput] = useState({
		value: "",
		description: "",
	});
	const { setControlHistory, userInfo, setBlockInput, blockInput } =
		useContext(UserContext);
	const navigate = useNavigate();

	function handleFormChange(e) {
		let inputData = { ...registerDataInput };
		inputData[e.target.name] = e.target.value;
		setRegisterDataInput(inputData);
	}

	let config = {
		headers: {
			Authorization: `Bearer ${userInfo.token}`,
		},
	};

	function registerInput(e) {
		e.preventDefault();
		setBlockInput(true);

		axios
			.post(
				url.history,
				{
					...registerDataInput,
					type: "input",
				},
				config
			)
			.then(() => {
				setControlHistory(true);
				navigate("/history");
				setBlockInput(false);
			})
			.catch((err) => {
				alert(err.response.data);
				if (err.response.status === 401) {
					navigate("/");
				}
				setBlockInput(false);
			});
	}

	return (
		<Box>
			<Title>Nova entrada</Title>
			<Forms onSubmit={registerInput}>
				<input
					type="text"
					name="value"
					placeholder="Valor"
					inputMode="numeric"
					step=".01"
					pattern="[0-9]+.[0-9]{2}|[0-9]"
					onChange={(e) => handleFormChange(e)}
					value={registerDataInput.value}
					required
				/>
				<p>Ex: 10 ou 10.48</p>
				<input
					type="text"
					name="description"
					placeholder="Descrição"
					onChange={(e) => handleFormChange(e)}
					value={registerDataInput.description}
					required
				/>
				<Button type="submit">
					{blockInput ? <Loading /> : "Salvar entrada"}
				</Button>
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
