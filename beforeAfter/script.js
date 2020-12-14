const dragMe = document.getElementById('drag-me');
const container = document.querySelector('.before-after');
const viewAfter = document.querySelector('.view-after');

const updateImages = () => {
	gsap.set(viewAfter, {
		zIndex: 3,
		width: dragMe.style.left,
	});
};

const animateTo = (width) => {
	gsap.to(dragMe, 1, {
		left: width,
		onUpdate: updateImages,
	});
};
Draggable.create(dragMe, {
	type: 'left',
	bounds: container,
	onDrag: updateImages,
});
animateTo(300);
