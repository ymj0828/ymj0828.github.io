$(() => {
	let timer;
	let tooltip=$('#tooltip');
	let path = $('svg path');

	path.mouseenter(function(e){
		let pathId = $(this).attr('id')
		switch(pathId){
			case 'IT-62':
				over(e, '로마')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'IT-82':
				over(e, '시칠리아')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'IT-25':
				over(e, '밀라노')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'IT-34':
				over(e, '베네치아')
				$(this).mousemove(move);
				$(this).mouseout(out);
				break;
			case 'IT-52':
				over(e, '피렌체')
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