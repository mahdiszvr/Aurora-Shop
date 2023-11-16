// Search
$(document).ready(function () {
  $("img#search-icon").on("click", function () {
    $("div#search-navbar").toggleClass("active-searchBar border-searchBar");
    $("input#search-input").toggleClass("active-searchInput");
  });
});

//Show password
let show = document.getElementById("showL");
show.addEventListener("click", function () {
  let x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }

  show.classList.toggle("fa-eye");
  show.classList.toggle("fa-eye-slash");
});

// Captcha
var random = Math.floor(Math.random() * 1000);
let captcha = document.getElementById("num");
captcha.innerHTML = random;
console.log(random);

// Refresh captcha
document.querySelector("button#refresh").addEventListener("click", function () {
  random = Math.floor(Math.random() * 1000);
  let captcha = document.getElementById("num");
  captcha.innerHTML = random;
});

//Log in
document.getElementById("login").addEventListener("click", logIn);

function logIn() {
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;
  let input = document.getElementById("text").value;
  let phoneList = [];
  let passList = [];
  let nameList = [];

  if (phone == "" || password == "" || input == "") {
    alert("فرم را تکمیل کنید.");
  } else {
    fetch("http://localhost:3007/account")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((elem) => {
          phoneList.push(elem.phone);
          passList.push(elem.password);
          name = elem.firstName + " " + elem.lastName;
          nameList.push(name);
        });
        if (phoneList.includes(phone)) {
          eIndex = phoneList.indexOf(phone);
          if (passList[eIndex] == password && Number(input) == random) {
            alert(`Welcome ${nameList[eIndex]}`);
          } else if (passList[eIndex] != password) {
            alert("رمز عبور یا شماره موبایل نادرست !");
          } else if (Number(input) != random) {
            alert("کد امنیتی نادرست !");
          }
        } else {
          alert("رمز عبور یا شماره موبایل نادرست !");
        }
      });
  }
  console.log(phoneList);
  console.log(passList);
  console.log(nameList);
}
