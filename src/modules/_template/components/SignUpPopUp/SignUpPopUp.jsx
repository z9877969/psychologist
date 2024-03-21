import { useId } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';
// import { consult } from '../../images';
// import css from './SignUpPopUp.module.scss';

// const ContactFormSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(3, 'Будь ласка, введіть не менше 3 символів')
//     .max(20, 'Too long!')
//     .required('Це поле обов`язкове'),
//   number: Yup.string()
//     .min(12, 'Введіть номер у форматі  380ххххххххх')
//     .max(
//       20,
//       'Не коректний формат номеру. Введіть номер у форматі  380ххххххххх'
//     )
//     .required('Це поле обов`язкове'),
//   message: Yup.string()
//     .min(5, 'Too short! Please enter at least 5 characters')
//     .max(300, 'Too long'),
// });

// const initialValues = { name: '', number: '' };

// export const SignUpPopUp = ({ onAdd }) => {
//   const nameFieldId = useId();
//   const phoneFieldId = useId();
//   const massageFieldId = useId();

//   const handleSubmit = (values, action) => {
//     onAdd({
//       ...values,
//       id: nanoid(3),
//     });
//     action.resetForm();
//   };

//   return (
//     <div className={css.wrapper}>
//       <img src={consult} alt="some image description" />
//       <Formik
//         initialValues={initialValues}
//         onSubmit={handleSubmit}
//         validationSchema={ContactFormSchema}
//       >
//         <div>
//           <Form>
//             <div>
//               <h2 className={css.title}>Записатися на консультацію</h2>

//               <div className={css.w}>
//                 <div>
//                   <label className={css.field_text} htmlFor={nameFieldId}>
//                     Ім`я
//                   </label>
//                   <Field
//                     className={`${css.field_text} ${css.input} ${css.invalid}`}
//                     type="text"
//                     name="name"
//                     placeholder="Введіть ім`я"
//                   />
//                   <ErrorMessage name="name" as="span" />
//                 </div>

//                 <div>
//                   <label className={css.field_text} htmlFor={phoneFieldId}>
//                     Номер телефону
//                   </label>
//                   <Field
//                     className={`${css.field_text} ${css.input} ${css.invalid}`}
//                     type="tel"
//                     name="number"
//                     placeholder="Введіть номер"
//                   />
//                   <ErrorMessage name="number" as="span" />
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className={css.field_text} htmlFor={massageFieldId}>
//                 Повідомлення
//               </label>
//               <Field
//                 as="textarea"
//                 rows={20}
//                 className={`${css.field_text} ${css.input} ${css.textarea}`}
//                 type="text"
//                 name="message"
//                 placeholder="Введіть повідомлення"
//               />
//               <ErrorMessage name="message" as="span" />
//             </div>

//             <button className={css.button} type="submit">
//               <a
//                 href="https://t.me/irynaprudko"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Надіслати запит
//               </a>
//             </button>
//           </Form>
//         </div>
//       </Formik>
//     </div>
//   );
// };

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';
import { consult } from '../../images';
import css from './SignUpPopUp.module.scss';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Будь ласка, введіть не менше 3 символів')
    .max(20, 'Занадто довге!')
    .required('Це поле обов`язкове'),
  number: Yup.string()
    .min(12, 'Введіть номер у форматі 380xxxxxxxxx')
    .max(20, 'Некоректний формат номеру. Введіть номер у форматі 380xxxxxxxxx')
    .required('Це поле обов`язкове'),
  // message: Yup.string()
  //   .min(5, 'Занадто коротке! Будь ласка, введіть щонайменше 5 символів')
  //   .max(300, 'Занадто довге'),
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

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ContactFormSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className={css.wrapper}>
      <img src={consult} alt="some image description" />
      <form onSubmit={formik.handleSubmit}>
        <div>
          <h2 className={css.title}>Записатися на консультацію</h2>

          <div className={css.w}>
            <div>
              <label className={css.field_text} htmlFor={nameFieldId}>
                Ім`я
              </label>
              <input
                className={`${css.field_text} ${css.input} ${formik.errors.name && formik.touched.name ? css.error : ''}`}
                type="text"
                name="name"
                placeholder="Введіть ім`я"
                {...formik.getFieldProps('name')}
              />
              {formik.touched.name && formik.errors.name ? (
                <span className={css.errorMessage}>{formik.errors.name}</span>
              ) : null}
            </div>

            <div>
              <label className={css.field_text} htmlFor={phoneFieldId}>
                Номер телефону
              </label>
              <input
                className={`${css.field_text} ${css.input} ${formik.errors.number && formik.touched.number ? css.error : ''}`}
                type="tel"
                name="number"
                placeholder="Введіть номер"
                {...formik.getFieldProps('number')}
              />
              {formik.touched.number && formik.errors.number ? (
                <span className={css.errorMessage}>{formik.errors.number}</span>
              ) : null}
            </div>
          </div>
        </div>

        <div>
          <label className={css.field_text} htmlFor={massageFieldId}>
            Повідомлення
          </label>
          <textarea
            className={`${css.field_text} ${css.input} ${css.textarea}`}
            rows={20}
            name="message"
            placeholder="Введіть повідомлення"
            {...formik.getFieldProps('message')}
          />
          {formik.touched.message && formik.errors.message ? (
            <span className={css.errorMessage}>{formik.errors.message}</span>
          ) : null}
        </div>

        <button className={css.button} type="submit">
          <a
            href="https://t.me/irynaprudko"
            target="_blank"
            rel="noopener noreferrer"
          >
            Надіслати запит
          </a>
        </button>
      </form>
    </div>
  );
};
