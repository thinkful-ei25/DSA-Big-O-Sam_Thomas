'use strict';

//Even or odd

function isEven(value){
  if (value % 2 === 0){
    return true;
  }
  else
    return false;
}

//O(1)

//Are you here?

function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

//O(n^2)

//Doubler

function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

//O(n)

//Naive Search

function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

//O(n)

//Creating pairs

function createPairs(arr) {
  let count =0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ', ' + arr[j]);
      count++;
    }
  }
  console.log(count);
}

//createPairs([1,2,3,4,5,6,7,8,9,10]);

//4, 6
//8, 28
//10, 45
//20, 190
//30, 435

//O(2^n)

//Computing fibonaccis

function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i === 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}

//O(n)

//An efficient search

function efficientSearch(array, item) {
  let minIndex = 0;
  let count = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    count++;
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    console.log('min:' + minIndex,'max:'+maxIndex,'current:'+currentIndex);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      console.log(count);
      return currentIndex;
    }
    
  }
  console.log(count);
  return -1;
}

//const answer = efficientSearch([1,2,3,4,5,6,7,8,9,10],4);
//console.log(answer);

//O(log(n))

//Random element

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//O(1)

//Is it prime?

function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  let count=0;
  for (let i = 2; i < n; ++i) {
    count++;
    if (n % i === 0) {
      console.log(count);
      return false;
    }
  }
  console.log(count);
  return true;
}

console.log(isPrime(1009));

//13, 11, true
//19, 17, true
//211, 209, true
//144, 1, false
//145, 4, false
//4009, 18, false

//O(n), worst case scenario the number is prime and you have to do num-2 operations

/*

If num isPrime, # of operations = num-2;
If num !isPrime, # of operations is dependent on number
If num%2===0, # of operations is 1
If num%3===0, # of operations is 2

*/