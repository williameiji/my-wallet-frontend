import styled from "styled-components";

export default function BottomBar({ addInput, addOutput }) {
	return (
		<Box>
			<ContainerBottom onClick={addInput}>
				<ion-icon name="add-circle-outline"></ion-icon>
				<p>Nova entrada</p>
			</ContainerBottom>
			<ContainerBottom onClick={addOutput}>
				<ion-icon name="remove-circle-outline"></ion-icon>
				<p>Nova saída</p>
			</ContainerBottom>
		</Box>
	);
}

const Box = styled.div`
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
