//nav
$(document).ready(function () {
  $(document).on("scroll", function () {
    let scrollTop = $(this).scrollTop();
    if (scrollTop > 200) {
      $("#nav").css({
        top: "20px",
        borderRadius: "24px",
        transition: "all 300ms linear",
      });
      $("#topnav").addClass("rounded-3xl");
    } else if (scrollTop < 200) {
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

// photos
let image = document.querySelectorAll("div.other-photos > img");
let imgp = document.querySelector("div.photo > img");
console.log(image);
console.log(imgp);

image.forEach(function (item) {
  item.addEventListener("click", function () {
    imgp.src = `${item.src}`;
  });
});

// Product Count
var num;
$(".button-count:first-child").on("click", function () {
  num = parseInt($("input:text").val());

  if (num > 1) {
    $("input:text").val(num - 1);
  }
  if (num == 2) {
    $(".button-count:first-child").prop("disabled", true);
  }
  if (num == 5) {
    $(".button-count:last-child").prop("disabled", false);
  }
});

$(".button-count:last-child").on("click", function () {
  num = parseInt($(".number-product").val());

  if (num < 5) {
    $("input:text").val(num + 1);
  }
  if (num > 0) {
    $(".button-count:first-child").prop("disabled", false);
  }
  if (num == 4) {
    $(".button-count:last-child").prop("disabled", true);
  }
});


