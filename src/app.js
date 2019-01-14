const PrimeChecker = require("./models/prime_number.js");

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const primeNumber = new PrimeChecker();
  primeNumber.bindEvents();
});
