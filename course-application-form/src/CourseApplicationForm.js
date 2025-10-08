import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Валидация формы с Yup
const validationSchema = Yup.object({
  fullName: Yup.string().required('Поле "Имя" обязательно для заполнения'),
  email: Yup.string()
    .email('Неверный формат email')
    .required('Поле "Email" обязательно для заполнения'),
  password: Yup.string()
    .min(6, 'Пароль должен содержать не менее 6 символов')
    .required('Поле "Пароль" обязательно для заполнения'),
  course: Yup.string().required('Выберите курс'),
  gender: Yup.string().required('Выберите пол'),
  dateOfBirth: Yup.date().required('Дата рождения обязательна'),
  city: Yup.string().required('Поле "Город" обязательно для заполнения'),
  country: Yup.string().required('Выберите страну'),
});

// Основной компонент формы
const CourseApplicationForm = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Заявка на курс</h1>

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
          <Form style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginBottom: '20px' }}>
              <Field
                type="text"
                name="fullName"
                placeholder="Имя"
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
                placeholder="Пароль"
                style={inputStyle}
              />
              <ErrorMessage name="password" component="div" style={errorStyle} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Field as="select" name="course" style={selectStyle}>
                <option value="">Выберите курс</option>
                <option value="Course A">Курс A</option>
                <option value="Course B">Курс B</option>
                <option value="Course C">Курс C</option>
              </Field>
              <ErrorMessage name="course" component="div" style={errorStyle} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Field as="select" name="gender" style={selectStyle}>
                <option value="">Выберите пол</option>
                <option value="Male">Мужской</option>
                <option value="Female">Женский</option>
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
                placeholder="Город"
                style={inputStyle}
              />
              <ErrorMessage name="city" component="div" style={errorStyle} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Field as="select" name="country" style={selectStyle}>
                <option value="">Выберите страну</option>
                <option value="Kazakhstan">Казахстан</option>
                <option value="USA">США</option>
                <option value="Russia">Россия</option>
              </Field>
              <ErrorMessage name="country" component="div" style={errorStyle} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Field
                type="text"
                name="phone"
                placeholder="Телефон (необязательно)"
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Field as="select" name="education" style={selectStyle}>
                <option value="">Образование</option>
                <option value="School">Школа</option>
                <option value="College">Колледж</option>
                <option value="University">Университет</option>
              </Field>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Field
                as="textarea"
                name="address"
                placeholder="Адрес (необязательно)"
                style={textareaStyle}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Field
                type="text"
                name="state"
                placeholder="Штат (необязательно)"
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Field
                type="text"
                name="zipCode"
                placeholder="Почтовый индекс (необязательно)"
                style={inputStyle}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={submitButtonStyle}
            >
              Отправить
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// Стили для полей ввода
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
