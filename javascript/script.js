// Zegarek

setInterval(() => {
  var date = new Date();

  var hour = date.getHours(); // Godziny
  var minute = date.getMinutes(); // Minuty
  var second = date.getSeconds(); // Sekundy
  var day = date.getDate(); // Dni
  var month = date.getMonth(); // Miesiące
  var year = date.getFullYear(); // Rok
  var dayx = date.getDay(); // Dzień tygodnia

  if (hour <= 9) {
    hour = "0" + hour;
  }
  if (minute <= 9) {
    minute = "0" + minute;
  }
  if (second <= 9) {
    second = "0" + second;
  }

  const days = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
  ];

  document.getElementById("time").innerHTML =
    hour +
    ":" +
    minute +
    ":" +
    second +
    " • " +
    day +
    "." +
    month +
    "." +
    year +
    " • " +
    days[dayx];
}, 1000);

// Przyciski

var btn1 = document.getElementById("btn1"); // Przycisk "Podstawowe pojęcia"
var btn2 = document.getElementById("btn2"); // Przycisk "Technologie webowe"
var btn3 = document.getElementById("btn3"); // Przycisk "HTML"
var btn4 = document.getElementById("btn4"); // Przycisk "CSS"

btn1.addEventListener("click", () => {
  window.location = "./index.html";
});
btn2.addEventListener("click", () => {
  window.location = "technologie-webowe.html";
});
btn3.addEventListener("click", () => {
  window.location = "html.html";
});

// Usuwanie opcji zaznaczania tekstu na stronie

document.onselectstart = function () {
  return false;
};

// Kolor strony

function changeColor() {
  var userColor = document.getElementById("colorID").value;
  localStorage.setItem(
    "storedValue",
    (document.body.style.backgroundColor = userColor)
  );
}

if (localStorage.storedValue) {
  document.getElementById("colorID").value = localStorage.storedValue;
  document.body.style.backgroundColor = localStorage.storedValue;
}

var colorBtn = document.getElementById("button");
var closeBtn = document.getElementById("close");
var bg = document.querySelector(".x");
var popup = document.querySelector(".color-menu");

colorBtn.addEventListener("click", () => {
  bg.classList.remove("hidden");
  popup.classList.remove("hidden");
});
closeBtn.addEventListener("click", () => {
  bg.classList.add("hidden");
  popup.classList.add("hidden");
});
