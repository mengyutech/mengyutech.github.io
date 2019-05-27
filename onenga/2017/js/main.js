;(function ( $, window, document, undefined ) {
$(function(){
  //位置を調整する
  var h = $(window).outerHeight(),
      padTop = function(selector){
        var pt = h/2-$(selector).outerHeight()/2;
        return (pt > 0) ? pt : 0;
      }
  ;
  $('.qr-icon').css({ 'max-height': h/3+'px', 'padding': h/10+'px' });
  $('.full_member').on('load', function(){ $(this).css({ 'max-height': h+'px', 'padding-top': padTop('.full_member')+'px' }); });
  $('.message').on('load', function(){ $(this).css({ 'padding-top': padTop('.message')+'px' }); });

  // タイムライン
  var tl_sp = new TimelineMax({delay:0.5, repeat:0, repeatDelay:1});

  // 指定日によって実行内容を制御
  var today = new Date();
  var xDay = new Date('2017/1/1');
  if(today < xDay){
    //xデー前
    tl_sp
      .to(".company-logo", 4, {opacity: "1"}, 0)
    ;
  } else {
    //xデー後
    tl_sp
      .to(".qr-icon",      3, {opacity: "1"}, 0)
      .to(".kinga_row1",   3, {opacity: "1"}, 2)
      .to(".kinga_row2",   3, {opacity: "1"}, 4)
      .to(".copy-right",   3, {opacity: "1"}, 6)

      .to(".qr-icon",      2, {opacity: "0"}, 10)
      .to(".kinga_row1",   2, {opacity: "0"}, 10)
      .to(".kinga_row2",   2, {opacity: "0"}, 10)
      .to(".copy-right",   2, {opacity: "0"}, 10)

      .to(".2016-message", 3, {opacity: "1"}, 12)
      .to(".full_member",  6, {opacity: "1"}, 14)
      .to(".full_member",  3, {opacity: "0"}, 21)
      .to(".2016-message", 3, {opacity: "0"}, 21)

      .to(".message",      4, {opacity: "1"}, 23)
      .to(".company-logo", 4, {opacity: "1"}, 25)
    ;
    //bodyクリックで初めから再生
    $(document.body).on('click', function(){ tl_sp.isActive() ? false : tl_sp.restart(); });
  }

});
})(jQuery, window, document);
