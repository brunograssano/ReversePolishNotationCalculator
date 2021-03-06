import {SingleArgOperation, TwoArgsOperation} from "../../BasicMathOperations";

export const OPERATION_TWO_ARGS = 'OPERATION_TWO_ARGS', OPERATION_ON_ALL_ARGS = 'OPERATION_ON_ALL_ARGS';
export const MOVE_TO_STACK = 'MOVE_TO_STACK', OPERATION_ONE_ARG = 'OPERATION_ONE_ARG';


type OperationWithTwoArgsAction = {
  type: 'OPERATION_TWO_ARGS' | 'OPERATION_ON_ALL_ARGS';
  operation: TwoArgsOperation ;
};

type OperationWithOneArgAction = {
  type: 'OPERATION_ONE_ARG' ;
  operation: SingleArgOperation;
};

type MoveToStackAction = {
  type: 'MOVE_TO_STACK';
  inputNumber: number
};

export const moveToStack = (n: number): MoveToStackAction => ({
  type: MOVE_TO_STACK,
  inputNumber: n,
});

export const operationOnTwoArgsAction = (operation: TwoArgsOperation): OperationWithTwoArgsAction => ({
  type: OPERATION_TWO_ARGS,
  operation,
});

export const operationOnSingleArgAction = (operation: SingleArgOperation): OperationWithOneArgAction => ({
  type: OPERATION_ONE_ARG,
  operation,
});

export const operationOnAllArgsAction = (operation: TwoArgsOperation): OperationWithTwoArgsAction => ({
  type: OPERATION_ON_ALL_ARGS,
  operation,
});