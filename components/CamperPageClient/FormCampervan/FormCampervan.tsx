'use client';

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import styles from './FormCampervan.module.scss';
import RedButton from '@/components/ui/RedButton/RedButton';
import { Toast } from '@/components/ui/Toast/Toast';

interface BookRequest {
  name: string;
  email: string;
  date: null;
  comment: string;
}

const initialValues: BookRequest = { name: '', email: '', date: null, comment: '' };

//===============================================================

const RegistrationFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name should be at least 3 symbols')
    .max(24, 'Too long name')
    .required('Required'),
  email: Yup.string()
    .max(32, 'Email is too long')
    .email('Invalid email format')
    .required('Required'),
  date: Yup.date().required('Required').nullable(),
  comment: Yup.string()
    .min(8, 'Comment should be at least 8 symbols')
    .max(256, 'Comment is too long'),
});

//===============================================================

function FormCampervan() {
  const fieldId = useId();

  const handleSubmit = async (values: BookRequest, actions: FormikHelpers<BookRequest>) => {
    try {
      Toast.booking('Congratulations with successful booking!');
      actions.resetForm();
    } catch (err) {
      console.error('Booking error:', err);
      Toast.error('Booking failed');
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegistrationFormSchema}
      onSubmit={handleSubmit}
      validateOnBlur
      validateOnChange
      validateOnMount
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className={styles.form} noValidate>
          {/* Username */}
          <div className={styles.fieldGroup}>
            <label className="visually-hidden" htmlFor={`${fieldId}-name`}>
              Name*
            </label>

            <Field
              className={`${styles.field} ${
                touched.name && errors.name ? styles.fieldInvalid : ''
              } ${touched.name && !errors.name ? styles.fieldValid : ''}`}
              type="text"
              name="name"
              id={`${fieldId}-name`}
              placeholder="Name*"
              autoComplete="name"
            />

            <div className={styles.errorSlot} aria-live="polite">
              <ErrorMessage name="name">
                {(msg) => <p className={styles.errorText}>{msg}</p>}
              </ErrorMessage>
              {/*       {!(touched.name && errors.name) && (
                <p className={styles.errorTextHidden} aria-hidden="true">
                  hidden text;
                </p>
              )} */}
            </div>
          </div>

          {/* Email */}
          <div className={styles.fieldGroup}>
            <label className="visually-hidden" htmlFor={`${fieldId}-email`}>
              Email*
            </label>

            <Field
              className={`${styles.field} ${
                touched.email && errors.email ? styles.fieldInvalid : ''
              } ${touched.email && !errors.email ? styles.fieldValid : ''}`}
              type="email"
              name="email"
              id={`${fieldId}-email`}
              placeholder="Email*"
              autoComplete="email"
              inputMode="email"
            />

            <div className={styles.errorSlot} aria-live="polite">
              <ErrorMessage name="email">
                {(msg) => <p className={styles.errorText}>{msg}</p>}
              </ErrorMessage>
              {/*   {!(touched.email && errors.email) && (
                <p className={styles.errorTextHidden} aria-hidden="true">
                  hidden text;
                </p>
              )} */}
            </div>
          </div>

          {/* Comment */}
          <div className={styles.fieldGroup}>
            <label className="visually-hidden" htmlFor={`${fieldId}-password`}>
              Comment
            </label>

            <div className={styles.commentWrapper}>
              <Field
                as="textarea"
                rows={3}
                className={`${styles.field} ${
                  touched.comment && errors.comment ? styles.fieldInvalid : ''
                } ${touched.comment && !errors.comment ? styles.fieldValid : ''}`}
                type={'text'}
                name="comment"
                id={`${fieldId}-comment`}
                placeholder="Comment"
              />

              <button
                type="button"
                className={styles.commentToggle}
                onClick={() => {}}
                aria-label={'Comment'}
              ></button>
            </div>

            <div className={styles.errorSlot} aria-live="polite">
              <ErrorMessage name="comment">
                {(msg) => <p className={styles.errorText}>{msg}</p>}
              </ErrorMessage>
              {/*   {!(touched.password && errors.password) && (
                <p className={styles.errorTextHidden} aria-hidden="true">
                  hidden text;
                </p>
              )} */}
            </div>
          </div>

          <RedButton as="button" type="submit" className={styles.sbmBtn} disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send'}
          </RedButton>
        </Form>
      )}
    </Formik>
  );
}

export default FormCampervan;
