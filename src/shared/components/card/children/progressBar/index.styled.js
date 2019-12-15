import styled from 'styled-components';

const Styled = styled.div`
	display: flex;
	align-items: center;
	.label {
		width: 60px;
	}
	.bar {
		position: relative;
		width: 170px;
		height: 20px;
		border-radius: 999px;
		background-color: #e4e4e4;

		.percentage {
			height: 100%;
			width: ${props => props.percentage + '%'};
			background-color: #f3701a;
			border-radius: 999px;
		}
	}
`;

export default Styled;
