//test for console for live server.

const onclickfunc = () => {
  console.log("Hello")
}

onclickfunc()


let simpleArray = ['one', 2, 'three', true, 'fall']

console.log(simpleArray.length);

const yourArray = ['Monteal', 34, false, 'Jelly', 'future']
console.log(yourArray);
console.log(yourArray.length)

let ourArray = ["a", "b", "c"];
let ourVariable = ourArray[2];

console.log(ourVariable);

console.log(ourArray);
ourArray[0] = "z"
console.log(ourArray)

console.clear()

let myArray = ["a", "b", "c", "d"];

myArray[1] = "u"

console.log(myArray);

console.clear()

//add Items to an Array with push() and unshift()

//the push() method adds elements to the end of an array.
//the unshift() method adds elements to the bessing of an array.

let twentyThree = "23";
let array = ["24", "25"];

array.unshift("22", "23");
console.log(array);

array.push("26", "27");
console.log(array);

console.clear();

function mixedNumbers(arr) {
 
  arr.push(7, 'VIII', 9);
  arr.unshift('I', 2, 'three')
  
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

console.clear();

//Remove items from an Array with pop() and shift()
//pop(): removes an element from the end of an array.
//shift(): removes an element from the beginning of an array.

//example
let greetings = ['whats up?', 'hello', 'see ya'];
greetings.pop();
console.log(greetings);

greetings.shift();
console.log(greetings);

let popped = greetings.pop()
console.log(popped); //hello

//exercise

function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
