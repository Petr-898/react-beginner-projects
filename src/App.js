import React, { useEffect, useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users/index';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const { Users, setUsers } = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.console.warn(err);
        alert('Oshibka pri poluchenii polsovateley');
      });
  });
  return (
    <div className="App">
      <Users />
      {/* <Success /> */}
    </div>
  );
}

export default App;
