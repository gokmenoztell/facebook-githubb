function initializeSwiper(selector, slidesPerView, spaceBetween, nextButton, prevButton, paginationClickable = false, breakpoints = null) {
    return new Swiper(selector, {
        slidesPerView: slidesPerView,
        spaceBetween: spaceBetween,
        pagination: {
            el: ".swiper-pagination",
            clickable: paginationClickable,
        },
        navigation: {
            nextEl: nextButton,
            prevEl: prevButton,
        },
        breakpoints: breakpoints || {}
    });
}

// slider1
initializeSwiper('.swiper2', 6, 20, ".swiper-button-next-6", ".swiper-button-prev-6");

// slider2
initializeSwiper(".mySwiper", 4.5, 10, ".swiper-button-next", ".swiper-button-prev", true, {
    320: { slidesPerView: 3.5, spaceBetween: 10 },
    480: { slidesPerView: 3, spaceBetween: 10 },
    640: { slidesPerView: 4.5, spaceBetween: 10 }
});

// slider3
initializeSwiper(".carouselreels", 1, 30, ".swiper-button-next-1", ".swiper-button-prev-1");

// slider4
initializeSwiper(".carouselreels-2", 1, 30, ".swiper-button-next-2", ".swiper-button-prev-2");

// slider5
initializeSwiper(".carouselreels-3", 1, 30, ".swiper-button-next-3", ".swiper-button-prev-3");

// slider6
initializeSwiper(".carouselreels-4", 1, 30, ".swiper-button-next-4", ".swiper-button-prev-4");

// slider7
initializeSwiper(".carouselreels-5", 1, 30, ".swiper-button-next-5", ".swiper-button-prev-5");
