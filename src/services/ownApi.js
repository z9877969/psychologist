import axios from 'axios';
import { createTgMessage } from 'shared/helpers';

const instance = axios.create({
  baseURL: 'https://api.irynaprudko.com.ua/api',
});

export const sendTgMessage = async ({ formData, formType }) => {
  const { data } = instance.post('/orders', {
    message: createTgMessage(formData, formType),
  });
  return data;
};
