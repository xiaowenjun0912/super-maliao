var lb = document.getElementById('lb');
    var uls = document.getElementById('uls');
    var imgWd = lb.offsetWidth;
    var img11 = uls.offsetLeft;
    
    lb.onmouseenter=function(){
        clearInterval(uls.timerId);
    }
    lb.onmouseleave=function(){
        animate(uls);
    }
    animate(uls);
    
    function animate(ele) {
            
            // clearInterval(ele.timerId);
        //设置计时器
        ele.timerId = setInterval(function () {
    
                var currentLeft = ele.offsetLeft;
                //设置步长并计算
                currentLeft -= 1;

                //赋值
                if (currentLeft < -3200) {
                    ele.style.left = -1 + "px";
                } else {
                    ele.style.left = currentLeft + "px";
                }

            }, 13);
        }