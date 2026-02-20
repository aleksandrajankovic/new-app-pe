/*SWIPER FOOTER*/

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 10,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },

    640: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4.5,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 6.5,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 10,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 4.5,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 6.5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 10.5,
      spaceBetween: 20,
    },
  },
});


var md = new MobileDetect(window.navigator.userAgent);


function redirectToApp() {
  var currentUrl = window.location.href; 
  if (md.is("iPhone") || md.is("iPad") || md.is("iPod")) {
    window.location.href = "https://itunes.apple.com/pe/app/id1241358851";
  } else if (md.is("AndroidOS")) {
    window.location.href =
      "https://download-file-app.meridianbet.com/download-service/api/download-file-latest/f9f78fb7-6956-4a29-9244-fc307c9af6d6";
  } else {
  
    currentUrl;
  }
}

window.addEventListener("load", function() {
  redirectToApp();
});
