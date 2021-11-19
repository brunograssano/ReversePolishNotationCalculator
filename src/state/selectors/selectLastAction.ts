import { RootState } from '..';

import {Action, INPUT} from "../actions/undoAction";

export const selectLastAction = (state: RootState): Action => {
    let length = state.content.undoReducer.history.length;
    if (length === 0){
        return INPUT;
    }
    return state.content.undoReducer.history[length-1];
};