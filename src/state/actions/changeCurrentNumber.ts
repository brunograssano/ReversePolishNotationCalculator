type ChangeNumber = {
  type: 'CHANGE_NUMBER' | 'RESET_NUMBER' | 'ADD_DECIMAL';
  payload: number;
};

export const changeCurrentNumber = (n : number): ChangeNumber => ({
  type: 'CHANGE_NUMBER',
  payload: n,
});

export const resetCurrentNumber = (): ChangeNumber => ({
  type: 'RESET_NUMBER',
  payload: 0,
});

export const addDecimalNumber = (): ChangeNumber => ({
  type: 'ADD_DECIMAL',
  payload: 0,
});
