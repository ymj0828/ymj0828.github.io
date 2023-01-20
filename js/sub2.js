$(() => {
  // 호출확인
  console.log("로딩완료!");

  let timer;
  let tooltip=$("#tooltip");
  let path = $('svg path');

	path.on('mouseenter',function(e){
		let pathId = $(this).attr('id')
		switch(pathId){
			case "CH-ZH":
				onOver(e, '취리히')
				$(this).on("mousemove",onMove);
				$(this).on("mouseleave",onOut);	
				break;
			case "CH-BE":
				onOver(e, '융프라우')
				$(this).on("mousemove",onMove);
				$(this).on("mouseleave",onOut);	
				break;
			case "CH-GE":
				onOver(e, '제네바')
				$(this).on("mousemove",onMove);
				$(this).on("mouseleave",onOut);	
				break;
			case "CH-VD":
				onOver(e, '몽트뢰')
				$(this).on("mousemove",onMove);
				$(this).on("mouseleave",onOut);	
				break;
			case "CH-VS":
				onOver(e, '체르마트')
				$(this).on("mousemove",onMove);
				$(this).on("mouseleave",onOut);	
		}
	})
    
	function onOver(e, name){
		tooltip.text(name).stop().show().css({"left":e.pageX+10, "top":e.pageY+10})
		timer=setTimeout(onOut,3000); // 중요) setTimerout() 함수 : 일정한시간후에 함수를 실행 
	}
	
	function onMove(e){
		tooltip.css({"left":e.pageX+10, "top":e.pageY+10});	 
		// 마우스를 움직일때도 툴팁의좌표를 마우스의 좌표의 10간격을 두고 따라다니게 지정 	
	}
	
	function onOut(){
		clearTimeout(timer); // 진행되고있는 setTimeout을 해제
		tooltip.stop().hide();

		// 마우스가 아웃되면 툴팁의 투명도를 0 으로에니메니션 주고 사라지게함 
	}

});