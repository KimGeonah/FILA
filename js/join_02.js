/* DB 연결 ------------------------------------------------------------------------ */

import data from './data.js';
const { items, info } = data;


//데이터 출력 확인
for (let i = 0; i < info.length; i++) {
    console.log(info[i].id)
}




// [제이쿼리]wingbanner------------------------------------------

const moveTop = document.querySelector('#moveTop');
const moveBottom = document.querySelector('#moveBottom');

moveTop.addEventListener('click', () => {
  const scrollInterval = setInterval(() => {
    if (window.scrollY === 0) {
      clearInterval(scrollInterval);
    } else {
      window.scrollBy(0, -50);
    }
  }, 16);
});

moveBottom.addEventListener('click', () => {
  const scrollInterval = setInterval(() => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
      clearInterval(scrollInterval);
    } else {
      window.scrollBy(0, 50);
    }
  }, 16);
});



// menu------------------------------------------



const lnbMenuWrap = document.querySelector(".lnb_menu_wrap");
const menuLi = document.querySelector('.gnb ul') //기존 header 메뉴
const menuLiWrap = document.querySelector('.lnb_menu_wrap .gnb') //덮은 header 메뉴
const menuLiWrapli = document.querySelectorAll('.lnb_menu_wrap .gnb ul li') //덮은 header 메뉴

const lnbMenuAll = Array.from(document.querySelectorAll(".lnb_menu"));
const lnbListAll = Array.from(document.querySelectorAll(".lnb_list"));




//메뉴에 마우스 올릴때 해당하는 sheet 나옴
function handleMouseover(index) {
  lnbListAll.forEach((sheet,sheetIndex)=>{
    if(index==sheetIndex){
      sheet.style.display = "block"
    }else{
      sheet.style.display = "none"
    }
  })
}



//기존 메뉴 gnb
menuLi.addEventListener("mouseover", () => {
    lnbMenuWrap.style.display = 'block'
    lnbMenuWrap.style.backdropFilter = "blur(50px)";
    lnbMenuAll[0].style.display = 'block'
  });
  
  
  lnbMenuAll.forEach((box, index) => {
    box.addEventListener('mouseleave', function() {
      lnbMenuWrap.style.backdropFilter = "none";
      lnbMenuWrap.style.display = 'none'
      box.style.display = 'none'
    })
  })
  
  menuLiWrapli.forEach((li,index) => {
    if (li.classList.contains("women") || li.classList.contains("men") || li.classList.contains("kids") || li.classList.contains("brand")) {
      li.addEventListener("mouseover", function() {
        handleMouseover(index);
      });
    }
  });

  

  
//메인메뉴 스크롤에 따라 변화

let lastScrollTop = 0;
$(window).scroll(function() {
    let currentScrollTop = $(this).scrollTop();
    if (currentScrollTop > lastScrollTop){
        // 스크롤을 내릴 때
        $(".header_outer").slideUp();
    } else {
        // 스크롤을 올릴 때
        $(".header_outer").slideDown();
    }
    lastScrollTop = currentScrollTop;

    if (currentScrollTop == 0) {
        // 스크롤이 제일 위에 있을 때
        $(".header_outer").css("background-color", "transparent");
    } else {
        // 스크롤이 제일 위에 있지 않을 때
        $(".header_outer").css("background-color", "#fff");
    }
});



  
  
  
  

/* id 중복확인 ------------------------------------------------------------------------ */


const span = document.querySelectorAll('.info')

//비밀번호 입력아이콘
const icon = document.querySelectorAll('.fa-eye-slash')
const pw = document.querySelector('.pw')
const pwConfirm = document.querySelector('.pw_confirm')
const name = document.querySelector('.name')
const joinBtn = document.querySelector('.join_btn')

let idResult = false
let pwResult = false
let pwConfirmResult = false
let nameResult = false

const id = document.querySelector('.id')

id.addEventListener('change',()=>{
    let idCheck = false;
    for(let i=0;i<info.length;i++){
        if(info[i].id == id.value){
            alert('사용가능한 아이디입니다.')
            idCheck = true
        }
    }
    if(!idCheck){
        alert('사용중인 아이디입니다.')
        span[0].textContent = '*사용중인 아이디입니다'
        span[0].style.color = 'red'
    }
})

/* 이메일 직접입력--------------------------------------------------------------------- */

const email = document.querySelector('#mail .mail_write');
const mailSelect = document.querySelector('#mail');

email.addEventListener('click', () => {
  mailSelect.value = '';
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'mail';
  input.id = 'mail';
  mailSelect.parentNode.replaceChild(input, mailSelect);
});

   
/* 가입 기능 ------------------------------------------------------------------------ */
    


//비밀번호 확인 icon
icon[0].addEventListener('click', () => {
    if (icon[0].classList.contains('fa-eye-slash')) {
        icon[0].setAttribute('class', 'fas fa-eye');
        pw.setAttribute('type','text')

    } else {
        icon[0].setAttribute('class', 'fas fa-eye-slash');
        pw.setAttribute('type','password')
    }
})

//비밀번호 재확인 icon
icon[1].addEventListener('click', () => {
    if (icon[1].classList.contains('fa-eye-slash')) {
        icon[1].setAttribute('class', 'fas fa-eye');
        pwConfirm.setAttribute('type','text')

    } else {
        icon[1].setAttribute('class', 'fas fa-eye-slash');
        pwConfirm.setAttribute('type','password')
    }
})



//id 
id.addEventListener('input', () => {
    if(id.value == ''){
        span[0].style.opacity = '0'
        idResult = false
    }else if (id.value.length < 6 ) {
        span[0].style.opacity = '1'
        span[0].textContent = '*6-20자 영문/숫자 입력해주세요.'
        span[0].style.color = 'red'
        idResult = false
    }else {
        span[0].textContent = '*멋진 아이디네요!'
        span[0].style.color = 'rgb(0, 41, 100)'
        idResult =  true
    }
});



//pw
pw.addEventListener('input', () => {
    if(pw.value == ''){
        span[1].style.opacity = '0'
        pwResult = false
    }else if (pw.value.length < 8 ) {
        span[1].style.opacity = '1'
        span[1].textContent = '*8-16자 영문/숫자 입력해주세요.'
        span[1].style.color = 'red'
        pwResult = false
    }else {
        span[1].textContent = '*사용가능한 비밀번호입니다.'
        span[1].style.color = 'rgb(0, 41, 100)'
        pwResult = true
    }
});


//pwConfirm
pwConfirm.addEventListener('input', () => {
    if(pwConfirm.value == ''){
        span[2].style.opacity = '0'
        pwConfirmResult = false
    }else if (pw.value === pwConfirm.value){
        span[2].textContent = '*사용가능한 비밀번호입니다.'
        span[2].style.color = 'rgb(0, 41, 100)'
        pwConfirmResult = true
    }else {
        span[2].style.opacity = '1'
        span[2].textContent = '*비밀번호가 일치하지 않습니다.'
        span[2].style.color = 'red'
        pwConfirmResult = false
    }
});


//name 
name.addEventListener('input', () => {
    if (name.value.length < 2) {
        span[3].style.opacity = '1'
        nameResult = false
    }
    if (name.value.length >= 2) {
        span[3].style.opacity = '0'
        nameResult = true
    }
});

//


//사용자가 입력한 정보를 검증하고 회원 가입을 처리하는 코드
joinBtn.addEventListener('click',()=>{
    if(idResult && pwResult && pwConfirmResulte && nameResult){
        alert('가입완료')
    }else{
        alert('필수항목을 모두 입력해주세요')
        joinBtn.setAttribute('href','join_02.html')
    }
})





