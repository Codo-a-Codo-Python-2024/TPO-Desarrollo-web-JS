const nav = document.querySelector('#navLinks')
const open = document.querySelector('#open')
const close = document.querySelector('#close')
const links = document.querySelectorAll('.link-container')

open.addEventListener('click', () =>{
nav.classList.add('visible')
})

close.addEventListener('click', () =>{
    nav.classList.remove('visible')
})

links.forEach(link => {
    link.addEventListener('click', () =>{
        nav.classList.remove('visible')
    })
})
