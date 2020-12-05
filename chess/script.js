const king = document.querySelectorAll('#king > *:not(#knightBg)');
const kingBg = document.getElementById('king-bg');
const queen = document.querySelectorAll('#queen > *:not(#queenBg)');
const queenBg = document.getElementById('queen-bg');
const bishop = document.querySelectorAll('#bishop > *:not(#bishopBg)');
const bishopBg = document.getElementById('bishop-bg');
const knight = document.querySelectorAll('#knight > *:not(#knightBg)');
const knightBg = document.getElementById('knight-bg');
const tower = document.querySelectorAll('#tower > *:not(#towerBg)');
const towerBg = document.getElementById('tower-bg');
const pawn = document.querySelectorAll('#pawn >  *:not(#pawnBg)');
const pawnBg = document.getElementById('pawn-bg');

gsap.set(kingBg, {
	opacity: 0,
});

gsap.from(king, 3, {
	scale: 0,
	y: 600,
	x: 1000,
	ease: Bounce.easeIn,
	stagger: {
		each: 1,
		from: 'edges',
		amount: 1,
		yoyo: true,
	},
});

gsap.from(queenBg, 3, {
	opacity: 0,
});

gsap.from(queen, 3, {
	scale: 0,
	y: -600,
	x: 1000,
	ease: Bounce.easeIn,
	stagger: {
		each: 1,
		from: 'edges',
		amount: 1,
		yoyo: true,
	},
});
gsap.set(bishopBg, {
	opacity: 0,
});

gsap.from(bishop, 3, {
	scale: 0,
	y: 300,
	x: 800,
	ease: Bounce.easeIn,
	stagger: {
		each: 1,
		from: 'edges',
		amount: 1,
		yoyo: true,
	},
});

gsap.set(knightBg, {
	opacity: 0,
});

gsap.from(knight, 3, {
	scale: 2,
	y: -900,
	ease: true,
	stagger: {
		each: 0.1,
		opacity: 1,
	},
});

gsap.set(towerBg, {
	opacity: 0,
});

gsap.from(tower, 3, {
	scale: 1,
	opacity: 0,

	stagger: {
		from: 'random',
		ease: Elastic.easeInOut,
		amount: 2,
		each: 0.5,
	},
});

gsap.set(pawnBg, {
	opacity: 0,
});

gsap.from(pawn, 3, {
	scale: 1,
	opacity: 0,
	stagger: {
		from: 'random',
		ease: Elastic.easeInOut,
		amount: 2,
		each: 0.5,
	},
});
