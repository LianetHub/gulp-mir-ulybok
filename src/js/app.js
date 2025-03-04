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

