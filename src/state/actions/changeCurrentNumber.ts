
export const ADD_DECIMAL = 'ADD_DECIMAL', CHANGE_NUMBER = 'CHANGE_NUMBER';

type ChangeNumber = {
  type: 'CHANGE_NUMBER' | 'RESET_NUMBER' | 'ADD_DECIMAL';
  inputNumber: number;
};

export const changeCurrentNumber = (n : number): ChangeNumber => ({
  type: CHANGE_NUMBER,
  inputNumber: n,
});

export const addDecimalNumber = (): ChangeNumber => ({
  type: ADD_DECIMAL,
  inputNumber: 0,
});
