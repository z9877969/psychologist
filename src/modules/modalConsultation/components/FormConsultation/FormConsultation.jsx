import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './FormConsultation.module.scss';
import * as Yup from 'yup';
import { sprite } from 'shared/icons';
import ErrorSpan from '../ErrorSpan/ErrorSpan';
import clsx from 'clsx';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Це поле обовʼязкове'),
  phone: Yup.string().required('Це поле обовʼязкове'),
  message: Yup.string().min(0).max(512, 'Too Long!'),
});

const FormConsultation = () => {
  return (
    <Formik
      initialValues={{ name: '', phone: '', message: '' }}
      validationSchema={FeedbackSchema}
    >
      {({ errors }) => {
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
              <Field
                className={clsx(s.input, errors.phone && s.error)}
                name="phone"
                type="text"
                placeholder="Введіть номер"
              />
              <ErrorMessage name="phone">
                {(msg) => <ErrorSpan>{msg}</ErrorSpan>}
              </ErrorMessage>
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
            </label>
            <button className={s.btn} type="submit">
              Надіслати запит
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormConsultation;
