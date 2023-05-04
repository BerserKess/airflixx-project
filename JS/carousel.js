const iconContainer = [...document.querySelectorAll('.icon-container')];
const prevBtn = [...document.querySelectorAll('.prev-btn')];
const nxtBtn = [...document.querySelectorAll('.next-btn')];

iconContainer.forEach((item, index) => {
	let containerDimension = item.getBoundingClientRect();
	let containerWidth = containerDimension.width;

	nxtBtn[index].addEventListener('click', () => {
		item.scrollLeft += containerWidth;
	});

	prevBtn[index].addEventListener('click', () => {
		item.scrollLeft -= containerWidth;
	});
});
