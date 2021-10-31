import { Reducer } from 'redux';
import { AppAction } from '../AppAction';
import {Action, ACTION, UNDO_ACTION} from "../actions/undoAction";


type UndoState = {
    history: Action[];
};

const initialState: UndoState = {
    history: [],
};

const addActionToHistory = (state:UndoState, newAction: Action) : UndoState => {
    state.history.push(newAction);
    return state;
};

const undoLastActionFromHistory = (state:UndoState) : UndoState => {
    state.history.pop();
    return state;
};

export const undoReducer: Reducer<UndoState, AppAction> = (state = initialState, action) => {
    switch (action.type) {
        case ACTION:
            return addActionToHistory(state, action.typeOfAction);
        case UNDO_ACTION:
            return undoLastActionFromHistory(state);
        default:
            return state;
    }
};