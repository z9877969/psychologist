import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './FormConsultation.module.scss';
import { PatternFormat } from 'react-number-format';
import * as Yup from 'yup';
import { sprite } from 'shared/icons';
import ErrorSpan from '../ErrorSpan/ErrorSpan';
import clsx from 'clsx';
import { useModal } from 'context/ModalProvider';
import { useCallback, useState } from 'react';
import { telegremApi as tgApi } from 'services';

const KEY = 'formconsultation';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, '3-16 символів!')
    .max(16, '3-16 символів!')
    .required('Це поле обовʼязкове'),
  phone: Yup.string().required('Це поле обовʼязкове'),
  message: Yup.string().min(0).max(512, 'До 512 символів!'),
});

const FormConsultation = () => {
  const setModal = useModal();
  const closeModal = useCallback(() => setModal(), [setModal]);
  const [initialState] = useState(() => {
    const data = JSON.parse(localStorage.getItem(KEY)) || {
      name: '',
      phone: '',
      message: '',
    };
    return data;
  });

  const handleSubmit = (values) => {
    if (values.phone.includes('_')) {
      return;
    }

    tgApi
      .sendMessageTg({ formData: values, formType: 'consultation' })
      .then(() => {
        // eslint-disable-next-line
        console.log('SEND MESSAGE SUCCESS');
      })
      // eslint-disable-next-line
      .catch((err) => console.log(err.message))
      .finally(() => {
        closeModal();
        localStorage.removeItem(KEY);
      });
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          name: initialState.name,
          phone: initialState.phone.includes('+38')
            ? initialState.phone.slice(3)
            : initialState.phone,
          message: initialState.message,
        }}
        validationSchema={FeedbackSchema}
      >
        {({ errors, values }) => {
          const { name, phone, message } = values;
          if (name || phone || message) {
            localStorage.setItem(KEY, JSON.stringify(values));
          }
          return (
            <Form className={s.form}>
              <label className={s.label}>
                <span className={s.titleInput}>
                  Ім’я
                  <svg className={s.iconStar} width={8} height={8}>
                    <use xlinkHref={`${sprite}#icon-star`}></use>
                  </svg>
                </span>

                <Field
                  className={clsx(s.input, errors.name && s.error)}
                  name="name"
                  type="text"
                  placeholder="Введіть ім’я"
                />
                <ErrorMessage name="name">
                  {(msg) => <ErrorSpan>{msg}</ErrorSpan>}
                </ErrorMessage>
              </label>
              <label className={s.label}>
                <span className={s.titleInput}>
                  Номер телефону
                  <svg className={s.iconStar} width={8} height={8}>
                    <use xlinkHref={`${sprite}#icon-star`}></use>
                  </svg>
                </span>

                <Field name="phone" placeholder="Введіть номер">
                  {({ field }) => (
                    <PatternFormat
                      {...field}
                      className={clsx(
                        s.input,
                        errors.phone && s.error,
                        values.phone.includes('_') && s.error
                      )}
                      format="+38 (###) #### ###"
                      allowEmptyFormatting
                      mask="_"
                    />
                  )}
                </Field>
                <ErrorMessage name="phone">
                  {(msg) => <ErrorSpan>{msg}</ErrorSpan>}
                </ErrorMessage>
                {!errors.phone && values.phone.includes('_') && (
                  <ErrorSpan>Не коректний номер</ErrorSpan>
                )}
              </label>
              <label className={s.label}>
                <span className={s.titleInput}>Повідомлення</span>
                <Field
                  className={clsx(s.textarea, errors.message && s.error)}
                  name="message"
                  as="textarea"
                  placeholder="Введіть повідомлення"
                />
                <ErrorMessage name="message">
                  {(msg) => <ErrorSpan>{msg}</ErrorSpan>}
                </ErrorMessage>
                <span className={s.valueLength}>
                  {values.message.length}/512
                </span>
              </label>
              <button className={s.btn} type="submit">
                Надіслати запит
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default FormConsultation;
