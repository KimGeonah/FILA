


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
const item = document.querySelectorAll('.items_box .item ')
const itemPhoto = document.querySelectorAll('.items_box .item .photo')
const body = document.querySelector('.items_box')
const changeName = document.querySelectorAll('.info_box .info .name')
const changePrice = document.querySelectorAll('.info_box .info .price')



iconLarge.addEventListener('click',()=>{
    body.style.height = '2700px';
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
    body.style.height = '2300px';
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

import data from './js/data.js';
const { items, info } = data;



const itemList = document.querySelectorAll('.item_list li')

for(let i=0; i<itemList.length; i++){
    
    const item = itemList[i];

    const itemPhoto = item.querySelector('.photo a img')
    const itemGender = item.querySelector('.info_box .info .gender')
    const itemName = item.querySelector('.info_box .info .name')
    const itemPrice = item.querySelector('.info_box .info .price')



    itemPhoto.setAttribute('src',items[i].src)


    itemPhoto.addEventListener('mouseover', function() {
        itemPhoto.setAttribute('src',items[i].srchover)

    });

    itemPhoto.addEventListener('mouseout', function() {
        itemPhoto.setAttribute('src',items[i].src)
    });




    itemGender.textContent = items[i].gender
    itemName.textContent = items[i].name
    itemPrice.textContent = items[i].price



} 



/* pagination  ------------------------------------------------- */

const pagination = document.querySelectorAll('.pagination ul li')

pagination.forEach(function(page) {
    page.addEventListener('click', function() {
        pagination.forEach(function(page) {
            page.classList.remove('page_active')
        })

        this.classList.add('page_active')
    })
})




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
 
 genderChk01.addEventListener('change', updateGender);
 genderChk02.addEventListener('change', updateGender);
 
 
 
 //[sort:바닐라] color 필터  -------------------------------------------------

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
 
 color01.addEventListener('change', updateColor);
 color02.addEventListener('change', updateColor);
 color03.addEventListener('change', updateColor);
 color04.addEventListener('change', updateColor);
 color05.addEventListener('change', updateColor);
 color06.addEventListener('change', updateColor);
 