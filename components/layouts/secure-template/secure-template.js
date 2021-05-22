// @flow
import React, { useEffect } from 'react';
import { getLocalStorageValues } from '@/constants/local-storage';
import NProgress from 'nprogress';
import Router from 'next/router';
import { useQuery } from 'react-query';
import reactQueryConfig from '@/constants/react-query-config';
import _get from 'lodash.get';
import { SideBar } from './components';
import SecureHead from './secure-head';
import { SecureTemplateContext } from './context';
import { GET_USER_DATA } from './queries';

type Props = {
  children: any,
};

const SecureTemplate = (props: Props) => {
  const { children } = props;
  const SecureTemplateProvider = SecureTemplateContext.Provider;
  const {
    auth_token,
    user_email,
    user_id,
  } = getLocalStorageValues();
  Router.onRouteChangeStart = () => {
    NProgress.start();
  };
  Router.onRouteChangeComplete = () => {
    NProgress.done();
  };
  Router.onRouteChangeError = () => {
    NProgress.done();
  };
  useEffect(() => {
    if (!auth_token || !user_email) {
      Router.push('/login', '/login', { shallow: true });
    }
  }, []);
  const { data: userData, refetch: refetchUserData } = useQuery(
    ['USER_DATA', { id: user_id }],
    GET_USER_DATA,
    {
      ...reactQueryConfig,
      refetchOnWindowFocus: false,
    },
  );
  return (
    <SecureTemplateProvider
      value={{
        userData: _get(userData, 'data'),
        refetchUserData,
      }}
    >
      <SecureHead />
      <div id="wrapper">
        <SideBar />
        <main id="pageWrapper">
          {children}
        </main>
      </div>
    </SecureTemplateProvider>
  );
};
export default SecureTemplate;
