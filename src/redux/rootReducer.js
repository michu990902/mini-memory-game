import { combineReducers } from 'redux';
import { appReducer } from './app/appReducer';
import { gameReducer } from './game/gameReducer';

export const rootReducer = combineReducers({
    app: appReducer,
    game: gameReducer,
});