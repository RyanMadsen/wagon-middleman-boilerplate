//= require TimelineMax
//= require TweenMax
//= require easing/EasePack
//= require plugins/modernizr

class Menu {

  constructor() {
    this.element = $('nav');

    // Trigger Opening the menu
    $('a.open-menu').on('click', event => {
      event.preventDefault();
      this.open();
    });

    // Trigger Closing the menu
    $('nav a.close-menu').on('click', event => {
      event.preventDefault();
      this.close();
    });
  }


  open() {
    let nav       = $('nav');
    let body      = $('main');
    let items     = $('nav li');
    let navHeight = $('nav').outerHeight();
    let pad       = (16 * 6);
    navHeight     -= pad;
    this.stage    = new TimelineMax();

    if (!Modernizr.mq('(max-width: 767px)')) {
      $('body').css('overflow', 'hidden');
    }

    this.stage.to(body, 2, { transform: `translateY(${navHeight}px)`, ease: Elastic.easeOut.config(0.75, 0.5) })
              .to(nav,  2, { transform: `translateY(${-pad}px)`, ease: Elastic.easeOut.config(0.75, 0.5) }, "-=2")
              .staggerTo(items, 1.5, {
                transform: 'translateY(0)',
                opacity: 1,
                ease: Elastic.easeOut.config(1, 0.4),
              }, 0.15, "-=1.75");



    this.stage.play();
  }

  close() {
    let nav    = $('nav');
    let body   = $('main');
    let items  = $('nav li');
    let height = nav.outerHeight();

    if (!Modernizr.mq('(max-width: 767px)')) {
      $('body').css('overflow', 'auto');
    }


    TweenMax.to(items, 1, { transform: 'translateY(-40px)', opacity: 0 });

    this.stage = new TimelineMax();
    this.stage.to(nav,   1, { transform: `translateY(-${height}px)`, ease: Power4.easeOut })
              .to(body,  0.5, { transform: 'translateY(0)', ease: Power1.easeOut }, "-=1");
    // this.stage.to(nav,   2.5, { transform: 'translateY(0)', ease: Elastic.easeOut.config(0.1, 0.15) })
    //           .to(body,  2, { transform: 'translateY(0)', ease: Elastic.easeOut.config(2, 0.5) }, "-=2.5");

    this.stage.play();
  }

}
