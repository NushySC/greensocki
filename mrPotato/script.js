const bodyParts =
	'#top_hat, #moustache, #redhat, #curly-moustache, #eyes1, #lips, #toothy-lips, #toupe, #toothy, #big-ear-r, #big-ear-l, #shoes1, #lashed, #lash2, #lazy-eyes, #longbrown-moustache, #purplehat, #sm-ear-r, #sm-ear-l, #earring-r, #earring-l, #highheels, #greenhat, #shoes2, #blonde, #blond-mustache, #elf-r, #elf-l';
const bounds = document.getElementById('svg');

Draggable.create(bodyParts, {
	bounds: bounds,
	edgeResistance: 0.9,
});
