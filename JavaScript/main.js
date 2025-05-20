// Start Main Menu
function showList() {
  document
    .querySelector("header .container > .menu ul")
    .classList.toggle("open");
  let menuIcon = document.querySelector("header .container .menu > i");
  if (menuIcon.className == "fa-solid fa-bars") {
    menuIcon.className = "fa-solid fa-xmark";
  } else {
    menuIcon.className = "fa-solid fa-bars";
  }
}
document.addEventListener("click", function (event) {
  let links = document.querySelector("header .container > .menu ul");
  let icon = document.querySelector("header .container .menu > i");
  if (!links.contains(event.target) && event.target !== icon) {
    links.classList.remove("open");
    icon.className = "fa-solid fa-bars";
  }
});

// End Main Menu

// Start Scroll
let buttonScroll = document.querySelector(".but-fixed");
window.onscroll = function () {
  if (this.scrollY >= 500) {
    buttonScroll.classList.add("scroll-show");
  } else {
    buttonScroll.classList.remove("scroll-show");
  }
};
buttonScroll.onclick = function () {
  window.scrollTo({
    top: 0,
  });
};
// End Scroll

// Start Scroll Bar
document.addEventListener("DOMContentLoaded", () => {
  const landing = document.querySelector(".landing");

  if (!landing) return;

  const images = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.png",
  ];

  let index = 0;

  function changeBackground() {
    landing.style.backgroundImage = `url("/University-Yemenia/images/${images[index]}")`;
    landing.style.transition = "background-image 1s ease-in-out";

    index++;
    if (index >= images.length) {
      index = 0;
    }
  }

  // أول صورة
  changeBackground();

  // يتكرر كل 5 ثواني
  setInterval(changeBackground, 5000);
});

// End Landing
