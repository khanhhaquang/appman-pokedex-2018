import React from 'react';
import Styled from './index.styled';
import { GetMyPokedexList } from './index.actions';
import Card from '../../../../shared/components/card';

const List = () => {
	const [list, setList] = React.useState([]);

	const renderPokemonList = () => list.map(i => <Card key={i.id} data={i} />);

	React.useEffect(() => {
		GetMyPokedexList('/api/cards').then(resp => setList(resp.data.cards));
	}, []);
	return <Styled>{renderPokemonList()}</Styled>;
};

export default List;
