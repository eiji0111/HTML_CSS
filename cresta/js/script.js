$(function () {
  $('.menu-trigger').on('click', function (event) {
    $(this).toggleClass('active');
    $('#nav').fadeToggle();
    event.preventDefault();
  });
});