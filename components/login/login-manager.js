// @flow
import React from 'react';
import SecureHead from '@/components/layouts/secure-template/secure-head';
import { Formik } from 'formik';
import { useMutation } from 'react-query';
import { Message } from '@/components/alert/message';
import ProgressLoading from '@/components/loader/progress-loading';
import _get from 'lodash/get';
import Router from 'next/router';
import { LoginForm } from './components';
import { LOGIN_USER } from './queries';
import { validateLoginForm } from './validation';
import { setLocalStorageValues } from './util';

const LoginManager = () => {
  const [loginUser, { isLoading }] = useMutation(LOGIN_USER);
  return (
    <React.Fragment>
      <SecureHead />
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image">
                <img src="/images/user.jpg" alt="logo" />
              </div>
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                validationSchema={validateLoginForm}
                onSubmit={async (values, actions) => {
                  await loginUser(values, {
                    onSuccess: async res => {
                      await setLocalStorageValues(_get(res, 'data.data'));
                      Message.success();
                      actions.resetForm();
                      await Router.push('/', '/', { shallow: true });
                    },
                    onError: e => {
                      actions.setSubmitting(false);
                      Message.error(e);
                    },
                  });
                }}
              >
                {formikProps => <LoginForm {...formikProps} />}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      {isLoading && <ProgressLoading />}
    </React.Fragment>
  );
};
export default LoginManager;
