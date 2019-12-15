import styled from 'styled-components';

const Styled = styled.footer`
	position: sticky;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 50px;
	background-color: #ec5656;
	z-index: 2;

	.add {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ec5656;
		z-index: 2;
		cursor: pointer;

		span {
			color: #ffffff;
			font-size: 50px;
			font-weight: 700;
		}
	}
`;

export default Styled;
