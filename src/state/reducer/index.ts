import { combineReducers } from 'redux';

import { changeNumber } from './changeNumber';
import { operationsReducer } from './operationsReducer';
import { undoReducer } from './undoReducer';
import { higherOrderReducer } from './higherOrderReducer';

export const rootReducer = higherOrderReducer(
  combineReducers({
    changeNumber: changeNumber,
    operationAction: operationsReducer,
    undoReducer: undoReducer,
  })
);
