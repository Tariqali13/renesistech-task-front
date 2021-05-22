import axios from 'axios';
import { baseURL } from '@/constants/env';

// Mutations
export const REGISTER_USER = async e => {
  const res = await axios.post(baseURL + `/v1/user`, e)
  return res;
};
