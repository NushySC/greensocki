const background = document.getElementById('background');
const rightFlag = document.getElementById('right-flag');
const leftFlag = document.getElementById('left-flag');
const rightVuvuzela = document.getElementById('right-vuvuzela');
// const rightVuvuzelaBranca = document.getElementById('right-vuvuzela--branca');
// const rightVuvuzelaAzul = document.getElementById('right-vuvuzela--azul');
// const rightVuvuzelaVermelha = document.getElementById(
// 	'right-vuvuzela--vermelha'
// );

const leftVuvuzela = document.getElementById('left-vuvuzela');
const trophy = document.getElementById('trophy');
const title = document.querySelectorAll('#title g');
const restartButton = document.getElementById('restart');

const show = {scale: 0, opacity: 0};
const alignCenterBottom = {transformOrigin: 'center bottom'};
const alignLeftBottom = {transformOrigin: 'left bottom'};
const alignRightBottom = {transformOrigin: 'right bottom'};

// const tlVuRight = gsap.timeline();

// tlVuRight
// 	.from(rightVuvuzelaAzul, 0.5, {scale: 0, transformOrigin: 'center bottom'})
// 	.from(rightVuvuzelaVermelha, 0.5, {
// 		scale: 0,
// 		transformOrigin: 'center bottom',
// 	})
// 	.from(rightVuvuzelaBranca, 0.5, {
// 		scale: 0,
// 		transformOrigin: 'center bottom',
// 	});

const tl = gsap.timeline();

tl.from(title, 1, {opacity: 0, y: 50, stagger: {each: 0.06}})
	// OLD WAY staggerFrom(title, 0.5, {opacity: 0, y: 50}, -0.05)
	.from(trophy, 0.5, {...show, ...alignCenterBottom})
	.add('vuvuzela', '-=0.2')
	.from(rightVuvuzela, 0.3, {...show, ...alignLeftBottom}, 'vuvuzela')
	//Add label to control when items appear related to others.
	.from(leftVuvuzela, 0.3, {...show, ...alignRightBottom}, 'vuvuzela')
	.from(background, 0.5, {...show, ...alignCenterBottom}, 'vuvuzela')
	.from(
		rightFlag,
		0.4,
		{...show, rotation: '-90deg', ...alignLeftBottom},
		'vuvuzela+=0.2'
	)
	.from(
		leftFlag,
		0.4,
		{...show, rotation: '90deg', ...alignRightBottom},
		'vuvuzela+=0.2'
	)
	.from(restartButton, 0.3, {...show})
	.to(background, 1, {
		opacity: 0.4,
		scale: 0.85,
		...alignCenterBottom,
		repeat: -1,
		yoyo: true,
	});

restartButton.addEventListener('click', () => {
	tl.restart();
});
