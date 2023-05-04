const dropdownMenu = document.querySelector('.dropdown');
dropdownMenu.addEventListener('click', (ev) => {
	if (dropdownMenu.contains(ev.target)) {
		dropdownMenu.classList.toggle('show');
	} else {
		dropdownMenu.classList.remove('show');
	}
});

document.addEventListener('click', (ev) => {
	if (!ev.target.closest('.dropdown')) {
		dropdownMenu.classList.remove('show');
	}
});
