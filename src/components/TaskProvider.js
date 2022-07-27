import { createContext, useState } from 'react';
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

  return (
    <TaskContext.Provider
      value={{ todos, setTodos, title, body, setTitle, setBody }}
    >
      {children}
    </TaskContext.Provider>
  );
};
