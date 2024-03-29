import s from './FormRevie.module.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { PatternFormat } from 'react-number-format';
import * as Yup from 'yup';
import { sprite } from 'shared/icons';
import ErrorSpan from 'modules/modalConsultation/components/ErrorSpan/ErrorSpan';
import clsx from 'clsx';
import { useModal } from 'context/ModalProvider';
import { useCallback } from 'react';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, '3-16 символів!')
    .max(16, '3-16 символів!')
    .required('Це поле обовʼязкове'),
  phone: Yup.string().required('Це поле обовʼязкове'),
  message: Yup.string()
    .min(5, 'Від 5 символів')
    .max(512, 'До 512 символів!')
    .required('Це поле обовʼязкове'),
  age: Yup.number()
    .min(18, 'Вам має бути 18 років')
    .required('Це поле обовʼязкове'),
});

const FormRevie = () => {
  const setModal = useModal();
  const closeModal = useCallback(() => setModal(), [setModal]);
  const handleSubmit = (values) => {
    alert(
      `name: ${values.name} phone: ${values.phone} message: ${values.message} `
    );
    closeModal();
  };
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ name: '', phone: '', message: '', age: null }}
      validationSchema={FeedbackSchema}
    >
      {({ errors }) => {
        return (
          <Form className={s.form}>
            <label className={clsx(s.label, s.name)}>
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
            <label className={clsx(s.label, s.age)}>
              <span className={s.titleInput}>
                Вік
                <svg className={s.iconStar} width={8} height={8}>
                  <use xlinkHref={`${sprite}#icon-star`}></use>
                </svg>
              </span>

              <Field
                className={clsx(s.input, errors.age && s.error)}
                name="age"
                type="text"
                placeholder="Введіть вік"
              />
              <ErrorMessage name="age">
                {(msg) => <ErrorSpan>{msg}</ErrorSpan>}
              </ErrorMessage>
            </label>
            <label className={clsx(s.label, s.phone)}>
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
                    className={clsx(s.input, errors.phone && s.error)}
                    format="+38 (###) #### ###"
                    allowEmptyFormatting
                    mask="_"
                  />
                )}
              </Field>
              <ErrorMessage name="phone">
                {(msg) => <ErrorSpan>{msg}</ErrorSpan>}
              </ErrorMessage>
            </label>
            <label className={clsx(s.label, s.message)}>
              <span className={s.titleInput}>
                Відгук
                <svg className={s.iconStar} width={8} height={8}>
                  <use xlinkHref={`${sprite}#icon-star`}></use>
                </svg>
              </span>
              <Field
                className={clsx(s.textarea, errors.message && s.error)}
                name="message"
                as="textarea"
                placeholder="Введіть повідомлення"
              />
              <ErrorMessage name="message">
                {(msg) => <ErrorSpan>{msg}</ErrorSpan>}
              </ErrorMessage>
            </label>
            <button className={s.btn} type="submit">
              Надіслати відгук
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormRevie;
