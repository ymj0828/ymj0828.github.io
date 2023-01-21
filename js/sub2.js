$(() => {
  let timer;
  let tooltip=$('#tooltip');
  let path = $('svg path');

	path.mouseenter(function(e){
		let pathId = $(this).attr('id')
		switch(pathId){
			case 'CH-ZH':
				over(e, '취리히')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'CH-BE':
				over(e, '융프라우')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'CH-GE':
				over(e, '제네바')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'CH-VD':
				over(e, '몽트뢰')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'CH-VS':
				over(e, '체르마트')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
		}
	})

	function over(e, name){
		tooltip.text(name).stop().show().css({'left':e.pageX + 10, 'top':e.pageY + 10});
		timer=setTimeout(out, 3000);
	}
	
	function move(e){
		tooltip.css({'left':e.pageX + 10, 'top':e.pageY + 10});
	}
	
	function out(){
		clearTimeout(timer);
		tooltip.stop().hide();
	}

});