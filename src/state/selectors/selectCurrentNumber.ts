import { RootState } from '..';

export const selectCurrentNumber = (state: RootState): number => {
  return state.content.changeNumber.currentInput.number;
};
