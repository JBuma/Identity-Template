var contactBtn = document.getElementById('contact-btn');
var portfolioBtn = document.getElementById('portfolio-btn');
var contentBox = document.getElementById('content-box');

// contactBtn.addEventListener('click', () => {
// 	getPage('contact');
// });
// portfolioBtn.addEventListener('click', () => {
// 	getPage('portfolio');
// });

$('#contact-btn').click(function() {
	// alert('clicko')
	$( "#content-box" ).load( "contact.html");
});

function getPage(page) {
	contentBox.innerHTML = '<object type="text/html" data="home.html" ></object>';
}
