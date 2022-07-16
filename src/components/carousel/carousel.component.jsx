import React from 'react';
import Slider from '../slider/slider.component';
import { CarouselContainer, Title } from './carousel.styles';

const Carousel = () => {
  return (
	<CarouselContainer>
		<Title>Carousel</Title>
		<Slider />
	</CarouselContainer>
  )
}

export default Carousel;