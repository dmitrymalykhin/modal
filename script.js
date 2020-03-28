let elements = $('.modal-overlay, .modal');
let delay_popup = 5000;
setTimeout(function() { elements.addClass('active') }, delay_popup);

$('.open-modal').click(function(){
  elements.addClass('active');
});

$('.close-modal').click(function(){
  elements.removeClass('active');
});