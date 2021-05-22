import axios from 'axios';
import { baseURL } from '@/constants/env';

// Mutations
export const LOGIN_USER = async e => {
  const res = await axios.post(baseURL + `/v1/login/login-user`, e)
  return res;
};

export const GOOGLE_LOGIN_USER = async e => {
  const res = await axios.post(baseURL + `/v1/login/google-login`, e)
  return res;
};

