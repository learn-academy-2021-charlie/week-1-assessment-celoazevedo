// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

// create a function with one parameter.
// check the value of the argument that will be passed in by using conditinal statements.
// in the conditions, check if it is equal to 212, smaller than 212 or larger than 212 (in the code below the larger than condition is covered by the else 'catch all').

const boiling = (temperature) => {
    if (temperature === 212) {
        return `${temperature} is at boiling point`
    } else if (temperature < 212) {
        return `${temperature} is below boiling point`
    } else {
        return `${temperature} is above boiling point`
    }
}

console.log(boiling(temp1))
console.log(boiling(temp2))
console.log(boiling(temp3))

// --------------------2) Create a function that takes in two arrays of numbers and returns a single array with all the values sorted least to greatest.
// Use the test variables provided below. Expected output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

// create a function with two parameters (in this case we will be passing in 2 arrays).
// use the concat() built in array method to return a single array with the elements from both arrays that will be passed in as arguments.
// use the arrays sort() method to sort the elements inside the new array

const twoArrInOne = (arr1, arr2) => {
    return arr1.concat(arr2).sort((a, b) => a - b)
}

console.log(twoArrInOne(myNumbers2, myNumbers1))

// --------------------3) Create a function that takes in a string of a single word and returns the string with all letters reversed.
// Use the test variables provided below. Expected output: "ovarb", "eilrahc"

var myString1 = "bravo"
var myString2 = "charlie"

// creat a funciton with one parameter (in this case a string). 
// use the string split method to separate each character in the string and store the characters as elements in an array.
// use the string reverse method to reverse the order of the order of the elements in the array
// use the join method to join all of the string elements in the array and convert it into one string

const reverseWord = (word) => {
    return word.split('').reverse().join('')
}

console.log(reverseWord(myString1))
console.log(reverseWord(myString2))

// --------------------4) Create a function that takes in two numbers and subtracts the smaller number from the larger number.
// Use the two sets of test variables provided below. Expected output: 15, 12

var numberExample1 = 42
var numberExample2 = 27

var numberExample3 = 7
var numberExample4 = 19

// create a function with two parametes (in this case the funciton will be taking two numbers as arguments).
// use conditional statements to check which number is the largest
// subtract the smaller from the largest

const subtractSmallFromLarge = (num1, num2) => {
    if (num1 < num2) {
        return num2 - num1
    } else if (num1 > num2) {
        return num1 - num2
    } else {
        return `${num1} is equal to ${num2}`
    }
}

console.log(subtractSmallFromLarge(numberExample1, numberExample2))
console.log(subtractSmallFromLarge(numberExample3, numberExample4))

// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable passed into the subtraction function is not a number.
// Use the two sets of test variables provided below. Expected output: "Your input is not a number", 3
// Hint: There is an operator in JavaScript called typeof :)


var numberExampleRefactor1 = 42
var numberExampleRefactor2 = "hello"

var numberExampleRefactor3 = 27
var numberExampleRefactor4 = 24

// Use the same logic as in question 4 but now add a condition to check the data type of the input using the typeof operator.
// !! - Also dont forget to change the name of the vairable that you are assigning the new function to, (the name of the function). So that we are not trying to reasign a
// value to a variable that was previously declared using the const declaration. 

const subtractSmallFromLargeRefactored = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return "At least one of your inputs is not a number"
    } else if (num1 < num2) {
        return num2 - num1
    } else if (num1 > num2) {
        return num1 - num2
    } else {
        return `${num1} is equal to ${num2}`
    }
}

console.log(subtractSmallFromLargeRefactored(numberExampleRefactor1, numberExampleRefactor2))
console.log(subtractSmallFromLargeRefactored(numberExampleRefactor3, numberExampleRefactor4))