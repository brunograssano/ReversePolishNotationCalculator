import { Reducer } from 'redux';
import { AppAction } from '../AppAction';
import {MathOperation} from "../../BasicMathOperations";

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

const executeOperation = (state: StackState, operation: MathOperation): StackState => {
  if (state.stack.length >= 2){
    let a  = state.stack.shift() as number;
    let b = state.stack.shift() as number;
    state.stack.unshift(operation(a,b));
  }
  return state;
}

export const operationsReducer: Reducer<StackState, AppAction> = (
  state = initialState,
  action
) => {

  switch (action.type) {
    case 'OPERATION':
      return executeOperation(state,action.operation)
    case 'MOVE_TO_STACK':
      return moveCurrentNumberToStack(state,action.inputNumber);
    default:
      return state;
  }
};
