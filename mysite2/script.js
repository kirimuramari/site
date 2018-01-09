//ページトップ
$(function(){
  $('.toTop').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});

//スマホのみアコーディオン

$(function(){
  $('.Mboder').click(function(){
  $(this).toggleClass('.Mtable').next().slideToggle();
  });
  });