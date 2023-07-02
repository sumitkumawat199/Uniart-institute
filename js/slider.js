$(document).ready(function () {
  // $(".slider").slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplaySpeed: 1000,
  //   dots: true,
  //   prevArrow: '<button class="slide-arrow prev-arrow"></button>',
  //   nextArrow: '<button class="slide-arrow next-arrow"></button>',
  // });
  $(".portfolio .right-panel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    arrows: false,
    // prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    // nextArrow: '<button class="slide-arrow next-arrow"></button>',
  });
  $(".testimonials").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    arrows: false,
  });
  $(".mobile-testimonial ul").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    arrows: false,
  });
});
