const item = document.querySelectorAll('.item');

const bounds = document.querySelector('.gallery');

//* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/Draggable.min.js"></script>; Just add this to make the items draggable.

Draggable.create(item, {
	//block direction axis --- 	type: 'x / y / rotation' (IE top / left),
	type: 'x, y',
	bounds: bounds,
	// From 0 to 1
	edgeResistance: 0.5,
	dragResistance: 0.4,
});

Draggable.create(item, {
	onDragStart: () => {
		console.log('Vai');
	},
	onDrag: () => {
		console.log('Está a acontecer');
	},

	onDragEndParams: ['O drag terminou', 5],

	onDragEnd: (message, number) => {
		console.log(message, number, this);
	},

	onClick: () => {
		console.log('Cliquei!');
	},
});
