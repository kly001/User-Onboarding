import React, {useState} from 'react';
import './App.css';
import UsersForm from "./components/UsersForm"


function App() {
  const [users, setUsers] = useState([])

  const addNewUser = user => {
    setUsers ([...users, user])
  }

  return (
    <div className="App">
      <UsersForm />
    </div>
  );
}

export default App;

