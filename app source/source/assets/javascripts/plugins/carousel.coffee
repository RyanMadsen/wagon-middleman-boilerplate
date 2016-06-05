$owl = $('.owl-carousel')

$(document).ready ->
  $owl.owlCarousel
    items: 1
    itemsDesktop: false
    itemsDesktopSmall: [
      900
      1
    ]
    itemsTablet: false
    itemsMobile: false
    navigation: true
    navigationText: ["<img src='assets/images/left-arrow.png'>","<img src='assets/images/right-arrow.png'>"]
