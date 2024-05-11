import { ERROR_KEY, IS_LOADING_KEY, REDUCER_NAME, USERS_KEY } from './reducer';

export const getUsers = store => store[REDUCER_NAME][USERS_KEY];
export const getError = store => store[REDUCER_NAME][ERROR_KEY];
export const getIsLoading = store => store[REDUCER_NAME][IS_LOADING_KEY];
