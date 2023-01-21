$(() => {
	let timer;
	let tooltip=$('#tooltip');
	let path = $('svg path');

	path.mouseenter(function(e){
		let pathId = $(this).attr('id')
		switch(pathId){
			case 'BR-RJ':
				over(e, '리우데자네이루, 파라티')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'BR-SP':
				over(e, '상파울루')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'BR-PR':
				over(e, '포스두이구아수')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'BR-MS':
				over(e, '보니또')
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