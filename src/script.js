let opn = document.querySelector('#open')
let bdy = document.querySelector('body')
let btn = document.querySelector('#gas')

btn.addEventListener('click', () => {
    opn.classList.add('hidden');
    bdy.classList.remove('overflow-y-hidden')
})