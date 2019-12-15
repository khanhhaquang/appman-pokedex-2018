import React from 'react';
import Styled from './index.styled';
import SearchImg from '../../../../shared/components/searchImg';
import { GetPokedexList, togglePopup, add } from '../../index.actions';
import Card from '../../../../shared/components/card';
import { MyPokedexContext } from '../../index.context';
import { ERRORS } from '../../../../configs';

const Search = () => {
	const { isPopupOpen, myList, dispatch } = React.useContext(MyPokedexContext);
	const [searchKey, setSearchKey] = React.useState('');
	const [result, setResult] = React.useState([]);
	const [error, setError] = React.useState('');

	const handleChangeInput = e => {
		setSearchKey(e.target.value);
	};

	const handleSubmitSearch = e => {
		setError('');
		GetPokedexList(`/api/cards?limit=30&name=${searchKey}`).then(resp => {
			const { cards } = resp.data;
			if (!cards.length) return setError(ERRORS.LIST_NOT_FOUND);
			const actualResult = cards.filter(item => {
				return !myList.find(i => i.id === item.id);
			});
			setResult(actualResult);
		});
	};

	const handleAdd = item => {
		setResult(result.filter(i => i.id !== item.id));
		add(dispatch, item);
	};

	return (
		isPopupOpen && (
			<Styled className='search-modal' onClick={() => togglePopup(dispatch)}>
				<div className='modal-content' onClick={e => e.stopPropagation()}>
					<header className='search-box-wrapper'>
						<input className='bar' placeholder='Find pokemon' onChange={handleChangeInput} value={searchKey}></input>
						<div className='button' onClick={handleSubmitSearch}>
							<SearchImg />
						</div>
					</header>

					<main className='search-result'>
						{error && <span className='error'>{error}</span>}
						{result.map(i => (
							<Card action='add' onClick={() => handleAdd(i)} key={i.id} data={i} />
						))}
					</main>
				</div>
			</Styled>
		)
	);
};

export default Search;
