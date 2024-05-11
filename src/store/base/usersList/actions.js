const _ = name => `USERS_LIST__${name}`;

export const SET_EDITED_USER = _('SET_EDITED_USER');

export const setEditedUser = value => ({ type: SET_EDITED_USER, payload: value });
