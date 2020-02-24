// Write a function that returns the product of 2 numbers
function product(x, y) {
  let mult = x*y;
  return mult
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if(num%2!==0){
    return false
  }else{
    return true
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a>b){
    return a
  } else {
    return b
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c){
    return a
  } else if (b > a && b > c) {
    return b
  } else {
    return c
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let total = numbers.reduce((a, b) => a + b, 0);
    return total
};


// Return the largest number of a non-empty array
function maxOfArray(numbers) {
   return Math.max(...numbers) 
}
// Return the longest string in an array
function longestString(strings) {
  strings.sort((a,b)=>b.length-a.length)
  return strings[0]

}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr == "") {
    return null;
  }

  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] == word) {
      return true;
    }
  }
  return false;
}


// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  let arrayFinal = [];
  
  if (wordsArr == "") {
    return false;
  } else if (arrayFinal.indexOf(wordsArr) < 0) {
    return arrayFinal
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  const getArrayMax = matrix => matrix.reduce((a, b) => Math.max(a, b)); 
  const getArrayMax2d = array2d => getArrayMax(array2d.map(getArrayMax));
  return getArrayMax2d;
}