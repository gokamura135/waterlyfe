$('#aboutLink').on('click', function() {
  ga('send', 'event', 'about', 'click');
});

$(document).ready(function() {
	$width = $('#imgcontent').width();
	
	$('#imgcontent img').css({
		'max-width': $width, 'height': 'auto', 'align': 'middle'
	});
});