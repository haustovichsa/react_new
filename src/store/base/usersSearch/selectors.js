import { REDUCER_NAME, SEARCHED_USER_KEY } from './reducer';

export const getSearchedUser = store => store[REDUCER_NAME][SEARCHED_USER_KEY];
