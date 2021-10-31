import { combineReducers } from 'redux';

import { changeNumber } from './changeNumber';
import { otherSampleReducer } from './otherSampleReducer';
import { higherOrderReducer } from './higherOrderReducer';
import { defaultReducer } from './defaultReducer';

export const rootReducer = higherOrderReducer(
  combineReducers({
    changeNumber: changeNumber,
    otherSample: otherSampleReducer,
    defaultAction: defaultReducer,
  })
);
