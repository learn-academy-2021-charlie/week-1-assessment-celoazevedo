// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
console.log(cohort.length)

// a) Your answer: the output will be the number of characters in the string. In this case 12 (count the space as a character).
// b) Verify and explain: when you apply the length property on a string the output will be the number of characters on that string (including spaces).


// --------------------2) What will this log?

var greeting = "Hello World!"
console.log(greeting[3])

// a) Your answer: it will log the value of the character at the index 3 position within the string that was assigned to the greeting variable. In this case it will be the letter 'l'.
// b) Verify and explain: the square braket notation when applied to the variable that was assigined to the 'Hello World!' string, 
//    it gives access to the character of that string located at the index position used inside of the squre brakets.


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
console.log(languages[index])

// a) Your answer: it will log the element in the array located in the index position 1. In this case a string with a value 'Ruby'.
// b) Verify and explain: We can access elements in an array using the same braket notation that we used in the question above with the string data type.
//    In the scenarion above, we are declaring 2 variables. In one we are assiging an array with 4 elements and the other the value 1.
//    The variable index is assigned a value of 1. And the index variable with a value of 1 is being used inside the 
//    braket notation to access the element located at the index 1 position in the array, which is the second element in the array ('Ruby').


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: it will log the weekendDays array will the string elements inside with all of its letters converted to large uppercase letters. ["SATURDAY", "SUNDAY"]
// b) Verify and explain: I was wrong. Here is my error: console.log(weekendDays.toUpperCase())
                        // ^

                        // TypeError: weekendDays.toUpperCase is not a function
//    My understanding now is that toUpperCase() is a string method and not and an array method. In order to use
//    the toUpperCase() method to convert the letters of the string elements in the array, we need to access the individual elements (which in our case are strings)
//    and apply the method to each element. To do this we need to iterate through the array using a forloop of we could also use the higher order functions .map() or .forEach


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: it will log the data type of the result from when you apply the length property to the dataTypes array. In this case the array
//    have 3 elements so dataTypes.length will be equal the number 3. So the console should log the string 'number'.
// b) Verify and explain: the .length property when applied to an array or a string will output data of type number that represents the number of elements in the array
//    or number of characters in a string.
