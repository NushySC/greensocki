const balloon = document.getElementById('balloon-innards');
const pieces = document.querySelectorAll('.piece');

gsap.to(balloon, 4, {
	y: 60,
	repeat: -1,
	yoyo: true,
	ease: Power1.easeInOut,
});

gsap.to(pieces, {
	ease: Elastic.easeInOut,
	x: 'random([400, 600, 300, 100 ])',
	y: 'random([50, 100, -50, -100])',
	stagger: {
		each: 0.1,
		ease: Circ.easeIn,
	},
});

Draggable.create(pieces);
