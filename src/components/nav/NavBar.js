import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../styles/NavBar.css';

const OuterNav = styled.div `
  text-align: center;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Ul = styled.ul `
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
`;

const Li = styled.li`
  padding: 1em 0;
  height: 100%;

  > a {
    padding: 1em;
    text-decoration: none;
    color: #f2f2f2;

    &:hover {
      background-color: #00c2bb;
    }
  }
`;

const Logo = styled.a`
  > a {
    text-decoration: none;
    color: #00c2bb;

    &:hover {
      color: #f2f2f2;
    }
  }
`

const NavBar = () => (
  <div>
    <OuterNav>
      <nav className="navbar">
        <Logo><Link to="/about">Neighborhood Association</Link></Logo>
        <Ul>
          <Li><Link to="/about">About</Link></Li>
          <Li><Link to="/community">Community</Link></Li>
          <Li><Link to="/news">Ivy City News</Link></Li>
          <Li><Link to="/events">Events</Link></Li>
          <Li><Link to="/donate">Donate</Link></Li>
        </Ul>
      </nav>
    </OuterNav>
  </div>
);

export default NavBar;
