function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar sticky") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}


window.onscroll = function() {Sticky_Nav()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function Sticky_Nav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

