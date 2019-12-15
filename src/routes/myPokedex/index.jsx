import React from 'react';
import Styled from './index.styled';
import Header from './children/header';
import List from './children/list';
import Footer from './children/footer';

const MyPokedex = () => {
	return (
		<Styled>
			<Header />
			<List />
			<Footer />
		</Styled>
	);
};

export default MyPokedex;
