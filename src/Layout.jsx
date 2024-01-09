import styled from '@emotion/styled';
import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <LayoutWrapper>
      <NavBar>
        <ul>
          <li><Link to='/page1'>Page 1</Link></li>
          <li><Link to='/page2'>Page 2</Link></li>
        </ul>
      </NavBar>
      <Outlet />
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  border: 2px solid blue;
  background-color: grey;
  height: fit-content;
`;

const NavBar = styled.div`
  height: 50px;
`;
