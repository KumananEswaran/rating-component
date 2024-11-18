const section = document.querySelector('.section');
const section2 = document.querySelector('.section-2');
const submitBtn = document.querySelector('.submit');

const rate = document.querySelector('.rate');
const rateBtn = document.querySelectorAll('.rate-btn');

submitBtn.addEventListener('click', function () {
	section.style.display = 'none';
	section2.style.display = 'flex';
});

rateBtn.forEach((rating) => {
	rating.addEventListener('click', function () {
		rate.innerText = rating.innerText;
	});
});
