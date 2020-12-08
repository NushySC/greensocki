const sliderItems = document.querySelectorAll('.slider__item');
const btnNext = document.querySelector('.slider__arrows--right');
const btnBack = document.querySelector('.slider__arrows--left');

const slider = {
	currentItem: 0,
	init: () => {
		slider.in(slider.currentItem);
	},
	in: (index) => {
		const sliderItem = sliderItems[index];
		const texts = sliderItem.querySelectorAll('p');
		// gsap.set(sliderItems[0], {scale: 0.3});
		gsap.set(sliderItem, {scale: 0.3});
		gsap.set(sliderItem, {left: '-100vw'});

		const timeline = gsap.timeline();
		timeline
			.to(sliderItem, 0.5, {
				left: 0,
				delay: 0.5,
				scale: 1,
			})
			.from(texts, 1, {
				autoAlpha: 0,
				ease: Back.easeOut,
				stagger: {
					y: 300,
					each: 0.3,
				},
			});
	},
	out: (index, nextIndex) => {
		const sliderItem = sliderItems[index];
		const texts = sliderItem.querySelectorAll('p');
		const timelineOut = gsap.timeline();
		timelineOut
			.to(sliderItem, 0.5, {
				left: '100vw',
				delay: 0.5,
				scale: 0.3,
				opacity: 0,
			})
			.to(texts, 1, {
				autoAlpha: 0,
				ease: Back.easeIn,
				stagger: {
					y: -300,
					each: 0.3,
				},
			})
			.call(slider.in, [nextIndex], this, '-=1.5')
			.set(texts, {clearProps: 'all'});
	},
	next: () => {
		const next =
			slider.currentItem !== sliderItems.length - 1
				? slider.currentItem + 1
				: 0;
		slider.out(slider.currentItem, next);
		slider.currentItem = next;
		console.log(currentItem, next);
	},
	back: () => {
		const back =
			slider.currentItem > 0
				? slider.currentItem - 1
				: sliderItems.length - 1;

		slider.out(slider.currentItem, back);
		slider.currentItem = back;

		console.log(back);
	},
};

// slider.in(0);

// Events
btnNext.addEventListener('click', slider.next);
btnBack.addEventListener('click', slider.back);

slider.init();
