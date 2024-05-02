import axios from 'axios';
import { createTgMessage } from 'shared/helpers';

const instance = axios.create({
  // baseURL: 'https://api.irynaprudko.com.ua/api',
  baseURL: 'http://localhost:4040/api',
});

export const sendTgMessage = async ({ formData, formType }) => {
  const { data } = instance.post('/orders', {
    message: createTgMessage(formData, formType),
  });
  return data;
};

export const getBlogsListApi = async () => {
  const { data } = await instance.get('/blogs');
  return data;
};