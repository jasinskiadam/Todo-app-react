import { createContext, useState } from 'react';
import axios from 'axios';
import { useRequest } from '../hooks/useRequest';
export const TaskContext = createContext({
  title: '',
  body: '',
  todos: [],
  BASE_URL: '',
  setTitle: () => {},
  setBody: () => {},
  setTodos: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  handleComplete: () => {},
});

export const TaskProvider = ({ children }) => {
  const BASE_URL =
    'http://nestapi-env.eba-9kgvuxij.eu-central-1.elasticbeanstalk.com/todos';

  const {state} = useRequest(BASE_URL);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [todos, setTodos] = useState([]);

  console.log(`state`, state)
  // GET TODOS

  // const getTodos = () =>
  //   axios
  //     .get(BASE_URL)
  //     .then((resp) => setTodos(resp.data))
  //     .catch((err) => console.log('ERROR'));

  // useEffect(() => {
  //   getTodos();
  // }, []);

  // // ADD TODO
  // const handleAdd = (data) => {
  //   setTodos([...todos, data]);
  //   axios.post(`${BASE_URL}`, data);
  // };

  // DELETE TODO
  const handleDelete = (todo) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
    axios.delete(`${BASE_URL}/${todo.id}`);
  };

  // COMPLETE TODO
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        const data = {
          ...item,
          isComplete: !item.isComplete,
        };

        if (item.id === todo.id) {
          axios
            .put(`${BASE_URL}/${item.id}`, data)
            .catch((err) => console.log('PUT error'));
          return data;
        }

        return item;
      })
    );
  };

  // UPDATE TODO
  const updateTodo = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          setTitle(item.title);
          setBody(item.body);
          return {
            ...item,
            title: item.title,
            body: item.body,
            editing: !item.editing,
          };
        }
        return item;
      })
    );
  };

  // SAVE UPDATED TODO

  const saveTodo = (todo) => {
    setTodos(
      todos.map((item) => {
        let data = {
          ...item,
          editing: !item.editing,
          title: title,
          body: body,
        };

        if (item.editing) {
          setTitle('');
          setBody('');

          axios
            .put(`${BASE_URL}/${todo.id}`, data)
            .catch((err) => console.log('PUT error'));
          return data;
        }

        return item;
      })
    );
  };

  // EDIT TODO

  const handleEdit = (todo) => {
    const findTodo = todos.find((item) => item.id === todo.id);
    setTodos({ ...findTodo, editing: !findTodo.editing });
    findTodo.editing ? saveTodo(todo) : updateTodo(todo);
  };

  return (
    <TaskContext.Provider
      value={{
        state,
        todos,
        setTodos,
        title,
        body,
        setTitle,
        setBody,
        BASE_URL,
        handleEdit,
        handleDelete,
        handleComplete,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
