import { Reducer } from 'redux';
import { AppAction } from '../actions';

interface EmptyState {}

const initialState: EmptyState = {};

export const emptyReducer: Reducer<EmptyState, AppAction> = (state = initialState, action) => {
  switch (action.type) {
    case 'DO_NOTHING':
      return {};
    default:
      return state;
  }
};
