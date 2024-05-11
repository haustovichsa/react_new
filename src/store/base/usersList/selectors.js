import { EDITED_USER_KEY, REDUCER_NAME } from './reducer';

export const getEditedUser = store => store[REDUCER_NAME][EDITED_USER_KEY];
