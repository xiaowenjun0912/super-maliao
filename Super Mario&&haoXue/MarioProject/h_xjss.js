window.onload=function () {
  var h_xmap = document.getElementsByClassName("h_xmap")[0]
  var dt = h_xmap.getElementsByTagName("dt")
  var li = h_xmap.getElementsByTagName("li")
  var hx=document.getElementsByClassName("h_xlogo")[0]
  var timeId=null

 // timeId=setInterval(function () {
 //   var stp = (num++) * 10
 //   for (var i = 0; i < dt.length; i++) {
 //     if(stp<=360){
 //       dt[i].style.transform = 'rotate(' + stp + 'deg)';
 //      }else{
 //        dt[i].style.transform = 'rotate(' + 0 + 'deg)';
 //        clearInterval(timeId)
 //     }
 //   }
 // }, 5)



// //有个bug?
//   for (var i = 0; i < li.length; i++) {
//     // li[i].setAttribute("index",i)
//     li[i].onmouseenter = function () {
//       this.children[0].children[0].style.height="100px"
//       this.children[0].children[0].style.width="200px"
//
//
//     }
//     li[i].onmouseleave = function () {
//       this.children[0].children[0].style.height="122px"
//       this.children[0].children[0].style.width="217px"
//
//     }
//   }


  //logo跳跃事件
  var timer = setInterval(function(){
    if (timer == null) {
      hx.style.display = 'block';
      //alert(timer);
      timer = 1;
    } else {
      hx.style.display = 'none';
      //alert(timer);
      timer = null;
    }
  },888);



for(var i = 0 ; i <dt.length ; i++){
	dt[i].onmouseenter=function () {
	  var num=1;
      clearInterval(timeId)
	  var that = this;
      timeId=setInterval(function () {
        var stp=(num++)*10
        if(stp<=360){
          that.style.transform='rotate(' + stp + 'deg)';

        }else{
          that.style.transform='rotate(' + 360 + 'deg)';

          clearInterval(timeId)
        }
      },1)
    }
}


for(var i = 0 ; i <dt.length ; i++){
	dt[i].onmouseleave=function () {
	  var num1=1;
      clearInterval(timeId);
      var that=this;
      timeId=setInterval(function () {
        var stp=(num1++)*10
        if(stp<=360){
          that.style.transform='rotate(' + (-stp) + 'deg)';
        }else{
          that.style.transform='rotate(' + 360 + 'deg)';
          clearInterval(timeId)
        }
      },1)

    }
}





}













