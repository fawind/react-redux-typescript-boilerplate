import * as React from 'react';

type Props = {
  count: number,
};

export const Counter: React.SFC<Props> = (props: Props) => {
  return (
    <span>{props.count}</span>
  );
};
