import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { TodoT } from '../../../models/todo';
import { todosApi } from '../../../redux/features/apiSlice';
import { useLocation } from 'react-router-dom';

const Form = () => {
  //usage for adding and editing
  const pathname = window.location.pathname;
  const editMode = '/todos/edit';
  const addMode = '/todos/add';
  const location = useLocation();
  const state = location.state as TodoT;

  const [title, setTitle] = useState(
    pathname === editMode ? state.todo.title : ''
  );
  const [body, setBody] = useState(
    pathname === editMode ? state.todo.body : ''
  );
  const nav = useNavigate();

  const [addTodo, { isSuccess }] = todosApi.useAddTodoMutation();
  const [updateTodo] = todosApi.useUpdateTodoMutation();
  if (isSuccess) {
    nav('/todos');
  }

  const newTodo: TodoT = {
    id: `62d9459af23${Math.random().toString(16).slice(2)}`,
    title: title,
    body: body,
    isComplete: false,
    editing: false,
  };

  // SUBMIT TODO
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //ADD TO API
    pathname === addMode
      ? addTodo(newTodo)
      : updateTodo({ ...state.todo, title: title, body: body });
    setTitle('');
    setBody('');
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        name='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={'todo-title'}
        placeholder={'Title...'}
      />
      <Input
        name='body'
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className={'todo-body'}
        placeholder={'Body...'}
      />
      <AddBtn type='submit'>{pathname === addMode ? 'Add' : 'Save'}</AddBtn>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  padding: 15px;
  width: 50%;
`;

export const flicker = keyframes`
      
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    
      text-shadow:
          -0.2px -0.2px 1px #fff,
          0.2px 0.2px 1px #fff,
          0 0 2px var(--neon-text-color),
          0 0 4px var(--neon-text-color),
          0 0 6px var(--neon-text-color),
          0 0 8px var(--neon-text-color),
          0 0 10px var(--neon-text-color);
      
      box-shadow:
          0 0 .5px #fff,
          inset 0 0 .5px #fff,
          0 0 2px var(--shadow-color),
          inset 0 0 2px var(--shadow-color),
          0 0 4px var(--shadow-color),
          inset 0 0 4px var(--shadow-color);        
  }
  
  20%, 24%, 55% {        
      text-shadow: none;
      box-shadow: none;
  }    
`;

const AddBtn = styled.button`
  background-color: #000;
  color: #fff;
  font-weight: 200;
  font-style: italic;
  border: 1 solid #fff;
  text-transform: uppercase;
  border-radius: 5px;
  animation: ${flicker} 1.5s infinite alternate;
  padding: 10px;
  width: 15%;

  &:hover {
    cursor: pointer;
    background-color: var(--main-color);
    color: var(--neon-text-color);
  }
`;

export default Form;
