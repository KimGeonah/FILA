


// [제이쿼리]wingbanner------------------------------------------

const moveTop = document.querySelector('#moveTop');
const moveBottom = document.querySelector('#moveBottom');

moveTop.addEventListener('click', () => {
  const scrollInterval = setInterval(() => {
    if (window.scrollY === 0) {
      clearInterval(scrollInterval);
    } else {
      window.scrollBy(0, -100);
    }
  }, 16);
});

moveBottom.addEventListener('click', () => {
  const scrollInterval = setInterval(() => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
      clearInterval(scrollInterval);
    } else {
      window.scrollBy(0, 100);
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







/* [sort] 왼쪽 필터 클릭시 아이콘 변경/ 필터바 펼침---------------------------------------------- */

const sortBtn = document.querySelector("#sort");
const sortBtnIcon = document.querySelector("#sort i");
const sortContent = document.querySelector("#sort_content");

sortBtn.addEventListener('click',()=>{
    if(sortContent.style.height == '0px'){
        sortContent.style.height = '330px';
        sortBtnIcon.setAttribute('class','fas fa-plus')
    }else{
        sortContent.style.height = '0px';
        sortBtnIcon.setAttribute('class','fas fa-minus')
    }
})


/* [sort] 오른쪽 아이콘 색상 변경------------------------------------------------------------- */



const icons = $('.sort_icon i')

icons.click(function(){
    icons.removeClass('icon_active')
    $(this).addClass('icon_active')
})


/* [sort] 아이템 3칸 / 4칸 변경------------------------------------------------------------- */


const iconLarge = document.querySelector('.sort_icon .fa-th-large')
const iconSmall = document.querySelector('.sort_icon .fa-th')
const body = document.querySelector('.items_box')
const changePrice = document.querySelectorAll('.info_box .info .price')
const item = document.querySelectorAll('.items_box .item ')
const itemPhoto = document.querySelectorAll('.items_box .item .photo')
const changeName = document.querySelectorAll('.info_box .info .name')



iconLarge.addEventListener('click',()=>{
    item.forEach((el) => {
        el.style.width = '340px';
    });
    itemPhoto.forEach((el) => {
        el.style.width = '340px';
    });
    changeName.forEach(element => {
        element.style.fontSize = '15px';
        });
});

iconSmall.addEventListener('click',()=>{
    item.forEach((el)=>{
        el.style.width ='268px'
    })
    itemPhoto.forEach((el) => {
        el.style.width = '268px';
    });
    changeName.forEach(element => {
    element.style.fontSize = '13px';
    });

})






/* [item] data 필터 / mouseover 썸네일변경 ------------------------------------------------- */

import data from './data.js';
const { items, info } = data;



const itemList = document.querySelectorAll('.item_list li')

for(let i=0; i<itemList.length; i++){
    
    const item = itemList[i];

    const itemPhoto = item.querySelector('.photo a img')
    const itemGender = item.querySelector('.info_box .info .gender')
    const itemName = item.querySelector('.info_box .info .name')
    const itemPrice = item.querySelector('.info_box .info .price')
  
    //썸네일 이미지
    itemPhoto.setAttribute('src',items[i].src)

    //변경되는 썸네일 이미지
    itemPhoto.addEventListener('mouseover', function() {
        itemPhoto.setAttribute('src',items[i].srchover)

    });

    //마우스 나갈때 기본이미지 변경
    itemPhoto.addEventListener('mouseout', function() {
        itemPhoto.setAttribute('src',items[i].src)
    });



    //서브페이지 데이터정보 받아옴
    itemGender.textContent = items[i].gender
    itemName.textContent = items[i].name
    itemPrice.textContent = items[i].price



} 




/* pagination  ------------------------------------------------- */

/* const pagination = document.querySelectorAll('.pagination ul li')

pagination.forEach(function(page) {
    page.addEventListener('click', function() {
        pagination.forEach(function(page) {
            page.classList.remove('page_active')
        })

        this.classList.add('page_active')
    })
})
 */







 //[sort:바닐라] 카테코리 필터  -------------------------------------------------


 const allChk01 = document.querySelector('#all_chk01'); //아우터
 const allChk02 = document.querySelector('#all_chk02'); //티셔츠
 const allChk03 = document.querySelector('#all_chk03'); //반바지
 const allChk04 = document.querySelector('#all_chk04'); //바람막이
 const allChk05 = document.querySelector('#all_chk05'); //트레이닝 세트
 const allChk06 = document.querySelector('#all_chk06'); //스윔웨어
 
 
 function updateAll() {
   for (let i = 0; i < itemList.length; i++) {
     const item = itemList[i];
     if (allChk01.checked || allChk02.checked || allChk03.checked || allChk04.checked || allChk05.checked|| allChk06.checked) {
       if ((allChk01.checked && items[i].type === '아우터') ||
           (allChk02.checked && items[i].type === '티셔츠') ||
           (allChk03.checked && items[i].type === '반바지') ||
           (allChk04.checked && items[i].type === '바람막이') ||
           (allChk05.checked && items[i].type === '트레이닝')||
           (allChk06.checked && items[i].type === '스윔웨어')) {
         item.style.display = 'block';
       } else {
         item.style.display = 'none';
       }
     } else {
       item.style.display = 'block';
     }
   }
 }
 
 allChk01.addEventListener('click', updateAll);
 allChk02.addEventListener('click', updateAll);
 allChk03.addEventListener('click', updateAll);
 allChk04.addEventListener('click', updateAll);
 allChk05.addEventListener('click', updateAll);
 allChk06.addEventListener('click', updateAll);
 



 
 //[sort:바닐라] 스포츠 필터  -------------------------------------------------

 const sportChk01 = document.querySelector('#sport_chk01'); //테니스
 const sportChk02 = document.querySelector('#sport_chk02'); //러닝
 const sportChk03 = document.querySelector('#sport_chk03'); //라이프스타일
 
 
 
 function updateSport() {
   for (let i = 0; i < itemList.length; i++) {
     const item = itemList[i];
     if (sportChk01.checked || sportChk02.checked || sportChk03.checked) {
       if ((sportChk01.checked && items[i].sport === '테니스') ||
           (sportChk02.checked && items[i].sport === '러닝') ||
           (sportChk03.checked && items[i].sport === '라이프스타일')) {
         item.style.display = 'block';
       } else {
         item.style.display = 'none';
       }
     } else {
       item.style.display = 'block';
     }
   }
 }
 
 sportChk01.addEventListener('click', updateSport);
 sportChk02.addEventListener('click', updateSport);
 sportChk03.addEventListener('click', updateSport);
 



 //[sort:바닐라] 색상 필터  -------------------------------------------------

 const color01 = document.querySelector('#color_01'); //white
 const color02 = document.querySelector('#color_02'); //beige
 const color03 = document.querySelector('#color_03'); //grey
 const color04 = document.querySelector('#color_04'); //green
 const color05 = document.querySelector('#color_05'); //blue
 const color06 = document.querySelector('#color_06'); //black
 

 
  function updateColor() {
   for (let i = 0; i < itemList.length; i++) {
     const item = itemList[i];
     if (color01.checked || color02.checked || color03.checked || color04.checked || color05.checked|| color06.checked) {
       if ((color01.checked && items[i].color === 'white') ||
           (color02.checked && items[i].color === 'beige') ||
           (color03.checked && items[i].color === 'grey') ||
           (color04.checked && items[i].color === 'green') ||
           (color05.checked && items[i].color === 'blue')||
           (color06.checked && items[i].color === 'black')) {
         item.style.display = 'block';
       } else {
         item.style.display = 'none';
       }
     } else {
       item.style.display = 'block';
     }
   }
 }
 
 color01.addEventListener('click', updateColor);
 color02.addEventListener('click', updateColor);
 color03.addEventListener('click', updateColor);
 color04.addEventListener('click', updateColor);
 color05.addEventListener('click', updateColor);
 color06.addEventListener('click', updateColor);
 

 //[sort:바닐라] 스타일 필터  -------------------------------------------------

 const styleChk01 = document.querySelector('#style_01'); //레귤러핏
 const styleChk02 = document.querySelector('#style_02'); //컴포트핏
 const styleChk03 = document.querySelector('#style_03'); //오버핏
 
 
 
 function updateStyle() {
   for (let i = 0; i < itemList.length; i++) {
     const item = itemList[i];
     if (styleChk01.checked || styleChk02.checked || styleChk03.checked) {
       if ((styleChk01.checked && items[i].style === '레귤러핏') ||
           (styleChk02.checked && items[i].style === '컴포트핏') ||
           (styleChk03.checked && items[i].style === '오버핏')) {
         item.style.display = 'block';
       } else {
         item.style.display = 'none';
       }
     } else {
       item.style.display = 'block';
     }
   }
 }
 
 styleChk01.addEventListener('click', updateStyle);
 styleChk02.addEventListener('click', updateStyle);
 styleChk03.addEventListener('click', updateStyle);





 //[sort:바닐라] 가격 필터  -------------------------------------------------




 const priceChk01 = document.querySelector('#price_chk01'); //39,000이하
 const priceChk02 = document.querySelector('#price_chk02'); //39 - 49
 const priceChk03 = document.querySelector('#price_chk03'); //49 - 59
 const priceChk04 = document.querySelector('#price_chk04'); //59 - 79
 const priceChk05 = document.querySelector('#price_chk05'); //79 이상
 

 
 
 function updateprice() {
   for (let i = 0; i < itemList.length; i++) {
     const item = itemList[i];
     if (priceChk01.checked || priceChk02.checked || priceChk03.checked || priceChk04.checked|| priceChk05.checked) {
       if ((priceChk01.checked && items[i].priceNum <=39000) ||
           (priceChk02.checked && 39000 < items[i].priceNum && items[i].priceNum <= 49000) ||
           (priceChk03.checked && 49000 < items[i].priceNum && items[i].priceNum <= 59000) ||
           (priceChk04.checked && 59000 < items[i].priceNum && items[i].priceNum <= 79000) ||
           (priceChk05.checked && 79000 < items[i].priceNum )) {
         item.style.display = 'block';
       } else {
         item.style.display = 'none';
       }
     } else {
       item.style.display = 'block';
     }
   }
 }
 
 priceChk01.addEventListener('click', updateprice);
 priceChk02.addEventListener('click', updateprice);
 priceChk03.addEventListener('click', updateprice);
 priceChk04.addEventListener('click', updateprice);
 priceChk05.addEventListener('click', updateprice);5







 //[sort:바닐라] gender필터  -------------------------------------------------
 const genderChk01 = document.querySelector('#gender_chk01');
 const genderChk02 = document.querySelector('#gender_chk02');
 //const itemList = document.querySelectorAll('.item_list li');
 
 function updateGender() {
   for (let i = 0; i < itemList.length; i++) {
     const item = itemList[i];
     if (genderChk01.checked && genderChk02.checked) {
       if (items[i].gender === '남자' || items[i].gender === '공용') {
         item.style.display = 'block';
       } else {
         item.style.display = 'none';
       }
     } else if (genderChk01.checked) {
       if (items[i].gender === '남자') {
         item.style.display = 'block';
       } else {
         item.style.display = 'none';
       }
     } else if (genderChk02.checked) {
       if (items[i].gender === '공용') {
         item.style.display = 'block';
       } else {
         item.style.display = 'none';
       }
     } else {
       item.style.display = 'block';
     }
   }
 }
 
 genderChk01.addEventListener('click', updateGender);
 genderChk02.addEventListener('click', updateGender);
 
 
 









  //[sort:바닐라] 카테코리 필터 초기화  -------------------------------------------------


  
  const resetButtons = [
    { btn: document.querySelector('.list_all h3 i'), chk: document.querySelectorAll('.list_all .all_chk') },
    { btn: document.querySelector('.list_sport h3 i'), chk: document.querySelectorAll('.list_sport .sport_chk') },
    { btn: document.querySelector('.list_color h3 i'), chk: document.querySelectorAll('.list_color .color_chk') },
    { btn: document.querySelector('.list_style h3 i'), chk: document.querySelectorAll('.list_style .style_chk') },
    { btn: document.querySelector('.list_price h3 i'), chk: document.querySelectorAll('.list_price .price_chk') },
    { btn: document.querySelector('.list_gender h3 i'), chk: document.querySelectorAll('.list_gender .gender_chk') }
  ];


  
  resetButtons.forEach(({ btn, chk }) => {
    btn.addEventListener('click', () => {
      chk.forEach(chk => chk.checked = false);
      itemList.forEach(item => item.style.display = 'block');
    });
  });
  