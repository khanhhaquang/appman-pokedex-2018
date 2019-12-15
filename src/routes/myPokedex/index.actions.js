import { Get } from '../../shared/helpers';
import { SERVER_DOMAIN } from '../../configs';

export const GetPokedexList = url => {
	return Get(SERVER_DOMAIN + url);
};

export const add = (dispatch, data) =>
	dispatch({
		type: 'add',
		payload: data
	});

export const remove = (dispatch, data) =>
	dispatch({
		type: 'remove',
		payload: data
	});

export const set = (dispatch, data) =>
	dispatch({
		type: 'set',
		payload: data
	});

export const togglePopup = dispatch => {
	dispatch({
		type: 'toggle-popup'
	});
};
