"use strict";



import * as devFunctions from "./modules/functions.js";

//  init Fancybox
if (typeof Fancybox !== "undefined" && Fancybox !== null) {
    Fancybox.bind("[data-fancybox]", {
        dragToClose: false,
        closeButton: false
    });
}


document.addEventListener("DOMContentLoaded", () => {

    devFunctions.isWebp();
    devFunctions.OS();
    // devFunctions.spollers();
    devFunctions.mask();
    devFunctions.beforeSlider()



    /* event handlers */
    document.addEventListener("click", (e) => {

        const target = e.target;

        if (target.matches('.search__btn')) {
            document.querySelector('.search').classList.add('active');
            setTimeout(() => {
                document.querySelector('.search__form-input')?.focus()
            }, 300)
        }

        if (!target.closest('.search') && document.querySelector('.search').classList.contains('active')) {
            document.querySelector('.search').classList.remove('active');
        }


    });





    document.querySelector('.search')?.addEventListener('reset', (e) => {
        document.querySelector('.search__form-reset').classList.remove('active');
    });

    document.querySelector('.search__form-input')?.addEventListener('input', (e) => {
        if (e.target.value.length > 0) {
            document.querySelector('.search__form-reset').classList.add('active');
        } else {
            document.querySelector('.search__form-reset').classList.remove('active');
        }
    });



    // sliders

    if (document.querySelector('.benefits__slider')) {
        getMobileSlider('.benefits__slider', {
            slidesPerView: 1,
            spaceBetween: 27,
            watchSlidesProgress: true,
            pagination: {
                el: '.benefits__pagination',
                clickable: true,
            },
        })
    }

    if (document.querySelector('.gallery__slider')) {
        new Swiper('.gallery__slider .swiper', {
            slidesPerView: 1,
            spaceBetween: 27,
            watchSlidesProgress: true,
            navigation: {
                nextEl: ".gallery__next",
                prevEl: ".gallery__prev",
            }
        })
    }

    if (document.querySelector('.specialists__carousel')) {

        new Swiper('.specialists__carousel', {
            slidesPerView: 3,
            spaceBetween: 27,
            watchSlidesProgress: true,
            pagination: {
                el: '.specialists__pagination',
                clickable: true,
            },
        })
    }

    if (document.querySelector('.specialists__slider')) {

        getMobileSlider('.specialists__slider', {
            slidesPerView: 1,
            spaceBetween: 27,
            watchSlidesProgress: true,
            pagination: {
                el: '.specialists__pagination',
                clickable: true,
            },
        })
    }


    if (document.querySelector('.reviews__slider')) {
        new Swiper('.reviews__slider', {
            slidesPerView: "auto",
            spaceBetween: 16,
            watchOverflow: true,
            pagination: {
                el: '.reviews__pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    spaceBetween: 46,
                }
            }
        })
    }

    if (document.querySelector('.works__slider')) {
        new Swiper('.works__slider', {
            slidesPerView: 3,
            spaceBetween: 21,
            watchOverflow: true,
            pagination: {
                el: '.works__pagination',
                clickable: true,
            },

        })
    }


    function getMobileSlider(sliderName, options) {

        let init = false;
        let swiper = null;

        function getSwiper() {
            if (window.innerWidth <= 767.98) {
                if (!init) {
                    init = true;
                    swiper = new Swiper(sliderName, options);
                }
            } else if (init) {
                swiper.destroy();
                swiper = null;
                init = false;
            }
        }
        getSwiper();
        window.addEventListener("resize", getSwiper);
    }



    // observer header height
    function updateHeaderHeight() {
        var header = document.querySelector('.header__wrapper');
        var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

        if (header && htmlFontSize) {
            var headerHeight = header.offsetHeight / htmlFontSize;
            document.body.style.setProperty('--header-height', `${headerHeight}rem`);
        }
    }

    updateHeaderHeight();

    window.addEventListener('resize', updateHeaderHeight);






});

