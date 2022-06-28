import styled from "styled-components";

export default function SingupInput({
	SingupDataInput,
	handleFormChange,
	singup,
	blockInput,
}) {
	return (
		<Forms onSubmit={singup} blockInput={blockInput}>
			<input
				type="text"
				name="name"
				placeholder="Nome"
				onChange={(e) => handleFormChange(e)}
				value={SingupDataInput.name}
				required
			/>
			<input
				type="email"
				name="email"
				placeholder="E-mail"
				onChange={(e) => handleFormChange(e)}
				value={SingupDataInput.email}
				required
			/>
			<input
				type="password"
				name="password"
				placeholder="Senha"
				onChange={(e) => handleFormChange(e)}
				value={SingupDataInput.password}
				required
			/>

			<input
				type="password"
				name="isPasswordEqual"
				placeholder="Confirme a senha"
				onChange={(e) => handleFormChange(e)}
				value={SingupDataInput.isPasswordEqual}
				required
			/>
			<Button blockInput={blockInput} type="submit">
				Cadastrar
			</Button>
		</Forms>
	);
}

const Forms = styled.form`
	display: flex;
	flex-direction: column;
	margin: 30px 0 0 0;

	input[type="email"],
	input[type="password"],
	input[type="text"],
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
	width: 100%;
	height: 45px;
	margin-top: 10px;
	background: #a328d6;
	border-radius: 5px;
	color: white;
	font-size: 20px;
	border: none;
	pointer-events: ${(props) => (props.blockInput ? "none" : "")};
`;
