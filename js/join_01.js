
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



  
  
  
  
    
    

//필수 동의(2개)가 체크되면 모두동의 버튼 활성화 / 하나라도 체크가 안되면 버튼은 비활성화.
//모두 동의를 체크하지 않고 밑에 3개의 체크박스로 일일이 체크했을 때 모두 동의 체크 박스가 활성화
//반대로 모두 체크되어있는 상태에서 체크박스 하나라도 해제가 되면 모두 동의 체크 박스가 해제



document.addEventListener('DOMContentLoaded',()=>{

    const agreeTotal = document.querySelector('#agree_total')
    const agreeEl = document.querySelectorAll('.agree_chk')

    const agreeChk01 = document.querySelector('#agree_chk01')
    const agreeChk02 = document.querySelector('#agree_chk02')
    const agreeChk03 = document.querySelector('#agree_chk03')

    const btnNext = document.querySelector('.btn_next')//다음페이지 이동
    const btnNextAttr = document.querySelector('.btn ul li .next_page')//다음페이지 이동

    
    // agreeChk01-03 모두 체크되면 agreeTotal  체크, 하나라도 해제시 체크해제
    function updateAgreeTotal(){
    
        agreeTotal.checked = agreeChk01.checked && agreeChk02.checked && agreeChk03.checked
    }

    agreeChk01.addEventListener('click',updateAgreeTotal)
    agreeChk02.addEventListener('click',updateAgreeTotal)
    agreeChk03.addEventListener('click',updateAgreeTotal)

    


    //전체동의or해제
    agreeTotal.addEventListener('click',()=>{
        agreeChk01.checked = agreeChk02.checked = agreeChk03.checked = agreeTotal.checked;
    });


    //다음페이지 이동
    btnNext.addEventListener('click',(e)=>{
        if(!agreeChk01.checked || !agreeChk02.checked){
            e.preventDefault();
            alert('필수항목을 모두 동의해주세요')
        }
    });

    




    
    
    });

