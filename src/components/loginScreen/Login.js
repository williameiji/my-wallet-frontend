import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import LoginInput from "./LoginInput";

export default function InitialScreen() {
	const [loginDataInput, setLoginDataInput] = useState({
		email: "",
		password: "",
	});
	const [blockInput, setBlockInput] = useState(false);
	//const [control, setControl] = useState(false);
	const navigate = useNavigate();

	function handleFormChange(e) {
		let loginData = { ...loginDataInput };
		loginData[e.target.name] = e.target.value;
		setLoginDataInput(loginData);
	}

	let config = {
		headers: {
			...loginDataInput,
		},
	};

	function login(e) {
		e.preventDefault();
		setBlockInput(true);

		let promise = axios.post("http://localhost:5000/login", {}, config);
		promise
			.then((response) => {
				//
				navigate("rota");
			})
			.catch((err) => {
				alert("Usuário/senha inválidos.");
				setBlockInput(false);
			});
	}

	return (
		<Box>
			<Title>MyWallet</Title>
			<LoginInput
				loginDataInput={loginDataInput}
				handleFormChange={handleFormChange}
				login={login}
				blockInput={blockInput}
			/>
			<Link to="/signup" style={{ textDecoration: "none" }}>
				<p>Primeira vez? Cadastre-se!</p>
			</Link>
		</Box>
	);
}

const Box = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;

	p {
		margin: 25px 0 0 0;
		font-size: 14px;
		color: white;
	}
`;

const Title = styled.h1`
	font-family: "Saira Stencil One", cursive;
	font-size: 32px;
	margin-bottom: 15px;
	color: white;
`;
