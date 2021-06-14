import types from './gameActionTypes';

export const saveScore = (username, score) => ({
    type: types.SAVE_SCORE,
    payload: {
        username,
        score,
    },
});