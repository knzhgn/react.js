import React, { useState, useRef, useCallback } from 'react';

function App() {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  
  const lastNameRef = useRef(null);


  const showAlert = useCallback(() => {
    alert(`First Name: ${firstName}, Last Name: ${lastName}`);
  }, [firstName, lastName]);

 
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);

  
  const focusLastName = () => {
    if (lastNameRef.current) {
      lastNameRef.current.focus();
    }
  };

  return (
    <div>
      <h1>Форма для ввода</h1>
      <form>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="Введите имя"
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            ref={lastNameRef}
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Введите фамилию"
          />
        </div>
        <button type="button" onClick={focusLastName}>
          Фокус на фамилию
        </button>
        <button type="button" onClick={showAlert}>
          Показать данные
        </button>
      </form>
    </div>
  );
}

export default App;

