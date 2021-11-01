import { Reducer } from 'redux';
import { AppAction } from '../AppAction';
import {Action, ACTION, INPUT, OPERATION, SINGLE_ARG, TWO_ARGS, UNDO_ACTION} from "../actions/undoAction";
const ONE_ARGUMENT = 1, TWO_ARGUMENTS = 2;

type UndoState = {
    history: Action[];
};

const initialState: UndoState = {
    history: [],
};

const isValidAction = (newAction: Action, payload: number) : boolean => {
    return (newAction===TWO_ARGS && payload>=TWO_ARGUMENTS) ||
           (newAction===SINGLE_ARG && payload>=ONE_ARGUMENT) ||
           (newAction===OPERATION && payload!==0) || (newAction===INPUT);
};

const addActionToHistory = (state:UndoState, newAction: Action, sizeOfStack: number) : UndoState => {
    if (isValidAction(newAction,sizeOfStack)){
        state.history.push(newAction);
    }
    return state;
};

const undoLastActionFromHistory = (state:UndoState) : UndoState => {
    state.history.pop();
    return state;
};

export const undoReducer: Reducer<UndoState, AppAction> = (state = initialState, action) => {
    switch (action.type) {
        case ACTION:
            return addActionToHistory(state, action.typeOfAction,action.payload);
        case UNDO_ACTION:
            return undoLastActionFromHistory(state);
        default:
            return state;
    }
};