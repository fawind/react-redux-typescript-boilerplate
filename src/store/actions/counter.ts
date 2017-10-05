import { TypedAction } from 'redoodle';

export const Increment = TypedAction.define('INCREMENT')<{
  amount: number,
}>();

export const Decrement = TypedAction.define('DECREMENT')<{
  amount: number,
}>();
