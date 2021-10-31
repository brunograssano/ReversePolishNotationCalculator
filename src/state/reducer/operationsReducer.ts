import { Reducer } from 'redux';
import { assertUnreachable } from 'utils/assertUnreachable';
import { AppAction } from '../AppAction';

type StackState = {
  stack: number[];
};

const initialState: StackState = {
  stack: [],
};

const moveCurrentNumberToStack = (state: StackState, currentNumber: number): StackState => {
  if (currentNumber !== 0){
    state.stack.unshift(currentNumber);
  }
  return state;
}

export const operationsReducer: Reducer<StackState, AppAction> = (
  state = initialState,
  action
) => {

  switch (action.type) {
    case 'OPERATION':/*
      switch (action.function) {
        default:
          return assertUnreachable(action.function);
      }*/
    case 'MOVE_TO_STACK':
      return moveCurrentNumberToStack(state,action.inputNumber);
    default:
      return state;
  }
};
