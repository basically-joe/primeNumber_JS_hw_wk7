const PubSub = require("../helpers/pub_sub.js");

const PrimeChecker = function() {

};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe("FormView:number-submitted", (event) => {
    const inputtedNumber = event.detail;
    const primeNumber = this.numberIsPrime(inputtedNumber);
    PubSub.publish("PrimeChecker:result-calculated", primeNumber);
  })
};

PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return `The number ${event.detail} isn't a Prime Number!!!`;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return `The number ${event.detail} isn't a Prime Number!!!`;
    }
  }
  return `The number ${event.detail} is a Prime Number!!! Well done!!!`;
};

module.exports = PrimeChecker;
