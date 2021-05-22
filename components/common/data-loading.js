// @flow
import React from 'react';
import { Spinner } from 'react-bootstrap';

const DataLoading = () => {
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
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </span>
  );
};

export { DataLoading };
