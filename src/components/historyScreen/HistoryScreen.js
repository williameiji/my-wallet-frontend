import styled from "styled-components";

export default function HistoryScreen() {
	return (
		<Box>
			<TopBar>
				<p>Olá, William</p>
				<ion-icon name="log-out-outline"></ion-icon>
			</TopBar>
			<HistoryContainer>Não há registros de entrada ou saída</HistoryContainer>
			<BottomBar>
				<ContainerBottom>
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
