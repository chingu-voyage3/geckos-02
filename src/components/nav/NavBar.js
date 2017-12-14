import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const OuterNav = styled.div `
  text-align: center;
  display:flex;
  justify-content: center;
`
const Ul = styled.ul `
  list-style: none;
  display: flex;
  
`

const Li = styled.li `
margin-right: 1em;
`


const NavBar = () => (
<OuterNav>
  <nav className="navbar"> 
    <a><Link to="/about">Association Logo</Link></a>
    <Ul>
      <Li><Link to="/about">About</Link></Li>
      <Li><Link to="/community">Community</Link></Li>
      <Li><Link to="/news">Ivy City News</Link></Li>
      <Li><Link to="/events">Events</Link></Li>
      <Li><Link to="/donate">Donate</Link></Li>
    </Ul>
  </nav>
</OuterNav>
);

export default NavBar;