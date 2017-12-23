import React from 'react';
import Carousel from '../carousel/Carousel';
import CarouselData from '../carousel/CarouselData';

const AboutPage = () => (
  <div>
    <Carousel slides={CarouselData} />
    <h1>About Page</h1>
    <p>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;</p>
  </div>
);

export default AboutPage;
