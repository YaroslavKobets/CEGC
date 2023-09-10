import Swiper from 'swiper/bundle';

const initCardSlider = () => {
	const cardSliders = document.querySelectorAll('.card-swiper')
	cardSliders.forEach(slider => {
		if (slider) {
			const swiper = new Swiper(slider, {

				speed: 800,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				breakpoints: {
					0: {
						slidesPerView: 1.1,
						spaceBetween: 15,
					},
					375: {
						slidesPerView: 1.4,
						spaceBetween: 20,
					},
					481: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1201: {
						slidesPerView: 4,
						spaceBetween: 42,
					},
				},
			})
			if (slider.querySelectorAll('.swiper-slide').length <= 4) {
				slider.querySelector('.swiper-navigation').remove()
			}
		}
	})
}

const initHomeReviewsSlider = () => {
	const homeReviewsSliders = document.querySelectorAll('.home-reviews-swiper')
	homeReviewsSliders.forEach(slider => {
		if (slider) {
			const swiper = new Swiper(slider, {
				speed: 800,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				breakpoints: {
					1025: {
						slidesPerView: 1.5,
						spaceBetween: 15,
					},
					1201: {
						slidesPerView: 2,
						spaceBetween: 15,
					},
					1401: {
						slidesPerView: 2,
						spaceBetween: 35,
					},
				},
			})
		}
	})
}

const initIntroSlider = () => {
	const homeReviewsSliders = document.querySelectorAll('.intro-swiper')
	homeReviewsSliders.forEach(slider => {
		if (slider) {
			const swiper = new Swiper(slider, {
				speed: 1300,

				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			})
		}
	})
}

const initPersonSlider = () => {
	const personInfoSliders = document.querySelectorAll('.person-info-slider-swiper')
	personInfoSliders.forEach(slider => {
		if (slider) {
			const swiper = new Swiper(slider, {
				speed: 800,
				breakpoints: {
					0: {
						slidesPerView: 1.6,
						spaceBetween: 15,
					},
					375: {
						slidesPerView: 2.2,
						spaceBetween: 15,
					},
					481: {
						slidesPerView: 3.3,
						spaceBetween: 20,
					},
					789: {
						slidesPerView: 2.3,
						spaceBetween: 15,
					},
					1025: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1201: {
						slidesPerView: 3.5,
						spaceBetween: 3,
					},
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			})
		}
	})
}

const initTricker = () => {
	if (document.querySelector('.tricker-swiper')) {
		const swiperTricker = new Swiper('.tricker-swiper', {
			slidesPerView: 'auto',
			centeredSlides: true,
			speed: 20000,
			loop: true,
			allowTouchMove: false,
			autoplay: {
				delay: 0,
				disableOnInteraction: false,
			}
		});
	}
}

const initPhotoSlider = () => {
	const photoSliderWrapper = document.querySelectorAll('.photo-content__item')
	photoSliderWrapper.forEach(slider => {
		const mainSlider = slider.querySelector('.photo-main-slider')
		if (mainSlider) {
			const minSlider = slider.querySelector('.photo-min-slider')
			let swiper1 = new Swiper(minSlider, {
				speed: 800,
				watchSlidesProgress: true,
				// freeMode: true,
				observer: true,
				observerParents: true,
				observerSlideChildren: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				breakpoints: {
					0: {
						slidesPerView: 2.2,
					},
					481: {
						spaceBetween: 10,

					},
					768: {
						slidesPerView: 'auto',
						direction: 'horizontal',
					},
					1201: {
						direction: 'vertical',
						spaceBetween: 20,
					},
				},
			})
			let swiper2 = new Swiper(mainSlider, {
				direction: 'horizontal',
				speed: 800,
				grabCursor: true,
				thumbs: {
					swiper: swiper1,
				},
			})

		}
	})
}
const initPostSlider = () => {
	const photoSliderWrapper = document.querySelectorAll('.post-content__gallery')
	photoSliderWrapper.forEach(slider => {
		const mainSlider = slider.querySelector('.post-main-slider')
		if (mainSlider) {
			const minSlider = slider.querySelector('.post-min-slider')
			let swiper1 = new Swiper(minSlider, {
				speed: 800,
				watchSlidesProgress: true,
				spaceBetween: 15,
				slidesPerView: 'auto',
			})
			let swiper2 = new Swiper(mainSlider, {
				speed: 800,
				grabCursor: true,
				slidesPerView: 'auto',
				thumbs: {
					swiper: swiper1,
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			})

		}
	})
}
export const initSliders = () => {
	initCardSlider()
	initHomeReviewsSlider()
	initIntroSlider()
	initTricker()
	initPersonSlider()
	initPhotoSlider()
	initPostSlider()
}
