// Instructions
// Answer the following questions:
// Question 1:
// In your own words what will this point to and why?
// (Note this is the global scope)

//this will point to global because it is been called from global scope
console.log(this);

// Question 2:
// a. In your own words what will this point to and why?

// this will point to global who invoked greet

// b. How can you fix this code?
const myObj = {
  name: "Timmy",
  greet(){  // <<<==== change function from arrow and add const {name}=this
    const { name } = this;
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();

// Question 3:
// In your own words what will this point to and why?
// this will point to global, no invoke, not arrow function
const myFuncDec = function () {
  console.log(this);
  return this;
};


// Question 4:
// In your own words what will this point to and why?
// global because it lives in global
const myFuncArrow = () => {
  console.log(this)
};
myFuncArrow();


// Question 5:
// a. In your own words, what will this point to and why?
// window / global all DOM objects lives on window.
// b. How can you fix this code?
// add action to the event listener.
document.querySelector(".element").addEventListener('click',()=>{
    console.log(this);
});
