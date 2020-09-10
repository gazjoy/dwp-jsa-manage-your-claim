/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll();

  $('.js-timeline-expand').on( 'click' , function(e) {
    e.preventDefault();
    $(".js-meeting-form").appendTo('.js-meeting-wrapper').removeClass('dwp-hide');
    $(this).addClass('dwp-hide');
    $('html,body').animate({ scrollTop: $('.js-meeting-form').offset().top - 130 }, 'slow');
  });

  $('.js-meeting-cancel').on( 'click' , function(e) {
    e.preventDefault();
    $('.js-meeting-form').addClass('dwp-hide');
    $('.js-timeline-expand').removeClass('dwp-hide');
    $('html,body').animate({ scrollTop: $('.dwp-template').offset().top }, 'slow');
  });
})

