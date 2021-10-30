import { Reducer } from 'redux';
import { AppAction } from '../AppAction';

type SampleState = {
  message: string;
};

const initialState: SampleState = {
  message: 'Hello world',
};

export const sampleReducer: Reducer<SampleState, AppAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'CHANGE_SAMPLE':
      return { message: 'Sample' };
    default:
      return state;
  }
};
