import { SET_EDITED_USER } from './actions';

export const REDUCER_NAME = 'USERS_LIST';

export const EDITED_USER_KEY = 'editedUser';

const initialState = {
    [SET_EDITED_USER]: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EDITED_USER: {
            return {
                ...state,
                [EDITED_USER_KEY]: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
