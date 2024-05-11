import {
    ADD_USER,
    DELETE_USER,
    SET_ERROR,
    SET_IS_LOADING,
    SET_USERS,
    UPDATE_USER,
} from './actions';
import UsersHelper from '../../../helpers/usersHelper';

export const REDUCER_NAME = 'USERS';

export const USERS_KEY = 'users';
export const IS_LOADING_KEY = 'isLoading';
export const ERROR_KEY = 'error';

const initialState = {
    [USERS_KEY]: [],
    [IS_LOADING_KEY]: false,
    [ERROR_KEY]: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                [USERS_KEY]: action.payload,
            };
        }
        case ADD_USER: {
            return {
                ...state,
                [USERS_KEY]: UsersHelper.addUser(state.users, action.payload),
            };
        }
        case UPDATE_USER: {
            return {
                ...state,
                [USERS_KEY]: UsersHelper.updateUser(state.users, action.payload),
            };
        }
        case DELETE_USER: {
            return {
                ...state,
                [USERS_KEY]: UsersHelper.deleteUser(state.users, action.payload),
            };
        }
        case SET_ERROR: {
            return {
                ...state,
                [ERROR_KEY]: action.payload,
            };
        }
        case SET_IS_LOADING: {
            return {
                ...state,
                [IS_LOADING_KEY]: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
