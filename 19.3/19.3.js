const inputsArr = document.querySelectorAll("input");
let container = document.querySelector(".inputs");
let button = document.querySelector("button");
const result = document.querySelector(".result");

const validate = () => {
  const pass = ["1", "2", "3", "4", "5", "6"];
  for (let i = 0; i < inputsArr.length; i++) {
    if (inputsArr[i].value !== pass[i]) {
      failure();
      return false;
    }
  }
  success();
  return true;
};

const failure = () => {
  result.style.color = "red";
  result.textContent = "Bad password!";
};
const success = () => {
  result.style.color = "#2cda2c";
  result.textContent = "Logged In!";
};

if(inputsArr){
inputsArr[5].addEventListener('input',()=>{
    validate();
})
}


container.onkeyup = function (e) {
  var target = e.srcElement || e.target;
  var maxLength = parseInt(target.attributes["maxlength"].value, 6);
  var myLength = target.value.length;
  if (myLength >= maxLength) {
    var next = target;
    while ((next = next.nextElementSibling)) {
      if (!next) break;
      if (next.tagName.toLowerCase() === "input") {
        next.focus();
        break;
      }
    }
  }
};

document.body.addEventListener(
  "keydown",
  function (ev) {
    // function to check the detection
    ev = ev || window.event; // Event object 'ev'
    var key = ev.which || ev.keyCode; // Detecting keyCode

    // Detecting Ctrl
    var ctrl = ev.ctrlKey ? ev.ctrlKey : key === 17 ? true : false;

    // If key pressed is V and if ctrl is true.
    if (key == 86 && ctrl) {
      // print in console.
      console.log("Ctrl+V is pressed.");
      if (inputsArr[0] !== document.activeElement) {
        return;
      }
      navigator.clipboard.readText().then((copiedText) => {
        let arr = copiedText.split("");
        if (arr.length !== 6) {
          return;
        }
        for (let i = 0; i < inputsArr.length; i++) {
          inputsArr[i].value = arr[i];
          inputsArr[i].select();
        }
        validate();
      });
    } else if (key == 67 && ctrl) {
      // If key pressed is C and if ctrl is true.
      // print in console.
      console.log("Ctrl+C is pressed.");
    }
  },
  false
);
