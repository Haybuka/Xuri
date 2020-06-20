const burger = document.querySelector('nav#sectionNav .harmburger')
const dropDown = document.querySelector('nav#sectionNav ul')
burger.addEventListener('click', () => {
    burger.classList.add('active')
    dropDown.classList.toggle('active')
    console.log(burger)
})