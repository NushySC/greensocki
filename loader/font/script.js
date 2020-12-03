const load = document.querySelector('.load');

//Old Way TweenMax.to(load, 2, {
// 	strokeDashoffset: 0,
// 	ease: Sine.easeInOut,
// 	repeat: -1,
// });

gsap.to(load, 3, {
	strokeDashoffset: 0,
	ease: Sine.easeInOut,
	repeat: -1,
	yoyo: true,
});
