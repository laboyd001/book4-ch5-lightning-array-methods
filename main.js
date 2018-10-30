
// array methods: map -- filter -- reduce, and more!
const colors = ["red", "blue", "green", "yellow", "burnt orange", "teal"]
const numbers = [20, 10, 5, 8, 30, 100, 19]


// sort works in...unusual ways
let sortedColors = colors.sort()
sortedColors 

// below...  you don't have to declare an array
let sortedNums = numbers.sort((a, b) => {
  // if answer is a positive number it knows that the first num is larger than the second and switches them, thus it sorts numbers properly
  return a - b
})
sortedNums

numbers.sort((a, b) => {
  // if answer is a positive number it knows that the first num is larger than the second and switches them, thus it sorts numbers properly
  return a - b
})
numbers

// ======================================================================================================================================
// boring old way
// var reversedColors = []
// for (var i = 0; i < colors.length; i ++) {
//   var reversed = colors[i].split("").reverse().join("")
//   reversedColors.push(reversed)

// }
// reversedColors 

// new way ===========> .map
// .map loops over an array and returns something; you have to have the return and you must define the variable "let reversedColors ="
// .map creates a new array
let reversedColors = colors.map(color => {
  return color.split("").reverse().join("")
})

reversedColors


// Below is the shorter way to write reversedColors
// let reversedColors = colors.map(color => color.split("").reverse().join(""))
// ================================================================================================================

// .filter

let fourLetterWords = colors.filter(color => color.length === 4 )
fourLetterWords


// same but written out in long-hand
let fourLetterColors = []
for(let i = 0; i < colors.length; i++) {
  if (colors[i].length === 4 )
  fourLetterColors.push(colors[i])
}
fourLetterColors

// .reduce
// accumulator takes the acculated value of things on the left and adds them to the next index of the array on the right

let total = numbers.reduce((accumulator, next) => accumulator + next)
total

// the words 'accumulator and next' are variables
let colorList = colors.reduce((accumulator, next) => `${accumulator}, ${next}`)
colorList

let colorList2 = colors.reduce((a, b) => `${a}, ${b}`)
colorList2

// 1) filter = Make an array from the one below called fave_demo that contains only ages from 18 - 49
let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102]
let x = ages.filter(age => age > 18 && age < 49 )
console.log(x)

// 2) map = Choose a loop method of your choice to get this result from this array:
let nums = [1, 2, 3, 4, "5", 6, "7"]
// expected result:
// [3, 5, 7, 9, 11, 13]

let testNums = nums.map(function(x){
  return parseInt(x)
})
// console.log(testNums)


// let total = numbers.reduce((accumulator, next) => accumulator + next)
// total

let selectedNums = nums.map((a, b) => (+a) + (+b)).filter(num => num.valueOf() > 1)
console.log(selectedNums)

let numTotal = testNums.map((a, b) => a + b)

numTotal
let finalNum = numTotal.filter(num => num != 1)
console.log(finalNum) 


// let numsArray = nums.map((a, b) => {
 
//   return parseInt(a) + parseInt(b)
// })
// numsArray

// 3) Capitalize 'the', insert a comma after 'teacher' and output "Yoda says, "The greatest teacher, failure is"

// let colorList = colors.reduce((accumulator, next) => `${accumulator}, ${next}`)
// colorList

let yoda_quote = ["The", "greatest", "teacher,", "failure", "is"]

let yodaSentence = yoda_quote.reduce((a, b) => `${a} ${b}`)
console.log(`Yoda says, ${yodaSentence}`)

// 4) chained array methods =  * Sort the following numbers in descending order
//    * Remove any integers greater than 19.
//    * Multiply each remaining number by 1.5 and then substract 1.
//    * Then output (either in the DOM or the console) the sum of all the resulting numbers.

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8]

// numbers.sort((a, b) => {
//   // if answer is a positive number it knows that the first num is larger than the second and switches them, thus it sorts numbers properly
//   return a - b
// })
// numbers

// integers.sort((a,b) =>{
//   return a + b
// })
// integers
// let y = integers.filter(z => z > 19)
// y

// let c = y.map(x => x * 1.5 - 1)
// c

// let total3 = c.reduce((a, b) => a + b)
// total3

let d = integers.sort((a,b) => (b-a)).filter(a => a < 19).map(a => a * 1.5 - 1).reduce((a,b) => a+b)
console.log(d)