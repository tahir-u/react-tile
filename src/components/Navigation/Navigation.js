import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Wrapper>
      <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand" href="#">React Tile</div>
        <NavWrapper>
          <NavItem to="/editor">Tile Editor</NavItem>
          <NavItem to="/view">Composition Viewer</NavItem>
        </NavWrapper>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  margin-right: 8px;
`;

export default Navigation;