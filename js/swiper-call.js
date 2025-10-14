
      wow = new WOW(
         {
            animateClass: 'animate__animated',
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
         slidesPerView: 2,
         spaceBetween: 20,
         pagination: {
            el: ".custom-pagination", // Custom pagination placement
            clickable: true,
         },
         breakpoints: {
            1199: {
               slidesPerView: 6,
               spaceBetween: 25,
            },
            992: {
               slidesPerView: 4,
               spaceBetween: 25,
            },
            767: {
               slidesPerView: 3,
               spaceBetween: 25,
            },
            576: {
               slidesPerView: 3,
               spaceBetween: 25,
            },
         },
      });
   

   
      var trendingproductslider = new Swiper(".trending-product-slider", {
         slidesPerView: 2,
         spaceBetween: 7,
         navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
         },
         breakpoints: {
            // when window width is >= 992
            992: {
               slidesPerView: 4,
               spaceBetween: 40,
            },
            // when window width is >= 767
            767: {
               slidesPerView: 3,
               spaceBetween: 25,
            },
         },
      });
   

   
      var recentlyboughtslider = new Swiper(".recently-bought-slider", {
         slidesPerView: 2,
         spaceBetween: 7,
         navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
         },
         breakpoints: {
            // when window width is >= 992
            992: {
               slidesPerView: 4,
               spaceBetween: 40,
            },
            // when window width is >= 767
            767: {
               slidesPerView: 3,
               spaceBetween: 25,
            },
         },
      });
   

   
      var megadealproductslider = new Swiper(".megadeal-product-slider", {
         slidesPerView: 2,
         spaceBetween: 7,
         navigation: {
            nextEl: '.swiper-button-next3',
            prevEl: '.swiper-button-prev3',
         },
         breakpoints: {
            // when window width is >= 992
            992: {
               slidesPerView: 4,
               spaceBetween: 40,
            },
            // when window width is >= 767
            767: {
               slidesPerView: 3,
               spaceBetween: 25,
            },
         },
      });
   

   
      var bestSellingslider = new Swiper(".bestSelling-slider", {
         slidesPerView: 2,
         spaceBetween: 7,
         navigation: {
            nextEl: '.swiper-button-next4',
            prevEl: '.swiper-button-prev4',
         },
         breakpoints: {
            // when window width is >= 992
            992: {
               slidesPerView: 4,
               spaceBetween: 40,
            },
            // when window width is >= 767
            767: {
               slidesPerView: 3,
               spaceBetween: 25,
            },
         },
      });
   

   
      var productinthevideo = new Swiper(".product-inthe-video", {
         slidesPerView: 2,
         spaceBetween: 7,
         navigation: {
            nextEl: '.swiper-button-next7',
            prevEl: '.swiper-button-prev7',
         },
         breakpoints: {
            // when window width is >= 992
            992: {
               slidesPerView: 4,
               spaceBetween: 40,
            },
            // when window width is >= 767
            767: {
               slidesPerView: 3,
               spaceBetween: 25,
            },
         },
      });
   

   
      var gainingzoneslider = new Swiper(".gaining-zone-slider", {
         slidesPerView: 2,
         spaceBetween: 7,
         navigation: {
            nextEl: '.swiper-button-next8',
            prevEl: '.swiper-button-prev8',
         },
         breakpoints: {
            // when window width is >= 992
            992: {
               slidesPerView: 4,
               spaceBetween: 40,
            },
            // when window width is >= 767
            767: {
               slidesPerView: 3,
               spaceBetween: 25,
            },
         },
      });
   

   
      var savercombo = new Swiper(".saver-combo-slider", {
         slidesPerView: 2,
         spaceBetween: 7,
         navigation: {
            nextEl: '.swiper-button-next9',
            prevEl: '.swiper-button-prev9',
         },
         breakpoints: {
            // when window width is >= 992
            992: {
               slidesPerView: 4,
               spaceBetween: 40,
            },
            // when window width is >= 767
            767: {
               slidesPerView: 3,
               spaceBetween: 25,
            },
         },
      });
   


   
      var comboslider = new Swiper(".combo-slider", {
         slidesPerView: 2,
         spaceBetween: 7,
         pagination: {
            el: ".swiper-pagination",
            clickable: true,
         },
         autoplay: {
            delay: 3000, // 3s between slides
            disableOnInteraction: false, // keep autoplay even after user interacts
         },
         breakpoints: {
            // when window width is >= 992
            992: {
               slidesPerView: 4,
               spaceBetween: 40,
            },
            // when window width is >= 767
            767: {
               slidesPerView: 3,
               spaceBetween: 25,
            },
         },
      });
   



   
      var top_selling_slider = new Swiper(".top_selling_slider", {
         slidesPerView: 2,
         spaceBetween: 7,
         navigation: {
            nextEl: '.swiper-button-next10',
            prevEl: '.swiper-button-prev10',
         },
         autoplay: {
            delay: 3000, // 3s between slides
            disableOnInteraction: false, // keep autoplay even after user interacts
         },
         breakpoints: {
            // when window width is >= 992
            992: {
               slidesPerView: 4,
               spaceBetween: 30,
            },
            // when window width is >= 767
            767: {
               slidesPerView: 3,
               spaceBetween: 20,
            },
         },
      });
   

   
      var trendingslider = new Swiper(".trending-slider", {
         slidesPerView: 2,
         spaceBetween: 7,
         navigation: {
            nextEl: '.swiper-button-next11',
            prevEl: '.swiper-button-prev11',
         },
         autoplay: {
            delay: 3000, // 3s between slides
            disableOnInteraction: false, // keep autoplay even after user interacts
         },
         breakpoints: {
            // when window width is >= 992
            992: {
               slidesPerView: 4,
               spaceBetween: 40,
            },
            // when window width is >= 767
            767: {
               slidesPerView: 3,
               spaceBetween: 25,
            },
         },
      });

      var leanslider = new Swiper(".lean-slider", {
         slidesPerView: 2,
         spaceBetween: 7,
         navigation: {
            nextEl: '.swiper-button-next12',
            prevEl: '.swiper-button-prev12',
         },
         autoplay: {
            delay: 3000, // 3s between slides
            disableOnInteraction: false, // keep autoplay even after user interacts
         },
         breakpoints: {
            // when window width is >= 992
            992: {
               slidesPerView: 4,
               spaceBetween: 40,
            },
            // when window width is >= 767
            767: {
               slidesPerView: 3,
               spaceBetween: 25,
            },
         },
      });

      var youcantmiss = new Swiper(".you-cant-miss", {
         slidesPerView: 2,
         spaceBetween: 7,
         navigation: {
            nextEl: '.swiper-button-next13',
            prevEl: '.swiper-button-prev13',
         },
         autoplay: {
            delay: 3000, // 3s between slides
            disableOnInteraction: false, // keep autoplay even after user interacts
         },
         breakpoints: {
            // when window width is >= 992
            992: {
               slidesPerView: 4,
               spaceBetween: 30,
            },
            // when window width is >= 767
            767: {
               slidesPerView: 3,
               spaceBetween: 20,
            },
         },
      });

      var productsliderZ1 = new Swiper(".product-slider-Z1", {
         slidesPerView: 2,
         spaceBetween: 7,
         navigation: {
            nextEl: '.swiper-button-next14',
            prevEl: '.swiper-button-prev14',
         },
         autoplay: {
            delay: 3000, // 3s between slides
            disableOnInteraction: false, // keep autoplay even after user interacts
         },
         breakpoints: {
            // when window width is >= 992
            992: {
               slidesPerView: 4,
               spaceBetween: 40,
            },
            // when window width is >= 767
            767: {
               slidesPerView: 3,
               spaceBetween: 25,
            },
         },
      }); 
   
      var productsliderZ2 = new Swiper(".product-slider-Z2", {
         slidesPerView: 2,
         spaceBetween: 7,
         navigation: {
            nextEl: '.swiper-button-next15',
            prevEl: '.swiper-button-prev15',
         },
         autoplay: {
            delay: 3000, // 3s between slides
            disableOnInteraction: false, // keep autoplay even after user interacts
         },
         breakpoints: {
            // when window width is >= 992
            992: {
               slidesPerView: 4,
               spaceBetween: 40,
            },
            // when window width is >= 767
            767: {
               slidesPerView: 3,
               spaceBetween: 25,
            },
         },
      }); 

      var GridSlider = new Swiper(".ThreeGridSlider1", {
         slidesPerView: 2,
         spaceBetween: 7,
         navigation: {
            nextEl: '.swiper-button-next16',
            prevEl: '.swiper-button-prev16',
         },
         autoplay: {
            delay: 3000, // 3s between slides
            disableOnInteraction: false, // keep autoplay even after user interacts
         },
         breakpoints: {
            // when window width is >= 992
            992: {
               slidesPerView: 3,
               spaceBetween: 30,
            },
            // when window width is >= 767
            767: {
               slidesPerView: 3,
               spaceBetween: 20,
            },
         },
      }); 
      
      var ReviewSlider = new Swiper(".ReviewSlider", {
         slidesPerView: 1,
         spaceBetween: 7,
         navigation: {
            nextEl: '.swiper-button-next17',
            prevEl: '.swiper-button-prev17',
         },

         breakpoints: {
            992: {
               slidesPerView: 4,
               spaceBetween: 30,
            },
            575: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
         },
      });     