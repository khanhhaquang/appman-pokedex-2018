import React from 'react';
import PropTypes from 'prop-types';

const initialState = {
	myList: [],
	isPopupOpen: false
};

const reducer = (state, { type, payload }) => {
	switch (type) {
		case 'set':
			return {
				...state,
				myList: payload
			};
		case 'add':
			return {
				...state,
				myList: [...state.myList, payload]
			};
		case 'remove':
			return {
				...state,
				myList: state.myList.filter(i => i.id !== payload.id)
			};
		case 'toggle-popup':
			return {
				...state,
				isPopupOpen: !state.isPopupOpen
			};
		default:
			return state;
	}
};

export const MyPokedexContext = React.createContext({});

export const MyPokedexProvider = ({ children }) => {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	return <MyPokedexContext.Provider value={{ ...state, dispatch }}>{children}</MyPokedexContext.Provider>;
};

MyPokedexContext.propTypes = {
	children: PropTypes.any
};
