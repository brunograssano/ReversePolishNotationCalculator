import { combineReducers } from 'redux';

import { emptyReducer } from './empty';

export const rootReducer = combineReducers({
  nothing: emptyReducer,
});