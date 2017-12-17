import React from 'react';

class CarouselToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: true };
  }

  render() {
    return (
      <li>
        <button className={this.props.index === this.props.activeIndex ? "carousel-toggle carousel-toggle-active" : "carousel-toggle"} onClick={this.props.onClick} />
      </li>
    );
  }
}

export default CarouselToggle;
