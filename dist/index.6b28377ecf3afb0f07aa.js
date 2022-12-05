/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};




var annuallyPrices = [199.99, 249.99, 399.99],
  monthlyPrices = [19.99, 24.99, 39.99];
var toggle = document.querySelector('.toggle__input'),
  prices = document.querySelectorAll('.card__price');
toggle.addEventListener('click', function () {
  prices.forEach(function (element, i) {
    element.innerText = toggle.checked ? monthlyPrices[i] : annuallyPrices[i];
  });
});
/******/ })()
;