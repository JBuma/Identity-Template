var contactBtn = document.getElementById('contact-btn');
var portfolioBtn = document.getElementById('portfolio-btn');
var contentBox = document.getElementById('content-box');

var contactPage = '';
var homePage = '';
var portfolioPage = '';

$(document).ready(()=>{
	$.get('public/views/contact.html',function(data){
		contactPage = data;
	});
	$.get('public/views/home.html',function(data){
		homePage = data;
	});
	$.get('public/views/portfolio.html',function(data){
		portfolioPage = data;
	});
})

$('body').on('click', '#contact-btn', function() {
	loadPage(contactPage);
});

$('body').on('click','#home-btn',function() {
	loadPage(homePage);
});

$('body').on('click','#portfolio-btn',function() {
	loadPage(portfolioPage);
});

function loadPage(page){
	contentBox.classList.add('new-page');
	setTimeout(function(){
		$('#content-box').html(page);

		setTimeout(function(){
			contentBox.classList.remove('new-page');
		}, 300);

	}, 300);
}