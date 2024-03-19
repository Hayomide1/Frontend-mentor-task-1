// const btnNav = document.querySelector(".btn-mobile-nav");
// const headEl = document.querySelector(".header-main");

const open = document.getElementById("open");
const close = document.getElementById("close");
const show = document.getElementById("show");

open.addEventListener("click", function () {
  // headEl.classList.toggle("nav-open");
  // console.log("open");
  show.classList.add("show");
  open.classList.add("nav-hide");
  close.classList.remove("nav-hide");
});
close.addEventListener("click", function () {
  // headEl.classList.toggle("nav-open");
  // console.log("close");
  show.classList.remove("show");
  open.classList.remove("nav-hide");
  close.classList.add("nav-hide");
});

// btnNav.addEventListener("click", function () {
//   headEl.classList.toggle("nav-open");
// });
