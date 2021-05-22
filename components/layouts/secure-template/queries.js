// @flow
import axios from 'axios';
import { baseURL } from '@/constants/env';

export const GET_USER_DATA = async (key, e) => {
  const result  = await axios.get(`${baseURL}/v1/user/${e.id}`);
  return result.data;
}
