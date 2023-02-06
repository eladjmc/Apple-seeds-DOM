// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words
// and capitalize them, and then the second function, sortWords(),
// will sort the words in alphabetical order. If the array contains
// anything but strings, it should throw an error.
// Call the functions once with an array of words and call it once
// with an array that includes at least one item that is not a word.
// Print the resolve and reject in a .then, .catch.

const makeAllCaps = (array) =>
  new Promise((resolve, reject) => {
    array.forEach((word) => {
      if (typeof word !== "string") {
        reject("One of the items in the array is not a string");
      }
    });
    resolve(array.map((word) => word.toUpperCase()));
  });

const sortWords = (array) =>
  new Promise((resolve, reject) => resolve(array.sort()));

const array = ["hello", "world", "aMaram"];

const array2 = [43, "world", "aMaram"];

makeAllCaps(array)
  .then((array) => console.log(sortWords(array)))
  .catch((err) => console.log(err));
