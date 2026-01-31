'use client';

import { useState } from 'react';

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import Link from 'next/link';
import toast from 'react-hot-toast';
import styles from './FormCampervan.module.scss';
import RedButton from '@/components/ui/RedButton/RedButton';

/* import { registerUser, RegisterRequest } from '@/lib/api/clientApi';
import { useAuthUserStore } from '@/lib/store/authStore';
import type { User } from '@/types/user'; */

// import Toast from '@/components/common/Toast/Toast';
/* import Button from '@/components/common/Button/Button';*/

//===============================================================

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
    .max(32, 'Пошта занадто довга')
    .email('Недійсний формат електронної пошти')
    .required('Required'),
  date: Yup.string()
    .min(8, 'Пароль має містити щонайменше 8 символів')
    .max(128, 'Пароль занадто довгий')
    .required('Required'),
  comment: Yup.string()
    .min(8, 'Пароль має містити щонайменше 8 символів')
    .max(128, 'Пароль занадто довгий'),
});

//===============================================================

function FormCampervan() {
  const fieldId = useId();

  /*  const setUser = useAuthUserStore((s) => s.setUser);

  const handleSubmit = async (values: RegisterRequest, actions: FormikHelpers<RegisterRequest>) => {
    try {
      const res = await registerUser(values);
      setUser(res.data as User);

      toast.custom(
        <Toast
          type="success"
          message="Вітаємо з успішною реєстрацією !"
        />,
        { duration: 5000 }
      );

      router.push('/profile/edit');
    } catch (err) {
      console.error('Register error:', err);

      toast.custom(<Toast type="error" message="Не вдалося зареєструватися" />, {
        duration: 5000,
      });
    } finally {
      actions.setSubmitting(false);
    }
  }; */

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegistrationFormSchema}
      onSubmit={/* handleSubmit */ () => {}}
      validateOnBlur
      validateOnChange
      validateOnMount
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className={styles.form} noValidate>
          <h3>Book your campervan now</h3>
          <p>Stay connected! We are always ready to help you.</p>
          {/* Username */}
          <div className={styles.fieldGroup}>
            <label className="visually-hidden" htmlFor={`${fieldId}-name`}>
              Ім’я*
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
              {!(touched.name && errors.name) && (
                <p className={styles.errorTextHidden} aria-hidden="true">
                  hidden text;
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className={styles.fieldGroup}>
            <label className="visually-hidden" htmlFor={`${fieldId}-email`}>
              Пошта*
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
              {!(touched.email && errors.email) && (
                <p className={styles.errorTextHidden} aria-hidden="true">
                  hidden text;
                </p>
              )}
            </div>
          </div>

          {/* Comment */}
          <div className={styles.fieldGroup}>
            <label className="visually-hidden" htmlFor={`${fieldId}-password`}>
              Comment
            </label>

            <div className={styles.passwordWrapper}>
              <Field
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
                className={styles.passwordToggle}
                onClick={() => {}}
                aria-label={'Коментар'}
              ></button>
            </div>

            <div className={styles.errorSlot} aria-live="polite">
              <ErrorMessage name="password">
                {(msg) => <p className={styles.errorText}>{msg}</p>}
              </ErrorMessage>
              {/*   {!(touched.password && errors.password) && (
                <p className={styles.errorTextHidden} aria-hidden="true">
                  hidden text;
                </p>
              )} */}
            </div>
          </div>

          <RedButton as="button" type="submit" className={styles.sbtBtn}>
            Send
          </RedButton>
        </Form>
      )}
    </Formik>
  );
}

export default FormCampervan;
