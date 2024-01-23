$(function () {
  var gnb = ".gnb>li";
  var sub = ".sub";

  $(gnb).on("mouseover", function () {
    $(this).find(sub).fadeIn(100);
  });

  $(gnb).on("mouseleave", function () {
    $(this).find(sub).fadeOut(100);
  });
  // header

  var popupThum = ".thum";
  var popup = ".popup";
  var popupClose = ".popup button";
  var video = ".popup video";
  $(popupThum).on("click", function () {
    $(popup).fadeIn(100);
    $(video)[0].play();
  });

  $(popupClose).on("click", function () {
    $(popup).fadeOut(100);
    $(video)[0].pause();
    $(video)[0].currentTime = 0;
  });
  // home

  $(".btnFloor li").each(function () {
    var btnFloor = $(this);
    var contentsFloor = $(".contentsFloor > li");
    btnFloor.click(function (e) {
      e.preventDefault();

      var target = $(this);
      var index = target.index();

      contentsFloor.eq(index).addClass("on");
      contentsFloor.eq(index).siblings().removeClass("on");

      target.addClass("on");
      target.siblings().removeClass("on");
    });
  });
  // floor

  $(".btnType li").each(function () {
    var btnType = $(this);
    var contentsType = $(".contentsType > li");
    btnType.click(function (e) {
      e.preventDefault();

      var target = $(this);
      var index = target.index();

      contentsType.eq(index).addClass("on");
      contentsType.eq(index).siblings().removeClass("on");

      target.addClass("on");
      target.siblings().removeClass("on");
    });
  });
  // type
});
