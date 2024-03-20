import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';
import { consult } from '../../images';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short! Please enter at least 3 characters')
    .max(50, 'Too long!')
    .required('Required field'),
  number: Yup.string()
    .min(3, 'Too short! Please enter at least 3 characters')
    .max(50, 'Too long')
    .required('Required field'),
  message: Yup.string()
    .min(5, 'Too short! Please enter at least 5 characters')
    .max(300, 'Too long')
    .required('Required field'),
});

const initialValues = { name: '', number: '' };

export const SignUpPopUp = ({ onAdd }) => {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const massageFieldId = useId();

  const handleSubmit = (values, action) => {
    onAdd({
      ...values,
      id: nanoid(3),
    });
    action.resetForm();
  };

  return (
    <>
      <h2>Записатися на консультацію</h2>
      <img src={consult} alt="some image description" />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactFormSchema}
      >
        <Form>
          <div>
            <label htmlFor={nameFieldId}>Ім`я</label>
            <Field type="text" name="name" placeholder="Введіть ім'я" />
            <ErrorMessage name="name" as="span" />
          </div>

          <div>
            <label htmlFor={phoneFieldId}>Номер телефону</label>
            <Field type="tel" name="number" placeholder="Введіть номер" />
            <ErrorMessage name="number" as="span" />
          </div>

          <div>
            <label htmlFor={massageFieldId}>Повідомлення</label>
            <Field
              type="tel"
              name="message"
              placeholder="Введіть повідомлення"
            />
            <ErrorMessage name="message" as="span" />
          </div>

          <button type="submit">
            <a
              href="https://t.me/irynaprudko"
              target="_blank"
              rel="noopener noreferrer"
            >
              Надіслати запит
            </a>
          </button>
        </Form>
      </Formik>
    </>
  );
};
