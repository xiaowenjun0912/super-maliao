$(function () {
  var y=0;
  var x=0;
  $('#touxiang1>li').each(function(index,item){
    if (index%6==0&&index>0){
      x=0;
      y++;
    }
    $(item).children('a').css("backgroundPosition",(-x*152)+"px "+(-y*152)+"px");
    x++;
    $(item).children("a").mouseenter(function () {
      var mm3 = $("#mp3")[0];
      mm3.play();
    })
  });
  $(".content-lrtClass").mouseenter(function () {
    var mm4 = $("#mp4")[0];
    mm4.play()
  })
});