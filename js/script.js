"use strict";
/* var buypopup = document.querySelector('.modal-cart');
var close =document.querySelector('.close-button');

buy.addEventListener('click', function (evt) {
  evt.preventDefault();
  buypopup.classList.add('modal-cart-show');
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  buypopup.classList.remove('modal-cart-show');
})
*/


let mapMini = document.querySelector('.map-mini');
let mapOpen = document.querySelector('.map-open');

if (mapOpen !== null) {
mapOpen.onclick = function() {
  mapMini.style.overflow = 'visible';
};
};

let closeMap = document.querySelector('.close-map');

if (closeMap !== null) {
closeMap.onclick = function() {
  mapMini.style.overflow = 'hidden';
  console.log('нажата');
};
};

let modal = document.querySelector('.modal');
let writeBtn = document.querySelector('.long-button');

if (writeBtn !== null) {
writeBtn.onclick = function() {
  modal.style.display = 'block';
};
};

let closeModal = document.querySelector('.close-button');
closeModal.onclick = function() {
  modal.style.display = 'none';
};

/* window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display ='none';
  };
}
не работает */

let sliderField = document.querySelector('.slider-field');
let leftButton = document.querySelector('.slide-left');
let rightButton = document.querySelector('.slide-right');
let slide1 = document.querySelector('.slide1');
let slide2 = document.querySelector('.slide2');

let left = 0;
let frame = 620;

if (leftButton !== null) {
leftButton.onclick = moveLeft;
};

if (rightButton !== null) {
rightButton.onclick = moveRight;
};

function moveRight() {
  let element = document.querySelector(".slider-field>div:first-child");
  sliderField.appendChild(element);
  element.classList.add('coming');


}

function moveLeft() {
  let element = document.querySelector(".slider-field>div:last-child"),
    firstElement = document.querySelector(".slider-field>div:first-child");
  sliderField.insertBefore(element, firstElement);
  firstElement, element.classList.add('leave');
}
// sliderField.style.transition = 'left 0.6s ease';


//
// function moveLeft() {
//   left = left - frame;
//   if (left < -frame) {
//     // left = 0;
//   }
//   sliderField.style.left = left + 'px';
// }
//
// function moveRight() {
//   left = left + frame;
//   if (left > 0) {
//     left = -frame;
//   }
//   sliderField.style.left = left + 'px';
// }

let deliveryBtn = document.getElementById('delivery-li');
let guarantBtn = document.getElementById('guarantee-li');
let creditBtn = document.getElementById('credit-li');
let guarantDiv = document.querySelector('.guarantee');
let deliveryDiv = document.querySelector('.delivery');
let creditDiv = document.querySelector('.credit');

let background = document.querySelector('.service-detail');


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
  guarantDiv.style.display = 'none';
  creditDiv.style.display = 'none';
  deliveryDiv.style.display = 'block';
  background.classList.remove('guarantee-icon');
  background.classList.remove('credit-icon');
  background.classList.add('delivery-icon');
  deliveryBtn.style.backgroundColor = '#ffffff';
  deliveryBtn.style.color = '#32425c';
  deliveryBtn.style.boxShadow = 'none';
  deliveryBtn.style.border = '#ffffff';
  guarantBtn.style = 'none';
  creditBtn.style = 'none';
}

function showGuarant() {

  deliveryDiv.style.display = 'none';
  creditDiv.style.display = 'none';
  guarantDiv.style.display = 'block';
  background.classList.remove('delivery-icon');
  background.classList.remove('credit-icon');
  background.classList.add('guarantee-icon');
  guarantBtn.style.backgroundColor = '#ffffff';
  guarantBtn.style.color = '#32425c';
  guarantBtn.style.boxShadow = 'none';
  guarantBtn.style.border = '#ffffff';
  deliveryBtn.style = 'none';
  creditBtn.style = 'none';

}

function showCredit() {

  deliveryDiv.style.display = 'none';
  guarantDiv.style.display = 'none';
  creditDiv.style.display = 'block';
  background.classList.remove('delivery-icon');
  background.classList.add('credit-icon');
  background.classList.remove('guarantee-icon');
  creditBtn.style.backgroundColor = '#ffffff';
  creditBtn.style.color = '#32425c';
  creditBtn.style.boxShadow = 'none';
  creditBtn.style.border = '#ffffff';
  deliveryBtn.style = 'none';
  guarantBtn.style = 'none';
}


$(function() {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 35000,
    values: [0, 30000],
    slide: function(event, ui) {
      $("#amount1").val(ui.values[0]);
      $("#amount2").val(ui.values[1]);
    }
  });
  $("#amount1").val($("#slider-range").slider("values", 0));
  $("#amount2").val($("#slider-range").slider("values", 1));
});
