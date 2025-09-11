import React, { useState, useEffect } from 'react';

const ToDoList = () => {
  // Состояние для хранения задач
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Эффект, который выводит предупреждение, если количество задач больше 10
  useEffect(() => {
    if (tasks.length > 10) {
      alert('У вас более 10 задач для выполнения');
    }
  }, [tasks]); // Завязываем эффект на изменение списка задач

  // Функция для добавления новой задачи
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]); // Добавляем новую задачу в список
      setNewTask(''); // Очищаем поле ввода
    }
  };

  return (
    <div>
      <h2>Список задач</h2>
      {/* Поле ввода для новой задачи */}
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Введите задачу"
      />
      <button onClick={addTask}>Добавить задачу</button>

      {/* Список задач */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
