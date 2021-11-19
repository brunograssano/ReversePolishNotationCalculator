import { Reducer } from 'redux';
import { AppAction } from '../AppAction';
import {SingleArgOperation, TwoArgsOperation, roundToOneDecimal} from "../../BasicMathOperations";
import {MOVE_TO_STACK, OPERATION_ON_ALL_ARGS, OPERATION_ONE_ARG, OPERATION_TWO_ARGS} from "../actions/operationsAction";
import {Action, OPERATION, SINGLE_ARG, TWO_ARGS, UNDO_ACTION} from "../actions/undoAction";
const ONE_ARGUMENT = 1, TWO_ARGUMENTS = 2;

const identity = (n: number) : number =>{
  return n;
}

type StackState = {
  stack: number[];
  history: number[][];
};

const initialState: StackState = {
  stack: [],
  history: [[]],
};

const saveCurrentStack = (state: StackState): StackState => {
  if (state.stack.length !== 0){
    state.history.push(state.stack);
    state.stack = state.stack.map(identity);
  }
  return state;
}

const moveCurrentNumberToStack = (state: StackState, currentNumber: number): StackState => {
  if (currentNumber !== 0){
    state = saveCurrentStack(state);
    state.stack.unshift(currentNumber);
  }
  return state;
}

const executeTwoArgsOperation = (state: StackState, operation: TwoArgsOperation): StackState => {
  if (state.stack.length >= TWO_ARGUMENTS){
    state = saveCurrentStack(state);
    let a  = state.stack.shift() as number;
    let b = state.stack.shift() as number;
    state.stack.unshift(roundToOneDecimal(operation(a,b)));
  }
  return state;
}

const executeSingleArgOperation = (state: StackState, operation: SingleArgOperation): StackState => {
  if (state.stack.length >= ONE_ARGUMENT){
    state = saveCurrentStack(state);
    let n  = state.stack.shift() as number;
    state.stack.unshift(roundToOneDecimal(operation(n)));
  }
  return state;
}

const executeOperationOnAllArgs = (state: StackState, operation: TwoArgsOperation): StackState => {
  if (state.stack.length === 0){
    return state;
  }
  state = saveCurrentStack(state);
  let result = roundToOneDecimal(state.stack.reduce(operation));
  state.stack = [result];
  return state;
}

const canUndoOperation = (typeOfAction: Action, stackSize:number): boolean => {
  return (typeOfAction === OPERATION || typeOfAction === SINGLE_ARG ||typeOfAction === TWO_ARGS)
         && stackSize !== 0;
}

const undoLastOperation = (state: StackState, typeOfAction: Action): StackState => {
  if (canUndoOperation(typeOfAction,state.history.length)){
    state.stack = state.history.pop() as number[];
    if (state.history.length === 0){
      state.history.push([]);
    }
  }
  return state;
}

export const operationsReducer: Reducer<StackState, AppAction> = (state = initialState, action) => {
  switch (action.type) {
    case OPERATION_TWO_ARGS:
      return executeTwoArgsOperation(state,action.operation);
    case OPERATION_ONE_ARG:
      return executeSingleArgOperation(state,action.operation);
    case OPERATION_ON_ALL_ARGS:
      return executeOperationOnAllArgs(state,action.operation);
    case MOVE_TO_STACK:
      return moveCurrentNumberToStack(state,action.inputNumber);
    case UNDO_ACTION:
      return undoLastOperation(state,action.typeOfAction);
    default:
      return state;
  }
};
