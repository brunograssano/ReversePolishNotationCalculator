import { Reducer } from 'redux';
import { assertUnreachable } from 'utils/assertUnreachable';
import { AppAction } from '../AppAction';

type OtherSampleState = number;

const initialState: OtherSampleState = 0;

export const otherSampleReducer: Reducer<OtherSampleState, AppAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'UPDATE_OTHER_SAMPLE':
      switch (action.function) {
        case 'INCREMENT':
          return state + 1;
        case 'DECREMENT':
          return state - 1;
        default:
          return assertUnreachable(action.function);
      }
    default:
      return state;
  }
};
