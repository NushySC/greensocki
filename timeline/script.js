const items = document.querySelectorAll('.item');
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const code = document.getElementById('code');

// buttons
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const resume = document.getElementById('resume');
const reverse = document.getElementById('reverse');
const restart = document.getElementById('restart');

const tl = gsap.timeline({paused: true});

tl.from(title, 0.5, {
	x: 500,
	opacity: 0,
});

tl.from(code, 0.5, {
	scale: 0,
	opacity: 0,
});
tl.from(
	items,
	// 0.5,
	{
		scale: 0,
		opacity: 0,
		stagger: {
			grid: [7, 15],
			from: 'center',
			amount: 1.5,
		},
	}
);

play.addEventListener('click', function () {
	tl.play();
	tl.timeScale(3);
});

pause.addEventListener('click', function () {
	tl.pause();
});

resume.addEventListener('click', function () {
	tl.resume();
});

reverse.addEventListener('click', function () {
	tl.reverse();
	tl.timeScale(1 / 5);
});

restart.addEventListener('click', function () {
	tl.restart();
});
