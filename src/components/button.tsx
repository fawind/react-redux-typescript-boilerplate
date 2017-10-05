import * as React from 'react';

type Props = {
  label: string,
  action: () => any,
};

export const Button: React.SFC<Props> = (props: Props) => {
  return (
    <button onClick={props.action}>
      {props.label}
    </button>
  );
};
