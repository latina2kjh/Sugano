$(function() {
  var $win = $(window),
      //$main = $('#menu_adjustment'),
      $nav = $('#main_menu'),
      navPos = 120,
      fixedClass = 'fixed';
  $win.on('load scroll', function() {
    var value = $(window).scrollTop();
    if ( value > navPos ) {
      $nav.addClass(fixedClass);
    } else {
      $nav.removeClass(fixedClass);
     }
  });
});


$(function(){
$("#mobile_menu_link ul").css("display", "none");
$("#panel-btn").click(function() {
  $("#mobile_menu_link ul").slideToggle(400);
     $("#main_menu ul li ul").slideToggle(400);
    $("#panel-btn-icon").toggleClass("close");
    console.log('トグルボタン');
    return false;
  });
});


$(function() {
  var navBox = $("#top_navi");
  navBox.hide();
  var TargetPos = 200;
  $(window).scroll( function() {
   var ScrollPos = $(window).scrollTop();
   if( ScrollPos > TargetPos ) {
     navBox.addClass("is-show")
    }
 else {
     navBox.removeClass("is-show")
     }
});
});

