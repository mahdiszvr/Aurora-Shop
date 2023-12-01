//nav
$(document).ready(function () {
  $(document).on("scroll", function () {
    let scrollTop = $(this).scrollTop();
    if (scrollTop > 400) {
      $("#nav").css({
        top: "20px",
        borderRadius: "24px",
        transition: "all 300ms linear",
      });
      $("#topnav").addClass("rounded-3xl");
    } else if (scrollTop < 400) {
      $("#nav").css({
        top: "0",
        borderTopRadius: "0",
        transition: "all 300ms linear",
      });
      $("#topnav").removeClass("rounded-3xl"),
        $("#topnav").addClass("rounded-t-0");
    }
  });
});

// Search
$(document).ready(function () {
  $("img#search-icon").on("click", function () {
    $("div#search-navbar").toggleClass("active-searchBar border-searchBar");
    $("input#search-input").toggleClass("active-searchInput");
  });
});

// Hamburger Menu
$(document).ready(function () {
  $(".cross").hide();
  $(".H-Menu").hide();
  $(".hamburger").click(function () {
    $(".H-Menu").slideToggle(function () {
      $(".hamburger").hide();
      $(".cross").show();
    });
  });

  $(".cross").click(function () {
    $(".H-Menu").slideToggle("slow", function () {
      $(".cross").hide();
      $(".hamburger").show();
    });
  });
});

// linear under each meanu
var elms = document.querySelectorAll("ul.ulmenu >  a.btn");
let p = document.querySelectorAll("a.btn > div");
console.log(p);

for (let i = 0; i < elms.length; i++) {
  console.log(elms[i]);
  elms[i].onmouseenter = function (mouse) {
    var edge = closestEdge(mouse, elms[i]);
  };

  elms[i].onmouseleave = function (mouse) {
    var edge = closestEdge(mouse, elms[i]);
  };

  function closestEdge(mouse, elem) {
    var elemBounding = elem.getBoundingClientRect();

    var elementLeftEdge = elemBounding.left;
    var elementTopEdge = elemBounding.top;
    var elementRightEdge = elemBounding.right;
    var elementBottomEdge = elemBounding.bottom;

    var mouseX = mouse.pageX;
    var mouseY = mouse.pageY;

    var topEdgeDist = Math.abs(elementTopEdge - mouseY);
    var bottomEdgeDist = Math.abs(elementBottomEdge - mouseY);
    var leftEdgeDist = Math.abs(elementLeftEdge - mouseX);
    var rightEdgeDist = Math.abs(elementRightEdge - mouseX);

    var min = Math.min(
      topEdgeDist,
      bottomEdgeDist,
      leftEdgeDist,
      rightEdgeDist
    );

    switch (min) {
      case leftEdgeDist:
        return elem
          .querySelector("a.btn > div")
          .setAttribute("style", "left:0");

      case rightEdgeDist:
        return elem
          .querySelector("a.btn > div")
          .setAttribute("style", "right:0");

      case topEdgeDist:
        return elem
          .querySelector("a.btn > div")
          .setAttribute("style", "left:0");

      case bottomEdgeDist:
        return elem
          .querySelector("a.btn > div")
          .setAttribute("style", "left:0");
    }
  }
}

// First slider
var swiper = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Second slider
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: "auto",
  spaceBetween: 12,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Suggestion
let html = "";
html += `
<div class="swiper-slide rounded-2xl">
<a
href="#"
class="lg:w-[210px] xl:w-[230px] flex flex-col justify-center items-center gap-12"
>
<span class="text-[38px] font-Lalezar">پیشنهاد ویژه</span>
<p
  class="p-2 flex items-center gap-1 rounded-[20px] text-xs font-semibold bg-nav hover:shadow-md hover:shadow-hover"
>
  مشاهده همه
  <img src="./media/svg/all.svg" class="!w-[14px]" />
</p>
</a>
  </div>`;
fetch("http://localhost:3007/suggest")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((elem) => {
      html += `<div class="swiper-slide bg-primary1 rounded-2xl ">
    <a
      href="#"
      class="p-0 md:p-2 flex flex-col gap-1 xl:gap-2 grow addHover relative"
    >
      <img src="${elem.img}" onmouseover="this.src='${elem.hover}'"
      onmouseout="this.src='${elem.img}'"
       class="rounded-none rounded-t-xl md:rounded-xl w-[190px] md:w-[220px] lg:w-[240px] xl:w-[260px] " />
       <div
       class="group add p-1 h-6 sm:h-auto bg-footer rounded-tl-lg absolute !left-1 top-1 md:top-3 md:!left-3 flex items-center justify-center cursor-pointer whitespace-nowrap overflow-hidden"
     >
       <img src="./media/plus.png" class="w-4 sm:w-6 h-4 sm:h-6 text-hover" />
       <p class="text-xs sm:text-sm flex gap-1 w-0 opacity-0 group-hover:text-icon leading-6">
         افزودن به سبد خرید
         <img src="./media/svg/Basket.svg" class="w-5 sm:w-6 h-5 sm:h-6"/>
         <img src="./media/svg/Basket-hover.svg" class="w-0 h-6 scale-75 sm:scale-100"/>
       </p>
     </div>
      <div class="content p-3 pt-2 md:p-2 flex flex-col gap-1 md:gap-2">
        <div class="text-sm lg:text-[15px] xl:text-base text-center">${elem.name}</div>
        <div class="S-categorytext-xs lg:text-[13px] xl:text-sm text-hover text-center">${elem.category}</div>
        <div class="price flex justify-between">
          <p class="text-[13px] lg:text-sm xl:text-[15px]">قیمت:</p>
          <spanclass="text-sm lg:text-[15px] xl:text-base">${elem.price} <span>تومان</span></spanclass=>
        </div>

      </div>
    </a>
  </div>`;
    });
    document.getElementById("swiper-wrapper").innerHTML = html;
  });

var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
// menuscroll = document.getElementById("#menu");
// console.log(menuscroll);
// menuscroll.addEventListener(
//   "scroll",
//   function () {
//     // or window.addEventListener("scroll"....
//     var st = window.pageYOffset || document.documentElement.scrollTop;
//     if (st > lastScrollTop) {
//       // downscroll code

//     } else if (st < lastScrollTop) {
//       // upscroll code
//     } // else was horizontal scroll
//     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
//   },
//   false
// );

// window.onload = function () {
//   const anchorTags = document.querySelectorAll("a");
//   anchorTags.forEach(function (a) {
//     a.addEventListener("click", function (ev) {
//       ev.preventDefault();
//     });
//   });
//   const dropdownEl = document.querySelector("[data-dropdown-toggle]");
//   if (dropdownEl) {
//     dropdownEl.click();
//   }
//   const modalEl = document.querySelector("[data-modal-toggle]");
//   if (modalEl) {
//     modalEl.click();
//   }
//   const dateRangePickerEl = document.querySelector("[data-rangepicker] input");
//   if (dateRangePickerEl) {
//     dateRangePickerEl.focus();
//   }
//   const drawerEl = document.querySelector("[data-drawer-show]");
//   if (drawerEl) {
//     drawerEl.click();
//   }
// };
