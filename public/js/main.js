var contactBtn = document.getElementById('contact-btn');
var portfolioBtn = document.getElementById('portfolio-btn');
var contentBox = document.getElementById('content-box');

$('body').on('click', '#contact-btn', function() {
	$( "#content-box" ).load( "public/views/contact.html");
});

$('body').on('click','#home-btn',function() {
	$( "#content-box" ).load( "public/views/home.html");
});

$('body').on('click','#portfolio-btn',function() {
	$( "#content-box" ).load( "public/views/portfolio.html");
});