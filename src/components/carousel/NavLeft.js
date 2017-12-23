import React from 'react';

class NavLeft extends React.Component {
  render() {
    return (
      <button className="nav-arrows" onClick={this.props.onClick}>
        <span className="nav-arrow">&lt;</span>
      </button>
    );
  }
}

export default NavLeft;
