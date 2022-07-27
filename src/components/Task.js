import axios from 'axios';
import { useContext } from 'react';
import { API_URL } from '../API';
import { TaskContext } from './TaskProvider';
const Task = ({ todo }) => {
  const { title, setTitle, body, setBody, todos, setTodos } =
    useContext(TaskContext);
  // Update Todo item

  const updateTodo = () => {
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

  // Save updated Todo item

  const saveTodo = () => {
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

          // PUT TODOS
          axios.put(`${API_URL}/${todo.id}`, data);
          return data;
        }

        return item;
      })
    );
  };

  // Handle edit

  const editHandler = () => {
    const findTodo = todos.find((item) => item.id === todo.id);
    setTodos({ ...findTodo, editing: !findTodo.editing });
    findTodo.editing ? saveTodo() : updateTodo();
  };

  // Handle complete

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        const data = {
          ...item,
          isComplete: !item.isComplete,
        };

        if (item.id === todo.id) {
          axios
            .put(`${API_URL}/${item.id}`, data)
            .catch((err) => console.log('error'));
          return data;
        }

        return item;
      })
    );
  };

  // Handle delete

  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));

    // DELETE TODOS
    axios.delete(`${API_URL}/${todo.id}`);
  };

  return (
    <li className={`task ${todo.isComplete ? 'isComplete' : ''}`}>
      <span className={'task-title'}>{todo.title}</span>
      <span className={'task-body'}>{todo.body}</span>
      <button onClick={editHandler} className={'edit-btn'}>
        {!todo.editing ? 'Edit' : 'Save'}
      </button>
      <button onClick={completeHandler} className={'complete-btn'}>
        Complete
      </button>
      <button onClick={deleteHandler} className={'delete-btn'}>
        Delete
      </button>
    </li>
  );
};

export default Task;
