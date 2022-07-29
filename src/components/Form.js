import React, { useContext } from 'react';
import { TaskContext } from '../providers/TaskProvider';
import { useForm } from '../hooks/useForm';
import { useTask } from '../hooks/useTask';

const initialFormState = {
  title: '',
  body: '',
};

const Form = () => {
  const { title, body, todos } = useContext(TaskContext);
  const { handleInputChange, handleClearForm } = useForm(initialFormState);
  const { handleAdd } = useTask(todos);

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
    console.log(`in submit todos: `, todos);
    handleClearForm(initialFormState);
  };

  return (
    <form className='input-bar'>
      <input
        name='Title'
        value={title}
        onChange={handleInputChange}
        className={'todo-title'}
        placeholder={'Title...'}
      />
      <input
        name='Body'
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
