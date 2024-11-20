// 01. Reverse a string 
function reverseString(str) {
  return str.split("").reverse().join("");
}
// Example:
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(`Reversed String: ${reversedString}`);



// 02. Find the highest and lowest value in an array
const numbers = [90, 10, 100, 30, 89];

function findMinMax(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { max, min };
}
//Func. Call:
const { max, min } = findMinMax(numbers);
console.log(`Highest Value: ${max}, Lowest Value: ${min}`);



// 03.sorting an array
const unsortedArray = [5, 3, 8, 1, 2];
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}
//Func. Call:
const sortedArray = sortArray(unsortedArray);
console.log(`Sorted Array: ${sortedArray}`);



// 04. Display first 3 elements in an array
function displayFirstThreeElements(arr) {
  return arr.slice(0, 3);
}
// Example:
const sampleArray = [10, 20, 30, 40, 50];
const firstThreeElements = displayFirstThreeElements(sampleArray);
console.log(`First 3 Elements: ${firstThreeElements}`);



// 05. Remove the 4th element and add a new element there
function replaceFourthElement(arr, newElement) {
  arr.splice(3, 1, newElement);
  return arr;
}
// Example:
const anotherArray = [1, 2, 3, 4, 5];
const updatedArray = replaceFourthElement(anotherArray, "Vidhun Learnify");
console.log(`Updated Array: ${updatedArray}`);



// 06. Create a method to add background color to a div element
function addBackgroundColorToDiv(divId, color) {
  const divElement = document.getElementById(divId);
  if (divElement) {
    divElement.style.backgroundColor = color;
  } else {
    console.error(`Div with id "${divId}" not found.`);
  }
}



// 07. Write function to generate random background color of body
function generateRandomBackgroundColor() {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
  document.body.style.backgroundColor = randomColor;
}
