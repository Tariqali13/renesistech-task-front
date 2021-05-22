// @flow
import React from 'react';
import { Field } from 'formik';
import { fieldValidate, fieldValidateBool } from '@/utils/form-utils';
import { Message } from '@/components/alert/message';
import Link from 'next/link';

type Props = {
  values: any,
  handleChange: Function,
  handleBlur: Function,
  errors: any,
  handleSubmit: any,
  dirty: boolean,
  isSubmitting: boolean,
};

const SignUpForm = (props: Props) => {
  const {
    values,
    isSubmitting,
    dirty,
    handleChange,
    handleBlur,
    errors,
    handleSubmit,
  } = props;
  return (
    <div className="col-lg-7">
      <div className="p-5">
        <div className="text-center">
          <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
        </div>
        <form className="user">
          <div className="form-group row">
            <Field name="first_name">
              {({ field, form }) => {
                return (
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    {fieldValidateBool(field, form) ? (
                      <small
                        className="form-text invalid-feedback"
                        style={{ fontSize: '100%', display: 'block' }}
                      >
                        {' '}
                        {errors.first_name}
                      </small>
                    ) : (
                      <label htmlFor="exampleInputFirstname">First Name</label>
                    )}
                    <input
                      type="text"
                      value={values.first_name}
                      className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                      id="exampleInputFirstname"
                      placeholder="Enter first name"
                      name="first_name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                );
              }}
            </Field>
            <Field name="last_name">
              {({ field, form }) => {
                return (
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    {fieldValidateBool(field, form) ? (
                      <small
                        className="form-text invalid-feedback"
                        style={{ fontSize: '100%', display: 'block' }}
                      >
                        {' '}
                        {errors.last_name}
                      </small>
                    ) : (
                      <label htmlFor="exampleInputLast">Last Name</label>
                    )}
                    <input
                      type="text"
                      value={values.last_name}
                      className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                      id="exampleInputLast"
                      placeholder="Enter last name"
                      name="last_name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                );
              }}
            </Field>
          </div>
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
          <div className="form-group row">
            <Field name="password">
              {({ field, form }) => {
                return (
                  <div className="col-sm-6 mb-3 mb-sm-0">
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
            <Field name="confirm_password">
              {({ field, form }) => {
                return (
                  <div className="col-sm-6">
                    {fieldValidateBool(field, form) ? (
                      <small
                        className="form-text invalid-feedback"
                        style={{ fontSize: '100%', display: 'block' }}
                      >
                        {' '}
                        {errors.confirm_password}
                      </small>
                    ) : (
                      <label htmlFor="exampleInputConPass">
                        Confirm Password
                      </label>
                    )}
                    <input
                      type="password"
                      value={values.confirm_password}
                      className={`form-control
                       form-control-user ${fieldValidate(field, form)}`}
                      id="exampleInputConPass"
                      placeholder="**********"
                      name="confirm_password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                );
              }}
            </Field>
          </div>
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
            Register Account
          </button>
        </form>
        <hr />
        <div className="text-center">
          <Link href="/login" as="/login">
            <a className="small">Already have an account? Login!</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export { SignUpForm };
