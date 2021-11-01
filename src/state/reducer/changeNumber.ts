import { Reducer } from 'redux';
import { AppAction } from '../AppAction';
import {ADD_DECIMAL, CHANGE_NUMBER} from "../actions/changeCurrentNumber";
import {Action, INPUT, UNDO_ACTION} from "../actions/undoAction";
import {MOVE_TO_STACK} from "../actions/operationsAction";

type Input = {
  number: number;
  inDecimalMode: boolean;
  usedDecimal: boolean;
};

const initialInput: Input = {
  number: 0,
  inDecimalMode: false,
  usedDecimal: false,
};

type InputState = {
  currentInput: Input;
  history: Input[];
};

const initialInputState: InputState = {
  currentInput: initialInput,
  history: [initialInput],
};

const isInitialInput = (input: Input) : boolean => {
  return input.number===0 && !input.inDecimalMode && !input.usedDecimal
}

const saveCurrentState = (state: InputState) : InputState => {
  if (!isInitialInput(state.currentInput) || state.history.length === 0){
    state.history.push(state.currentInput);
  }
  return state;
}

const changeStateCurrentNumber = (state: InputState, n: number) : InputState => {
  if (state.currentInput.usedDecimal) {
    return state;
  }

  state = saveCurrentState(state);
  if (state.currentInput.inDecimalMode) {
    n = state.currentInput.number + n/10;
    state.currentInput = { ...state.currentInput, number: n, inDecimalMode: true };
  }
  else if (state.currentInput.number === 0){
    state.currentInput = { ...state.currentInput, number: n };
  }
  else{
    n = state.currentInput.number * 10 + n;
    state.currentInput = { ...state.currentInput, number: n };
  }
  return state;
}

const resetCurrentInput = (state: InputState) : InputState => {
  state = saveCurrentState(state);
  state.currentInput = { number: 0, inDecimalMode: false, usedDecimal: false };
  return state;
}

const addingDecimalToCurrentNumber = (state: InputState) : InputState => {
  if (state.currentInput.inDecimalMode){
    return state;
  }
  state = saveCurrentState(state);
  state.currentInput = { ...state.currentInput, inDecimalMode: true };
  return state;
}

const undoLastInput = (state: InputState, typeOfAction: Action): InputState => {
  if (typeOfAction === INPUT && state.history.length !== 0){
    state.currentInput = state.history.pop() as Input;
    if (state.history.length === 0){
      state.history.push(initialInput);
    }
  }
  return state;
}

export const changeNumber: Reducer<InputState, AppAction> = ( state = initialInputState, action) => {
  switch (action.type) {
    case CHANGE_NUMBER:
      return changeStateCurrentNumber(state, action.inputNumber);
    case MOVE_TO_STACK:
      return resetCurrentInput(state);
    case ADD_DECIMAL:
      return addingDecimalToCurrentNumber(state);
    case UNDO_ACTION:
      return undoLastInput(state,action.typeOfAction);
    default:
      return state;
  }
};
