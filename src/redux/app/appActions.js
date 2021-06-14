import types from './appActionTypes';

export const setUsername = username => ({
    type: types.SET_USERNAME,
    payload: username,
});