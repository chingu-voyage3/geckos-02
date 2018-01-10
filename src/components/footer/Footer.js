import React from 'react';
import styled from 'styled-components';

const FooterBar = styled.footer `
  background-color: #EEE;
  padding: 20px;
`
const Footer = () => (
  <FooterBar>
    <p>This is the footer!</p>
  </FooterBar>
);

export default Footer;