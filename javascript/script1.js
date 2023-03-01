// Sekcje (rozwijanie oraz zwijanie elementów)

var open1 = false;
var open2 = false;
var title1 = document.getElementById("title1");
var title2 = document.getElementById("title2");
var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");

title1.addEventListener("click", () => {
  if (open1 == false) {
    content1.classList.remove("hidden");
    open1 = true;
    title1.innerHTML = "Historia i rozwój języka HTML ▲";
  } else {
    content1.classList.add("hidden");
    open1 = false;
    title1.innerHTML = "Historia i rozwój języka HTML ▼";
  }
});

title2.addEventListener("click", () => {
  if (open2 == false) {
    content2.classList.remove("hidden");
    open2 = true;
    title2.innerHTML = "Podstawowe pojęcia dotyczące stron WWW ▲";
  } else {
    content2.classList.add("hidden");
    open2 = false;
    title2.innerHTML = "Podstawowe pojęcia dotyczące stron WWW ▼";
  }
});
