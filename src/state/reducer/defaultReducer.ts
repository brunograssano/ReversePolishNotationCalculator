import { Reducer } from 'redux';
import { AppAction } from '../AppAction';

type defaultState = {};

const initialState: defaultState = {};

export const defaultReducer: Reducer<defaultState, AppAction> = (
    state = initialState,
    action
) => {
    return state
};