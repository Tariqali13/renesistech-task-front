// @flow
import React from 'react';
import SecureHead from '@/components/layouts/secure-template/secure-head';
import { Formik } from 'formik';
import { useMutation } from 'react-query';
import { Message } from '@/components/alert/message';
import ProgressLoading from '@/components/loader/progress-loading';
import _omit from 'lodash/omit';
import Router from 'next/router';
import { SignUpForm } from './components';
import { REGISTER_USER } from './queries';
import { validateSignUpForm } from './validation';

const SignUp = () => {
  const [registerUser, { isLoading }] = useMutation(REGISTER_USER);
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
                enableReinitialize={true}
                initialValues={{
                  first_name: '',
                  last_name: '',
                  email: '',
                  password: '',
                  confirm_password: '',
                }}
                validationSchema={validateSignUpForm}
                onSubmit={async (values, actions) => {
                  await registerUser(_omit(values, 'confirm_password'), {
                    onSuccess: async () => {
                      Message.success();
                      actions.resetForm();
                      await Router.push('/login', '/login', { shallow: true });
                    },
                    onError: e => {
                      actions.setSubmitting(false);
                      Message.error(e);
                    },
                  });
                }}
              >
                {formikProps => <SignUpForm {...formikProps} />}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      {isLoading && <ProgressLoading />}
    </React.Fragment>
  );
};
export default SignUp;
