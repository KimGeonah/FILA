/* DB 연결 ------------------------------------------------------------------------ */

import data from './data.js';

const { items, info,guest } = data;


//데이터 출력 확인
for (let i = 0; i < info.length; i++) {
    console.log(info[i].id)
    console.log(info[i].pw)
    console.log(info[i].name)
    console.log(info[i].year)
    console.log(guest[i].name)
    console.log(guest[i].order)
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



  
  
  
/*팝업창 기능------------------------------------------------------------------------ */

const popupBtn = document.querySelector('.popup_box .popup_btn');
const popupInfo = document.querySelector('.popup_box .popup_info');
let state = false;

popupBtn.addEventListener('click', () => {
  if (state === true) {
    popupInfo.style.visibility = 'visible';
    state = false;
  } else {
    popupInfo.style.visibility = 'hidden';
    state = true;
  }
});
  









// [제이쿼리] info_tab ------------------------------- 

const tabs = $('.info_tab .tab');
const contents = $('.info_tab .content');

tabs.each((index, tab) => {
  $(tab).on('click', () => {
    tabs.removeClass('active01');
    contents.removeClass('active01');

    $(tab).addClass('active01');
    contents.eq(index).addClass('active01');
  });
});


// [바닐라] 아이디찾기 ------------------------------- 

const userId = document.querySelector('.content01 .user_id')
const userYear = document.querySelector('.content01 .user_year')
const findBtn = document.querySelector('.content01 .login01');


findBtn.addEventListener('click', function() {
  if(userId.value == '' || userYear.value == ''){
    alert('모든 항목을 입력해주세요.')
  } else {
    let found = false;
    for(let i=0; i<info.length ; i++){
      if(info[i].name == userId.value && info[i].year == userYear.value){
        alert(`${info[i].name}님의 아이디는 ${info[i].idtext} 입니다.`)
        found = true;
        break;
      }
    }
    if(!found){
      alert('잘못된 정보를 입력하셨습니다.')
    }
  }
  userId.value = '';
  userYear.value = '';
  userId.focus();
});


// [바닐라] 비밀번호찾기 ------------------------------- 


const userName02 = document.querySelector('.content02 .user_name')
const userYear02 = document.querySelector('.content02 .user_year')
const userId02 = document.querySelector('.content02 .user_id')
const findBtn02 = document.querySelector('.content02 .login01');


findBtn02.addEventListener('click', function() {
  if(userName02.value == '' || userYear02.value == '' || userId02.value == ''){
    alert('모든 항목을 입력해주세요.')
  } else {
    let found = false;
    for(let i=0; i<info.length ; i++){
      if(info[i].name == userName02.value && info[i].year == userYear02.value && info[i].idtext == userId02.value){
        alert(`${info[i].name}님의 비밀번호는 ${info[i].pw} 입니다.`)
        found = true;
        break;
      }
    }
    if(!found){
      alert('잘못된 정보를 입력하셨습니다.')
    }
  }
  userName02.value = '';
  userYear02.value = '';
  userId02.value = '';
  userName02.focus();
});



// [바닐라] 비회원 주문조회 ------------------------------- 


const userName03 = document.querySelector('.content03 .user_name')
const userYear03 = document.querySelector('.content03 .user_year')
const findBtn03 = document.querySelector('.content03 .login01');


findBtn03.addEventListener('click', function() {
  if(userName03.value == '' || userYear03.value == ''){
    alert('모든 항목을 입력해주세요.')
  } else {
    let found = false;
    for(let i=0; i<info.length ; i++){
      if(guest[i].name == userName03.value && guest[i].order == userYear03.value ){
        alert(`${guest[i].name}님의 상품은 ${guest[i].state} 입니다.`)
        found = true;
        break;
      }
    }
    if(!found){
      alert('비회원 정보가 존재하지 않습니다.')
    }
  }
  userName03.value = '';
  userYear03.value = '';
  userName03.focus();
});


// [바닐라] 엔터기능 ------------------------------- 




userYear.addEventListener('keydown',function(event){
  if(event.key === 'Enter'){
    event.preventDefault();
    findBtn.click()
  }
})



userId02.addEventListener('keydown',function(event){
  if(event.key === 'Enter'){
    event.preventDefault();
    findBtn02.click()
  }
})


userYear03.addEventListener('keydown',function(event){
  if(event.key === 'Enter'){
    event.preventDefault();
    findBtn03.click()
  }
})









