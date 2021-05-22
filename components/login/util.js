import _get from "lodash/get";

export const setLocalStorageValues = async data => {
  await localStorage.setItem(
    'auth_token',
    _get(data, 'jwt_token', ''),
  );
  await localStorage.setItem(
    'user_id',
    _get(data, '_id', ''),
  );
  await localStorage.setItem(
    'first_name',
    _get(data, 'first_name', ''),
  );
  await localStorage.setItem(
    'last_name',
    _get(data, 'last_name', ''),
  );
  await localStorage.setItem(
    'user_email',
    _get(data, 'email', ''),
  );
}
