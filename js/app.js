$(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    URLhashListener:true,
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

AOS.init({
  once:true
});

$(".carousel-link").click(ToTop);
function ToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}