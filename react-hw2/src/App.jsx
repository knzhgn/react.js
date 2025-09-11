import { useState } from 'react';
import './App.css';
import UserCard from './components/UserCard';
import Button from './components/Button';

export default function App() {
  const [users] = useState([
    { id: 1, name: 'Amina Akhmet', email: 'amina@example.com' },
    { id: 2, name: 'Dias Bek', email: 'dias.bek@example.com' },
    { id: 3, name: 'Aliya Khan', email: 'aliya.khan@example.com' },
    { id: 4, name: 'Timur Rai', email: 'timur.rai@example.com' },
  ]);

  return (
    <div className="app">
      <h1>Пользователи</h1>
      <div className="cards">
        {users.map(u => (
          <UserCard key={u.id} name={u.name} email={u.email}>
            <Button text="Написать" onClick={() => alert(`Пишем ${u.email}`)} />
          </UserCard>
        ))}
      </div>
    </div>
  );
}
