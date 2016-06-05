
$(document).ready(() => {
  // Handle contact form
  $('.contact-open').click(evt => {
    evt.preventDefault(); // Prevent hash tags in the URL

    $('.request-quote').css('visibility', 'visible');
  });

  $('.contact-close').click(evt => {
    evt.preventDefault(); // Prevent hash tags in the URL

    $('.request-quote').css('visibility', 'hidden');
  })
});
