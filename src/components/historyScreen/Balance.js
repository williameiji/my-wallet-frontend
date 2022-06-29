import styled from "styled-components";

export default function Balance({ saveUserHistory }) {
	return (
		<Box>
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
		</Box>
	);
}

const Box = styled.div`
	display: flex;
	width: 100%;
	padding: 5px 25px 5px 10px;
	justify-content: space-between;
	background-color: white;
	margin-bottom: 15px;
	border-radius: 0 0 5px 5px;

	p:first-child {
		font-weight: bold;
		color: black;
		font-size: 20px;
	}
`;

const TotalBalance = styled.p`
	font-size: 20px;
	color: ${(props) => (props.color >= 0 ? "#03AC00" : "#C70000")};
`;
