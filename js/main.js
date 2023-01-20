////////// 컨텐츠2 데이터 ///////////////
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
}; ////////// 컨텐츠2 데이터 ///////////////

$(() => {
    history.scrollRestoration = "manual"

    setTimeout(headopa,3000) ////// 로딩되면 3초후에 헤더가 나타남
            
    let section = $('.content')
    let secIndex = 0;
    let windowHeight = $(window).innerHeight()
    let isWheel = false ///// 빠른 스크롤 방지
    section.css({height:windowHeight})

    console.log(section.length)

    window.addEventListener('mousewheel', wheelWindow)

    function wheelWindow(e){
        if(e.wheelDelta <= -120 && isWheel==false && secIndex < section.length-1){
            isWheel=true; ///// 빠른 스크롤 방지
            secIndex++;
            scrollSlide(secIndex)
            headopa()
        }else if(e.wheelDelta >= 120 && isWheel==false && secIndex > 0){
            isWheel=true; ///// 빠른 스크롤 방지
            secIndex--;
            scrollSlide(secIndex)
            headopa()
        }
    }
    
    // 빠른 스크롤 방지 기능 포함
    function scrollSlide(index){
        $('body, html').stop().animate({scrollTop:windowHeight*index},1000,'easeOutCubic', function(){
            isWheel=false;
        })
    }

    function headopa(){
        if (secIndex > 0) {
            $("header").css({backgroundColor:"rgba(255, 255, 255, 0.6)"})
        }
        else {
            $("header").css({backgroundColor:"#fff"})
        }
        $('header a').mouseover(function(){
            $(this).css({color:'#5e2bb8'})
        })
        $('header a').mouseleave(function(){
            $('header a').css({color:'#000'})
        })
    }


    $('.snsa').click(function (e) {

        // a요소 기본이동막기
        e.preventDefault();
        // JS의 return false와 효과동일
        // 단, return false는 코드 맨아래 위치함!

        // 1. 클릭된 a요소의 텍스트읽기
        let atxt = $(this).text().trim();
        // trim() 앞뒤공백제거
        console.log(atxt)

        // 2. 이동할 페이지 주소할당하기
        let url;
        switch (atxt) {
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

        // 3. 페이지 이동하기
            window.open().location.href = url;

    }); ///////////// sns 페이지 이동하기 ///////////////



    let fast = 0; // 1-불허용, 0-허용
    let block = 0;
    $('.mobtn').click(function(){
        /// 광클금지 ////////
        if (fast) return;
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
    


    const btns = document.querySelectorAll('.recomtxt li')

    btns.forEach((ele)=>{

        ele.onclick = ()=>{
            
            btns.forEach((del)=>{
                del.classList.remove('on')
            });
            
            ele.classList.add('on');
            
            const btxt = ele.getAttribute('value');
            const data = con2data[btxt];
            
            for(let z in data){

                switch(z){
                case "사진1": $("#travel1 .img").html(`<img src="../images/content2_${data[z]}.jpg" alt="포스터">`);
                    break;
                case "패키지1": $('#travel1 .text1 span').text(data[z]);
                    break;
                case "여행지1": $('#travel1 .text2 strong').text(data[z]);
                    break;
                case "해시태그1": $('#travel1 .text2 p').text(data[z]);
                    break;
                case "금액1": $('#travel1 .text3 strong').text(data[z]);
                    break;
                case "사진2": $("#travel2 .img").html(`<img src="../images/content2_${data[z]}.jpg" alt="포스터">`);
                    break;
                case "패키지2": $('#travel2 .text1 span').text(data[z]);
                    break;
                case "여행지2": $('#travel2 .text2 strong').text(data[z]);
                    break;
                case "해시태그2": $('#travel2 .text2 p').text(data[z]);
                    break;
                case "금액2": $('#travel2 .text3 strong').text(data[z]);
                    break;
                case "사진3": $("#travel3 .img").html(`<img src="../images/content2_${data[z]}.jpg" alt="포스터">`);
                    break;
                case "패키지3": $('#travel3 .text1 span').text(data[z]);
                    break;
                case "여행지3": $('#travel3 .text2 strong').text(data[z]);
                    break;
                case "해시태그3": $('#travel3 .text2 p').text(data[z]);
                    break;
                case "금액3": $('#travel3 .text3 strong').text(data[z]);
                    break;
                } ////////////// switch ////////////////
    
            } /////////////// for문 ///////////////////

        }; ////////////// onclick 이벤트 /////////////////

    }) ////////////// forEach ////////////////////////
    



    // 이벤트 대상: .abtn
    // 이벤트 : click() 메서드 사용
    // 양쪽버튼 구분 : .ab1(왼쪽버튼) / .ab2(오른쪽버튼)
    // 변경대상: #slide
    // 변경내용: 슬라이드의 left값을 이동하여 애니메이션함!
    let slide = $("#slide");

    // 변경에 사용할 제이쿼리 메서드: 
    // animate({CSS속성},시간,이징,함수)

    // 광클 금지상태변수
    let prot = 0; // 1-불허용, 0-허용

    // 애니메이션 시간 변수
    const aniT = 400;

    // 애니메이션 이징 변수
    const aniE = "easeInOutQuint";

    let pause = $(".pause");

    let isPlay = 0;

    function slideplay(){
        let color = slide.children().first().attr('data-bgc')
        let slindex = slide.children().first().attr('data-seq')
        console.log(color)
        console.log(slindex)
            
        $('#content1').css({backgroundColor:color})
        $('#content1 .control span').text(`${slindex}/${slide.children().length}`)
    }


    $(".abtn").click(function () {

        /// 광클금지 ////////
        if (prot) return;
        prot = 1; //잠금!
        unprot = setTimeout(() => prot = 0, aniT);
        // 0.4초후 prot=0 잠금해제!

        // 1. 오른쪽여부
        // is(클래스/아이디명) -> 선택요소해당여부 리턴
        let isNext = $(this).is(".next");
        let isPrev = $(this).is(".prev");

        // 2. 버튼별 분기하여 기능구현
        if (isNext) { // 오른쪽버튼
            slide.animate({
                left: "-100%"
            }, aniT, aniE, function (){ // 이동후 실행함수
                    // append(요소) 
                    // -> 자식요소로 맨뒤추가(이동)
                    
                    $(this).append($("li", this).first())
                        // 첫번째 li요소선택-> 맨뒤로 이동!
                        // $(요소,this) -> 나자신 하위요소
                        // first() 첫번째 요소
                    .css({
                        left: "0"
                    });
                        console.log($(this))
                    slideplay()
                    clearAuto();

                }); ///////// animate ///////

        } /////////// if ///////////
        else if(isPrev) { // 왼쪽버튼
            // 맨뒤요소를 맨앞에 이동
            slide
                .prepend(slide.find("li").last())
                // prepend(요소) 자식요소로 앞에 추가(이동)
                // find(요소) 자손요소찾기
                // last() 마직막요소

                // 동시에 left값 -100%
                .css({
                    left: "-100%"
                })
                // 그후 left값 0으로 애니메이션
                .animate({
                        left: "0"
                    }, aniT, aniE
                    
                ); ////// animate //////
                slideplay()
                clearAuto();
        } 
        else {
            if(isPlay==0){
                stopPlay();
                pause.addClass('play')
                isPlay=1;
                clearAuto();
            }
            else{
                pause.removeClass('play')
                isPlay=0;
                clearAuto();
            }
        }

    }); /////////// click /////////////

    // 인터발용변수
    let autoI;

    // 타임아웃용변수
    let autoT;

    // 인터발 최초호출!
    autoSlide();

    // 인터발 호출함수 ///////
    function autoSlide() {

        autoI = setInterval(() => {

            // 슬라이드 넘기기
            slide.animate({
                    left: "-100%"
                }, aniT, aniE,
                function () {
                    $(this)
                        .append($("li", this).first())
                        .css({
                            left: "0"
                        });

                        slideplay()

                }); ///// animate /////

        }, 3000); ///// 인터발함수 ///

    } ////////// autoSlide함수 ///////

    //// 인터발 지우기 함수 ///////
    function clearAuto(){
        // 인터발지우기
        clearInterval(autoI);
        // 타임아웃지우기(실행쓰나미방지!)
        clearTimeout(autoT);

        console.log('isplay:',isPlay)
        // 일정시간후 다시 인터발호출!
        if(isPlay==0){
            autoT = setTimeout(autoSlide,400);
        }


    } ///////// clearAuto함수 ///////////

    function stopPlay(){
        clearInterval(autoI);
        clearTimeout(autoT);
    }

    

}); 