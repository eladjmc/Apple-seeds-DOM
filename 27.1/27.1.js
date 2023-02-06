// Write a function that takes a number as an argument and
// returns a Promise that tests if the value is less than or greater
// than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is
// rejected.
// Call the function and print the resolve and reject in a .then,
// .catch.

const getNumber = (num) =>
  new Promise((resolve, reject) => {
    num >= 10 ? resolve() : reject();
  });

  getNumber(11)
  .then(()=>{ console.log('GOOD!');})
  .catch(()=>{console.log('BAD!');})


