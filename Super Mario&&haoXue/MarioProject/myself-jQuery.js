//下面为找到中间红色马里奥后给他设置的动画效果渐渐淡出
$(function () {
   /* var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    $('.windowHeight').css({'width':windowWidth,'height':windowHeight});*/
    $("#red").delay(400).animate({
        width:593.25,
        height:567,
        opacity:1
    },800);
})
//这是找到彩虹桥下面的钓鱼小黄人所设置的动画效果
$(function (  ) {
    $("#a-huang").delay(1500).animate({
        width:253.05,
        height:201.6,
        opacity:1
    },800);
});
//下面是找到彩虹桥三个小人汽车的动画渐出效果
$(function (  ) {
    $("#Sx-r").delay(700).animate({
        width:213.15,
        height:249.9,
        opacity:1
    },800)
})
//这是马里奥左边小红毛动画渐出效果
$(function (  ) {
    $("#X-hongmao").delay(1200).animate({
        width:259.35,
        height:263.55,
        opacity:1
    },800)
})
//下面这是马里奥上边位置的黄姑娘咯
$(function (  ) {
    $("#H-guniang").delay(1500).animate({
        width:365.4,
        height:339,
        opacity:1
    })
},800)