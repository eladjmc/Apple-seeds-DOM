const startHereLi = document.querySelector(".start-here");
const ulElement = document.querySelector('ul ul');
const title = document.querySelector('title');
const paragraph = document.getElementsByTagName('p');
const button = document.querySelector('button');
let toggle = 1;


const changes = () => {
    if(!toggle){
        return;
    }
    toggle--;
    startHereLi.textContent= 'main title';
    const newLi = document.createElement('li');
    newLi.textContent = 'subtitle 4';
    ulElement.appendChild(newLi);
    const liArr =  document.querySelectorAll('li');
    liArr[liArr.length-1].remove();
    title.textContent = 'Master Of The DOM';
    if(!paragraph[0]){
        return;
    }
    paragraph[0].textContent = `Don't forget to check if the value is not null/undefined`;
    button.style.display = 'none';
}