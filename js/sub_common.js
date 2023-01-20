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

  $('.snsa').click(function (e) {

    e.preventDefault();

    let atxt = $(this).text().trim();
    let url;

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
    } ///////// switch case ////////

    window.open().location.href = url;

  }); ///////////// sns 페이지 이동하기 ///////////////

  let fast = 0; // 1-불허용, 0-허용
  let block = 0;
  $('.mobtn').click(function(){
    /// 광클금지 ////////
    if(fast) return;
    fast = 1; //잠금!
    setTimeout(() => fast = 0, 900);

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
  // 각 등장액션 요소변수
  const txtbxTop = [];
  // 각 등장액션 위치 배열변수
  const txtbx = $(".txtBx");
  // 각 등장액션 위치 배열변수
  const amtibx = $(".amtibx");
   // 각 등장위치 보정값(화면크기 기준)
  const gap = $(window).height();

  const amtibxTop = amtibx.offset().top

  // 스크롤 등장요소(.txtbx)만 위치값을 배열에 저장
  txtbx.each((idx, ele) => {
    
    // 위치값 변수에 넣기
    txtbxTop[idx] = $(ele).offset().top;
    console.log(txtbxTop)

  }); //////////// each ///////////////
  function scAction(n){
    if(// 등장요소 위치전 보다 크고
      scTop > txtbxTop[n] - gap + 100
    ){
      txtbx.eq(n).addClass("on");
    }else{
      txtbx.eq(n).removeClass("on");
    }/////////////// if ///////////////////
  }//////////// scAction 함수 /////////////////
  
  
  $(window).scroll(function(){
    scTop = $(this).scrollTop();

    txtbx.each((idx)=>scAction(idx));

    if(// 등장요소 위치전 보다 크고
      scTop > amtibxTop - gap + 100 && 
      scTop < amtibxTop 
    ){
      amtibx.addClass("on");
    }else{
      amtibx.removeClass("on");
    }/////////////// if ///////////////////

    
  })




});