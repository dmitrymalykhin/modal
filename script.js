let elements = $('.modal-overlay, .modal');
let delay_popup = 5000;
setTimeout(function() { elements.addClass('active') }, delay_popup);
setTimeout(function() {document.querySelector('body').classList.add('hidden-body') }, delay_popup);



$('.open-modal').click(function(){
	elements.addClass('active');
	document.querySelector('body').classList.add('hidden-body');
});

$('.close-modal').click(function(){
	elements.removeClass('active');
	document.querySelector('body').classList.remove('hidden-body')
});

$(document).click(function (e) {
	if ($(e.target).is('.modal-overlay, .modal')) {
		elements.removeClass('active');
		document.querySelector('body').classList.remove('hidden-body')
	}
});