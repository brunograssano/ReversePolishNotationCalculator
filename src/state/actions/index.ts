import { addDecimalNumber, changeCurrentNumber } from './changeCurrentNumber';
import { operationOnSingleArgAction, operationOnTwoArgsAction, operationOnAllArgsAction, moveToStack } from './operationsAction';
import { defaultAction } from './defaultAction';
import { doAction, undoAction } from './undoAction';

export { addDecimalNumber, changeCurrentNumber,
        operationOnSingleArgAction, operationOnTwoArgsAction, operationOnAllArgsAction, moveToStack,
        defaultAction,
        undoAction, doAction};