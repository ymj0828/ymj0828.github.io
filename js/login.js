$(() => {

  const tabmenu_li = document.querySelectorAll('.tabmenu li')
  const input = document.querySelectorAll('.form input')
  
  tabmenu_li[1].classList.add('active')
  inputPlaceholder()

  tabmenu_li.forEach((tabmenu_li_ele_click)=>{
    
    tabmenu_li_ele_click.addEventListener('click', function(){

      tabmenu_li.forEach((tabmenu_li_ele)=>{
        tabmenu_li_ele.classList.remove('active')
      })

      tabmenu_li_ele_click.classList.add('active')

      input[0].value = ''
      input[1].value = ''
      inputPlaceholder()
      
    })
  })

  function inputPlaceholder(){
    if(tabmenu_li[1].classList.contains('active')){
      input[0].placeholder = '주문자명'
      input[1].placeholder = '주문번호'
    }else{
      input[0].placeholder = '아이디'
      input[1].placeholder = '비밀번호'
    }
  }

});