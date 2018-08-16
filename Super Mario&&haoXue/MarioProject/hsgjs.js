$(function(){
	//��б�ֲ�
	function xunhuan(ele){
		$(ele).animate({left:-2628},26000,"linear",function(){
		var num=$(ele)[0].offsetLeft;
		if(num==-2628){$(ele).css("left","0px");xunhuan(ele);}
		//console.log($("#out")[0].offsetLeft);
		});
	}
	function xunhuan2(ele){
		$(ele).css("left","-2628px");
		$(ele).animate({left:0},26000,"linear",function(){
			var num=$(ele)[0].offsetLeft;
			if(num==0){$(ele).css("left","-2628px");xunhuan2(ele);}
		});
	}
	xunhuan("#bigboxdh1 #out1");
	xunhuan2("#bigboxdh2 #out2");
	xunhuan("#bigboxdh3 #out3");
	xunhuan2("#bigboxdh4 #out4");
	xunhuan("#bigboxdh5 #out5");
	
	
	//���붯��
	/*$("body").click(function(){
		$("#charabox_mover1 .xhm").eq(1).addClass("hm_chara2");
		$("#charabox_mover1 .xhm").eq(0).addClass("hm_chara1");
		$("#xhm_text").addClass("xhm_text");
	});
	$("body").click(function(){
		$("#charabox_mover2 .xhm").addClass("hm_chara3");
	});
	$("body").click(function(){
		$("#charabox_mover3 .xhm").addClass("hm_chara4");
	});
	$("body").click(function(){
		$("#charabox_mover4 .xhm").addClass("hm_chara5");
	});
	$("body").click(function(){
		$("#charabox_mover5 .xhm").addClass("hm_chara6");
	});*/
	
	$(window).scroll(function () {
		if($(this).scrollTop()>=878&&$(this).scrollTop()<=$("#bigboxdh1").outerWidth(true)){
			$("#charabox_mover1 .xhm").eq(1).addClass("hm_chara2");
			$("#charabox_mover1 .xhm").eq(0).addClass("hm_chara1");
			$("#xhm_text").addClass("xhm_text");
		}else if($(this).scrollTop()>=2100&&$(this).scrollTop()<=3600){
			$("#charabox_mover2 .xhm").addClass("hm_chara3");
		}else if($(this).scrollTop()>=4300&&$(this).scrollTop()<=7300){
			$("#charabox_mover3 .xhm").addClass("hm_chara4");
		}else if($(this).scrollTop()>=7750&&$(this).scrollTop()<=10000){
			$("#charabox_mover4 .xhm").addClass("hm_chara5");
		}else if($(this).scrollTop()>=9950&&$(this).scrollTop()<=11000){
			$("#charabox_mover5 .xhm").addClass("hm_chara6");
		}
		console.log($(this).scrollTop());
	});
	
	
	
	var music = document.getElementById("music"); 
	//������Ч
	$(".dm_chara").mouseenter(function(){
		music.play();  
	});
/*	$(".dm_chara").mouseleave(function(){
		music.pause();  
	});
	*/
});