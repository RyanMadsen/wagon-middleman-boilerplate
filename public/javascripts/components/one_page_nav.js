(function() {
  $(document).ready(function() {
    return $('.top-navigation-container, .mobile-navigation').onePageNav({
      currentClass: 'current',
      changeHash: false,
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing',
      begin: function() {},
      end: function() {},
      scrollChange: function(item) {}
    });
  });

}).call(this);
