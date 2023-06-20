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
})({"js/main.js":[function(require,module,exports) {
var _Swiper;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
    //lnbMenuWrap.style.height = '0px'
    //lnbMenuWrap.style.zIndex = '-1'
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
    $(".header_outer").css("background-color", "#504e4e38");
  }
});

// swiper_main------------------------------------------

var swiper01 = new Swiper(".swiper_main", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

// swiper_ranking(제이쿼리)------------------------------------------

var rankingTab = $('.swiper_ranking .swiper_tap ul li');
var titles = ['#신발', '#의류', '#악세사리', '#KIDS'];
var bulletSets = [["01 휠라 스캔라인", "02 휠라 스피드서브T9", "03 휠라 레인저22", "04 휠라 디스럽터2 1998", "05 휠라 RGB 플로트 2.0", "06 휠라 트라조러스 N3"], ["01 휠라 쿨링 트레이닝 팬츠", "02 베이직 리니어 반팔티", "03 휠라 티핑 퍼포먼스 티셔츠", "04 클로벌 파리바오픈 티셔츠", "05 휠라 빅로고 반팔티셔츠", "06 휠라 트라조러스 크롭티셔츠"], ["01 F로고 코트캡", "02 테니스 타월", "03 테니스 심플 썬캡", "04 테니스 소프트 볼캡", "05 HERITAGE 헤어밴드", "06 휠라 베이직 월렛"], ["01 마린 크래픽 셋업", "02 휠라X수수진 플레이풀 셔츠", "03 물놀이 긴팔 셋업", "04 아쿠아 래쉬가드 셋업", "05 물놀이 여아 셋업", "06 스몰로고 기능성 티셔츠"]];
var imageSets = [['./img/ranking_tab01_01.jpg', './img/ranking_tab01_02.jpg', './img/ranking_tab01_03.jpg', './img/ranking_tab01_04.jpg', './img/ranking_tab01_05.jpg', './img/ranking_tab01_06.jpg'], ['./img/ranking_tab02_01.jpg', './img/ranking_tab02_02.jpg', './img/ranking_tab02_03.jpg', './img/ranking_tab02_04.jpg', './img/ranking_tab02_05.jpg', './img/ranking_tab02_06.jpg'], ['./img/ranking_tab03_01.jpg', './img/ranking_tab03_02.jpg', './img/ranking_tab03_03.jpg', './img/ranking_tab03_04.jpg', './img/ranking_tab03_05.jpg', './img/ranking_tab03_06.jpg'], ['./img/ranking_tab04_01.jpg', './img/ranking_tab04_02.jpg', './img/ranking_tab04_03.jpg', './img/ranking_tab04_04.jpg', './img/ranking_tab04_05.jpg', './img/ranking_tab04_06.jpg']];
var currentBulletSet = 0;
rankingTab.each(function (index) {
  $(this).click(function () {
    rankingTab.removeClass('on');
    $(this).addClass('on');
    $('.swiper_title').text(titles[index]);
    currentBulletSet = (currentBulletSet + 1) % bulletSets.length;
    swiper02.pagination.render();

    // 슬라이드 내용 변경
    $('.swiper_ranking .swiper-slide').each(function (slideIndex) {
      $(this).find('img').attr('src', imageSets[index][slideIndex]);
    });
  });
});
var swiper02 = new Swiper(".swiper_ranking", {
  observer: true,
  observerParents: true,
  centeredSlides: true,
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<div class="' + className + '"><span>' + bulletSets[currentBulletSet][index] + "</span></div>";
    }
  }
});

// [자바스크립트]banner------------------------------------------

var io = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
});
document.querySelectorAll('.word_box').forEach(function (wrapper) {
  return io.observe(wrapper);
});

/* [제이쿼리] swiper_new_arrival 탭메뉴 ------------------------ */

var tabs = $('.new_arrival ul li');
var contents = $('.new_arrival .tab_content');
tabs.each(function (index, tab) {
  $(tab).on('click', function () {
    tabs.removeClass('on');
    contents.removeClass('active');
    $(tab).addClass('on');
    contents.eq(index).addClass('active');
  });
});

// swiper_new_arrival------------------------------------------

var swiper03 = new Swiper(".swiper_new_arrival", (_Swiper = {
  observer: true,
  observeParents: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
}, _defineProperty(_Swiper, "observer", true), _defineProperty(_Swiper, "observerParents", true), _Swiper));

// magazine------------------------------------------

var imgEls = document.querySelectorAll(".magazine_list li");
var isShown = false;

// 페이지가 로드될 때 이미지의 y 속성 초기화
imgEls.forEach(function (img) {
  gsap.set(img, {
    y: 50
  });
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 4000 && !isShown) {
    isShown = true;
    gsap.to(imgEls[0], 1, {
      opacity: 1,
      y: 0,
      delay: 0.5
    });
    gsap.to(imgEls[1], 1, {
      opacity: 1,
      y: 0,
      delay: 1
    });
    gsap.to(imgEls[2], 1, {
      opacity: 1,
      y: 0,
      delay: 1.5
    });
  }
});

// outfit------------------------------------------
var outfitBtns = document.querySelectorAll(".outfit_btn");
var outfitInfos = document.querySelectorAll(".outfit_info");
outfitBtns.forEach(function (btn, index) {
  var infoStatus = false;
  btn.addEventListener("click", function () {
    if (infoStatus == false) {
      outfitInfos[index].style.display = "block";
      infoStatus = true;
      setTimeout(function () {
        outfitInfos[index].style.display = "none";
        infoStatus = false;
      }, 1500);
    } else {
      outfitInfos[index].style.display = "none";
      infoStatus = false;
    }
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52670" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map