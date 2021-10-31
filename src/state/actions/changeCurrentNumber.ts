type ChangeNumber = {
  type: 'CHANGE_NUMBER';
  payload: number;
};

export const changeCurrentNumber = (n : number): ChangeNumber => ({
  type: 'CHANGE_NUMBER',
  payload: n,
});
