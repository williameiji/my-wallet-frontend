import styled from "styled-components";
import Loading from "../../assets/loading/Loading";

export default function LoginInput({
	loginDataInput,
	handleFormChange,
	login,
	blockInput,
}) {
	return (
		<Forms onSubmit={login} blockInput={blockInput}>
			<input
				type="email"
				name="email"
				placeholder="E-mail"
				onChange={(e) => handleFormChange(e)}
				value={loginDataInput.email}
				required
			/>
			<input
				type="password"
				name="password"
				placeholder="Senha"
				onChange={(e) => handleFormChange(e)}
				value={loginDataInput.password}
				required
			/>
			<Button blockInput={blockInput} type="submit">
				{blockInput ? <Loading /> : "Entrar"}
			</Button>
		</Forms>
	);
}

const Forms = styled.form`
	display: flex;
	flex-direction: column;

	input[type="email"],
	input[type="password"] {
		width: 80vw;
		height: 55px;
		pointer-events: ${(props) => (props.blockInput ? "none" : "")};
		background-color: ${(props) => (props.blockInput ? "#F2F2F2" : "#FFFFFF")};
		color: ${(props) => (props.blockInput ? "#AFAFAF" : "")};
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
	pointer-events: ${(props) => (props.blockInput ? "none" : "")};
`;
