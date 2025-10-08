import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Валидация формы с Yup
const validationSchema = Yup.object({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  course: Yup.string().required('Please select a course'),
  gender: Yup.string().required('Please select gender'),
  dateOfBirth: Yup.date().required('Date of birth is required'),
  city: Yup.string().required('City is required'),
  country: Yup.string().required('Country is required'),
});

// Основной компонент
const CourseApplicationForm = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Course Application</h1>

      <Formik
        initialValues={{
          fullName: '',
          email: '',
          password: '',
          course: '',
          gender: '',
          dateOfBirth: '',
          city: '',
          country: '',
          phone: '',
          education: '',
          address: '',
          state: '',
          zipCode: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2)); // Показываем данные формы
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-field">
              <Field
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="input-field"
              />
              <ErrorMessage name="fullName" component="div" className="error" />
            </div>

            <div className="form-field">
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="input-field"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-field">
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="input-field"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div className="form-field">
              <Field as="select" name="course" className="input-field">
                <option value="">Select a course</option>
                <option value="Course A">Course A</option>
                <option value="Course B">Course B</option>
                <option value="Course C">Course C</option>
              </Field>
              <ErrorMessage name="course" component="div" className="error" />
            </div>

            <div className="form-field">
              <Field as="select" name="gender" className="input-field">
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Field>
              <ErrorMessage name="gender" component="div" className="error" />
            </div>

            <div className="form-field">
              <Field type="date" name="dateOfBirth" className="input-field" />
              <ErrorMessage name="dateOfBirth" component="div" className="error" />
            </div>

            <div className="form-field">
              <Field
                type="text"
                name="city"
                placeholder="City"
                className="input-field"
              />
              <ErrorMessage name="city" component="div" className="error" />
            </div>

            <div className="form-field">
              <Field as="select" name="country" className="input-field">
                <option value="">Select country</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="USA">USA</option>
                <option value="Russia">Russia</option>
              </Field>
              <ErrorMessage name="country" component="div" className="error" />
            </div>

            <div className="form-field">
              <Field
                type="text"
                name="phone"
                placeholder="Phone (optional)"
                className="input-field"
              />
            </div>

            <div className="form-field">
              <Field as="select" name="education" className="input-field">
                <option value="">Select education</option>
                <option value="School">School</option>
                <option value="College">College</option>
                <option value="University">University</option>
              </Field>
            </div>

            <div className="form-field">
              <Field
                as="textarea"
                name="address"
                placeholder="Address (optional)"
                className="input-field"
              />
            </div>

            <div className="form-field">
              <Field
                type="text"
                name="state"
                placeholder="State (optional)"
                className="input-field"
              />
            </div>

            <div className="form-field">
              <Field
                type="text"
                name="zipCode"
                placeholder="Zip Code (optional)"
                className="input-field"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CourseApplicationForm;
