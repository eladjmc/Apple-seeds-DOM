const buttonPlus = document.querySelector('.plus');
const buttonMinus = document.querySelector('.minus');
const h1 = document.querySelector('h1');
let size = window.getComputedStyle(h1, null).getPropertyValue('font-size');
size = size.replace(/\D/g,'');

const validationCheckMinus = (size) => size > 6; 

const validationCheckPlus = (size) => size < 100; 


const changeFontSize = (action) => {
    size = window.getComputedStyle(h1, null).getPropertyValue('font-size');
    size = size.replace(/\D/g,'');
    addedValue = action === '-' ? -1 : 1;

    if(!validationCheckPlus(size) && addedValue === 1){
        return;
    }
    if(!validationCheckMinus(size) && addedValue === -1){
        return;
    }
      h1.style.fontSize =`${parseInt(size)+ addedValue}px` ;
}


buttonPlus.addEventListener('click',()=>{
    changeFontSize('+');
})

buttonMinus.addEventListener('click',()=>{
    changeFontSize('-');
})