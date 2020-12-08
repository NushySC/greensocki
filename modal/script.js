// Modal Elements
const modal = document.querySelector('.modal');
const modalBox = document.querySelector('.modal__box');
const modalHeader = document.querySelector('.modal__header');
const modalTitle = document.querySelector('.modal__title');
const modalClose = document.querySelector('.modal__close');

// Buttons
const btnClose = document.querySelector('.modal__close');
const btnFadeIn = document.getElementById('fade-in');
const btnFadeInScale = document.getElementById('fade-in-scale');
const btnSlideIn = document.getElementById('slide-in');
const btnFullScreen = document.getElementById('fullscreen');

//Funtions
const fadeIn = () => {
	gsap.to(modal, 0.5, {autoAlpha: 1});
};

const close = () => {
	gsap.set([modal, modalClose, modalHeader, modalTitle, modalBox], {
		clearProps: 'all',
	});
	// gsap.to(modal, 0.5, {autoAlpha: 0});
	// gsap.set(modal, {clearProps: 'backgroundColor'});
	// gsap.set(modalHeader, {clearProps: 'position'});
	// gsap.set(modalTitle, {clearProps: 'backgroundColor'});
	// gsap.set(modalTitle, {clearProps: 'color'});
	// gsap.set(modalClose, {clearProps: 'color'});
};
const fadeInScale = () => {
	gsap.set(modalBox, {scale: 0});
	gsap.to(modal, 0.5, {autoAlpha: 1});
	gsap.to(modalBox, 1, {scale: 1, delay: 0.5, ease: Elastic.easeOut});
};
const slideIn = () => {
	gsap.from(modalBox, {scale: 0, y: -900});
	gsap.to(modal, 0.5, {autoAlpha: 1});
	gsap.to(modalBox, 1, {scale: 1, delay: 0.5, y: 0});
};
const fullScreen = () => {
	gsap.set(modal, {backgroundColor: '#fff', scale: 0});
	gsap.set(modalClose, {color: '#000'});
	gsap.set([modalHeader, modalBox], {position: 'initial'});
	gsap.set(modalTitle, {color: '#DE1E7E', backgroundColor: '#fff'});
	gsap.to(modal, 0.5, {autoAlpha: 1, scale: 1});
};

// Events
btnClose.addEventListener('click', close);
btnFadeIn.addEventListener('click', fadeIn);
btnFadeInScale.addEventListener('click', fadeInScale);
btnSlideIn.addEventListener('click', slideIn);
btnFullScreen.addEventListener('click', fullScreen);
