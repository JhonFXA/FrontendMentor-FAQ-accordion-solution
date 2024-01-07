const expandButtons = document.querySelectorAll(".expand")
const answers = document.querySelectorAll(".answer")
expandButtons.forEach((button, index) => {
    button.draggable = false
    button.addEventListener('click', ()=>{
        if(button.src.includes('icon-minus.svg')){
            button.src = 'assets/images/icon-plus.svg'
            answers[index].style.display = 'none'
        } else {
            button.src = 'assets/images/icon-minus.svg'
            answers[index].style.display = 'flex'
        }
    })
})