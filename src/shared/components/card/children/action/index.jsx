import React from 'react';
import Styled from './index.styled';

const Action = props => {
	const { action, onClick } = props;
	return (
		<Styled className='action' onClick={onClick}>
			{action === 'remove' && <span className='close'>x</span>}
			{action === 'add' && <span className='add'>Add</span>}
		</Styled>
	);
};

export default Action;
