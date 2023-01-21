$(() => {
  history.scrollRestoration = "manual"

  $('header a').mouseover(function(){
    $(this).css({color:'#5e2bb8'})
  })
  $('header a').mouseleave(function(){
    $('header a').css({color:'#000'})
  })


  window.addEventListener('mousewheel', function(e){
    if(e.wheelDelta<=-120){
      $('#mobx').css({display:'none'});
    }
  })


  $('.snsa').click(function(e){
    e.preventDefault();

    let url;
    let atxt = $(this).text().trim();

    switch(atxt){
      case "인스타그램":
        url = "https://www.instagram.com/hanatour_official/";
        break;
      case "페이스북":
        url = "https://www.facebook.com/HanaTour.fb";
        break;
      case "유튜브":
        url = "https://www.youtube.com/user/HanaTour";
        break;
    }
    window.open().location.href = url;
  });


  let fast = 0;
  let block = 0;
  $('.mobtn').click(function(){
    /// 광클금지 ////////
    if(fast) return;
    fast = 1;
    setTimeout(()=>fast = 0, 900);

    if(block){
      $('#mobx').animate({
        width:'0px',
        minWidth:'0px'
      }, 300)
      $('#mobx a').animate({
        opacity:'0'
      }, 100, ()=>$('#mobx a').css({display:'none'}))
      block = 0;
    }
    else{
      $('#mobx').css({
        display:'block'
      })
      $('#mobx').animate({
        width:'25%',
        minWidth:'120px'
      }, 300)
      $('#mobx a').animate({
        opacity:'1'
      }, 900)
      $('#mobx ul li a').css({
        display:'block'
      })
      $('#mobx .mosns a').css({
        display:'inline-block'
    })
      block = 1;
    }
  })


  let scTop;
  const txtbxTop = [];
  const txtbx = $(".txtBx");
  const amtibx = $(".amtibx");
  const gap = $(window).height();
  const amtibxTop = amtibx.offset().top

  txtbx.each((idx, ele)=>{
    txtbxTop[idx] = $(ele).offset().top;
  });

  function scAction(n){
    if(scTop > txtbxTop[n] - gap + 100){
      txtbx.eq(n).addClass("on");
    }
    else{
      txtbx.eq(n).removeClass("on");
    }
  };
  
  $(window).scroll(function(){
    scTop = $(this).scrollTop();

    txtbx.each((idx)=>scAction(idx));

    if(scTop > amtibxTop - gap + 100 && scTop < amtibxTop){
      amtibx.addClass("on");
    }else{
      amtibx.removeClass("on");
    }
  })

});