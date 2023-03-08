$(() => {
	let timer;
	let tooltip=$('#tooltip');
	let path = $('svg path');

	path.mouseenter(function(e){
		let pathId = $(this).attr('id')
		switch(pathId){
			case 'TR-34':
				over(e, '이스탄불')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'TR-50':
				over(e, '카파도키아')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'TR-07':
				over(e, '안탈랴')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'TR-20':
				over(e, '파묵카레')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'TR-35':
				over(e, '에페소')
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