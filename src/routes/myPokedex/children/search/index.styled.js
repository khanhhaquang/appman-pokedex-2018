import styled from 'styled-components';

const Styled = styled.div`
	width: 100%;
	height: 100%;
	z-index: 1000;
	position: absolute;
	background-color: #000000a3;
	top: 0;
	left: 0;
	padding: 20px 30px;

	.modal-content {
		z-index: 2;
		padding: 5px;
		background-color: #ffffff;
		height: 100%;
		overflow-y: scroll;
		border-radius: 5px;

		.search-box-wrapper {
			position: relative;
			width: 100%;
			input {
				width: 100%;
				padding: 5px;
				z-index: 1;
				font-size: 22px;
				border: 1px solid #e6e6e6;
				font-family: 'Gaegu';

				&::placeholder {
					font-family: 'Gaegu';
				}
			}

			.button {
				z-index: 2;
				position: absolute;
				right: 5px;
				top: 50%;
				transform: translateY(-50%);
				display: flex;
				align-items: center;
				cursor: pointer;

				img {
					margin: auto;
					height: 30px;
				}
			}
		}

		.search-result {
			padding: 5px;
			padding-bottom: 20px;
			display: grid;
			grid-template-columns: repeat(1, 1fr);
			grid-gap: 10px;

			.progress .bar {
				width: 250px;
			}
		}
	}
`;

export default Styled;
