
"use strict"
document.title = 'cardio S2';
let cl = console.log;

// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'
// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string

function longestWord(sen) {
  let clearSen = sen.match(/[0-z]|[' ']/gi).join('');
  let senArr = clearSen.split(' ');
  let maxNum = 0;
  let charArr = []; 
  let result;
  senArr.forEach(ele => {
    if (ele.length > maxNum) maxNum = ele.length
  });
  senArr.forEach(e => (e.length == maxNum) ? charArr.push(e) : false);
    (charArr.length == 1) ? result = charArr[0] : result = charArr;
  cl(result);
}
longestWord('Hi there, my name is Bard')


// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  // let convertedString = arr.join(',');
  let returnedArr = [];
  // let restValuesArr = [];
  while (len < arr.length) {
    let splitedArr = arr.splice(0,len);
    returnedArr.push(splitedArr)
  }
  if (len = arr.length) {
    let splitedArr = arr.splice(0,len)
    returnedArr.push(splitedArr);
  }
  cl(returnedArr)
}
chunkArray([1, 2, 3, 4, 5, 6, 7], 3);

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {

}
flattenArray([[1, 2], [3, 4], [5, 6], [7]]);
// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  // return arrays.reduce((a, b) =>a.concat(b))
  // return [].concat(...arrays)
  // return [].concat.apply([], arrays)
    let finalArr = [];
  for (let i = 0; i < arrays.length; i++)
    arrays[i].forEach(ele => finalArr.push(ele));
  return finalArr;
}
cl(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  let arr = str.match(/[A-z]|[' ']/g);
  let magicArr = [];
  let magicString;
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    let num = char.charCodeAt();
    if (num != 32) num++;
    let magicChar = String.fromCodePoint(num);
    magicArr.push(magicChar)
    magicString = magicArr.join('')
  }
  cl(magicString)
}
letterChanges('Hello there')









