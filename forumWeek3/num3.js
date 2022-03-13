// map() -> does an action to every element in the array, returns an array
// reduce() -> does an action (in a function) to all elements in the array consecutively, return digit
// filter() -> filter all elements in the array that qualify the condition

var num = [1, 2, 3, 4, 5];

// map()
function multiply(num) {return num*100};
var mappedArr = num.map(multiply); // returns 100,200,300,400,500

// reduce()
function multiply2(num1, num2) {return num1*num2};
var reducedDigit = num.reduce(multiply2); // returns 120

// filter()
function filterNum(num) {return num>3};
var filteredNum = num.filter(filterNum); // returns 4,5
