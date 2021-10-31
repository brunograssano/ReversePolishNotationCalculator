import { Reducer } from 'redux';
import { AppAction } from '../AppAction';

type NumberState = {
  currentNumber: number;
};

const initialState: NumberState = {
  currentNumber: 0,
};

const changeStateCurrentNumber = (state: NumberState, n: number) : NumberState => {
  if (state.currentNumber === 0){
    state.currentNumber = n;
  }
  else{
    state.currentNumber = state.currentNumber * 10 + n;
  }
  return state;
}

export const changeNumber: Reducer<NumberState, AppAction> = (
    state = initialState,
    action
  ) => {
  switch (action.type) {
    case 'CHANGE_NUMBER':
      return changeStateCurrentNumber(state, action.payload);
    default:
      return state;
  }
};
