// @flow
import React from 'react';

const TemplateLoading = () => {
  return (
    <div id="loading">
      <div className="loader">
        <div className="eq">
          <span className="eq-bar eq-bar--1" />
          <span className="eq-bar eq-bar--2" />
          <span className="eq-bar eq-bar--3" />
          <span className="eq-bar eq-bar--4" />
          <span className="eq-bar eq-bar--5" />
          <span className="eq-bar eq-bar--6" />
        </div>
        <span className="text">Loading</span>
      </div>
    </div>
  );
};
export default TemplateLoading;
