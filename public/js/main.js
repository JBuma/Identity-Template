var contactBtn = document.getElementById('contact-btn');
var portfolioBtn = document.getElementById('portfolio-btn');
var contentBox = document.getElementById('content-box');

$('body').on('click', '#contact-btn', function() {
	loadPage('contact');
});

$('body').on('click','#home-btn',function() {
	loadPage('home');
});

$('body').on('click','#portfolio-btn',function() {
	loadPage('portfolio');
});

function loadPage(page){
	contentBox.classList.add('new-page');
	setTimeout(function(){
		$('#content-box').load('public/views/'+page+'.html');

		setTimeout(function(){
			contentBox.classList.remove('new-page');
		}, 300);

	}, 300);
}