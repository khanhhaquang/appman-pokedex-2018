import styled from 'styled-components';

const Styled = styled.div`
	flex-direction: column;
	padding-left: 10px;
	padding-top: 10px;
	.name {
		font-family: 'Gaegu';
		text-transform: uppercase;
		font-size: 26px;
	}
	.progress {
		margin-top: 10px;
	}

	.happy {
		margin-top: 10px;
		.cute {
			margin-right: 5px;
			width: 30px;
			height: 30px;
		}
	}
`;

export default Styled;
