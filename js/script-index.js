"use strict";


let mapMini = document.querySelector(".map-mini");
let mapOpen = document.querySelector(".map-open");

if (mapOpen !== null) {
  mapOpen.onclick = function() {
    mapMini.style.overflow = "visible";
  };
};

let closeMap = document.querySelector(".close-map");

if (closeMap !== null) {
  closeMap.onclick = function() {
    mapMini.style.overflow = "hidden";
  };
};

let modal = document.querySelector(".modal-write-us");
let writeBtn = document.querySelector(".button-write-us");

if (writeBtn !== null) {
  writeBtn.onclick = function() {
    modal.style.display = "block";
  };
};

let closeModal = document.querySelector(".close-button");
closeModal.onclick = function() {
  modal.style.display = "none";
};

let form = document.querySelector(".write-us");

form.addEventListener('submit', function (evt){
if(!name.value || !email.value || !text.value){
evt.preventDefault();
modal.classList.remove('modal-error');
// modal.offsetWidth = modal.offsetWidth;
modal.classList.add('modal-error');
}
});

/* window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display ="none";
  };
}
не работает */

let sliderField = document.querySelector(".slider-field");
let leftButton = document.querySelector(".slide-left");
let rightButton = document.querySelector(".slide-right");
let slide1 = document.querySelector(".slide1");
let slide2 = document.querySelector(".slide2");
let indicator1 = document.querySelector(".indicator1");
let indicator2 = document.querySelector(".indicator2");



leftButton.onclick = moveLeft;
rightButton.onclick = moveRight;
indicator1.onclick = moveLeft;
indicator2.onclick = moveRight;


function moveRight() {
  let element = document.querySelector(".slider-field>div:first-child");
  sliderField.appendChild(element);
  indicator1.classList.toggle("indicator-active");
  indicator2.classList.toggle("indicator-active");
}

function moveLeft() {
  let element = document.querySelector(".slider-field>div:last-child");
  let firstElement = document.querySelector(".slider-field>div:first-child");
  sliderField.appendChild(firstElement, element);
  indicator2.classList.toggle("indicator-active");
  indicator1.classList.toggle("indicator-active");
}


let deliveryBtn = document.getElementById("delivery-li");
let guarantBtn = document.getElementById("guarantee-li");
let creditBtn = document.getElementById("credit-li");
let guarantDiv = document.querySelector(".guarantee");
let deliveryDiv = document.querySelector(".delivery");
let creditDiv = document.querySelector(".credit");

let background = document.querySelector(".service-detail");


if (deliveryBtn !== null) {
  deliveryBtn.onclick = showDelivery;
};
if (guarantBtn !== null) {
  guarantBtn.onclick = showGuarant;
};
if (creditBtn !== null) {
  creditBtn.onclick = showCredit;
};


function showDelivery() {
  guarantDiv.style.display = "none";
  creditDiv.style.display = "none";
  deliveryDiv.style.display = "block";
  background.classList.remove("guarantee-icon");
  background.classList.remove("credit-icon");
  background.classList.add("delivery-icon-bg");
  deliveryBtn.classList.add("active-li");
  guarantBtn.classList.remove("active-li");
  creditBtn.classList.remove("active-li");
}

function showGuarant() {

  deliveryDiv.style.display = "none";
  creditDiv.style.display = "none";
  guarantDiv.style.display = "block";
  background.classList.remove("delivery-icon-bg");
  background.classList.remove("credit-icon");
  background.classList.add("guarantee-icon");
  guarantBtn.classList.add("active-li");
  deliveryBtn.classList.remove("active-li");
  creditBtn.classList.remove("active-li");

}

function showCredit() {

  deliveryDiv.style.display = "none";
  guarantDiv.style.display = "none";
  creditDiv.style.display = "block";
  background.classList.remove("delivery-icon-bg");
  background.classList.add("credit-icon");
  background.classList.remove("guarantee-icon");
  creditBtn.classList.add("active-li");
  deliveryBtn.classList.remove("active-li");
  guarantBtn.classList.remove("active-li");
}


// $(function() {
//   $("#slider-range").slider({
//     range: true,
//     min: 0,
//     max: 35000,
//     values: [0, 30000],
//     slide: function(event, ui) {
//       $("#amount1").val(ui.values[0]);
//       $("#amount2").val(ui.values[1]);
//     }
//   });
//   $("#amount1").val($("#slider-range").slider("values", 0));
//   $("#amount2").val($("#slider-range").slider("values", 1));
// });


let modalAdded = document.querySelector(".modal-cart");
let closeButton = document.querySelector(".close-modal-cart");
let buyButton = document.querySelectorAll(".buy");
let continueShopping = document.querySelector(".continueShopping");

[...buyButton].forEach(buyButton =>
  buyButton.addEventListener("click", function() {
    modalAdded.style.display = "block";
  }));

closeButton.onclick = function() {
  modalAdded.style.display = "none";
};


if (continueShopping !== null) {
  continueShopping.onclick = function() {
    modalAdded.style.display = "none";
  };
}
