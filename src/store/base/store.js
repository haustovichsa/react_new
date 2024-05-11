import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';

import usersSearchReducer, {
    REDUCER_NAME as USERS_SEARCH_REDUCER_NAME,
} from './usersSearch/reducer';
import usersListReducer, { REDUCER_NAME as USERS_LIST_REDUCER_NAME } from './usersList/reducer';
import usersReducer, { REDUCER_NAME as USERS_REDUCER_NAME } from './users/reducer';

const loggerMiddleware = store => next => action => {
    console.log('Middleware: ', action);

    next(action);
};

export const store = createStore(
    combineReducers({
        [USERS_SEARCH_REDUCER_NAME]: usersSearchReducer,
        [USERS_LIST_REDUCER_NAME]: usersListReducer,
        [USERS_REDUCER_NAME]: usersReducer,
    }),
    applyMiddleware(loggerMiddleware, thunk),
);

// just for test
window.store = store;
