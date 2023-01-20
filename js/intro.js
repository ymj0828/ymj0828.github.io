$(() => {

    $('video').trigger('pause')

    $('.cont').mouseenter(function(){
        $('video',this).trigger('play')
    })
    $('.cont').mouseleave(function(){
        $('video',this).trigger('pause')
    })


    $('.see').click(function(){
        $(this).children('a').attr('href',`./sub${parseInt((Math.random()*2)+1)}.html`)
    })
    $('.eat').click(function(){
        $(this).children('a').attr('href',`./sub${parseInt((Math.random()*2)+3)}.html`)
    })
    $('.enjoy').click(function(){
        $(this).children('a').attr('href',`./sub${parseInt((Math.random()*2)+5)}.html`)
    })

})



