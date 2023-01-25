const container = document.querySelector('div');
const image = document.querySelector('img');
let isLightOn = true;

image.addEventListener('click', ()=> {
    if(isLightOn){
        image.src = './Light_bulb_on.png';
        container.classList.add('on');
        
    }
    else{
        image.src = './Light_bulb_off.png';
        container.classList.remove('on');
    }
    isLightOn = !isLightOn;
})