type ChangeNumber = {
  type: 'CHANGE_NUMBER' | 'RESET_NUMBER';
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
