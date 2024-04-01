import axios from 'axios';
import { createTgMessage } from 'shared/helpers';
// import { totalPrice } from 'modules/cart';

const TOKEN = '7131982264:AAFCBElL7nO0fyYrEqT6xtTdaSDCdcyvX-Q';
// отримується при перевідправці повідомлення в бот GET_MY_ID
const CHAT_ID = '-1002035456021';

const instance = axios.create({
  baseURL: `https://api.telegram.org/bot${TOKEN}`,
});

export const sendMessageTg = async ({ formData, formType }) => {
  const { data } = await instance.post('/sendMessage', {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: createTgMessage(formData, formType),
  });

  return data;
};
