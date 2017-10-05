import { combineReducers } from 'redoodle';

import { CounterState, CounterReducer } from '@src/store/reducers/counter';

export type RootState = {
  readonly counter: CounterState,
};

export const RootReducer = combineReducers<RootState>({
  counter: CounterReducer,
});

export const initialState: RootState = {
  counter: { count: 0 },
};
