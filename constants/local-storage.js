export const getLocalStorageValues = () => {
  const isWindow = typeof window !== 'undefined';
  const user_id = isWindow
    ? localStorage.getItem('user_id')
    : '';
  const auth_token = isWindow
    ? localStorage.getItem('auth_token')
    : '';
  const first_name = isWindow
    ? localStorage.getItem('first_name')
    : '';
  const last_name = isWindow
    ? localStorage.getItem('last_name')
    : '';
  const user_email = isWindow
    ? localStorage.getItem('user_email')
    : '';
  const theme = isWindow ? localStorage.getItem('theme-dark') : 'theme-dark';
  return {
    user_id,
    auth_token,
    first_name,
    last_name,
    user_email,
    theme,
  };
};
