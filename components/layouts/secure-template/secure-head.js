// @flow
import React, { useEffect } from 'react';
import Head from 'next/head';
import { getLocalStorageValues } from '@/constants/local-storage';

const SecureHead = () => {
  const { theme } = getLocalStorageValues();
  useEffect(() => {
    document.body.classList.add(theme);
  }, []);
  return (
    <Head>
      <title>Social Task</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/css/dashboard.css" type="text/css" />
      <link rel="stylesheet" href="/css/vendor.css" type="text/css" />
      {/* eslint-disable max-len */}
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700"
        rel="stylesheet"
      />
    </Head>
  );
};
export default SecureHead;
