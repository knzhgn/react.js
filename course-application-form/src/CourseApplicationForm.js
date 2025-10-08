import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema with Yup
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

// Main component
const CourseApplicationForm = () => {
  return (
    <div>
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
          alert(JSON.stringify(values, null, 2)); // Show form data
        }}
      >
        {({ isSubmitting }) => (
          <Form style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginBottom: '20px' }}>
              <Field
                type="text"
                name="fullName"
                placeholder="Full Name"
                style={inputStyle}
              />
              <ErrorMessage name="fullName" component="div" style={errorStyle} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                style={inputStyle}
              />
              <ErrorMessage name="email" component="div" style={errorStyle} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                style={inputStyle}
              />
              <ErrorMessage name="password" component="div" style={errorStyle} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Field as="select" name="course" style={selectStyle}>
                <option value="">Select a course</option>
                <option value="Course A">Course A</option>
                <option value="Course B">Course B</option>
                <option value="Course C">Course C</option>
              </Field>
              <ErrorMessage name="course" component="div" style={errorStyle} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Field as="select" name="gender" style={selectStyle}>
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Field>
              <ErrorMessage name="gender" component="div" style={errorStyle} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Field type="date" name="dateOfBirth" style={inputStyle} />
              <ErrorMessage name="dateOfBirth" component="div" style={errorStyle} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Field
                type="text"
                name="city"
                placeholder="City"
                style={inputStyle}
              />
              <ErrorMessage name="city" component="div" style={errorStyle} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Field as="select" name="country" style={selectStyle}>
                <option value="">Select country</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="USA">USA</option>
                <option value="Russia">Russia</option>
              </Field>
              <ErrorMessage name="country" component="div" style={errorStyle} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Field
                type="text"
                name="phone"
                placeholder="Phone (optional)"
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Field as="select" name="education" style={selectStyle}>
                <option value="">Select education</option>
                <option value="School">School</option>
                <option value="College">College</option>
                <option value="University">University</option>
              </Field>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Field
                as="textarea"
                name="address"
                placeholder="Address (optional)"
                style={textareaStyle}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Field
                type="text"
                name="state"
                placeholder="State (optional)"
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Field
                type="text"
                name="zipCode"
                placeholder="Zip Code (optional)"
                style={inputStyle}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={submitButtonStyle}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// Input field styles
const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
};

const selectStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
};

const textareaStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
  height: '100px',
};

const submitButtonStyle = {
  backgroundColor: 'green',
  color: 'white',
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '5px',
};

const errorStyle = {
  color: 'red',
  fontSize: '12px',
};

export default CourseApplicationForm;
