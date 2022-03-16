$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;

    $('body,html').animate({scrollTop:position},speed,'swing');
     return false;
  });

  $(document).ready(function(){
    var durationMove = 2000;
    var durationFadeIn = 2000;
    $.when(
          $('.triangle--upper').animate({top:"15%",left:"40%",},durationMove),
          $('.triangle--middle').animate({right:"40%",},durationMove),
          $('.triangle--bottom').animate({bottom:"15%",left:"40%",},durationMove),
    ).done(function(){
        $('.position--first').fadeIn(durationFadeIn);
        $('.position--family').fadeIn(durationFadeIn);
    });
  });
});

