// @flow
import React from 'react';

const ProgressLoading = () => {
  return (
    <div id="loading" style={{ backgroundColor: 'rgba(100,100,200,0.8)' }}>
      <div className="loader">
        <div className="eq">
          <span className="eq-bar eq-bar--1" />
          <span className="eq-bar eq-bar--2" />
          <span className="eq-bar eq-bar--3" />
          <span className="eq-bar eq-bar--4" />
          <span className="eq-bar eq-bar--5" />
          <span className="eq-bar eq-bar--6" />
        </div>
        <span className="text text-white">
          Please wait, while we make final touches.
        </span>
      </div>
    </div>
  );
};
export default ProgressLoading;
