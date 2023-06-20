


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

// [swiper] 메인 이미지변경----------------------------------------------








// [바닐라 자바] 수량 금액변경---------------------------------------------

const minusButton = document.querySelector('.fa-minus');
const plusButton = document.querySelector('.fa-plus');
const quantityElement = document.querySelector('.quantity_box li:nth-child(2)');
const priceElement = document.querySelector('.price_box li:nth-child(2) h4');
const unitPrice = 49000;

minusButton.addEventListener('click', () => {
  let quantity = parseInt(quantityElement.textContent);
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;
    priceElement.textContent = `${(quantity * unitPrice).toLocaleString()}원`;
  }
});

plusButton.addEventListener('click', () => {
  let quantity = parseInt(quantityElement.textContent);
  if (quantity < 9) {
    quantity++;
    quantityElement.textContent = quantity;
    priceElement.textContent = `${(quantity * unitPrice).toLocaleString()}원`;
  }
});


//[바닐라자바스크립트] review_tab ------------------------------- 

const reviewTabs = document.querySelectorAll('.review_tab .tab');
const reviewContents = document.querySelectorAll('.review_tab .content');

reviewTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    reviewTabs.forEach(tab => tab.classList.remove('active02'));
    reviewContents.forEach(content => content.classList.remove('active02'));

    tab.classList.add('active02');
    reviewContents[index].classList.add('active02');
  });
});


//[바닐라자바스크립트] 프로그레스바 ------------------------------- 

var scrollFlag = true;

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    if (scrollFlag) {
      move();
      scrollFlag = false;
    }
  } else {
    scrollFlag = true;
  }
}

function move() {
  var elem1 = document.getElementById("myBar1");   
  var width1 = 1;
  var id1 = setInterval(frame1, 10);
  
  function frame1() {
    if (width1 >= 90) {
      clearInterval(id1);
    } else {
      width1++; 
      elem1.style.width = width1 + '%'; 
    }
  }
  
  var elem2 = document.getElementById("myBar2");   
  var width2 = 1;
  var id2 = setInterval(frame2, 10);
  
  function frame2() {
    if (width2 >= 80) {
      clearInterval(id2);
    } else {
      width2++; 
      elem2.style.width = width2 + '%'; 
    }
  }
  
  var elem3 = document.getElementById("myBar3");   
  var width3 = 1;
  var id3 = setInterval(frame3, 20);
  
  function frame3() {
    if (width3 >= 5) {
      clearInterval(id3);
    } else {
      width3++; 
      elem3.style.width = width3 + '%'; 
    }
  }
  
   var elem4 = document.getElementById("myBar4");   
   var width4 = 1;
   var id4 = setInterval(frame4,20);
   
   function frame4() {
     if (width4 >=11) {
       clearInterval(id4);
     } else {
       width4++;
       elem4.style.width = width4 + '%';
     }
   }
   
   var elem5 = document.getElementById("myBar5");
   var width5 =1;
   var id5 = setInterval(frame5,20);
   
   function frame5() {
     if (width5 >=7) {
       clearInterval(id5);
     } else {
       width5++;
       elem5.style.width = width5 + '%';
     }
   }
}



//[바닐라자바스크립트] 댓글등록 ------------------------------- 
const commentForm = document.querySelector('#comment-form');
const nicknameInput = document.querySelector('#nickname-input');
const ratingInput = document.querySelector('#rating-input');
const commentInput = document.querySelector('#comment-input');
const commentList = document.querySelector('#comment-list');
const commentInform = document.querySelector('#comment_inform p');

commentForm.addEventListener('submit', event => {
  event.preventDefault();
  
  const nickname = nicknameInput.value.trim();
  const rating = ratingInput.value;
  const commentText = commentInput.value.trim();
  
  if (nickname && rating && commentText) {

    commentInform.style.display = 'none';


    const commentElement = document.createElement('li');
    commentElement.classList.add('comment');

    
    //실시간
    
    const timeElement = document.createElement('time');
    timeElement.textContent = new Date().toLocaleString();


    //이름
    const nicknameElement = document.createElement('li');
    nicknameElement.textContent = nickname;
    nicknameElement.classList.add('nickname');
    
    //별점
    const ratingElement = document.createElement('li');
    ratingElement.textContent = `${rating}`;
    ratingElement.classList.add('rating');
    
    //댓글내용
    const commentTextElement = document.createElement('li');
    commentTextElement.textContent = ` ${commentText}`;
    commentTextElement.classList.add('commentText');
    

    //삭제버튼
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '지우기';
    

    //삭제버튼 클릭이벤트
    deleteButton.addEventListener('click', () => {
      commentList.removeChild(commentElement);
    });
    

    //댓글 전부 지울때 안내멘트 다시 작동
    deleteButton.addEventListener('click', () => {
      if (commentList.contains(commentElement)) {
        commentList.removeChild(commentElement);
      }
      if (commentList.children.length === 0) {
        commentInform.style.display = 'block';
      }
    });
    

    
    
    


    commentElement.appendChild(timeElement);//시건
    commentElement.appendChild(nicknameElement);//이름
    commentElement.appendChild(ratingElement);//평점
    commentElement.appendChild(commentTextElement);//리뷰내용
    commentElement.appendChild(deleteButton);//삭제버튼

    commentList.appendChild(commentElement);



    nicknameInput.value = '';
    ratingInput.value = '';
    commentInput.value = '';


  }
});


//[바닐라자바스크립트] 댓글 enter 등록기능 ------------------------------- 
const textarea = document.querySelector('#comment-input');
const button = document.querySelector('.comment-btn');

textarea.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    button.click();
  }
});



//[제이쿼리] view 박스 아래에서 위로 이동------------------------------- 

let animationTriggered = true;

window.onscroll = function() {
    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        if (animationTriggered) {
            animateView();
            move();
            animationTriggered = false;
        }
    } else {
        animationTriggered = true;
    }
}

function animateView() {
    $('.view').animate({bottom: '50px', opacity: '1'}, 1500);
}


//[바닐라자바스크립트] 썸네일 사진 경로이동------------------------------- 


const liElements = document.querySelectorAll('.color_box li');
const goodsImg = document.querySelector('.goods_img img');

liElements.forEach((li, index) => {
  li.addEventListener('click', () => {
    // Remove the 'on' class from all li elements
    liElements.forEach((el) => el.classList.remove('on'));

    // Add the 'on' class to the clicked li element
    li.classList.add('on');

    let newImgSrc;
    if (index === 0) {
      newImgSrc = './img/detail_img/main01.jpg';
    } else if (index === 1) {
      newImgSrc = './img/detail_img/main02.jpg';
    } else if (index === 2) {
      newImgSrc = './img/detail_img/main03.jpg';
    }
    goodsImg.src = newImgSrc;
  });
});
