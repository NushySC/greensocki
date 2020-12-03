const money = document.getElementById('money');

// Old Way
// TweenMax.from(money, 2, {
// 	scaleY: 0.8,
// 	transformOrigin: 'bottom center',
// 	ease: Power0.easeOut,
// 	repeat: -1,
// 	yoyo: true,
// });

gsap.from(money, 2, {
	scaleY: 0.8,
	scaleX: 1.2,
	transformOrigin: 'bottom center',
	ease: Power0.easeOut,
	repeat: -1,
	yoyo: true,
});

const stick = document.getElementById('stick');
const right = document.getElementById('right');
const left = document.getElementById('left');

// const tl = new TimelineMax({ repeat: -1, yoyo: true });
const tl = new gsap.timeline({repeat: -1});

tl.from(stick, 2, {transformOrigin: 'center center', rotation: 25}, 'first')
	.from(left, 2, {y: '-100px'}, 'first')
	.from(right, 2, {y: '100px'}, 'first')

	.to(stick, 2, {transformOrigin: 'center center', rotation: 25}, 'second')
	.to(left, 2, {y: '-100px'}, 'second')
	.to(right, 2, {y: '100px'}, 'second');

const wheel1 = document.getElementById('wheel-1');
const wheel2 = document.getElementById('wheel-2');
const wheel3 = document.getElementById('wheel-3');

gsap.to([wheel1, wheel2, wheel3], 2, {
	transformOrigin: 'center center',
	rotation: 360,
	ease: Power0.easeOut,
	repeat: -1,
});
