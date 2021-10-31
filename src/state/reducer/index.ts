import { combineReducers } from 'redux';

import { changeNumber } from './changeNumber';
import { operationsReducer } from './operationsReducer';
import { undoReducer } from './undoReducer';
import { higherOrderReducer } from './higherOrderReducer';
import { defaultReducer } from './defaultReducer';

export const rootReducer = higherOrderReducer(
  combineReducers({
    changeNumber: changeNumber,
    operationAction: operationsReducer,
    undoReducer: undoReducer,
    defaultAction: defaultReducer,
  })
);
