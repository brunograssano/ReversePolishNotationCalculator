import {MathOperation} from "../../BasicMathOperations";

type OperationAction = {
  type: 'OPERATION';
  operation: MathOperation;
};

type MoveToStackAction = {
  type: 'MOVE_TO_STACK';
  inputNumber: number
};

export const moveToStack = (n: number): MoveToStackAction => ({
  type: 'MOVE_TO_STACK',
  inputNumber: n,
});

export const operationAction = (operation: MathOperation): OperationAction => ({
  type: 'OPERATION',
  operation,
});
