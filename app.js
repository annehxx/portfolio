var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
  for (let tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for (let tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

var sideMenu = document.getElementById("sidemenu");

function closeMenu() {
  sideMenu.style.right = "-200px";
}

function openMenu() {
  sideMenu.style.right = "0";
}

//-------------Submit Form---------------

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxBK1ETokBqjBjK019uoaDNxz-Bk98vr9BkZ8xba6p2Y0hxubcekveaG58W_IzwwA6C/exec";
const form = document.forms["submit-to-google-sheet"];

const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  successMessage.style.display = "block";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => console.log("Success!", response))
      .catch((error) => console.error("Error!", error.message));
  });

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  setTimeout(function () {
    successMessage.style.display = "none";
  }, 5000);
});
