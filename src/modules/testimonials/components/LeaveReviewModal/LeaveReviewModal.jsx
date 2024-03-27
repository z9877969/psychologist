import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ModalBackdrop from 'shared/components/ModalBackdrop/ModalBackdrop';
import './LeaveReviewModal.scss';

const LeaveReviewModal = ({ onClose, onSubmit }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Ім'я обов'язкове"),
    age: Yup.number()
      .min(18, 'Потрібно бути старше 18 років')
      .required("Вік обов'язковий"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, 'Некорректний номер телефону')
      .required("Телефон обов'язковий"),
    text: Yup.string().required("Відгук обов'язковий"),
  });

  return (
    <ModalBackdrop onClose={onClose}>
      <div className="modalContainer">
        <h2 className="modalTitle">Залишити відгук</h2>
        <Formik
          initialValues={{
            name: '',
            age: '',
            phone: '',
            text: '',
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="formField">
                <Field type="text" name="name" placeholder="Ваше ім'я" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="errorMessage"
                />
              </div>
              <div className="formField">
                <Field type="number" name="age" placeholder="Ваш вік" />
                <ErrorMessage
                  name="age"
                  component="div"
                  className="errorMessage"
                />
              </div>
              <div className="formField">
                <Field type="text" name="phone" placeholder="Ваш телефон" />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="errorMessage"
                />
              </div>
              <div className="formField">
                <Field as="textarea" name="text" placeholder="Ваш відгук" />
                <ErrorMessage
                  name="text"
                  component="div"
                  className="errorMessage"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="submitButton"
              >
                Додати відгук
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </ModalBackdrop>
  );
};

export default LeaveReviewModal;
