// @flow
import React from 'react';
import SecureTemplate from '@/layout/secure-template/secure-template';
import SearchHeader from '@/components/search-header/search-header';

const Dashboard = () => {

  return (
    <React.Fragment>
      <SecureTemplate>
        <SearchHeader />
        <div className="banner bg-home" />
        <div className="main-container" id="appRoute">
         Welcome to Dashboard
        </div>
      </SecureTemplate>
    </React.Fragment>
  );
};

export default Dashboard;
