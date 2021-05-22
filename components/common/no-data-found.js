// @flow
import React from 'react';

type Props = {
  message: string,
};

const NoDataFound = (props: Props) => {
  const { message } = props;
  return (
    <span
      style={{
        width: '100%',
        textAlign: 'center',
        height: '100px',
        display: 'block',
        marginTop: '200px',
      }}
    >
      <span>{message}</span>
    </span>
  );
};

export { NoDataFound };
