import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { RootState } from '@src/store/reducers';
import * as CounterActions from '@src/store/actions/counter';
import { Counter } from '@src/components/counter';
import { Button } from '@src/components/button';

type Props = {
  count: number,
  increment: (amount: number) => any,
  decrement: (amount: number) => any,
};

const App: React.SFC<Props> = (props: Props) => {
  const incrementTwo = () => props.increment(2);
  const decrementOne = () => props.decrement(1);

  return (
    <div>
      <div>
        <Counter count={props.count}/>
      </div>
      <div>
        <Button label={'Increment Two'} action={incrementTwo}/>
        <Button label={'Decrement One'} action={decrementOne}/>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => ({
  increment: (amount: number)  => dispatch(CounterActions.Increment.create({ amount })),
  decrement: (amount: number)  => dispatch(CounterActions.Decrement.create({ amount })),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
