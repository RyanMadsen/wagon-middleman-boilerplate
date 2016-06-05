let setupMap = () => {
  window.mapSetup = true;

  let contentTemplate = $('.maps-content-window').prop('outerHTML');

  let mcallen = new google.maps.LatLng(26.293090, -97.993239);
  let map = new google.maps.Map($('.map')[0], {
    center: mcallen,
    zoom: 15,
    scrollwheel: false,
    styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#2f2f2f"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f8f8f8"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#7b0046"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#7b0046"},{"lightness":"0"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#7b0046"},{"lightness":"0"},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#e5e5e5"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#7b0046"},{"lightness":"1"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#7b0046"},{"lightness":"1"}]}]
    // disableDefaultUI: true,
    // mapTypeControlOptions: {
    //   mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'collisioncenter']
    // }
  });

  var marker = new google.maps.Marker({
    position: mcallen,
    map: map
  });

  //$('.mcallen').hover(e => {
  //  map.panTo(mcallen);
  //});

  //var info = new google.maps.InfoWindow({
  //  content: contentTemplate
  //});

  //marker.addListener('click', () => {
  //  info.open(map, marker);
  //});
  //
  //info.open(map, marker);
};

let waitForMaps = () => {
  if (!window.mapsReady && !window.mapSetup) {
    setTimeout(this.waitForMaps.bind(this), 1000);
    return;
  }

  if (!window.mapSetup) {
    setupMap();
  }
};



$(document).ready(() => {
  if ($('.home-container, .contact-container').length) {
    setupMap();
  };
});
