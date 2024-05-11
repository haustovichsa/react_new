const _ = name => `USERS_SEARCH__${name}`;

export const SET_SEARCHED_USER = _('SET_SEARCHED_USER');

export const setSearchedUser = value => ({ type: SET_SEARCHED_USER, payload: value });
