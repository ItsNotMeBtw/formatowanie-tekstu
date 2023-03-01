// Sekcje (rozwijanie oraz zwijanie elementów)

var open1 = false;
var open2 = false;
var open3 = false;
var title1 = document.getElementById("title1");
var title2 = document.getElementById("title2");
var title3 = document.getElementById("title3");
var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");

title1.addEventListener("click", () => {
  if (open1 == false) {
    content1.classList.remove("hidden");
    open1 = true;
    title1.innerHTML = "Rodzaje technologii webowych ▲";
  } else {
    content1.classList.add("hidden");
    open1 = false;
    title1.innerHTML = "Rodzaje technologii webowych ▼";
  }
});

title2.addEventListener("click", () => {
  if (open2 == false) {
    content2.classList.remove("hidden");
    open2 = true;
    title2.innerHTML = "Front-end ▲";
  } else {
    content2.classList.add("hidden");
    open2 = false;
    title2.innerHTML = "Front-end ▼";
  }
});

title3.addEventListener("click", () => {
  if (open3 == false) {
    content3.classList.remove("hidden");
    open3 = true;
    title3.innerHTML = "Back-end ▲";
  } else {
    content3.classList.add("hidden");
    open3 = false;
    title3.innerHTML = "Back-end ▼";
  }
});
