import { useContext } from 'react';
import { TaskContext } from '../providers/TaskProvider';
const Task = ({ todo }) => {
  const { handleEdit, handleDelete, handleComplete } = useContext(TaskContext);

  const editTodo = () => {
    handleEdit(todo);
  };

  const completeTodo = () => {
    handleComplete(todo);
  };

  const deleteTodo = () => {
    handleDelete(todo);
  };

  return (
    <li className={`task ${todo.isComplete ? 'isComplete' : ''}`}>
      <span className={'task-title'}>{todo.title}</span>
      <span className={'task-body'}>{todo.body}</span>
      <button onClick={editTodo} className={'edit-btn'}>
        {!todo.editing ? 'Edit' : 'Save'}
      </button>
      <button onClick={completeTodo} className={'complete-btn'}>
        Complete
      </button>
      <button onClick={deleteTodo} className={'delete-btn'}>
        Delete
      </button>
    </li>
  );
};

export default Task;
