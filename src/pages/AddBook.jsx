import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddBook = () => {
  const navigate = useNavigate();

  const initialValues = {
    title: '',
    author: '',
    genre: 'fiction',
    rating: 0,
  };

  const validationSchema = Yup.object({
    title: Yup.string().min(2, 'Title must be at least 2 characters').required('Required'),
    author: Yup.string().required('Required'),
    genre: Yup.string().oneOf(['fiction', 'nonfiction', 'tech'], 'Invalid genre').required('Required'),
    rating: Yup.number().min(0, 'Rating must be between 0 and 5').max(5, 'Rating must be between 0 and 5').required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newBook = {
      id: Date.now(),
      ...values,
    };

    const savedBooks = JSON.parse(localStorage.getItem('miniLibraryBooks')) || [];
    savedBooks.push(newBook);
    localStorage.setItem('miniLibraryBooks', JSON.stringify(savedBooks));

    resetForm();
    navigate('/books');
  };

  return (
    <div>
      <h2>Add Book</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="title">Title</label>
            <Field type="text" id="title" name="title" />
            <ErrorMessage name="title" component="div" />
          </div>

          <div>
            <label htmlFor="author">Author</label>
            <Field type="text" id="author" name="author" />
            <ErrorMessage name="author" component="div" />
          </div>

          <div>
            <label htmlFor="genre">Genre</label>
            <Field as="select" id="genre" name="genre">
              <option value="fiction">Fiction</option>
              <option value="nonfiction">Nonfiction</option>
              <option value="tech">Tech</option>
            </Field>
            <ErrorMessage name="genre" component="div" />
          </div>

          <div>
            <label htmlFor="rating">Rating</label>
            <Field type="number" id="rating" name="rating" min="0" max="5" />
            <ErrorMessage name="rating" component="div" />
          </div>

          <button type="submit">Add Book</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddBook;
