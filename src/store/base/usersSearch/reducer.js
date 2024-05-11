import { SET_SEARCHED_USER } from './actions';

export const REDUCER_NAME = 'USERS_SEARCH';

export const SEARCHED_USER_KEY = 'searchedUser';

const initialState = {
    [SEARCHED_USER_KEY]: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCHED_USER: {
            return {
                ...state,
                [SEARCHED_USER_KEY]: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
