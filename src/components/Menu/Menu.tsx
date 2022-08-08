import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks/hooks';

const Menu = () => {
  const role = useAppSelector((state) => state.roleReducer.role);

  return (
    <Wrap>
      <Links>
        <Link to='/'>Home</Link>
        <Link to='/todos'>Todos</Link>
        <Link to='/todos/add'>Add todo</Link>
      </Links>
      <Role>Role: {role} </Role>
      <Outlet />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5vh;
  border-bottom: 1px solid white;
`;

const Links = styled.div``;

const Link = styled(NavLink)`
  margin: 0 25px;
  color: var(--white);
  text-decoration: none;
`;

const Role = styled.span`
  margin: 0 25px;
  color: var(--white);
`;

export default Menu;
