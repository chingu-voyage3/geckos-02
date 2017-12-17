import React from 'react';
import styled from 'styled-components';
import NavLeft from '../carousel/NavLeft'
import NavRight from '../carousel/NavRight'
import CarouselToggle from '../carousel/CarouselToggle'
import CarouselSlide from '../carousel/CarouselSlide'
import '../../styles/Carousel.css';

const CarouselWrapper = styled.div`
  position: relative;
  opacity: 1;
  transition: opacity 1s ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
`;

const CarouselSlideBox = styled.ul`
  padding: 0;
  margin: 0;
`

const SlideToggleWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  margin: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5%;
  list-style-type: none;
`;

// Carousel wrapper component
class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    const { slides } = this.props;
    const slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    index -= 1;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    const { slides } = this.props;
    const slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    index += 1;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <CarouselWrapper>
        <NavLeft onClick={e => this.goToPrevSlide(e)} />
        <CarouselSlideBox>
          {this.props.slides.map((slide, index) => (
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          ))}
        </CarouselSlideBox>
        <NavRight onClick={e => this.goToNextSlide(e)} />

        <SlideToggleWrapper>
          {this.props.slides.map((slide, index) => (
            <CarouselToggle
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              isActive={this.state.activeIndex === index}
              onClick={e => this.goToSlide(index)}
            />
          ))}
        </SlideToggleWrapper>
      </CarouselWrapper>
    );
  }
}

export default Carousel;
