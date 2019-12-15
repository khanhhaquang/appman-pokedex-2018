import React from 'react';
import Styled from './index.styled';
import { MyPokedexContext } from '../../index.context';
import { togglePopup } from '../../index.actions';

const Footer = () => {
	const { dispatch } = React.useContext(MyPokedexContext);
	return (
		<Styled>
			<div className='add' onClick={() => togglePopup(dispatch)}>
				<span>+</span>
			</div>
		</Styled>
	);
};

export default Footer;
