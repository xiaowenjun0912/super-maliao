$(function () {
  var y=0;
  var x=0;
  $('#touxiang>li').each(function(index,item){
    if (index%7==0&&index>0){
      x=0;
      y++;
    }
    $(item).children("a").mouseenter(function () {
      var mm3 = $("#mp3")[0];
      mm3.play();
    })
    $(item).children('a').css("backgroundPosition",(-x*128)+"px "+(-y*128)+"px");
    x++;
  });
});