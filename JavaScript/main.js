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
let scrollBar = document.querySelector(".scroll-bar > span");
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let scrollHeight = document.body.scrollHeight;
  let pageHeight = window.innerHeight;
  let scrollBarHeight = (scrollTop / (scrollHeight - pageHeight)) * 100;
  scrollBar.style.width = `${scrollBarHeight}%`;
});
// End Scroll Bar

// Start Landing
document.addEventListener("DOMContentLoaded", () => {
  let landing = document.querySelector(".landing");
  let imgsLanding = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.png"];

  if (landing) {
    setInterval(() => {
      let randImgLand = Math.floor(Math.random() * imgsLanding.length);
     landing.style.backgroundImage = `url(/University-Yemenia/images/${imgsLanding[randImgLand]})`;
    }, 5000);
  }
});
// End Landing
