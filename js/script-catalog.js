"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var thumbLeft = document.querySelector(".range-thumb-left");
var thumbRight = document.querySelector(".range-thumb-right");
var sliderRange = document.querySelector("#slider-range");

thumbLeft.onmousedown = function (event) {
  event.preventDefault();
  var shiftX = event.clientX - thumbLeft.getBoundingClientRect().left;
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);

  function onMouseMove(event) {
    var newLeft = event.clientX - shiftX - sliderRange.getBoundingClientRect().left; //оставить бегунок в  границах.

    if (newLeft < 0) {
      newLeft = 0;
    }

    var rightEdge = document.offsetWidth - thumbLeft.offsetWidth;

    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    thumbLeft.style.left = newLeft + "px";
  }

  function onMouseUp() {
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);
  }
};

thumbRight.onmousedown = function (event) {
  event.preventDefault();
  var shiftX = event.clientX - thumbRight.getBoundingClientRect().left;
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);

  function onMouseMove(event) {
    var newLeft = event.clientX - shiftX - sliderRange.getBoundingClientRect().left; //оставить бегунок в  границах.

    if (newLeft < 0) {
      newLeft = 0;
    }

    var rightEdge = document.offsetWidth - thumbRight.offsetWidth;

    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    thumbRight.style.left = newLeft + "px";
  }

  function onMouseUp() {
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);
  }
};

thumbLeft.ondragstart = function () {
  return false;
};

thumbRight.ondragstart = function () {
  return false;
}; // $(function() {
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

var sortPrice = document.querySelector(".sort-price");
var sortType = document.querySelector(".sort-type");
var sortFunctional = document.querySelector(".sort-functional");

if (sortPrice !== null) {
  sortPrice.onclick = function () {
    sortPrice.classList.add("sorting-active");
    sortPrice.classList.remove("sort-a");
    sortType.classList.add("sort-a");
    sortFunctional.classList.add("sort-a");
    sortType.classList.remove("sorting-active");
    sortFunctional.classList.remove("sorting-active");
  };
}

if (sortType !== null) {
  sortType.onclick = function () {
    sortType.classList.add("sorting-active");
    sortType.classList.remove("sort-a");
    sortPrice.classList.add("sort-a");
    sortFunctional.classList.add("sort-a");
    sortPrice.classList.remove("sorting-active");
    sortFunctional.classList.remove("sorting-active");
  };
}

if (sortFunctional !== null) {
  sortFunctional.onclick = function () {
    sortFunctional.classList.add("sorting-active");
    sortFunctional.classList.remove("sort-a");
    sortType.classList.add("sort-a");
    sortPrice.classList.add("sort-a");
    sortPrice.classList.remove("sorting-active");
    sortType.classList.remove("sorting-active");
  };
}

var descending = document.querySelector(".descending");
var ascending = document.querySelector(".ascending");

if (descending !== null) {
  descending.onclick = function () {
    descending.classList.add("sorting-active");
    descending.classList.remove("icon-dir");
    ascending.classList.add("icon-dir");
    ascending.classList.remove("sorting-active");
  };
}

if (ascending !== null) {
  ascending.onclick = function () {
    descending.classList.remove("sorting-active");
    descending.classList.add("icon-dir");
    ascending.classList.remove("icon-dir");
    ascending.classList.add("sorting-active");
  };
}

var page1 = document.querySelector(".page1");
var page2 = document.querySelector(".page2");
var page3 = document.querySelector(".page3");

page1.onclick = function () {
  page1.classList.add("active-page");
  page1.classList.remove("page-number");
  page2.classList.remove("active-page");
  page3.classList.remove("active-page");
  page3.classList.add("page-number");
  page2.classList.add("page-number");
};

page2.onclick = function () {
  page1.classList.remove("active-page");
  page1.classList.add("page-number");
  page2.classList.add("active-page");
  page2.classList.remove("page-number");
  page3.classList.remove("active-page");
};

page3.onclick = function () {
  page1.classList.remove("active-page");
  page2.classList.remove("active-page");
  page2.classList.add("page-number");
  page1.classList.add("page-number");
  page3.classList.remove("page-number");
  page3.classList.add("active-page");
};
