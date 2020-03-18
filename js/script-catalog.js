"use strict";


let thumbLeft = document.querySelector(".range-thumb-left");
let thumbRight = document.querySelector(".range-thumb-right");
let sliderRange = document.querySelector("#slider-range");

thumbLeft.onmousedown = function(event) {
  event.preventDefault();
  let shiftX = event.clientX - thumbLeft.getBoundingClientRect().left;
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);

  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - sliderRange.getBoundingClientRect().left;
    //оставить бегунок в  границах.
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = document.offsetWidth - thumbLeft.offsetWidth;
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

thumbRight.onmousedown = function(event) {
  event.preventDefault();
  let shiftX = event.clientX - thumbRight.getBoundingClientRect().left;
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);

  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - sliderRange.getBoundingClientRect().left;
    //оставить бегунок в  границах.
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = document.offsetWidth - thumbRight.offsetWidth;
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

thumbLeft.ondragstart = function() {
  return false;
};
thumbRight.ondragstart = function() {
  return false;
};

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
let cartNumber = document.querySelector(".cart-number");
let counter = 0;



[...buyButton].forEach(buyButton =>
  buyButton.addEventListener("click", function() {
    modalAdded.style.display = "block";
    if (cartNumber !== null) {
      counter++;
      cartNumber.textContent = counter;
    };
  }));


closeButton.onclick = function() {
  modalAdded.style.display = "none";
}

if (continueShopping !== null) {
  continueShopping.onclick = function() {
    modalAdded.style.display = "none";
  };
}

let sortPrice = document.querySelector(".sort-price");
let sortType = document.querySelector(".sort-type");
let sortFunctional = document.querySelector(".sort-functional");

if (sortPrice !== null) {
  sortPrice.onclick = function() {
    sortPrice.classList.add("sorting-active");
    sortType.classList.remove("sorting-active");
    sortFunctional.classList.remove("sorting-active");
  };
}
if (sortType !== null) {
  sortType.onclick = function() {
    sortType.classList.add("sorting-active");
    sortPrice.classList.remove("sorting-active");
    sortFunctional.classList.remove("sorting-active");
  };
}

if (sortFunctional !== null) {
  sortFunctional.onclick = function() {
    sortFunctional.classList.add("sorting-active");
    sortPrice.classList.remove("sorting-active");
    sortType.classList.remove("sorting-active");
  };
}

let descending = document.querySelector(".descending");
let ascending = document.querySelector(".ascending");

if (descending !== null) {
  descending.onclick = function() {
    descending.classList.add("sorting-active");
    ascending.classList.remove("sorting-active");
  };
}
if (ascending !== null) {
  ascending.onclick = function() {
    descending.classList.remove("sorting-active");
    ascending.classList.add("sorting-active");
  };
}


let page1 = document.querySelector(".page1");
let page2 = document.querySelector(".page2");
let page3 = document.querySelector(".page3");

page1.onclick = function() {
  page1.classList.add("active-page");
  page2.classList.remove("active-page");
  page3.classList.remove("active-page");
};

page2.onclick = function() {
  page1.classList.remove("active-page");
  page2.classList.add("active-page");
  page3.classList.remove("active-page");
};

page3.onclick = function() {
  page1.classList.remove("active-page");
  page2.classList.remove("active-page");
  page3.classList.add("active-page");
};
