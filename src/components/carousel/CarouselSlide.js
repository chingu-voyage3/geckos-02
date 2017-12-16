import React from 'react';
import styled from 'styled-components';

const CarouselSlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-height: 100vh;
  background-color: #FFF;
  overflow: hidden;
  z-index: 1;
`;

const CarouselImg = styled.img`
  max-width: 100%;
`;

const CarouselContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  position: absolute;
  width: 70%;
  padding: 5%;
  background: rgba(0,0,0,0.6);
`;

const CarouselContentText = styled.p`
  font-family: 'Roboto', arial, sans-serif;
  font-size: 1em;
  color: #FFF;
  margin: 10px;
`;

const CarouselLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #FFF;
  padding: 10px;
  margin-top: 5%;
  border: 1px solid #00c2bb;
  border-radius: 3px;
  background: #00c2bb;
  transition: 0.3s;

  &:hover {
    background: rgba(0,194,187,0.6);
    border: 1px solid transparent;
    color: #FFF;
    transition: 0.3s;
  }
`;

const CurrentSlide = styled.li`
  display: ${(props) => props.activeIndex ? 'block' : 'none'};
  margin: 0 auto;
  position: relative;
  width: 100vw;
  list-style-type: none;
  text-align: center;
 `;

class CarouselSlide extends React.Component {
  render() {
    return (
      <CurrentSlide activeIndex>
        <CarouselSlideContainer>
          <CarouselImg src={this.props.slide.img} />
          <CarouselContentContainer>
            <CarouselContentText>
                {this.props.slide.info}
            </CarouselContentText>
            <CarouselContentText>
              {this.props.slide.description}
            </CarouselContentText>
            <CarouselContentText>
              <CarouselLink href={this.props.slide.link}>
                {this.props.slide.link}
              </CarouselLink>
            </CarouselContentText>
          </CarouselContentContainer>
        </CarouselSlideContainer>
      </CurrentSlide>
    );
  }
}

export default CarouselSlide;
