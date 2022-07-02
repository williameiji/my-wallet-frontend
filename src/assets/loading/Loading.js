import styled from "styled-components";

export default function Loading() {
	return (
		<Loader>
			<Bars></Bars>
			<Bars></Bars>
			<Bars></Bars>
			<Bars></Bars>
		</Loader>
	);
}

const Loader = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	width: 2em;

	span:nth-of-type(1) {
		animation: grow 1s -0.45s ease-in-out infinite;
	}

	span:nth-of-type(2) {
		animation: grow 1s -0.3s ease-in-out infinite;
	}

	span:nth-of-type(3) {
		animation: grow 1s -0.15s ease-in-out infinite;
	}

	span:nth-of-type(4) {
		animation: grow 1s ease-in-out infinite;
	}

	@keyframes grow {
		0%,
		100% {
			transform: scaleY(1);
		}

		50% {
			transform: scaleY(2);
		}
	}
`;

const Bars = styled.span`
	width: 0.3em;
	height: 10px;
	background-color: white;
`;
