/* DB 연결 ------------------------------------------------------------------------ */

import data from './data.js';

const { items, info } = data;


//데이터 출력 확인
for (let i = 0; i < info.length; i++) {
    console.log(info[i].id)
    console.log(info[i].pw)
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



  
  
  
  
  








/* 로그인 기능 ------------------------------------------------------------------------ */

const userId = document.querySelector('.user_id')
const userPw = document.querySelector('.user_pw')
const loginBtn = document.querySelector('.login01')
const loginBtnAttr = document.querySelector('.login_btn ul li a')


loginBtn.addEventListener('click', () => {

    let loginSuccess = false;

    for (let i = 0; i < info.length; i++) {
        if (info[i].id == userId.value && info[i].pw == userPw.value) {
            alert('FILA 방문을 환영합니다')
            loginSuccess = true;
            break;
        }else if(info[i].id !== userId.value && info[i].pw == userPw.value){
            alert('아이디를 잘못 입력하셨습니다.')
            loginSuccess = true;
            loginBtnAttr.setAttribute('href', 'login.html')
        }else if(info[i].id == userId.value && info[i].pw !== userPw.value){
            alert('비밀번호를 잘못 입력하셨습니다.')
            loginSuccess = true;
            loginBtnAttr.setAttribute('href', 'login.html')
        }else if(userId.value =='' || userPw.value == '' ){
            alert('아이디와 비밀번호를 모두 입력해주세요.')
            loginSuccess = true;
            loginBtnAttr.setAttribute('href', 'login.html')
            break;
        }

    }
    if (!loginSuccess) {
        alert('잘못 입력하셨습니다.')
        loginBtnAttr.setAttribute('href', 'login.html')
    }
})






/* 패스워드 보이는 기능 ------------------------------------------------------------------------ */

const icon = document.querySelector('.fa-eye-slash')

icon.addEventListener('click', () => {
    if (icon.classList.contains('fa-eye-slash')) {
        icon.setAttribute('class', 'fas fa-eye');
        userPw.setAttribute('type', 'text')
    } else {
        icon.setAttribute('class', 'fas fa-eye-slash');
        userPw.setAttribute('type', 'password')
    }
})