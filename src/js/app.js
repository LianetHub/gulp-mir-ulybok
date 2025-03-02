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



        if (target.matches('.search__toggler')) {

        }


    });

    // sliders

    if (document.querySelector('.reviews__slider')) {
        new Swiper('.reviews__slider', {
            slidesPerView: 1.15,
            spaceBetween: 20,
            watchSlidesProgress: true,
            navigation: {
                nextEl: ".reviews__next",
                prevEl: ".reviews__prev",
            },
            breakpoints: {
                767.98: {
                    slidesPerView: 2,
                }
            }
        })
    }

    if (document.querySelector('.reviews__more-slider')) {
        new Swiper('.reviews__more-slider', {
            slidesPerView: "auto",
            spaceBetween: 20,
            watchSlidesProgress: true,
            pagination: {
                el: '.reviews__more-pagination',
                clickable: true
            }
        })
    }


    // document.addEventListener('scroll', (e) => {
    //     if (scrollY > 0) {
    //         document.querySelector('.header').classList.add('scroll');
    //     } else {
    //         document.querySelector('.header').classList.remove('scroll');
    //     }
    // });


    // // observer header height
    // function updateHeaderHeight() {
    //     var header = document.querySelector('.header__wrapper');
    //     var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

    //     if (header && htmlFontSize) {
    //         var headerHeight = header.offsetHeight / htmlFontSize;
    //         document.body.style.setProperty('--header-height', `${headerHeight}rem`);
    //     }
    // }

    // updateHeaderHeight();

    // window.addEventListener('resize', updateHeaderHeight);





});

