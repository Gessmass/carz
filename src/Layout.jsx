import styled from '@emotion/styled';
import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <LayoutWrapper>
      <NavBar>
        <NavButtons>
          <Button><Link to='landingpage'>Landing Page</Link></Button>
          <Button><Link to='/page1'>Page 1</Link></Button>
          <Button><Link to='/page2'>Page 2</Link></Button>
        </NavButtons>
      </NavBar>
      <Outlet />
    </LayoutWrapper>
  );
};

const Button = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NavButtons = styled.ul`
  display: flex;
  height: 100%;
`

const LayoutWrapper = styled.div`
  border: 2px solid blue;
`;

const NavBar = styled.div`
  background-color: grey;
  height: 50px;
`;

