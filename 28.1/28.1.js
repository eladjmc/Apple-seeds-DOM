const data = document.querySelector('.data');

const btn = document.querySelector('button');
btn.addEventListener('click',()=>{
    addJoke();
})

const addJoke = () => {
fetch('https://api.jokes.one/jod',)
.then((res)=> res.json())
.then((data)=> data.contents)
.then((content)=> content.jokes)
.then((joke)=>{
    data.innerHTML=
    `
    <h1>${joke[0].description}<h1/>
    `
    return joke[0].joke.text;
})
.then((jokeText)=>{
    data.innerHTML+=
    `
    <p>${jokeText}<p/>
    `
})
.catch((err)=>err);
}