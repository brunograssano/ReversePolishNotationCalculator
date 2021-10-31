import { addDecimalNumber, changeCurrentNumber, resetCurrentNumber } from './changeCurrentNumber';
import { operationOnSingleArgAction, operationOnTwoArgsAction, operationOnAllArgsAction, moveToStack } from './operationsAction';
import { defaultAction } from './defaultAction';
import { doAction, undoAction } from './undoAction';

export { addDecimalNumber, changeCurrentNumber, resetCurrentNumber,
        operationOnSingleArgAction, operationOnTwoArgsAction, operationOnAllArgsAction, moveToStack,
        defaultAction,
        undoAction, doAction};