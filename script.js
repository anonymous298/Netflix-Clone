function smoothScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", () => {
  const btn = document.getElementById("backToTopBtn");

  if (window.scrollY > 600) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

let quest1 = document.getElementById("quest1");
let ans1 = document.getElementById("ans1");
let icon1 = document.querySelectorAll(".question-secondary-text")[0].children[0];
quest1.addEventListener("click", () => {
  ans1.classList.toggle("showans1");
  icon1.classList.toggle("rotateans1");
});

let quest2 = document.getElementById("quest2");
let ans2 = document.getElementById("ans2");
let icon2 = document.querySelectorAll(".question-secondary-text")[1].children[0];
quest2.addEventListener("click", () => {
  ans2.classList.toggle("showans2");
  icon2.classList.toggle("rotateans2");
});

let quest3 = document.getElementById("quest3");
let ans3 = document.getElementById("ans3");
let icon3 = document.querySelectorAll(".question-secondary-text")[2].children[0];
quest3.addEventListener("click", () => {
  ans3.classList.toggle("showans3");
  icon3.classList.toggle("rotateans3");
});

let quest4 = document.getElementById("quest4");
let ans4 = document.getElementById("ans4");
let icon4 = document.querySelectorAll(".question-secondary-text")[3].children[0];
quest4.addEventListener("click", () => {
  ans4.classList.toggle("showans4");
  icon4.classList.toggle("rotateans4");
});

let quest5 = document.getElementById("quest5");
let ans5 = document.getElementById("ans5");
let icon5 = document.querySelectorAll(".question-secondary-text")[4].children[0];
quest5.addEventListener("click", () => {
  ans5.classList.toggle("showans5");
  icon5.classList.toggle("rotateans5");
});

let quest6 = document.getElementById("quest6");
let ans6 = document.getElementById("ans6");
let icon6 = document.querySelectorAll(".question-secondary-text")[5].children[0];
quest6.addEventListener("click", () => {
  ans6.classList.toggle("showans6");
  icon6.classList.toggle("rotateans6");
});
