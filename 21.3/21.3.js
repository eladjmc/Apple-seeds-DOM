const button = document.querySelector('button');
const textArea = document.querySelector('textarea');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
let text = textArea.value;

textArea.addEventListener('input', () => {
    text = textArea.value;
    if (text.length < 100) {
        h3.style.display='none';
        h2.style.display='block';
        button.style.display='none';
        return;
    }
    button.style.display='block';
    h2.style.display='none';
});

button.addEventListener('click', () => {
    h3.style.display='block';
    textArea.value='';
})