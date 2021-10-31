import { Reducer } from 'redux';
import { AppAction } from '../AppAction';

type NumberState = {
  currentNumber: number;
  inDecimalMode: boolean;
  usedDecimal: boolean;
};

const initialState: NumberState = {
  currentNumber: 0,
  inDecimalMode: false,
  usedDecimal: false,
};

const changeStateCurrentNumber = (state: NumberState, n: number) : NumberState => {
  if (state.usedDecimal) {
    return state;
  }

  if (state.inDecimalMode) {
    state.currentNumber += n/10;
    state.usedDecimal = true;
  }
  else if (state.currentNumber === 0){
    state.currentNumber = n;
  }
  else{
    state.currentNumber = state.currentNumber * 10 + n;
  }
  return state;
}

const resetCurrentNumber = (state: NumberState, n: number) : NumberState => {
  state.currentNumber = 0;
  state.inDecimalMode = false;
  state.usedDecimal = false;
  return state;
}

const addingDecimalToCurrentNumber = (state: NumberState) : NumberState => {
  state.inDecimalMode = true;
  return state;
}

export const changeNumber: Reducer<NumberState, AppAction> = (
    state = initialState,
    action
  ) => {
  switch (action.type) {
    case 'CHANGE_NUMBER':
      return changeStateCurrentNumber(state, action.payload);
    case 'RESET_NUMBER':
      return resetCurrentNumber(state,action.payload);
    case 'ADD_DECIMAL':
      return addingDecimalToCurrentNumber(state);
    default:
      return state;
  }
};
