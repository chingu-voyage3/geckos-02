import React from 'react';

class NavRight extends React.Component {
  render() {
    return (
      <button className="nav-arrows nav-right" onClick={this.props.onClick}>
        <span className="nav-arrow">&gt;</span>
      </button>
    );
  }
}

export default NavRight;
