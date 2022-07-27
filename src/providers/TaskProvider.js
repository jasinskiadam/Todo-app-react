import { createContext, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../API';
import { useEffect } from 'react';
export const TaskContext = createContext({
  title: '',
  body: '',
  todos: [],
  setTitle: () => {},
  setBody: () => {},
  setTodos: () => {},
});

export const TaskProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
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
    <TaskContext.Provider
      value={{ todos, setTodos, title, body, setTitle, setBody }}
    >
      {children}
    </TaskContext.Provider>
  );
};
