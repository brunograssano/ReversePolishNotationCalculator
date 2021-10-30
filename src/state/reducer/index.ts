import { combineReducers } from 'redux';

import { sampleReducer } from './sampleReducer';
import { otherSampleReducer } from './otherSampleReducer';
import { higherOrderReducer } from './higherOrderReducer';

export const rootReducer = higherOrderReducer(
  combineReducers({
    sample: sampleReducer,
    otherSample: otherSampleReducer,
  })
);
