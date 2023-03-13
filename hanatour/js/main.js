const con2data = {
	"recomtxt1": {
		"사진1": "1-1",
		"패키지1": "패키지",
		"여행지1": "홋카이도 4일 #겨울방학여행",
		"해시태그1": "#아사히야마동물원 #펭귄산책 #후라노비에이관광",
		"금액1": "1,099,000원~",
		"사진2": "1-2",
		"패키지2": "패키지",
		"여행지2": "괌 4,5,6일 #PIC #베스트셀러",
		"해시태그2": "#올인클루시브 골드카드 #70여가지 무료 액티비티",
		"금액2": "1,289,000원~",
		"사진3": "1-3",
		"패키지3": "패키지",
		"여행지3": "[스테디셀러] 제주 3일",
		"해시태그3": "#우도관광 #제주핵심명소 #현지특식 #섬여행 #감귤체험 #겨울 #동백",
		"금액3": "299,000원~",
	},
	"recomtxt2": {
		"사진1": "2-1",
		"패키지1": "패키지",
		"여행지1": "싱가포르 5일 #루지#슈퍼트리쇼",
		"해시태그1": "#4성업그레이드 #미식여행",
		"금액1": "832,500원~",
		"사진2": "2-2",
		"패키지2": "패키지",
		"여행지2": "보홀 5일 #헤난리조트 알로나비치",
		"해시태그2": "#돌핀왓칭 #푼톳 호핑투어#전신마사지 #시티투어 #특식",
		"금액2": "955,800원~",
		"사진3": "2-3",
		"패키지3": "호텔",
		"여행지3": "덕산 스플라스 리솜",
		"해시태그3": "#온수풀 #찬바람과 따뜻한 온천수 #노곤노곤",
		"금액3": "221,570원~",
	},
	"recomtxt3": {
		"사진1": "3-1",
		"패키지1": "에어텔",
		"여행지1": "방콕 자유여행 5일#수쿰빗11",
		"해시태그1": "#시내중심#체크인 후 24시간 투숙",
		"금액1": "479,000원~",
		"사진2": "3-2",
		"패키지2": "에어텔",
		"여행지2": "타이베이 자유여행 4일 #4성호텔",
		"해시태그2": "#CAESAR METRO #오전출발",
		"금액2": "499,900원~",
		"사진3": "3-3",
		"패키지3": "에어텔",
		"여행지3": "도쿄 자유여행 3~5일 #에어텔",
		"해시태그3": "#최대쇼핑몰 이온몰 전용 우대권",
		"금액3": "529,900원~",
	},
	"recomtxt4": {
		"사진1": "4-1",
		"패키지1": "패키지",
		"여행지1": "[출발확정] 규슈 3일 #베스트셀러 #료칸온천호텔히젠야",
		"해시태그1": "#월드체인특급힐튼 #온천여행 #캐널시티자유쇼핑",
		"금액1": "949,900원~",
		"사진2": "4-2",
		"패키지2": "패키지",
		"여행지2": "튀르키예(터키) 일주 8~10일 #베스트셀러",
		"해시태그2": "#이스탄불 시내호텔1박 #루프탑레스토랑 #동굴호텔",
		"금액2": "2,699,000원~",
		"사진3": "4-3",
		"패키지3": "패키지",
		"여행지3": "하와이 6/7일 #[초특급]트럼프와이키키",
		"해시태그3": "#디럭스오션뷰UP #럭셔리콘도미니엄",
		"금액3": "2,421,600원~",
	}
};

$(() => {

	$('header').css({height:'80px'})
	$('header').css({transition:'height 1s 3s ease-in'})

  history.scrollRestoration = "manual"

  setTimeout(headopa,3000)

	let section = $('.content')
	let secIndex = 0;
	let windowHeight = $(window).innerHeight()
	let isWheel = false
	section.css({height:windowHeight})

  window.addEventListener('mousewheel', wheelWindow)

	function wheelWindow(e){
		if(e.wheelDelta <= -120 && isWheel == false && secIndex < section.length-1){
			isWheel = true;
			secIndex++;
			scrollSlide(secIndex, 1000)
			headopa()
		}else if(e.wheelDelta >= 120 && isWheel == false && secIndex > 0){
			isWheel = true;
			secIndex--;
			scrollSlide(secIndex, 1000)
			headopa()
		}
	}

  function scrollSlide(index, time){
		$('body, html').stop().animate({scrollTop:windowHeight*index}, time, 'easeOutCubic', function(){
			isWheel = false;
		})
  }

	function headopa(){
		if(secIndex > 0){
			$("header").css({backgroundColor:"rgba(255, 255, 255, 0.6)"})
		}
		else{
			$("header").css({backgroundColor:"#fff"})
		}
		
		$('header a').mouseover(function(){
			$(this).css({color:'#5e2bb8'})
		})
		$('header a').mouseleave(function(){
			$('header a').css({color:'#000'})
		})
	}


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
		if (fast) return;
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
    

  const btns = document.querySelectorAll('.recomtxt li')

  btns.forEach((ele)=>{

    ele.addEventListener('click', ()=>{

			btns.forEach((del)=>{
				del.classList.remove('on')
			});
      ele.classList.add('on');

			const btxt = ele.getAttribute('value');
			const data = con2data[btxt];
            
			for(let z in data){
				switch(z){
				case "사진1": $("#travel1 .img").html(`<img src="../hanatour/images/content2_${data[z]}.jpg" alt="추천여행포스터">`);
					break;
				case "패키지1": $('#travel1 .text1 span').text(data[z]);
					break;
				case "여행지1": $('#travel1 .text2 strong').text(data[z]);
					break;
				case "해시태그1": $('#travel1 .text2 p').text(data[z]);
					break;
				case "금액1": $('#travel1 .text3 strong').text(data[z]);
					break;
				case "사진2": $("#travel2 .img").html(`<img src="../hanatour/images/content2_${data[z]}.jpg" alt="추천여행포스터">`);
					break;
				case "패키지2": $('#travel2 .text1 span').text(data[z]);
					break;
				case "여행지2": $('#travel2 .text2 strong').text(data[z]);
					break;
				case "해시태그2": $('#travel2 .text2 p').text(data[z]);
					break;
				case "금액2": $('#travel2 .text3 strong').text(data[z]);
					break;
				case "사진3": $("#travel3 .img").html(`<img src="../hanatour/images/content2_${data[z]}.jpg" alt="추천여행포스터">`);
					break;
				case "패키지3": $('#travel3 .text1 span').text(data[z]);
					break;
				case "여행지3": $('#travel3 .text2 strong').text(data[z]);
					break;
				case "해시태그3": $('#travel3 .text2 p').text(data[z]);
					break;
				case "금액3": $('#travel3 .text3 strong').text(data[z]);
					break;
				}
			}
    })
  })


  let slide = $("#slide");
  let prot = 0;
  const aniT = 400;
  const aniE = "easeInOutQuint";
  let pause = $(".pause");
  let isPlay = 0;

	function slideplay(){
		let color = slide.children().first().attr('data-bgc')
		let slindex = slide.children().first().attr('data-seq')

		$('#content1').css({backgroundColor:color})
		$('#content1 .control span').text(`${slindex}/${slide.children().length}`)
	}

	$(".abtn").click(function(){
		if(prot) return;
		prot = 1;
		setTimeout(() => prot = 0, aniT);

		let isNext = $(this).is(".next");
		let isPrev = $(this).is(".prev");

		if(isNext){
			slide.animate({
				left: "-100%"
			}, aniT, aniE, function(){
				$(this).append($("li", this).first()).css({left: "0"});
				slideplay();
				clearAuto();
			})
		}
		else if(isPrev){
			slide.prepend(slide.find("li").last()).css({left: "-100%"}).animate({left: "0"}, aniT, aniE);
			slideplay();
			clearAuto();
		}
		else{
			if(isPlay == 0){
				stopPlay();
				pause.addClass('play')
				isPlay = 1;
				clearAuto();
			}
			else{
				pause.removeClass('play')
				isPlay = 0;
				clearAuto();
			}
		}
	});

  let autoI;
  let autoT;

  autoSlide();

  function autoSlide(){
		autoI = setInterval(()=>{
			slide.stop().animate({
				left: "-100%"
			}, aniT, aniE, function(){
				$(this).append($("li", this).first()).css({left: "0"});
				slideplay();
			});
		}, 3000);
  }

  function clearAuto(){
		clearInterval(autoI);
		clearTimeout(autoT);
		if(isPlay == 0){
			autoT = setTimeout(autoSlide, 400);
		}
  }

	function stopPlay(){
		clearInterval(autoI);
		clearTimeout(autoT);
	}


	$(window).resize(() => {
		windowHeight = $(window).innerHeight()
		section.css({height:windowHeight})
		scrollSlide(secIndex, 0)
	});
    
}); 