const squareBall = document.querySelector('.square-ball');

// OLD WAY
// TweenMax.to(squareBall, 1, {
// 	rotation: '360deg',
// 	borderRadius: '50%',
// 	repeat: -1,
// 	repeatDelay: 0.5,
// 	yoyo: true,
// 	scale: 0.7,
// });

gsap.to(squareBall, {
	rotation: '360deg',
	borderRadius: '50%',
	repeat: -1,
	duration: 1,
	repeatDelay: 1,
	yoyo: true,
	scale: 0.8,
});
