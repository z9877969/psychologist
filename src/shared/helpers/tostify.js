import { toast } from 'react-toastify';

export const toastify = {
  success: (message, props) =>
    toast.success(message, {
      style: {
        background: '#1e5b2a',
      },
      ...props,
    }),
  warning: (message, props = {}) =>
    toast.warn(message, {
      style: {
        background: 'orange',
      },
      ...props,
    }),
  error: (message, props = {}) =>
    toast.error(message, {
      style: {
        background: 'red',
      },
      ...props,
    }),
};
