import { Get } from '../../../../shared/helpers';
import { SERVER_DOMAIN } from '../../../../configs';

export const GetMyPokedexList = url => {
	return Get(SERVER_DOMAIN + url);
};
