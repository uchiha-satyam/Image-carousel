import React, {useState} from 'react';
import Images from './slider.images';
import { SliderContainer, NextArrow, PrevArrow, Slide, Slides } from './slider.styles';

const Slider = () => {
	const [slide, setSlide] = useState(5);
	const length = Images.length;

	const prevSlide = () => {
		setSlide(slide === 0 ? length - 1 : slide - 1);
	}

	const nextSlide = () => {
		setSlide((slide + 1)%length);
	}

	return (
		<SliderContainer>
			<PrevArrow onClick={prevSlide} />
			<Slides>
				{
					// <Slide src={Images[slide]} id={slide} alt='' />
					Images.map((image, index) => (
						<Slide className={`${slide===index ? 'active' : null}`} src={image} id={index} alt='' />
					))
				}
			</Slides>
			<NextArrow onClick={nextSlide} />
		</SliderContainer>
	)
}

export default Slider