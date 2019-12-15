import React from 'react';
import Styled from './index.styled';
import Avatar from './children/avatar';
import Content from './children/content';
import Action from './children/action';

const Card = props => {
	const { data, action, onClick } = props;

	return (
		<Styled>
			<Avatar src={data.imageUrl} />
			<Content {...data} />
			<Action action={action} onClick={onClick} />
		</Styled>
	);
};

export default Card;
