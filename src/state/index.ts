import { ActionFromReducer, createStore } from 'redux';

import { rootReducer } from './reducer';

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type Action = ActionFromReducer<typeof rootReducer>;
