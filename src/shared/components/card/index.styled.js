import styled from 'styled-components';

const Styled = styled.div`
	position: relative;
	width: 100%;
	background-color: #f3f4f7;
	padding: 10px;
	display: flex;
	box-shadow: 0px 0px 2px 0px #d5d6dc;

	.action {
		display: none;
	}
	&:hover {
		box-shadow: 0px 1px 2px 2px #aeaeae;

		.action {
			display: block;
		}
	}
`;

export default Styled;
