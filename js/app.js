$(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
});