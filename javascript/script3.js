// Sekcje (rozwijanie oraz zwijanie elementów)

var open1 = false;
var open2 = false;
var open3 = false;
var open4 = false;
var open5 = false;
var open6 = false;
var title1 = document.getElementById("title1");
var title2 = document.getElementById("title2");
var title3 = document.getElementById("title3");
var title4 = document.getElementById("title4");
var title5 = document.getElementById("title5");
var title6 = document.getElementById("title6");
var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var content4 = document.getElementById("content4");
var content5 = document.getElementById("content5");
var content6 = document.getElementById("content6");

title1.addEventListener("click", () => {
  if (open1 == false) {
    content1.classList.remove("hidden");
    open1 = true;
    title1.innerHTML = "Składnia języka HTML ▲";
  } else {
    content1.classList.add("hidden");
    open1 = false;
    title1.innerHTML = "Składnia języka HTML ▼";
  }
});

title2.addEventListener("click", () => {
  if (open2 == false) {
    content2.classList.remove("hidden");
    open2 = true;
    title2.innerHTML = "Struktura dokumentu HTML ▲";
  } else {
    content2.classList.add("hidden");
    open2 = false;
    title2.innerHTML = "Struktura dokumentu HTML ▼";
  }
});

title3.addEventListener("click", () => {
  if (open3 == false) {
    content3.classList.remove("hidden");
    open3 = true;
    title3.innerHTML = "Podstawowe znaczniki i atrybuty ▲";
  } else {
    content3.classList.add("hidden");
    open3 = false;
    title3.innerHTML = "Podstawowe znaczniki i atrybuty ▼";
  }
});

title4.addEventListener("click", () => {
  if (open4 == false) {
    content4.classList.remove("hidden");
    open4 = true;
    title4.innerHTML = "Podział strony i obsługa danych ▲";
  } else {
    content4.classList.add("hidden");
    open4 = false;
    title4.innerHTML = "Podział strony i obsługa danych ▼";
  }
});

title5.addEventListener("click", () => {
  if (open5 == false) {
    content5.classList.remove("hidden");
    open5 = true;
    title5.innerHTML = "Tabele ▲";
  } else {
    content5.classList.add("hidden");
    open5 = false;
    title5.innerHTML = "Tabele ▼";
  }
});

title6.addEventListener("click", () => {
  if (open6 == false) {
    content6.classList.remove("hidden");
    open6 = true;
    title6.innerHTML = "Multimedia ▲";
  } else {
    content6.classList.add("hidden");
    open6 = false;
    title6.innerHTML = "Multimedia ▼";
  }
});
