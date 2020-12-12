const folders = document.querySelectorAll('.folder');
const trash = document.querySelector('.trash');
const emptyBtn = document.getElementById('empty');

// Check this
function deleteFolder() {
	if (this.hitTest(trash)) {
		gsap.to(this.target, 0.5, {
			opacity: 0,
			scale: 0,
		});

		trash.classList.add('is-full');
	}
}
Draggable.create(folders, {
	onDragEnd: deleteFolder,
});

emptyBtn.addEventListener('click', () => {
	trash.classList.remove('is-full');
});
