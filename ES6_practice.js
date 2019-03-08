///Arrow Functions =>: An Alternative Way to Write Functions

//ES5
function reverseString(inputString) {
  return inputString.split(" ").reverse().join(' ').split("").reverse().join("");
}

console.log(reverseString('Hello I am Jerry'))

//ES6
var reverseString = (string) => string.split(" ").reverse().join(' ').split("").reverse().join("");

console.log(reverseString('hello i am jared'));
