//= require jquery
//= require plugins/typekit
//= require plugins/google-maps
//= require plugins/modals
//= require plugins/owl.carousel.min
//= require plugins/carousel
//= require plugins/jquery.magnific-popup
//= require plugins/particles
//= require plugins/jquery.big-slide

$(document).ready(() => {
  $('.image-parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    },
  });

  var scrollToLoc = function(hash, offset) {
    var destination = $(hash).offset().top;
    $('html,body').animate({
      scrollTop: destination - offset
    }, 800, 'swing');
  };

  $('[data-target]').click(event => {
    event.preventDefault();

    let $this = $(event.currentTarget);
    let target = $this.attr('data-target');
    target = `#${target}`;

    $this.parent().parent().find('.active').removeClass('active');
    let h5 = $this.find('h5');
    if (h5.length > 0) {
      $this.find('h5').addClass('active')
    } else {
      $this.addClass('active');
    }

    if ($this.hasClass('scroll-to-target') && $(window).width() < 640) {
      scrollToLoc(target, 200);
    }

    $('.current').removeClass('current');
    // $('.sub-content.current').removeClass('.current');
    // $('.statement.active').removeClass('active');

    $(target).addClass('current');
    // $this.find('.statement.active').addClass('active');
  });

  particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 19,
          "density": {
            "enable": true,
            "value_area": 1499.3805191013182
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "triangle",
          "stroke": {
            "width": 1,
            "color": "#ffffff"
          },
          "polygon": {
            "nb_sides": 3
          },
          "image": {
            "src": "img/github.svg",
            "width": 1000,
            "height": 1000
          }
        },
        "opacity": {
          "value": 0.13415509907748635,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 11.83721462448409,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 9.59040959040959,
            "size_min": 15.184815184815184,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 0,
          "color": "#ffffff",
          "opacity": 0,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": true,
            "rotateX": 315.65905665290904,
            "rotateY": 1183.721462448409
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }, function() {
    console.log('callback - particles.js config loaded');
  });

  $('.menu-link').bigSlide();
})
