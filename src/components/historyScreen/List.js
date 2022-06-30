import styled from "styled-components";

export default function List({ saveUserHistory, deleteInfo, editInformation }) {
	return (
		<Box>
			{saveUserHistory.map((history, index) => (
				<li key={index}>
					<div>
						<span>{history.date}</span>
						<Description
							onClick={() => editInformation(history.type, history._id)}
						>
							<p>{history.description}</p>
						</Description>
					</div>
					<div>
						<Value color={history.type}>
							{parseFloat(history.value).toFixed(2).replace(".", ",")}
						</Value>
						<Delete onClick={() => deleteInfo(history._id)}>X</Delete>
					</div>
				</li>
			))}
		</Box>
	);
}

const Box = styled.ul`
	display: flex;
	flex-direction: column;
	font-size: 20px;

	li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		margin-bottom: 8px;

		div:first-child {
			display: flex;
		}
	}
`;

const Description = styled.div`
	display: flex;
	color: black;
	margin-left: 15px;
	width: 150px;

	p {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
`;

const Value = styled.span`
	color: ${(props) => (props.color === "input" ? "#03AC00" : "#C70000")};
`;

const Delete = styled.span`
	font-size: 16px;
	color: #c6c6c6;
	margin-left: 5px;
`;
