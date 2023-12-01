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

$(document).ready(function () {
  $("#accordionExample > li > div > div > button").on("click", function () {
    $(".H-Menu").slideToggle("slow", function () {
      $(".cross").hide();
      $(".hamburger").show();
    });
  });
});

// Show All Paintings
function showPaintings() {
  let html = "";
  fetch("http://localhost:3007/paintings")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((elem) => {
        html += `<div class="bg-nav rounded-2xl" id="${elem.idN}">
      <a href="./one-product.html?Name=${elem.idN}" class="p-0 md:p-2 flex flex-col gap-1 xl:gap-2 grow addHover relative">
        <img src="${elem.img}" onmouseover="this.src='${elem.hover}'"
        onmouseout="this.src='${elem.img}'" class="rounded-none rounded-t-xl md:rounded-xl " />
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
          <div class="S-category text-xs lg:text-[13px] xl:text-sm text-hover text-center">
          ${elem.category}
          </div>
          <div class="price flex justify-between ">
            <p class="text-[13px] lg:text-sm xl:text-[15px]">قیمت:</p>
            <span class="text-sm lg:text-[15px] xl:text-[16px]">${elem.price} <span>تومان</span></span>
          </div>
        </div>
      </a>
    </div>`;
      });
      document.getElementById("product").innerHTML = html;
    });
}

// Show Abrang
function showAbrang() {
  let html = "";
  fetch("http://localhost:3007/paintings")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((elem) => {
        if (elem.category == "آبرنگ") {
          html += `<div class="bg-nav rounded-2xl" id="${elem.idN}">
          <a href="./one-product.html?Name=${elem.idN}" class="p-0 md:p-2 flex flex-col gap-1 xl:gap-2 grow addHover relative">
            <img src="${elem.img}" onmouseover="this.src='${elem.hover}'"
            onmouseout="this.src='${elem.img}'" class="rounded-none rounded-t-xl md:rounded-xl " />
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
              <div class="S-category text-xs lg:text-[13px] xl:text-sm text-hover text-center">
              ${elem.category}
              </div>
              <div class="price flex justify-between ">
                <p class="text-[13px] lg:text-sm xl:text-[15px]">قیمت:</p>
                <span class="text-sm lg:text-[15px] xl:text-[16px]">${elem.price} <span>تومان</span></span>
              </div>
            </div>
          </a>
        </div>`;
        }
      });
      document.getElementById("product").innerHTML = html;
    });
}

// Show MedadRangi
function showMedadRangi() {
  let html = "";
  fetch("http://localhost:3007/paintings")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((elem) => {
        if (elem.category == "مدادرنگی") {
          html += `<div class="bg-nav rounded-2xl" id="${elem.idN}">
          <a href="./one-product.html?Name=${elem.idN}" class="p-0 md:p-2 flex flex-col gap-1 xl:gap-2 grow addHover relative">
            <img src="${elem.img}" onmouseover="this.src='${elem.hover}'"
            onmouseout="this.src='${elem.img}'" class="rounded-none rounded-t-xl md:rounded-xl " />
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
              <div class="S-category text-xs lg:text-[13px] xl:text-sm text-hover text-center">
              ${elem.category}
              </div>
              <div class="price flex justify-between ">
                <p class="text-[13px] lg:text-sm xl:text-[15px]">قیمت:</p>
                <span class="text-sm lg:text-[15px] xl:text-[16px]">${elem.price} <span>تومان</span></span>
              </div>
            </div>
          </a>
        </div>`;
        }
      });
      document.getElementById("product").innerHTML = html;
    });
}

// Show Rapid
function showRapid() {
  let html = "";
  fetch("http://localhost:3007/paintings")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((elem) => {
        if (elem.category == "راپید") {
          html += `<div class="bg-nav rounded-2xl" id="${elem.idN}">
          <a href="./one-product.html?Name=${elem.idN}" class="p-0 md:p-2 flex flex-col gap-1 xl:gap-2 grow addHover relative">
            <img src="${elem.img}" onmouseover="this.src='${elem.hover}'"
            onmouseout="this.src='${elem.img}'" class="rounded-none rounded-t-xl md:rounded-xl " />
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
              <div class="S-category text-xs lg:text-[13px] xl:text-sm text-hover text-center">
              ${elem.category}
              </div>
              <div class="price flex justify-between ">
                <p class="text-[13px] lg:text-sm xl:text-[15px]">قیمت:</p>
                <span class="text-sm lg:text-[15px] xl:text-[16px]">${elem.price} <span>تومان</span></span>
              </div>
            </div>
          </a>
        </div>`;
        }
      });
      document.getElementById("product").innerHTML = html;
    });
}

// show SiahQalam
function showSiahQalam() {
  let html = "";
  fetch("http://localhost:3007/paintings")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((elem) => {
        if (elem.category == "سیاه‌قلم") {
          html += `<div class="bg-nav rounded-2xl" id="${elem.idN}">
          <a href="./one-product.html?Name=${elem.idN}" class="p-0 md:p-2 flex flex-col gap-1 xl:gap-2 grow addHover relative">
            <img src="${elem.img}" onmouseover="this.src='${elem.hover}'"
            onmouseout="this.src='${elem.img}'" class="rounded-none rounded-t-xl md:rounded-xl " />
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
              <div class="S-category text-xs lg:text-[13px] xl:text-sm text-hover text-center">
              ${elem.category}
              </div>
              <div class="price flex justify-between ">
                <p class="text-[13px] lg:text-sm xl:text-[15px]">قیمت:</p>
                <span class="text-sm lg:text-[15px] xl:text-[16px]">${elem.price} <span>تومان</span></span>
              </div>
            </div>
          </a>
        </div>`;
        }
      });
      document.getElementById("product").innerHTML = html;
    });
}

//Abrang Menu
if (document.location.href.includes("Name")) {
  if (
    document.location.href.split("?")[1].split("=")[1] &&
    document.location.href.split("?")[1].split("=")[1] == "Abrang"
  ) {
    showAbrang();
  } else if (
    document.location.href.split("?")[1].split("=")[1] &&
    document.location.href.split("?")[1].split("=")[1] == "MedadRangi"
  ) {
    showMedadRangi();
  } else if (
    document.location.href.split("?")[1].split("=")[1] &&
    document.location.href.split("?")[1].split("=")[1] == "Rapid"
  ) {
    showRapid();
  } else if (
    document.location.href.split("?")[1].split("=")[1] &&
    document.location.href.split("?")[1].split("=")[1] == "SiahQalam"
  ) {
    showSiahQalam();
  }
} else {
  showPaintings();
}
// Default Page

//Filter Category
// Button all paintings
$(document).ready(function () {
  $("#paint").on("click", showPaintings);
});

// Button Abrang
$(document).ready(function () {
  $(".Abrang").on("click", function () {
    showAbrang();
    console.log(document.querySelectorAll("#product > div"));
  });
});

// Button Medad Rangi
$(document).ready(function () {
  $(".MedadRangi").on("click", function () {
    showMedadRangi();
    console.log(document.querySelectorAll("#product > div"));
  });
});

// Button Rapid
$(document).ready(function () {
  $(".Rapid").on("click", function () {
    showRapid();
    console.log(document.querySelectorAll("#product > div"));
  });
});

// Button Siah Qalam
$(document).ready(function () {
  $(".SiahQalam").on("click", function () {
    showSiahQalam();
    console.log(document.querySelectorAll("#product > div"));
  });
});


// page number
let html = "";
fetch("http://localhost:3007/paintings")
  .then((res) => res.json())
  .then((data) => console.log(data.length));
