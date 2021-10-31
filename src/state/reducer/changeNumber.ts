import { Reducer } from 'redux';
import { AppAction } from '../AppAction';
import {ADD_DECIMAL, CHANGE_NUMBER, RESET_NUMBER} from "../actions/changeCurrentNumber";
import {Action, INPUT, UNDO_ACTION} from "../actions/undoAction";

type NumberState = {
  currentNumber: number;
  inDecimalMode: boolean;
  usedDecimal: boolean;
};

const initialNumberState: NumberState = {
  currentNumber: 0,
  inDecimalMode: false,
  usedDecimal: false,
};

type InputState = {
  currentNumberState: NumberState;
  history: NumberState[];
};

const initialInputState: InputState = {
  currentNumberState: initialNumberState,
  history: [initialNumberState],
};

const saveCurrentState = (state: InputState) : InputState => {
  if (state.currentNumberState !==initialNumberState){
    state.history.push(state.currentNumberState);
  }
  return state;
}

const changeStateCurrentNumber = (state: InputState, n: number) : InputState => {
  if (state.currentNumberState.usedDecimal) {
    return state;
  }

  state = saveCurrentState(state);
  if (state.currentNumberState.inDecimalMode) {
    n = state.currentNumberState.currentNumber + n/10;
    state.currentNumberState = { ...state.currentNumberState, currentNumber: n, inDecimalMode: true };
  }
  else if (state.currentNumberState.currentNumber === 0){
    state.currentNumberState = { ...state.currentNumberState, currentNumber: n };
  }
  else{
    n = state.currentNumberState.currentNumber * 10 + n;
    state.currentNumberState = { ...state.currentNumberState, currentNumber: n };
  }
  return state;
}

const resetCurrentNumber = (state: InputState) : InputState => {
  state.currentNumberState = { currentNumber: 0, inDecimalMode: false, usedDecimal: false };
  return state;
}

const addingDecimalToCurrentNumber = (state: InputState) : InputState => {
  state = saveCurrentState(state);
  state.currentNumberState = { ...state.currentNumberState, inDecimalMode: true };
  return state;
}

const undoLastInput = (state: InputState, typeOfAction: Action): InputState => {
  if (typeOfAction === INPUT && state.history.length !== 0){
    state.currentNumberState = state.history.pop() as NumberState;
    if (state.history.length === 0){
      state.history.push(initialNumberState);
    }
  }
  return state;
}

export const changeNumber: Reducer<InputState, AppAction> = ( state = initialInputState, action) => {
  switch (action.type) {
    case CHANGE_NUMBER:
      return changeStateCurrentNumber(state, action.inputNumber);
    case RESET_NUMBER:
      return resetCurrentNumber(state);
    case ADD_DECIMAL:
      return addingDecimalToCurrentNumber(state);
    case UNDO_ACTION:
      return undoLastInput(state,action.typeOfAction);
    default:
      return state;
  }
};
