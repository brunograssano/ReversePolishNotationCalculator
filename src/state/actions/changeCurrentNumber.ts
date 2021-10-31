
export const ADD_DECIMAL = 'ADD_DECIMAL', RESET_NUMBER = 'RESET_NUMBER', CHANGE_NUMBER = 'CHANGE_NUMBER';

type ChangeNumber = {
  type: 'CHANGE_NUMBER' | 'RESET_NUMBER' | 'ADD_DECIMAL';
  inputNumber: number;
};

export const changeCurrentNumber = (n : number): ChangeNumber => ({
  type: CHANGE_NUMBER,
  inputNumber: n,
});

export const resetCurrentNumber = (): ChangeNumber => ({
  type: RESET_NUMBER,
  inputNumber: 0,
});

export const addDecimalNumber = (): ChangeNumber => ({
  type: ADD_DECIMAL,
  inputNumber: 0,
});
