const liAbout = document.querySelectorAll('.about-wrapper li')
const titles = document.querySelectorAll('.about-wrapper em')

titles.forEach(title => {
	title.addEventListener('mouseover', () => {
		title.style.color = 'green'
		title.style.transition = ['all', '.3s']
	})
	title.addEventListener('mouseout', () => {
		title.style.color = '#fff'
		title.style.transition = ['all', '.3s']
	})
})

for (let y of liAbout) {
	y.addEventListener('mouseover', function () {
		y.style.color = 'red'
		y.style.transition = ['all', '.3s']
	})
	y.addEventListener('mouseout', function () {
		y.style.color = '#fff'
		y.style.transition = ['all', '.3s']
	})
}

new Swiper('.feedback-slider', {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 30,
	centeredSlides: true,
	speed: 1000,
	autoplay: false,
	navigation: {
		prevEl: ".feedback-slider-arrow-prev",
		nextEl: ".feedback-slider-arrow-next",
	},
})
