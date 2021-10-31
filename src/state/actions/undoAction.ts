
export const UNDO_ACTION='UNDO_ACTION', ACTION='ACTION', INPUT='INPUT',OPERATION = 'OPERATION',NONE='NONE';


export type Action = 'INPUT' | 'OPERATION' | 'NONE';


type UndoAction = {
    type: 'ACTION' | 'UNDO_ACTION';
    typeOfAction: Action;
};

export const undoAction = (lastAction: Action): UndoAction => ({
    type: 'UNDO_ACTION',
    typeOfAction: lastAction,
});

export const doAction = (typeOfAction: Action): UndoAction => ({
    type: 'ACTION',
    typeOfAction,
});