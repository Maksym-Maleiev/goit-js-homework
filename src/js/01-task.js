/*
 * Напиши скрипт пошуку найбільшого числа в масиві,
 * за умови, що числа унікальні (не повторюються).
 */

const numbers = [51, 18, 13, 24, 7, 85, 19];
let biggestNumber = numbers[0];
let message;

for (const number of numbers) {
  if (number > biggestNumber) {
    biggestNumber = number;
    message = `Число ${number} є найбільшим`;
  }
}

console.log()