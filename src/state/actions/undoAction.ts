
export const UNDO_ACTION='UNDO_ACTION', ACTION='ACTION', INPUT='INPUT',
    OPERATION = 'OPERATION',TWO_ARGS='TWO_ARGS',SINGLE_ARG='SINGLE_ARG';


export type Action = 'INPUT' | 'OPERATION' | 'TWO_ARGS' | 'SINGLE_ARG' | 'NONE';


type UndoAction = {
    type: 'ACTION' | 'UNDO_ACTION';
    typeOfAction: Action;
    payload: number;
};

export const undoAction = (lastAction: Action): UndoAction => ({
    type: 'UNDO_ACTION',
    typeOfAction: lastAction,
    payload: 0,
});

export const doAction = (typeOfAction: Action, sizeOfStack: number): UndoAction => ({
    type: 'ACTION',
    typeOfAction,
    payload: sizeOfStack,
});