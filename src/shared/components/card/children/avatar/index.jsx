import React from 'react';
import Styled from './index.styled';

const Avatar = props => {
	const { src } = props;

	return (
		<Styled className='avatar'>
			<img src={src} className='image' alt='Avatar' />
		</Styled>
	);
};

export default Avatar;
