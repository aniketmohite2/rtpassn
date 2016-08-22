$(document).ready(function(){
	//Anchor tag prevent default action
	$('a').on('click touchstart', function(e){
		e.preventDefault();
	});
  
  //Main banner
  $('.bxslider').bxSlider({
	controls:false,
	auto:true
  });
  
  //Carousel Banner
  $('.carousel').bxSlider({
	  minSlides: 1,
	  maxSlides: 5,
	  slideWidth: 170,
	  slideMargin: 5,
	  pager:false
  });
  
  //Serch Bar for mobile
  $('.mob-search').on('click touchstart', function(){
	$('.src-form').slideToggle('slow');
  });
  
  //MAin Menu for Device
  $('.mob-menu').on('click touchstart', function(){
	$('.main-menu').slideToggle('slow');
  });
});