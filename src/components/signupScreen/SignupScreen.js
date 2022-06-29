import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import SingupInput from "./SignupInput";

export default function SignupScreen() {
	const [SingupDataInput, setSingupDataInput] = useState({
		name: "",
		email: "",
		password: "",
		isPasswordEqual: "",
	});
	const [blockInput, setBlockInput] = useState(false);
	const navigate = useNavigate();

	function handleFormChange(e) {
		let data = { ...SingupDataInput };
		data[e.target.name] = e.target.value;
		setSingupDataInput(data);
	}

	function singup(e) {
		e.preventDefault();
		setBlockInput(true);

		let promise = axios.post("http://localhost:5000/signup", SingupDataInput);
		promise
			.then(() => {
				navigate("/");
				alert("Cadastro efetuado com sucesso!");
			})
			.catch((err) => {
				alert(err.response.data);
				setBlockInput(false);
			});
	}

	return (
		<Box>
			<Title>MyWallet</Title>
			<SingupInput
				SingupDataInput={SingupDataInput}
				handleFormChange={handleFormChange}
				singup={singup}
				blockInput={blockInput}
			/>
			<Link to="/" style={{ textDecoration: "none" }}>
				<p>Já tem uma conta? Faça login!</p>
			</Link>
		</Box>
	);
}

const Box = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 60px auto;

	p {
		margin: 25px 0 0 0;
		font-size: 14px;
		color: white;
	}
`;

const Title = styled.h1`
	font-family: "Saira Stencil One", cursive;
	font-size: 32px;
	color: white;
`;
