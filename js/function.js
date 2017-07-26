$(document).ready(function(){
  // jQuery(".button").fitText(1, { minFontSize: '10px', maxFontSize: '17px' });
  jQuery(".subtitle").fitText(1, { minFontSize: '70px', maxFontSize: '110px' });
  jQuery(".sub1").fitText(1, { minFontSize: '70px', maxFontSize: '110px' });
  jQuery(".title").fitText(1, { minFontSize: '5px', maxFontSize: '20px' });


// Hero Entrance

  $('.hero .fly').each(function(i){
    setTimeout(function(){
      $('.hero .fly').eq(i).addClass('is-showing');
    }, 150 * (i*2+1));
  });





  $(".hamburger").click(function(){
    window.setTimeout(function(){
      if($(".hamburger").not("collapsed")){
        $(".sub1").css("margin-top", "20px");
      };
    }, 0.5);
    window.setTimeout(function(){
      if($(".hamburger").hasClass("collapsed")){
        $(".sub1").css("margin-top", "100px");
      };
    }, 0.5);

  });


  	$('a[href^="#"]').on('click',function (e) {
  	    e.preventDefault();

  	    var target = this.hash;
  	    var $target = $(target);

  	    $('html, body').stop().animate({
  	        'scrollTop': $target.offset().top
  	    }, 900, 'swing', function () {
  	        window.location.hash = target;
  	    });
  	});





});

// Parallax
// $(window).scroll(function(){
//   var wScroll = $(this).scrollTop();
//   console.log(wScroll);
//   $('.hero h1').css({
//     'transform' : 'translate(0px, '+ wScroll / 20 +'px)'
//   });
// });



$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  var opacity = 1-(wScroll/500);
  console.log(opacity);

  // Hero Parallx
  $('.hero').css({
    'transform' : 'translate(0px, '+ wScroll / 10 +'%)',
    'opacity' : opacity
  });

  // Quotes and Video Parallax
  if (wScroll > $('.quote').offset().top - $(window).height()){
    $('.citat .fly').each(function(i){
      setTimeout(function(){
        $('.citat .fly').eq(i).addClass('is-showing');
      }, 150 * (i*3+1));
    });

    $('.vidcont .fly').addClass('is-showing');

  }


// Teste Parallax

if(wScroll > $('.teste').offset().top - $(window).height()) {

  $('.teste .fly').addClass('is-showing');

  var offset = Math.min(0, wScroll - $('.teste').offset().top + $(window).height() - 550);
  $('.ev_nat').css({
    'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'
  });

  $('.bac').css({
    'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'
  });

}

// Galerie Parallax

if(wScroll > $('.galerie').offset().top - $(window).height()) {
    $('.galerie .fly').addClass('is-showing');

    setTimeout(function(){
      $('.carousel.fly2').addClass('is-showing');
    }, 500);
}

// Sfaturi Parallax
if(wScroll > $('.sfaturi').offset().top - $(window).height()) {
  $('.sfaturi .fly').addClass('is-showing');

  $('.sfaturi .fly2').each(function(i){
    setTimeout(function(){
      $('.sfaturi .fly2').eq(i).addClass('is-showing');
    }, 150 * (i*3+1));
  });
}
});
