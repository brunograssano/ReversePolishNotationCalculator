import { combineReducers } from 'redux';

import { changeNumber } from './changeNumber';
import { operationsReducer } from './operationsReducer';
import { higherOrderReducer } from './higherOrderReducer';
import { defaultReducer } from './defaultReducer';

export const rootReducer = higherOrderReducer(
  combineReducers({
    changeNumber: changeNumber,
    operationAction: operationsReducer,
    defaultAction: defaultReducer,
  })
);
