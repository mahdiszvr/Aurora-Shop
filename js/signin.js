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

// Create account (Sign in)
document.getElementById("create").addEventListener("click", create);

function create() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;
  let input = document.getElementById("text").value;

  if (firstName == "" || lastName == "" || phone == "" || password == "") {
    alert("فرم را تکمیل کنید.");
  } else if (Number(input) == random) {
    let phoneList = [];
    fetch("http://localhost:3007/account")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((elem) => {
          phoneList.push(elem.phone);
        });
        console.log(phoneList);

        if (phoneList.includes(phone)) {
          alert("شما در سایت عضو هستید، لطفا وارد شوید.");
        } else {
          fetch("http://localhost:3007/account", {
            method: "POST",
            body: JSON.stringify({
              firstName: firstName,
              lastName: lastName,
              phone: phone,
              password: password,
            }),
            headers: {
              "content-type": "application/json",
            },
          }).then((res) => res.json());

          alert("اطلاعات شما با موفقیت ثبت شد.");
        }
      });
  } else if (Number(input) != random) {
    alert("کد امنیتی نادرست !");
  }
}
