const burger = document.querySelector('nav#sectionNav .harmburger')
const dropDown = document.querySelector('nav#sectionNav ul')
const dropSpan = document.querySelectorAll('nav#sectionNav .harmburger span')
const midSpan = document.querySelector('nav#sectionNav .harmburger span:nth-child(2)')
const firstSpan = document.querySelector('nav#sectionNav .harmburger span:nth-child(1)')
const thirdSpan = document.querySelector('nav#sectionNav .harmburger span:nth-child(3)')
burger.addEventListener('click', function () {
    this.classList.add('active')
    dropDown.classList.toggle('active')
    midSpan.classList.toggle('drop')
    firstSpan.classList.toggle('cross')
    thirdSpan.classList.toggle('revCross')
})