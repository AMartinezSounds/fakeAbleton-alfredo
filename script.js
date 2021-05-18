const more = document.querySelector('.more');
const positive = document.querySelector('.more-positive');

more.addEventListener('click', ()=>{
    positive.classList.toggle('disappear')
})