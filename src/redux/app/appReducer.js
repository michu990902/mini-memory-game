import types from './appActionTypes';

const initialState = { 
    username: "",
};

export const appReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case types.SET_USERNAME: 
            return {
                ...state,
                username: payload,
            }
        default: return state;
    }
}; 