const expandButtons = document.querySelectorAll(".expand-button")
const answers = document.querySelectorAll(".answer")

expandButtons.forEach((button, index) => {

    answers[index].setAttribute('id', 'answer' + (index + 1))

    button.setAttribute('aria-controls', 'answer' + (index + 1))

    button.addEventListener('click', ()=>{
        console.log(button.ariaExpanded)
        if(answers[index].style.display === 'flex'){
            button.setAttribute('aria-expanded', 'false')
            button.setAttribute('aria-label', 'Reveal answer')
            button.querySelector('img').src = 'assets/images/icon-plus.svg'
            button.querySelector('img').setAttribute('alt', 'Plus icon')
            answers[index].style.display = 'none'
        } else {
            button.setAttribute('aria-expanded', 'true')
            button.setAttribute('aria-label', 'Hide answer')
            button.querySelector('img').src = 'assets/images/icon-minus.svg'
            button.querySelector('img').setAttribute('alt', 'Minus icon')
            answers[index].style.display = 'flex'
        }
    })
})
