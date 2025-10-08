import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  course: Yup.string().required('Please select a course'),
  gender: Yup.string().required('Please select gender'),
  dateOfBirth: Yup.date().required('Date of birth is required'),
  city: Yup.string().required('City is required'),
  country: Yup.string().required('Country is required'),
});

const CourseApplicationForm = () => (
  <div>
    <h1>Course Application</h1>
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
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field type="text" name="fullName" placeholder="Full Name" />
            <ErrorMessage name="fullName" component="div" className="error" />
          </div>

          <div>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <div>
            <Field as="select" name="course">
              <option value="">Select a course</option>
              <option value="Course A">Course A</option>
              <option value="Course B">Course B</option>
              <option value="Course C">Course C</option>
            </Field>
            <ErrorMessage name="course" component="div" className="error" />
          </div>

          <div>
            <Field as="select" name="gender">
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Field>
            <ErrorMessage name="gender" component="div" className="error" />
          </div>

          <div>
            <Field type="date" name="dateOfBirth" />
            <ErrorMessage name="dateOfBirth" component="div" className="error" />
          </div>

          <div>
            <Field type="text" name="city" placeholder="City" />
            <ErrorMessage name="city" component="div" className="error" />
          </div>

          <div>
            <Field as="select" name="country">
              <option value="">Select country</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="USA">USA</option>
              <option value="Russia">Russia</option>
            </Field>
            <ErrorMessage name="country" component="div" className="error" />
          </div>

          <div>
            <Field type="text" name="phone" placeholder="Phone (optional)" />
          </div>

          <div>
            <Field as="select" name="education">
              <option value="">Select education</option>
              <option value="School">School</option>
              <option value="College">College</option>
              <option value="University">University</option>
            </Field>
          </div>

          <div>
            <Field as="textarea" name="address" placeholder="Address (optional)" />
          </div>

          <div>
            <Field type="text" name="state" placeholder="State (optional)" />
          </div>

          <div>
            <Field type="text" name="zipCode" placeholder="Zip Code (optional)" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default CourseApplicationForm;

