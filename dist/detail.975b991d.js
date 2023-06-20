// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/detail.js":[function(require,module,exports) {
// [제이쿼리]wingbanner------------------------------------------

var moveTop = document.querySelector('#moveTop');
var moveBottom = document.querySelector('#moveBottom');
moveTop.addEventListener('click', function () {
  var scrollInterval = setInterval(function () {
    if (window.scrollY === 0) {
      clearInterval(scrollInterval);
    } else {
      window.scrollBy(0, -100);
    }
  }, 16);
});
moveBottom.addEventListener('click', function () {
  var scrollInterval = setInterval(function () {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
      clearInterval(scrollInterval);
    } else {
      window.scrollBy(0, 100);
    }
  }, 16);
});

// menu------------------------------------------

var lnbMenuWrap = document.querySelector(".lnb_menu_wrap");
var menuLi = document.querySelector('.gnb ul'); //기존 header 메뉴
var menuLiWrap = document.querySelector('.lnb_menu_wrap .gnb'); //덮은 header 메뉴
var menuLiWrapli = document.querySelectorAll('.lnb_menu_wrap .gnb ul li'); //덮은 header 메뉴

var lnbMenuAll = Array.from(document.querySelectorAll(".lnb_menu"));
var lnbListAll = Array.from(document.querySelectorAll(".lnb_list"));

//메뉴에 마우스 올릴때 해당하는 sheet 나옴
function handleMouseover(index) {
  lnbListAll.forEach(function (sheet, sheetIndex) {
    if (index == sheetIndex) {
      sheet.style.display = "block";
    } else {
      sheet.style.display = "none";
    }
  });
}

//기존 메뉴 gnb
menuLi.addEventListener("mouseover", function () {
  lnbMenuWrap.style.display = 'block';
  lnbMenuWrap.style.backdropFilter = "blur(50px)";
  lnbMenuAll[0].style.display = 'block';
});
lnbMenuAll.forEach(function (box, index) {
  box.addEventListener('mouseleave', function () {
    lnbMenuWrap.style.backdropFilter = "none";
    lnbMenuWrap.style.display = 'none';
    box.style.display = 'none';
  });
});
menuLiWrapli.forEach(function (li, index) {
  if (li.classList.contains("women") || li.classList.contains("men") || li.classList.contains("kids") || li.classList.contains("brand")) {
    li.addEventListener("mouseover", function () {
      handleMouseover(index);
    });
  }
});

//메인메뉴 스크롤에 따라 변화

var lastScrollTop = 0;
$(window).scroll(function () {
  var currentScrollTop = $(this).scrollTop();
  if (currentScrollTop > lastScrollTop) {
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

var tabs = $('.info_tab .tab');
var contents = $('.info_tab .content');
tabs.each(function (index, tab) {
  $(tab).on('click', function () {
    tabs.removeClass('active01');
    contents.removeClass('active01');
    $(tab).addClass('active01');
    contents.eq(index).addClass('active01');
  });
});

// [swiper] 메인 이미지변경----------------------------------------------

// [바닐라 자바] 수량 금액변경---------------------------------------------

var minusButton = document.querySelector('.fa-minus');
var plusButton = document.querySelector('.fa-plus');
var quantityElement = document.querySelector('.quantity_box li:nth-child(2)');
var priceElement = document.querySelector('.price_box li:nth-child(2) h4');
var unitPrice = 49000;
minusButton.addEventListener('click', function () {
  var quantity = parseInt(quantityElement.textContent);
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;
    priceElement.textContent = "".concat((quantity * unitPrice).toLocaleString(), "\uC6D0");
  }
});
plusButton.addEventListener('click', function () {
  var quantity = parseInt(quantityElement.textContent);
  if (quantity < 9) {
    quantity++;
    quantityElement.textContent = quantity;
    priceElement.textContent = "".concat((quantity * unitPrice).toLocaleString(), "\uC6D0");
  }
});

//[바닐라자바스크립트] review_tab ------------------------------- 

var reviewTabs = document.querySelectorAll('.review_tab .tab');
var reviewContents = document.querySelectorAll('.review_tab .content');
reviewTabs.forEach(function (tab, index) {
  tab.addEventListener('click', function () {
    reviewTabs.forEach(function (tab) {
      return tab.classList.remove('active02');
    });
    reviewContents.forEach(function (content) {
      return content.classList.remove('active02');
    });
    tab.classList.add('active02');
    reviewContents[index].classList.add('active02');
  });
});

//[바닐라자바스크립트] 프로그레스바 ------------------------------- 

var scrollFlag = true;
window.onscroll = function () {
  myFunction();
};
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
  var id4 = setInterval(frame4, 20);
  function frame4() {
    if (width4 >= 11) {
      clearInterval(id4);
    } else {
      width4++;
      elem4.style.width = width4 + '%';
    }
  }
  var elem5 = document.getElementById("myBar5");
  var width5 = 1;
  var id5 = setInterval(frame5, 20);
  function frame5() {
    if (width5 >= 7) {
      clearInterval(id5);
    } else {
      width5++;
      elem5.style.width = width5 + '%';
    }
  }
}

//[바닐라자바스크립트] 댓글등록 ------------------------------- 
var commentForm = document.querySelector('#comment-form');
var nicknameInput = document.querySelector('#nickname-input');
var ratingInput = document.querySelector('#rating-input');
var commentInput = document.querySelector('#comment-input');
var commentList = document.querySelector('#comment-list');
var commentInform = document.querySelector('#comment_inform p');
commentForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var nickname = nicknameInput.value.trim();
  var rating = ratingInput.value;
  var commentText = commentInput.value.trim();
  if (nickname && rating && commentText) {
    commentInform.style.display = 'none';
    var commentElement = document.createElement('li');
    commentElement.classList.add('comment');

    //실시간

    var timeElement = document.createElement('time');
    timeElement.textContent = new Date().toLocaleString();

    //이름
    var nicknameElement = document.createElement('li');
    nicknameElement.textContent = nickname;
    nicknameElement.classList.add('nickname');

    //별점
    var ratingElement = document.createElement('li');
    ratingElement.textContent = "".concat(rating);
    ratingElement.classList.add('rating');

    //댓글내용
    var commentTextElement = document.createElement('li');
    commentTextElement.textContent = " ".concat(commentText);
    commentTextElement.classList.add('commentText');

    //삭제버튼
    var deleteButton = document.createElement('button');
    deleteButton.textContent = '지우기';

    //삭제버튼 클릭이벤트
    deleteButton.addEventListener('click', function () {
      commentList.removeChild(commentElement);
    });

    //댓글 전부 지울때 안내멘트 다시 작동
    deleteButton.addEventListener('click', function () {
      if (commentList.contains(commentElement)) {
        commentList.removeChild(commentElement);
      }
      if (commentList.children.length === 0) {
        commentInform.style.display = 'block';
      }
    });
    commentElement.appendChild(timeElement); //시건
    commentElement.appendChild(nicknameElement); //이름
    commentElement.appendChild(ratingElement); //평점
    commentElement.appendChild(commentTextElement); //리뷰내용
    commentElement.appendChild(deleteButton); //삭제버튼

    commentList.appendChild(commentElement);
    nicknameInput.value = '';
    ratingInput.value = '';
    commentInput.value = '';
  }
});

//[바닐라자바스크립트] 댓글 enter 등록기능 ------------------------------- 
var textarea = document.querySelector('#comment-input');
var button = document.querySelector('.comment-btn');
textarea.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    button.click();
  }
});

//[제이쿼리] view 박스 아래에서 위로 이동------------------------------- 

var animationTriggered = true;
window.onscroll = function () {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    if (animationTriggered) {
      animateView();
      move();
      animationTriggered = false;
    }
  } else {
    animationTriggered = true;
  }
};
function animateView() {
  $('.view').animate({
    bottom: '50px',
    opacity: '1'
  }, 1500);
}

//[바닐라자바스크립트] 썸네일 사진 경로이동------------------------------- 

var liElements = document.querySelectorAll('.color_box li');
var goodsImg = document.querySelector('.goods_img img');
liElements.forEach(function (li, index) {
  li.addEventListener('click', function () {
    // Remove the 'on' class from all li elements
    liElements.forEach(function (el) {
      return el.classList.remove('on');
    });

    // Add the 'on' class to the clicked li element
    li.classList.add('on');
    var newImgSrc;
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
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52078" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/detail.js"], null)
//# sourceMappingURL=/detail.975b991d.js.map