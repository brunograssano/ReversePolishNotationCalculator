import { RootState } from '..';

import {Action, NONE} from "../actions/undoAction";

export const selectLastAction = (state: RootState): Action => {
    let length = state.content.undoReducer.history.length;
    if (length === 0){
        return NONE;
    }
    return state.content.undoReducer.history[length-1];
};