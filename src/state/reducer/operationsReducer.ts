import { Reducer } from 'redux';
import { AppAction } from '../AppAction';
import {SingleArgOperation, TwoArgsOperation, roundToOneDecimal} from "../../BasicMathOperations";

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

const executeTwoArgsOperation = (state: StackState, operation: TwoArgsOperation): StackState => {
  if (state.stack.length >= 2){
    let a  = state.stack.shift() as number;
    let b = state.stack.shift() as number;
    state.stack.unshift(roundToOneDecimal(operation(a,b)));
  }
  return state;
}

const executeSingleArgOperation = (state: StackState, operation: SingleArgOperation): StackState => {
  if (state.stack.length >= 1){
    let n  = state.stack.shift() as number;
    state.stack.unshift(roundToOneDecimal(operation(n)));
  }
  return state;
}

const executeOperationOnAllArgs = (state: StackState, operation: TwoArgsOperation): StackState => {
  if (state.stack.length === 0){
    return state;
  }
  let result = roundToOneDecimal(state.stack.reduce(operation));
  state.stack = [result];
  return state;
}

export const operationsReducer: Reducer<StackState, AppAction> = (
  state = initialState,
  action
) => {

  switch (action.type) {
    case 'OPERATION_TWO_ARGS':
      return executeTwoArgsOperation(state,action.operation);
    case 'OPERATION_ONE_ARG':
      return executeSingleArgOperation(state,action.operation);
    case 'OPERATION_ON_ALL_ARGS':
      return executeOperationOnAllArgs(state,action.operation);
    case 'MOVE_TO_STACK':
      return moveCurrentNumberToStack(state,action.inputNumber);
    default:
      return state;
  }
};
