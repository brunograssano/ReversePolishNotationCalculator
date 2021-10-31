type OperationAction = {
  type: 'OPERATION';
  inputNumber: number;
  function: 'INCREMENT' | 'DECREMENT';
};

type MoveToStackAction = {
  type: 'MOVE_TO_STACK';
  inputNumber: number
};

export const moveToStack = (n: number): MoveToStackAction => ({
  type: 'MOVE_TO_STACK',
  inputNumber: n,
});

export const operation = (n: number): OperationAction => ({
  type: 'OPERATION',
  inputNumber: n,
  function: 'INCREMENT',
});
