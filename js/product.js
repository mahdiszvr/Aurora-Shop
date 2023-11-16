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
