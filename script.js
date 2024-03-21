'use strict';

const inputSection = document.getElementById('inputt');
const buttonSection = document.getElementById('btn');
const paragraphOne = document.querySelector('.paragraph1');
const paragraphTwo = document.querySelector('.paragraph2');

function palindrome(str) {
  let onlyAlphanumeric = str.toLowerCase().split('').reverse().join('');
  return onlyAlphanumeric === str;
}

buttonSection.addEventListener('click', function () {
  paragraphOne.classList.add('hidden');
  paragraphTwo.classList.add('hidden2');
  const inputt = inputSection.value;
  if (!inputt) {
    alert('input cannot be empty');
    return;
  }
  //removing nonalphanumeric characters
  const specialChars = /[^a-zA-Z0-9\s]/;
  if (specialChars.test(inputt)) {
    alert('special characters not allowed!');
    return;
  }

  const isPalindrome = palindrome(inputt);

  if (isPalindrome) {
    paragraphOne.classList.remove('hidden');
  } else {
    paragraphTwo.classList.remove('hidden2');
  }
});
