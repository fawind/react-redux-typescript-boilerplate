import { Reducer, TypedReducer } from 'redoodle';

import * as Actions from '@src/store/actions/counter';

export type CounterState = {
  readonly count: number,
};

function createReducer(): Reducer<CounterState> {
  return TypedReducer.builder<CounterState>()
    .withHandler(Actions.Increment.TYPE, (state, payload) => {
      return { count: state.count + payload.amount };
    })
    .withHandler(Actions.Decrement.TYPE, (state, payload) => {
      const newCount = Math.max(state.count - payload.amount, 0);
      return { count: newCount };
    })
    .build();
}

export const CounterReducer = createReducer();
