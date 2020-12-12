const drag = document.querySelector('.drag-interaction');
const price = document.querySelector('.price');

const minVal = 0;
const maxVal = 1000;
const minRotation = 0;
const maxRotation = 180;

const onDrag = () => {
	console.log(info);
	price.innerText = (
		info.rotation *
		(maxVal / maxRotation)
	).toLocaleString('es-ES', {style: 'currency', currency: 'EUR'});
};

Draggable.create(drag, {
	type: 'rotation',
	bounds: {
		minRotation: minRotation,
		maxRotation: maxRotation,
	},
	onDrag: onDrag,
});

const info = Draggable.get(drag);

onDrag();
