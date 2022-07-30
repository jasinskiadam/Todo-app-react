import React, { useContext } from 'react';
import { TaskContext } from '../providers/TodoProvider';

const Form = () => {
  const { title, body, handleAdd, handleInputChange, handleClearForm } =
    useContext(TaskContext);

  const newTodo = {
    id: `62d9459af23${Math.random().toString(16).slice(2)}`,
    title: title,
    body: body,
    isComplete: false,
    editing: false,
  };

  // SUBMIT TODO
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(newTodo);
    handleClearForm();
  };

  return (
    <form className='input-bar'>
      <input
        name='title'
        value={title}
        onChange={handleInputChange}
        className={'todo-title'}
        placeholder={'Title...'}
      />
      <input
        name='body'
        value={body}
        onChange={handleInputChange}
        className={'todo-body'}
        placeholder={'Body...'}
      />
      <button onClick={handleSubmit} className={'add-btn'}>
        Add
      </button>
    </form>
  );
};

export default Form;
