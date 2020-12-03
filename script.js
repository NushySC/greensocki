const items = document.querySelectorAll('.item');
// gsap.set(items, {
// 	x: 100,
// 	opacity: 0.5,
// });

const title = document.querySelector('.title');
// gsap.set(title, {
// 	color: '#000',
// 	x: -100,
// });
// gsap.to(title, 3, {
// 	opacity: 0,
// });

// gsap.from(items, 3, {
// 	y: 200,
// 	backgroundColor: '#06f',
// });
// gsap.to(title, 2, {
// 	x: -100,
// 	backgroundColor: '#ff2',
// 	scale: 0.5,
// 	opacity: 1,
// 	delay: 3,
// });
// gsap.fromTo(
// 	title,
// 	4,
// 	{
// 		x: 600,
// 		y: 600,
// 		opacity: 0,
// 		color: '#091',
// 	},
// 	{
// 		x: 0,
// 		y: 0,
// 		opacity: 1,
// 		color: '#018',
// 	}
// );

//  stagger works differetly. Before staggerTo, staggerFrom. Now easy way, complex way

// gsap.to(items, 2, {
// 	scale: 0,
// 	color: '#000',
// 	ease: Bounce.easeIn,
// 	stagger: {
// 		each: 1,
// 		from: 'edges',
// 		amount: 1,
// 	},
// });
// gsap.from(items, 2, {
// 	scale: 0,
// 	color: '#000',
// 	stagger: 1,
// });
// gsap.from(items, 3, {
// 	x: gsap.utils.wrap([-200, 500, 20]),
// 	y: gsap.utils.wrap([100, -100, 5]),
// 	opacity: gsap.utils.wrap([0, 1, 0]),

// 	stagger: 0.5,
// 	repeat: -1,
// 	yoyo: true,
// 	onStart: function () {
// 		console.log('I started');
// 	},
// 	onRepeat: function () {
// 		document.querySelector('.title').textContent = 'I changed';
// 	},
// });

const tl = gsap.timeline();

tl.from(title, 0.5, {
	x: 500,
});
tl.from(items, 0.5, {
	y: 500,
	opacity: 1,
});
tl.add('titleAppear', '+=1');
tl.from(
	title,
	0.5,
	{
		y: 500,
	},
	'+=1'
);
tl.to(
	title,
	0.5,
	{
		y: 500,
		opacity: 0,
	},
	'titleAppear'
);
