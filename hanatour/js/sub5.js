$(() => {
	let timer;
	let tooltip=$('#tooltip');
	let path = $('svg path');

	path.mouseenter(function(e){
		let pathId = $(this).attr('id')
		switch(pathId){
			case 'DE-BY':
				over(e, '뮌헨')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'DE-BE':
				over(e, '베를린')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'DE-NW':
				over(e, '쾰른')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'DE-HH':
				over(e, '함부르크')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'DE-BW':
				over(e, '슈투트가르트')
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