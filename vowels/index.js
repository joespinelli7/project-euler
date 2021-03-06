// Write a function that returns the number of vowels used in a string.  Vowels are the characters
// 'a', 'e', 'i', 'o', and 'u'.
// Examples:
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Improved version:
function vowels(str) {
  const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;

  for(let element of str) {
    vowelsArr.includes(element.toLowerCase()) ? counter++ : null;
  }

  return counter;
}

// Older version:
// function vowels(str) {
//   const vowelList = ['a', 'e', 'i', 'o', 'u'];
//   let vowelArray = [];
//
//   str.toLowerCase().split('').map( letter => {
//     (vowelList.includes(letter) ? vowelArray.push(letter) : null)
//   })
//   return vowelArray.length
// }
