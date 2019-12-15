import React from 'react';
import Styled from './index.styled';
import { GetPokedexList, set, remove } from '../../index.actions';
import Card from '../../../../shared/components/card';
import { MyPokedexContext } from '../../index.context';

const List = () => {
	const { myList, dispatch } = React.useContext(MyPokedexContext);

	const renderPokemonList = () => myList.map(i => <Card action='remove' onClick={() => remove(dispatch, i)} key={i.id} data={i} />);

	React.useEffect(() => {
		GetPokedexList('/api/cards').then(resp => set(dispatch, resp.data.cards));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <Styled>{renderPokemonList()}</Styled>;
};

export default List;
