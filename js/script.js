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
<div class="swiper-slide rounded-2xl w-10 ">
<a
href="#"
class="w-[220px] h-full flex flex-col justify-center items-center gap-12"
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
      class="p-3 flex flex-col grow-1 addHover relative"
    >
      <img src="${elem.img}" onmouseover="this.src='${elem.hover}'"
      onmouseout="this.src='${elem.img}'"
       class="img-s rounded-xl" />
      <div class="add w-8 h-8 bg-footer rounded-tl-lg absolute flex items-center justify-center cursor-pointer">
        <img src="./media/plus.png" class="w-6 h-6 text-hover">
        <p class="text-sm flex gap-1 w-0 opacity-0">
           افزودن به سبد خرید
           <img src="./media/svg/Basket.svg" class="w-6 h-6">
        </p>
      </div>
      <div class="content p-2 flex flex-col gap-2">
        <div class="text-base">${elem.name}</div>
        <div class="S-category text-sm text-hover text-center">${elem.category}</div>
        <div class="price flex justify-between text-[15px]">
          <p>قیمت:</p>
          <span class="text-[16px]">${elem.price} <span>تومان</span></span>
        </div>

      </div>
    </a>
  </div>`;
      console.log(html);
    });
    document.getElementById("swiper-wrapper").innerHTML = html;
  });

  
var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
// element.addEventListener(
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
