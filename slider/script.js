const drag = document.querySelector('.drag-interaction');
const price = document.querySelector('.price');

const minVal = 0;
const maxVal = 1000;
const minRotation = 0;
const maxRotation = 180;

const onDrag = () => {
	price.innerText = (
		Info.rotation *
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

const Info = Draggable.get(drag);

onDrag();
