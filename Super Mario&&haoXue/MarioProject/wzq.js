
$(function () {
  var idx = 0;
  //点击按钮的次数
  var $lis1 =$("li").eq(0).clone();
  //这是克隆第一张,走到第6张视觉上瞬间回到第一张
  $lis1.appendTo($(".screen>ul"));
  //这是克隆第二张,走到第6张视觉上瞬间回到第一张
  var $lis2 =$("li").eq(1).clone();
  $lis2.appendTo($(".screen>ul"));
  $("#right").click(function (){
    idx++;
    if (idx==5){
      $(".screen>ul").css("left",0)
      idx=0
    }
    $(".screen>ul").stop().animate({
      //点一次移动930,第一次要移动要移动1600,因为第一次给了要加上marginleft的值
      left:-1600+(idx-1)*-930+"px"
    },300,"linear")
    // ------------------------------------------------------------------------------
    //文字跟着轮播图转
    var idx1 = 0
    idx1 =idx
    $("#text dl").eq(idx1).fadeIn(300).siblings("dl").fadeOut(300)
  })
  $("#left").click(function (){
    if (idx==0){
      idx = 5;
      $(".screen>ul").css("left",-5320)
    }
    idx--;
    $(".screen>ul").stop().animate({
      left:-1600+(idx-1)*-930+"px"
    },300,"linear")
    var idx1 = 0
    idx1 =idx
    $("#text dl").eq(idx1).fadeIn(300).siblings("dl").fadeOut(300)
  })
});
