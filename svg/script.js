const circle = document.querySelector('.circle');

// OLD WAY
// TweenMax.to(circle, 3, {
// 	strokeDashoffset: 0,
// 	ease: Sine.easeInOut,
// 	repeat: -1,
// 	yoyo: true,
// });

gsap.to(circle, 2, {
	strokeDashoffset: 2,
	ease: Sine.easeIn,
	repeat: -1,
	// yoyo: true,
});
