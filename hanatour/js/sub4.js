$(() => {
	let timer;
	let tooltip=$('#tooltip');
	let path = $('svg path');

	path.mouseenter(function(e){
		let pathId = $(this).attr('id')
		switch(pathId){
			case 'VN-41':
				over(e, '호찌민')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'VN-15':
				over(e, '하노이')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'VN-HN':
				over(e, '하노이')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'VN-27':
				over(e, '다낭')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'VN-29':
				over(e, '호이안')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'VN-26':
				over(e, '후에')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
		}
	})

	function over(e, name){
		tooltip.text(name).stop().show().css({'left':e.pageX + 10, 'top':e.pageY + 10})
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