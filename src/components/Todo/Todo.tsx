import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks/hooks';
import { TodoT } from '../../models/todo';
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from '../../redux/features/apiSlice';
const Todo = ({ todo }: { todo: TodoT }) => {
  const role = useAppSelector((state) => state.roleReducer.role);
  const nav = useNavigate();
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const handleEdit = () => {
    nav('/todos/edit', { state: { todo } });
  };

  const handleComplete = () => {
    updateTodo({ ...todo, isComplete: !todo.isComplete });
  };

  const handleDelete = () => {
    role === 'Admin' ? deleteTodo(todo) : alert('Admin mode required!');
  };

  return (
    <StyledTodo className={` ${todo.isComplete ? 'isComplete' : ''}`}>
      <Title>{todo.title}</Title>
      <span>{todo.body}</span>
      <Button onClick={handleEdit}>Edit</Button>
      <Button onClick={handleComplete}>Complete</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </StyledTodo>
  );
};

const Title = styled.span`
  font-weight: 900;
`;

const StyledTodo = styled.li`
  display: grid;
  grid-template-columns: 12% 55% 9% 10% 9%;
  align-items: center;
  gap: 10px;
  list-style: none;
  margin: 5px;
  padding: 20px;
  border-radius: 5px;
  background-color: var(--white);
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  padding: 5px;

  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #000;
  }
`;

export default Todo;
