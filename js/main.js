

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
    //lnbMenuWrap.style.height = '0px'
    //lnbMenuWrap.style.zIndex = '-1'
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
        $(".header_outer").css("background-color", "#504e4e38");
    }
});








// swiper_main------------------------------------------

const swiper01 = new Swiper(".swiper_main", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    clickable: true,
  },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});





// swiper_ranking(제이쿼리)------------------------------------------



const rankingTab = $('.swiper_ranking .swiper_tap ul li')
const titles = ['#신발', '#의류', '#악세사리', '#KIDS'];
const bulletSets = [
  ["01 휠라 스캔라인", "02 휠라 스피드서브T9", "03 휠라 레인저22", "04 휠라 디스럽터2 1998", "05 휠라 RGB 플로트 2.0", "06 휠라 트라조러스 N3"],
  ["01 휠라 쿨링 트레이닝 팬츠", "02 베이직 리니어 반팔티", "03 휠라 티핑 퍼포먼스 티셔츠", "04 클로벌 파리바오픈 티셔츠", "05 휠라 빅로고 반팔티셔츠", "06 휠라 트라조러스 크롭티셔츠"],
  ["01 F로고 코트캡", "02 테니스 타월", "03 테니스 심플 썬캡", "04 테니스 소프트 볼캡", "05 HERITAGE 헤어밴드", "06 휠라 베이직 월렛"],
  ["01 마린 크래픽 셋업", "02 휠라X수수진 플레이풀 셔츠", "03 물놀이 긴팔 셋업", "04 아쿠아 래쉬가드 셋업", "05 물놀이 여아 셋업", "06 스몰로고 기능성 티셔츠"]
];

const imageSets = [
  ['./img/ranking_tab01_01.jpg', './img/ranking_tab01_02.jpg', './img/ranking_tab01_03.jpg', './img/ranking_tab01_04.jpg', './img/ranking_tab01_05.jpg', './img/ranking_tab01_06.jpg'],
  ['./img/ranking_tab02_01.jpg', './img/ranking_tab02_02.jpg', './img/ranking_tab02_03.jpg', './img/ranking_tab02_04.jpg', './img/ranking_tab02_05.jpg', './img/ranking_tab02_06.jpg'],
  ['./img/ranking_tab03_01.jpg', './img/ranking_tab03_02.jpg', './img/ranking_tab03_03.jpg', './img/ranking_tab03_04.jpg', './img/ranking_tab03_05.jpg', './img/ranking_tab03_06.jpg'],
  ['./img/ranking_tab04_01.jpg', './img/ranking_tab04_02.jpg', './img/ranking_tab04_03.jpg', './img/ranking_tab04_04.jpg', './img/ranking_tab04_05.jpg', './img/ranking_tab04_06.jpg']
];

let currentBulletSet = 0;

rankingTab.each(function(index) {
  $(this).click(function(){
    rankingTab.removeClass('on');
    $(this).addClass('on');
    $('.swiper_title').text(titles[index]);
    currentBulletSet = (currentBulletSet + 1) % bulletSets.length;
    swiper02.pagination.render();
    
    // 슬라이드 내용 변경
    $('.swiper_ranking .swiper-slide').each(function(slideIndex) {
      $(this).find('img').attr('src', imageSets[index][slideIndex]);
    });
  });
});

const swiper02 = new Swiper(".swiper_ranking", {
  observer:true,
  observerParents : true,
  centeredSlides: true,
  slidesPerView: 3,
  loop: true,
    autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  }, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<div class="' +
        className +
        '"><span>' +
        bulletSets[currentBulletSet][index] +
        "</span></div>"
      );
    },
  },
});





// [자바스크립트]banner------------------------------------------

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });                            
  });
  
  document.querySelectorAll('.word_box').forEach((wrapper) => io.observe(wrapper));






/* [제이쿼리] swiper_new_arrival 탭메뉴 ------------------------ */

const tabs = $('.new_arrival ul li');
const contents = $('.new_arrival .tab_content');

tabs.each((index, tab) => {
  $(tab).on('click', () => {
    tabs.removeClass('on');
    contents.removeClass('active');

    $(tab).addClass('on');
    contents.eq(index).addClass('active');
  });
});





  
// swiper_new_arrival------------------------------------------


const swiper03 = new Swiper(".swiper_new_arrival", {
  observer: true, 
  observeParents: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },

  observer:true,
  observerParents : true,

});






// magazine------------------------------------------

const imgEls = document.querySelectorAll(".magazine_list li");
let isShown = false;

// 페이지가 로드될 때 이미지의 y 속성 초기화
imgEls.forEach(img => {
  gsap.set(img, { y: 50 });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 4000 && !isShown) {
    isShown = true;
    gsap.to(imgEls[0], 1, {
      opacity: 1,
      y: 0,
      delay: 0.5,
    });
    gsap.to(imgEls[1], 1, {
      opacity: 1,
      y: 0,
      delay: 1,
    });
    gsap.to(imgEls[2], 1, {
      opacity: 1,
      y: 0,
      delay: 1.5,
    });
  }
});




// outfit------------------------------------------
 const outfitBtns = document.querySelectorAll(".outfit_btn");
const outfitInfos = document.querySelectorAll(".outfit_info");

outfitBtns.forEach((btn, index) => {
  let infoStatus = false;
  btn.addEventListener("click", () => {
    if (infoStatus == false) {
      outfitInfos[index].style.display = "block";
      infoStatus = true;
      setTimeout(() => {
        outfitInfos[index].style.display = "none";
        infoStatus = false;
      }, 1500);
    } else {
      outfitInfos[index].style.display = "none";
      infoStatus = false;
    }
  });
}); 





