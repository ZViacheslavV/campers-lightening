'use client';

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import styles from './FormCampervan.module.scss';
import RedButton from '@/components/ui/RedButton/RedButton';
import { Toast } from '@/components/ui/Toast/Toast';
import DateField from './DateField/DateField';
import clsx from 'clsx';

interface BookRequest {
  name: string;
  email: string;
  date: Date | null;
  comment: string;
}

const initialValues: BookRequest = { name: '', email: '', date: null as Date | null, comment: '' };

//===============================================================

const RegistrationFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'name should be at least 3 symbols')
    .max(24, 'too long name')
    .required('required'),
  email: Yup.string()
    .max(32, 'email is too long')
    .email('invalid email format')
    .required('required'),
  date: Yup.date().required('required'),
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
    <div className={styles.formikWrapper}>
      <div className={styles.formTitleWrapper}>
        <h3 className={styles.formTitle}>Book your campervan now</h3>
        <p className={styles.subTitle}>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={RegistrationFormSchema}
        validateOnBlur
        validateOnChange
        validateOnMount
      >
        {({
          errors,
          touched,
          isSubmitting,
          setFieldValue,
          values,
          setFieldTouched,
          submitCount,
        }) => (
          <Form className={styles.form} noValidate>
            {/* Username */}
            <div className={styles.fieldGroup}>
              <label className="visually-hidden" htmlFor={`${fieldId}-name`}>
                Name*
              </label>

              <Field
                className={styles.field}
                type="text"
                name="name"
                id={`${fieldId}-name`}
                placeholder="Name*"
                autoComplete="name"
              />

              <div className={styles.errors} aria-live="polite">
                <ErrorMessage name="name">
                  {(msg) => <p className={styles.errorText}>{msg}</p>}
                </ErrorMessage>
              </div>
            </div>

            {/* Email */}
            <div className={styles.fieldGroup}>
              <label className="visually-hidden" htmlFor={`${fieldId}-email`}>
                Email*
              </label>

              <Field
                className={styles.field}
                type="email"
                name="email"
                id={`${fieldId}-email`}
                placeholder="Email*"
                autoComplete="email"
                inputMode="email"
              />

              <div className={styles.errors} aria-live="polite">
                <ErrorMessage name="email">
                  {(msg) => <p className={styles.errorText}>{msg}</p>}
                </ErrorMessage>
              </div>
            </div>

            {/* Date */}
            <div className={styles.fieldGroup}>
              <label className="visually-hidden" htmlFor={`${fieldId}-date`}>
                Date
              </label>

              <DateField
                value={values.date}
                onChange={(date) => {
                  setFieldValue('date', date);
                  setFieldTouched('date', true, false);
                }}
                hasError={!!errors.date}
                touched={!!touched.date || submitCount > 0}
                name={'date'}
              />

              <div className={styles.errors} aria-live="polite">
                <ErrorMessage name="date">
                  {(msg) => <p className={styles.errorText}>{msg}</p>}
                </ErrorMessage>
              </div>
            </div>

            {/* Comment */}
            <div className={styles.fieldGroup}>
              <label className="visually-hidden" htmlFor={`${fieldId}-comment`}>
                Comment
              </label>

              <Field
                as="textarea"
                className={clsx(styles.field, styles.textArea)}
                type={'text'}
                name="comment"
                id={`${fieldId}-comment`}
                placeholder="Comment"
              />

              <div className={styles.errors} aria-live="polite">
                <ErrorMessage name="comment">
                  {(msg) => <p className={styles.errorText}>{msg}</p>}
                </ErrorMessage>
              </div>
            </div>

            <RedButton as="button" type="submit" className={styles.sbmBtn} disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send'}
            </RedButton>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormCampervan;
