import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavLeft from '../carousel/NavLeft'
import NavRight from '../carousel/NavRight'
import NavToggle from '../carousel/NavToggle'
import CarouselSlide from '../carousel/CarouselSlide'
// import  from "react-bootstrap"


const CarouselWrapper = styled.div`
  position: relative;
  opacity: 1;
  transition: opacity 1s ease-in-out;
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
  position: absolute;
  width: 100vw;
  bottom: 5%;
  list-style-type: none;
`;

// Carousel wrapper component
class Carousel extends React.Component {
  static propTypes = {
    slides: PropTypes.array.isRequired,
  };

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

    }, console.log("this is the index ", index));
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
            <NavToggle
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

//     return(
//       <Carousel>
//   <Carousel.Item>
//     <img width={900} height={500} alt="900x500" src="/assets/carousel.png" />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img width={900} height={500} alt="900x500" src="/assets/carousel.png" />
//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img width={900} height={500} alt="900x500" src="/assets/carousel.png" />
//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
// );
  }
}

export default Carousel;
