"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var mapMini = document.querySelector(".map-mini");
var mapOpen = document.querySelector(".map-open");

if (mapOpen !== null) {
  mapOpen.onclick = function () {
    mapMini.style.overflow = "visible";
  };
}

;
var closeMap = document.querySelector(".close-map");

if (closeMap !== null) {
  closeMap.onclick = function () {
    mapMini.style.overflow = "hidden";
  };
}

;
var modal = document.querySelector(".modal-write-us");
var writeBtn = document.querySelector(".button-write-us");

if (writeBtn !== null) {
  writeBtn.onclick = function () {
    modal.style.display = "block";
  };
}

;
var closeModal = document.querySelector(".close-button");

closeModal.onclick = function () {
  modal.style.display = "none";
};

var form = document.querySelector(".write-us");
var loginForm = form.querySelector('[name="name"]');
var emailForm = form.querySelector('[name="email"]');
var textForm = form.querySelector('[name="text"]');
form.addEventListener('submit', function (evt) {
  if (!loginForm.value || !emailForm.value || !textForm.value) {
    evt.preventDefault();
    modal.classList.remove('modal-error'); // modal.offsetWidth = modal.offsetWidth;

    modal.classList.add('modal-error');
  }
});
/* window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display ="none";
  };
}
не работает */

var sliderField = document.querySelector(".slider-field");
var leftButton = document.querySelector(".slide-left");
var rightButton = document.querySelector(".slide-right");
var slide1 = document.querySelector(".slide1");
var slide2 = document.querySelector(".slide2");
var indicator1 = document.querySelector(".indicator1");
var indicator2 = document.querySelector(".indicator2");
leftButton.onclick = moveLeft;
rightButton.onclick = moveRight;
indicator1.onclick = moveLeft;
indicator2.onclick = moveRight;

function moveRight() {
  var element = document.querySelector(".slider-field>div:first-child");
  sliderField.appendChild(element);
  indicator1.classList.toggle("indicator-active");
  indicator2.classList.toggle("indicator-active");
}

function moveLeft() {
  var element = document.querySelector(".slider-field>div:last-child");
  var firstElement = document.querySelector(".slider-field>div:first-child");
  sliderField.appendChild(firstElement, element);
  indicator2.classList.toggle("indicator-active");
  indicator1.classList.toggle("indicator-active");
}

var deliveryBtn = document.getElementById("delivery-li");
var guarantBtn = document.getElementById("guarantee-li");
var creditBtn = document.getElementById("credit-li");
var guarantDiv = document.querySelector(".guarantee");
var deliveryDiv = document.querySelector(".delivery");
var creditDiv = document.querySelector(".credit");
var background = document.querySelector(".service-detail");

if (deliveryBtn !== null) {
  deliveryBtn.onclick = showDelivery;
}

;

if (guarantBtn !== null) {
  guarantBtn.onclick = showGuarant;
}

;

if (creditBtn !== null) {
  creditBtn.onclick = showCredit;
}

;

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

var modalAdded = document.querySelector(".modal-cart");
var closeButton = document.querySelector(".close-modal-cart");
var buyButton = document.querySelectorAll(".buy");
var continueShopping = document.querySelector(".continueShopping");
var cartNumber = document.querySelector(".cart-number");
var counter = 0;

for (var t = 0; t < buyButton.length; t++) {
buyButton[t].addEventListener("click", function () {
modalAdded.style.display = "block";

if (cartNumber !== null) {
counter++;
cartNumber.textContent = counter;
}
});
}

closeButton.onclick = function () {
  modalAdded.style.display = "none";
};

if (continueShopping !== null) {
  continueShopping.onclick = function () {
    modalAdded.style.display = "none";
  };
}
