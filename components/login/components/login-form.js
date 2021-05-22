// @flow
import React from 'react';
import { Field } from 'formik';
import { fieldValidate, fieldValidateBool } from '@/utils/form-utils';
import { Message } from '@/components/alert/message';
import Link from 'next/link';
import GoogleLogin from 'react-google-login';
import { googleClientId } from '@/constants/env';
import { GOOGLE_LOGIN_USER } from '../queries';
import { useMutation } from "react-query";
import _get from 'lodash.get';
import {setLocalStorageValues} from "@/components/login/util";
import Router from "next/router";
import ProgressLoading from "@/components/loader/progress-loading";

type Props = {
  values: any,
  handleChange: Function,
  handleBlur: Function,
  errors: any,
  handleSubmit: any,
  dirty: boolean,
  isSubmitting: boolean,
};

const LoginForm = (props: Props) => {
  const {
    values,
    isSubmitting,
    dirty,
    handleChange,
    handleBlur,
    errors,
    handleSubmit,
  } = props;
  const [googleLogin, { isLoading }] = useMutation(GOOGLE_LOGIN_USER);
  const handleLogin = async googleData => {
    await googleLogin({
      google_token_id: _get(googleData, 'tokenId'),
    }, {
      onSuccess: async res => {
        console.log('res', res);
        await setLocalStorageValues(_get(res, 'data.data'));
        Message.success();
        await Router.push('/', '/', { shallow: true });
      },
      onError: err => {
        Message.error(err);
      },
    })
  }
  return (
    <div className="col-lg-7">
      <div className="p-5">
        <div className="text-center">
          <h1 className="h4 text-gray-900 mb-4">Login into Account!</h1>
        </div>
        <form className="user">
          <Field name="email">
            {({ field, form }) => {
              return (
                <div className="form-group">
                  {fieldValidateBool(field, form) ? (
                    <small
                      className="form-text invalid-feedback"
                      style={{ fontSize: '100%', display: 'block' }}
                    >
                      {' '}
                      {errors.email}
                    </small>
                  ) : (
                    <label htmlFor="exampleInputEmail">Email</label>
                  )}
                  <input
                    type="text"
                    value={values.email}
                    className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                    id="exampleInputEmail"
                    placeholder="Enter your email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              );
            }}
          </Field>
          <Field name="password">
            {({ field, form }) => {
              return (
                <div className="form-group">
                  {fieldValidateBool(field, form) ? (
                    <small
                      className="form-text invalid-feedback"
                      style={{ fontSize: '100%', display: 'block' }}
                    >
                      {' '}
                      {errors.password}
                    </small>
                  ) : (
                    <label htmlFor="exampleInputPass">Password</label>
                  )}
                  <input
                    type="password"
                    value={values.password}
                    className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                    id="exampleInputPass"
                    placeholder="**********"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              );
            }}
          </Field>
          <button
            className="btn btn-primary btn-user btn-block"
            disabled={isSubmitting || !dirty}
            onClick={e => {
              e.preventDefault();
              handleSubmit();
              if (Object.keys(errors).length > 0) {
                Message.errorMultiLine(errors, 'Failure');
              }
            }}
          >
            Login Account
          </button>
          <br/>
          <h5 className="text-center">OR</h5>
          <GoogleLogin
            className="google_button"
            style={{ width: '400px' }}
            clientId={googleClientId}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            theme="light"
            cookiePolicy={'single_host_origin'}
          />
        </form>
        <hr />
        <div className="text-center">
          <Link href="/register" as="/register">
            <a className="small">Create an Account!</a>
          </Link>
        </div>
      </div>
      {isLoading && <ProgressLoading />}
    </div>
  );
};
export { LoginForm };
