import styled, { css, keyframes } from 'styled-components';
import { ReactComponent as Next } from '../../assets/icons/next.svg';
import { ReactComponent as Prev } from '../../assets/icons/prev.svg';

const arrow = css`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 48px;
	z-index: 2;
	user-select: none;
	cursor: pointer;
`;

const inAnimation = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

const outAnimation = keyframes`
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
`;

export const SliderContainer = styled.div`
	position: relative;
	height: 88vh;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

export const Slides = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const PrevArrow = styled(Prev)`
	${arrow}
	left: 1%;
`;

export const NextArrow = styled(Next)`
	${arrow}
	right: 1%;
`;

export const Slide = styled.img`
	position: absolute;
	height: 80vh;
	width: 80vw;
	border-radius: 20px;
	margin: 0px 10px;
	opacity: 0;
	animation: ${outAnimation} 250ms ease-in;
	
	&.active {
		animation: ${inAnimation} 250ms ease-in;
		opacity: 1;
	}
`;