import styled from 'styled-components';
import { useAppDispatch } from '../../../hooks/hooks';
import { setRole } from '../../../redux/features/roleSlice';
import { flicker } from '../Form/Form';

const Dashboard = () => {
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <p>Select role</p>
      <Select>
        <Button onClick={() => dispatch(setRole('User'))}>USER</Button>
        <Button onClick={() => dispatch(setRole('Admin'))}>ADMIN</Button>
      </Select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  justify-content:center;
  align-items: center;
  color: var(--white);
  font-size: 35px;
  gap: 30px;
  margin-bottom: 50px;
`;

const Select = styled.div`
  display: flex;
  gap: 40px;
`;

const Button = styled.button`
  padding: 25px;
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  align-items: center;
  animation: ${flicker} 1.5s infinite alternate;
  &:hover {
    cursor: pointer;
    background-color: var(--main-color);
  }
`;

export default Dashboard;
