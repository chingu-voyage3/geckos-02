import React from 'react';
import styled from 'styled-components';

const CarouselSlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-height: calc(100vh - 3em);
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
  font-family: arial, sans-serif;
  font-size: ${(props) => props.desc ? '1.5em' : '3em'};
  color: ${(props) => props.desc ? '#C4C4C4' : '#FFF'};
  margin: 10px;

  @media (max-width: 768px) {
    font-size: ${(props) => props.desc ? '1em' : '1.5em'};
  }

  @media (max-width: 470px) {
      display: ${(props) => props.desc ? 'none' : 'block'};
    }
`;

const CarouselLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #FFF;
  padding: 10px;
  margin-top: 5%;
  margin-left: 10px;
  border: 1px solid #00c2bb;
  border-radius: 3px;
  background: #00c2bb;
  font-family: arial, sans-serif;
  font-size: 1em;
  transition: 0.3s;

  &:hover {
    background: #fff;
    border: 1px solid transparent;
    color: #00c2bb;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    margin-top: 0;
    padding: 5px;
  }

  @media (max-width: 376px) {
    font-size: 0.5em;
  }
`;

class CarouselSlide extends React.Component {
  render() {
    return (
      <li className={this.props.index === this.props.activeIndex ? "current-slide current-slide-active" : "current-slide"}>
        <CarouselSlideContainer>
          <CarouselImg src={this.props.slide.img} />
          <CarouselContentContainer>
            <CarouselContentText>{this.props.slide.info}</CarouselContentText>
            <CarouselContentText desc>{this.props.slide.description}</CarouselContentText>
              <CarouselLink href={this.props.slide.link}>
                {this.props.slide.linktag}
              </CarouselLink>
          </CarouselContentContainer>
        </CarouselSlideContainer>
      </li>
    );
  }
}

export default CarouselSlide;
