import React from 'react';
import styled from 'styled-components';

const NavArrows = styled.button `
  height: 100%;
  width: 10%;
  position: absolute;
  top: 50%;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  transform: translateY(-50%);
  transition: 0.3s;
  background: transparent;
  border: 1px solid cyan;
  outline: none;
  z-index: 1;
`;

class NavLeft extends React.Component {
  render() {
    return (
      <NavArrows onClick={this.props.onClick}>
        <span className="fa fa-2x fa-angle-left" />
      </NavArrows>
    );
  }
}

export default NavLeft;
