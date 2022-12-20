let btn = document.querySelector(".nav__img");
let nav = document.querySelector(".nav");
let ul = document.querySelector(".nav__list1");
let li = document.querySelector(".nav__iteam");

btn.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});

li.addEventListener("click", () => {
  ul.classList.toggle("hidden");
});
