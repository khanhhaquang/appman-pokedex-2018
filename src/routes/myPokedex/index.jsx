import React from 'react';
import Styled from './index.styled';
import Header from './children/header';
import List from './children/list';
import Footer from './children/footer';
import Search from './children/search';
import { MyPokedexProvider } from './index.context';

const MyPokedex = () => {
	return (
		<MyPokedexProvider>
			<Styled>
				<Header />
				<List />
				<Footer />
				<Search />
			</Styled>
		</MyPokedexProvider>
	);
};

export default MyPokedex;
