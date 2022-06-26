// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

//nav-active
const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixnav);

function fixnav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("activenav");
  } else {
    nav.classList.remove("activenav");
  }
}

//html element reveal

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// nav-toggler

var navbtn = document.getElementById("nav-toggle-btn");

var sidenav = document.getElementById("navpan");

var b1 = document.getElementById("bar1");

var b2 = document.getElementById("bar2");
var b3 = document.getElementById("bar3");
sidenav.style.right = "-250px";

navbtn.onclick = function () {
  if (sidenav.style.right == "-250px") {
    sidenav.style.right = "0";

    b1.style.transform = "rotate(45deg) translateY(12px)";
    b2.style.transform = "scaleX(0)";
    b3.style.transform = "rotate(-45deg) translateY(-12px)";
  } else {
    sidenav.style.right = "-250px";
    b1.style.transform = "rotate(0) translateY(0)";
    b2.style.transform = "scaleX(1)";
    b3.style.transform = "rotate(0)translateY(0)";
  }
};
