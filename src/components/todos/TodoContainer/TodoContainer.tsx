import styled from 'styled-components';
import { useAppSelector } from '../../../hooks/hooks';
import { useGetTodosQuery } from '../../../redux/features/apiSlice';
import Todo from '../Todo/Todo';

const TodoContainer = () => {
  //const todos = useAppSelector((state) => state.todosReducer.todos);

  const { data, error, isLoading, isFetching, isSuccess } = useGetTodosQuery(null, {refetchOnMountOrArgChange: 1});

  return (
    <Wrapper>
      {isLoading && <Text>Loading...</Text>}
      {isFetching && <Text>Fetching...</Text>}
      {error && <Text>ERROR</Text>}
      {isSuccess && (
        <>
          {data.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 50vh;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--white);
  }
`;
const Text = styled.h2`
  color: red;
`;

export default TodoContainer;
