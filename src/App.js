import './App.css';
import React, { useState, useEffect } from 'react';

import Form from './components/Form';
import TaskContainer from './components/TaskContainer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from './API';
import Welcome from './components/Welcome';
import { TaskProvider} from './components/TaskProvider';

function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = () =>
    axios
      .get(API_URL)
      .then((resp) => setTodos(resp.data))
      .catch((err) => console.log('ERROR'));

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <Router>
      <TaskProvider>
        <div className='App wrapper'>
          <header>
            <h1>TO DO APP REACT</h1>
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/todos'>Todos</Link>
            </nav>
            <Form />
          </header>

          <main>
            <Routes>
              <Route path='/todos' element={<TaskContainer todos={todos} />} />
              <Route path='/' element={<Welcome />} />
            </Routes>
          </main>
        </div>
      </TaskProvider>
    </Router>
  );
}

export default App;
