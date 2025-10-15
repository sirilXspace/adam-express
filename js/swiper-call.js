wow = new WOW({
  animateClass: "animate__animated",
  offset: 0,
});
wow.init();

var banner = new Swiper(".mySwiperBanner", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Enables pagination dots to be clickable
  },
});

var category = new Swiper(".category-slider", {
  slidesPerView: 3,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next1n",
    prevEl: ".swiper-button-prev1n",
  },
  breakpoints: {
    1340: {
      slidesPerView: 7,
      spaceBetween: 25,
    },
    1199: {
      slidesPerView: 6,
      spaceBetween: 25,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },
});

var trendingproductslider = new Swiper(".trending-product-slider", {
  slidesPerView: 2,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    // when window width is >= 1280
    1280: {
      slidesPerView: 6,
      spaceBetween: 15,
    },
    // when window width is >= 1024
    1024: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
    // when window width is >= 992
    992: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    // when window width is >= 575
    575: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

var featuredproductslider = new Swiper(".featured-product-slider", {
  slidesPerView: 2,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    // when window width is >= 1280
    1280: {
      slidesPerView: 6,
      spaceBetween: 15,
    },
    // when window width is >= 1024
    1024: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
    // when window width is >= 992
    992: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    // when window width is >= 575
    575: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

var topbrandslider = new Swiper(".topbrand-slider", {
  slidesPerView: 3,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next1n",
    prevEl: ".swiper-button-prev1n",
  },
  breakpoints: {
    1340: {
      slidesPerView: 7,
      spaceBetween: 25,
    },
    1199: {
      slidesPerView: 6,
      spaceBetween: 25,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },
});
