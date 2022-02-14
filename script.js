// Write a program to check if a string (passed in as an argument) is a palindrome i.e. a word that reads the same backwards as forwards, e.g. madam. Assume that the word will not contain any spaces or special characters
//Q1
const palindrome = (str) => {
  return str == str.split('').reverse().join('');
};
palindrome();
// Write a program that takes in an integer as an argument and reverses it i.e. 52 ==> 15 etc

//Q2
let numReversed = '';

function reversedNum(num) {
  const nums = String(num);
  for (let i = nums.length - 1; i >= 0; i--) {
    numReversed += nums[i];
  }
  return numReversed;
}

reversedNum();

//Q3
//Remove from the array whatever is in the following arguments. Return the remaining values in an array.
//Ex removeSpecific([2,3,4,6,6, 'hello] ([2,6]))  == [3,4, 'hello']

// function removeSpecific(arr1, arr2) {
//   let arr3 = [];
//  const arr4= arr1.map((elem) => {
//     if (arr2.includes(elem)) {
//       return;
//     }
//     else {
//         arr3.push(elem)
//     }
//   });
//   return arr4;
// }

// removeSpecific([2, 3, 4, 6, 6, "hello"], [2]);

//code2
function removeSpecific(arr1, arr2) {
  return arr1.filter((elem) => !arr2.includes(elem));
}

console.log(removeSpecific([2, 3, 4, 6, 6, 'hello'], [2, 6]));

//An array contains numbers along with -1. Sort the array in ascening order but the place of -1s should not be changed
//e.g.  a = [-1, 150, 190, -1, -1, 160, 180]. sortByHeinght(a) = [-1, 150, 160, -1 ,-1, 180, 190 ]

function sortByHeight(arr = []) {
  const positionOfElements = [];

  arr.map((elem, idx) => {
    if (elem === -1) {
      positionOfElements.push(idx);
      arr.splice(idx, 1);
    }
  });
  arr.sort();
  //   console.log(arr, positionOfElements);

  positionOfElements.forEach((itm) => {
    arr.splice(itm, 0, -1);
  });
  console.log(arr);
}
sortByHeight([23, 2, 31, -1, 23, -1]);

//   });
// }

//Sum All Primes
//Pass in a number to loop upto and add all prime numbers
//for example sumAllPrimes(20) =>  2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 = 77
// Hint: create a separate function to check if the number is prime
function sumPrimes(num) {
  //create an array with values from 1 to 10
  var val = Array.from({ length: num }, (_, i) => i + 1);

  val = val
    .filter((number) => {
      for (var i = 2; i < number; i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return number > 1; // [2, 3, 5, 7]
    })
    .reduce(function (a, b) {
      return a + b; //sum = 17
    });
  return val;
}

console.log(sumPrimes(12));

// Write a program that takes a string an returns the character that appears the max amount of times.
// For example maxChar(scooter) ==> returns 'o'.
// If there are multiple characters of the max length, return an array of the characters instead
// For example maxChar(zookeeper) ==> retuns ['o', 'e']
// If there are no repeating characters, return null
// For example maxChar(bed) ==> returns null


function maxChar(str) {
  let charObj = {};
  let maxChar = [];
  let maxCount = 1;
  for (let i = 0; i < str.length; i++) {
    console.log((charObj[str[i]] = charObj[str[i]] + 1 || 1));
  }
  console.log(charObj);
  for (x in charObj) {
    if (charObj[x] > maxCount) {
      maxChar.push(x);
    }
  }
  return maxChar;
}
console.log(maxChar("javasscriptt"));

// Find sum of the sum of two diagonals
// arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]
// Expected output:
// ((1 + 5 + 9) + (3 + 5 + 7)) => 15 + 15 ==> 30
const arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const sum1 = 0;
const sum2 = 0;

for (let i = 0; i < arr1.length; i++) {
  sum1 += arr1[i][i];
  sum2 += arr[i][arr1.length - 1] - i;
}

// Write a program that takes two arrays of objects and joins them according to their ids.
const titles = [
  { id: 1, title: 'Title 1' },
  { id: 2, title: 'Title 2' },
  { id: 3, title: 'Title 3' },
];
const posts = [
  { id: 1, post: 'This is post 1' },
  { id: 3, post: 'This is post 3' },
  { id: 2, post: 'This is post 2' },
];
//Expected output
// [
//     { "id": 1, "title": "Title 1", "post": "This is post 1" },
//     { "id": 2, "title": "Title 2", "post": "This is post 2" },
//     { "id": 3, "title": "Title 3", "post": "This is post 3" }
// ]

let merged = [];

for (let i = 0; i < titles.length; i++) {
  merged.push({
    ...titles[i],
    ...posts.find((itmInner) => itmInner.id === titles[i].id),
  });
}

console.log(merged);

// Write a program to group duplicates in an array
// Grouping duplicates in an array
// let arr = [1, 2, 4, 1, 3, 1, 2, 6];
// group(arr);

// Expected outcome: { '1': 3, '2': 2, '3': 1, '4': 1, '6': 1 }

let arr = [1, 2, 4, 1, 3, 1, 2, 6];

const results = arr.reduce((acc, value) => {
  if (acc[value]) {
    acc[value]++;
  } else {
    acc[value] = 1;
  }
  return acc;
}, {});

console.log(results);
