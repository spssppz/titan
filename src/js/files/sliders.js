/* Документация слайдера: https://swiperjs.com/ */

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, EffectFade, Lazy, Manipulation
*/

function initSliders() {
	if (document.querySelector('.tariffs__slider')) {
		new Swiper('.tariffs__slider', {
			modules: [Pagination],
			spaceBetween: 20,
			slidesPerView: 1,
			speed: 800,
			pagination: {
				el: '.tariffs__pagination',
				clickable: true,
			}
		})
	}
	if (document.querySelector('.reviews__slider')) {
		new Swiper('.reviews__slider', {
			modules: [Navigation],
			spaceBetween: 20,
			speed: 800,
			navigation: {
				prevEl: '.reviews__slider-btn_prev',
				nextEl: '.reviews__slider-btn_next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1596: {
					slidesPerView: 4,
				},
			},

		})
	}
	if (document.querySelector('.certificates__slider')) {
		new Swiper('.certificates__slider', {
			modules: [Navigation],

			speed: 800,

			navigation: {
				prevEl: '.certificates__slider-btn_prev',
				nextEl: '.certificates__slider-btn_next',
			},

			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 32,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 90,
				},
				1596: {
					slidesPerView: 4,
					spaceBetween: 90,
				},
			},

		})
	}
}

window.addEventListener("load", () => initSliders())