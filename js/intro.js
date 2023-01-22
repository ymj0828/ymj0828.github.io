$(() => {
  $('video').trigger('pause')

  $('.cont').mouseenter(function(){
    $('video').get($(this).index()).play()
  })

	$('.cont').mouseleave(function(){
		$('video').get($(this).index()).pause()
	})

	$('.cont').click(function(){
		$(this).children('a').attr('href',`./sub${parseInt((Math.random()*2)+$(this).index()*2+1)}.html`)
	})

})



