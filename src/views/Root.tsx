import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/todos/Header/Header';
import Menu from '../components/todos/Menu/Menu';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';
import Home from './Home';
import Todo from './Todos';

function Root() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todos' element={<Todo />} />
          <Route path='/todos/add' element={<AddTodo />} />
          <Route path='/todos/edit' element={<EditTodo />} />
        </Routes>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 90vh;
  width: 80vw;
  display: grid;
  grid-template-rows: 1fr 1fr 8fr;
  justify-content: center;
  background-color: var(--secondary-color);
  border-radius: 25px;
  overflow: hidden;
`;

export default Root;
