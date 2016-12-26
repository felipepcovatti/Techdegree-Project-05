var navHopen;
var navHclosed = '58px';
var $root = $('html, body');
// Responsive menu
function closeMenu() {
	$('.close-btn').hide();
	$('.fa-bars').show();
	$('nav').height(navHclosed);
}

function openMenu() {
	$('nav').height('auto');
	navHopen = $('nav').height();
	$('nav').height(navHclosed);
	$('nav').height(navHopen);
	$('.fa-bars').hide();
	$('.close-btn').show();
}
$('.fa-bars').click(openMenu);
$('.close-btn').click(closeMenu);
$("nav ul li a").click(function() {
	if ($('nav ul').css('display') != 'flex') {
		closeMenu();
		$root.animate({
			scrollTop: $($.attr(this, 'href')).offset().top - navHopen + 58
		}, 500);
		return false;
	} else {
		$root.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
		return false;
	}
});
$(window).resize(function() {
	closeMenu();
	if ($('nav ul').css('display') == 'flex') {
		$('.fa-bars').hide();
		$('nav').height('auto');
	} else {
		$('.fa-bars').show();
		$('nav').height(navHclosed);
	}
});
//Smooth Scrolling
$('a:not(nav a)').click(function() {
	$root.animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 500);
	return false;
});