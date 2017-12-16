import React from 'react';
import styled from 'styled-components';

const SlideToggle = styled.button`
  display: block;
  width: 15px;
  height: 15px;
  margin: 5px;
  border-radius: 50%;
  border: 1px solid transparent;
  outline: none;
  background-color: ${props => props.isActive ? '#00c2bb' : 'rgba(255,255,255,0.5)'};
  cursor: pointer;
  transition: 0.3s;
`;

class NavToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: true };
  }

  render() {
    return (
      <li>
        <SlideToggle isActive onClick={this.props.onClick} />
      </li>
    );
  }
}

export default NavToggle;
