const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function(){
searchInputEl.classList.add('focused');
searchInputEl.setAttribute('placeholder','search');
})

searchInputEl.addEventListener('blur', function(){
searchInputEl.classList.remove('focused');
searchInputEl.removeAttribute('placeholder', '');
})