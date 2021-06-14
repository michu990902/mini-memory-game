import types from './gameActionTypes';

const initialState = { 
    scores: [],
};

export const gameReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case types.SAVE_SCORE: 
            return {
                ...state,
                scores: [...state.scores, payload],
            }
        default: return state;
    }
}; 