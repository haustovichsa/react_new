import UsersApi from '../../../api/usersApi';

const _ = name => `USERS__${name}`;

export const SET_USERS = _('SET_USERS');
export const ADD_USER = _('ADD_USER');
export const DELETE_USER = _('DELETE_USER');
export const UPDATE_USER = _('UPDATE_USER');
export const SET_IS_LOADING = _('SET_IS_LOADING');
export const SET_ERROR = _('SET_ERROR');

const setUsers = value => ({ type: SET_USERS, payload: value });
const addUser = value => ({ type: ADD_USER, payload: value });
const deleteUser = value => ({ type: DELETE_USER, payload: value });
const updateUser = value => ({ type: UPDATE_USER, payload: value });
const setIsLoading = value => ({ type: SET_IS_LOADING, payload: value });
const setError = value => ({ type: SET_ERROR, payload: value });

export const cleanError = () => ({ type: SET_ERROR, payload: null });

export const USERS_API_ERROR = {
    GET_USERS: 'GET_USERS',
    ADD_USERS: 'ADD_USER',
    DELETE_USER: 'DELETE_USER',
    UPDATE_USER: 'UPDATE_USER',
};

export const getUsersAsync = () => async dispatch => {
    dispatch(setIsLoading(true));

    try {
        const users = await UsersApi.getUsers();
        dispatch(setUsers(users));
    } catch {
        dispatch(setError(USERS_API_ERROR.GET_USERS));
    } finally {
        dispatch(setIsLoading(false));
    }
};

export const addUsersAsync = user => async dispatch => {
    dispatch(setIsLoading(true));

    try {
        const newUser = await UsersApi.addUser(user);
        dispatch(addUser(newUser));
    } catch {
        dispatch(setError(USERS_API_ERROR.ADD_USERS));
    } finally {
        dispatch(setIsLoading(false));
    }
};

export const deleteUserAsync = id => async dispatch => {
    dispatch(setIsLoading(true));

    try {
        await UsersApi.deleteUser(id);
        dispatch(deleteUser(id));
    } catch {
        dispatch(setError(USERS_API_ERROR.DELETE_USER));
    } finally {
        dispatch(setIsLoading(false));
    }
};

export const updateUsersAsync = user => async dispatch => {
    dispatch(setIsLoading(true));

    try {
        await UsersApi.updateUser(user);
        dispatch(updateUser(user));
    } catch {
        dispatch(setError(USERS_API_ERROR.UPDATE_USER));
    } finally {
        dispatch(setIsLoading(false));
    }
};
