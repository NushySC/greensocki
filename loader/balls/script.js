// staggerFromTo(target, time, { from }, { to }, staggerTime); old

const balls = document.querySelectorAll('.ball');

// SIMPLE STAGGER, 1 SEC Animation, 0.3 BETWEEN EACH ITEM
// gsap.to(balls, {
// 	duration: 1,
// 	scale: 0.1,
// 	ease: 'ease',
// 	repeat: -1,
// 	stagger: 0.3,
// });

//COMPLEX STAGGER, 1 SEC Animation, 0.3 BETWEEN EACH ITEM
// gsap.to(balls, {
// 	duration: 1,
// 	scale: 0.1,
// 	ease: 'ease',
// 	repeat: -1,
// 	stagger: {
// 		each: 0.3,
// 		from: 2, // index 0...
// 	},
// });

gsap.to(
	balls,
	1,
	{
		scale: 0.1,
		opacity: 0,
		stagger: {
			each: 0.3,
			repeat: -1,
			yoyo: true,
		},
	},

	0.2
);
