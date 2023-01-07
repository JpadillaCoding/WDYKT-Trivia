
let page = document.body.className
let next = document.querySelector('.next')
let slidesArg = document.querySelectorAll('.question')
let counter = document.querySelector('.counter')
let win = document.querySelector('#win')
let lost = document.querySelector('#lost')
let questionNum = 0
let total = slidesArg.length-2
let correct = 0
let accuracy = 0


switch(page) {
    case 'index-body':
        indexPage();
        break;
    case 'inst-body':
        instPage();
}

function indexPage() {
    let indexButton = document.querySelector('.index-btn')

    indexButton.onclick = function() {
        location.href = 'instructions.html'
    }
}

function instPage() {
    let instButton = document.querySelector('.inst-btn')

    instButton.onclick = function() {
        location.href = 'game.html'
    }
}


let answerChoice = document.querySelectorAll('.game-answer')

answerChoice.forEach(choice => {
    choice.addEventListener('click', check)
})
function check(choice) {
    if (choice.target.id=='correct') {
        choice.target.style.backgroundColor='rgba(34, 251, 46, 0.8)'
        next.style.display='block'
        correct ++
        accuracy = Math.floor((correct/total)*100)
        counter.innerHTML =`Accuracy: ${accuracy}`
        /*Stops the user from being able to keep clicking the correct answer. This was causing an 
        issues that you could keep adding to the score on the same question with multiple clicks*/ 
        choice.target.removeEventListener('click',check)
    }
    else {
        choice.target.style.backgroundColor='rgba(255, 72, 72, 0.8)'
        next.style.display='block'
        /* User was able to click on other choices after clcking a wrong answer. This 
        removed that bug */
        let siblings = choice.target.parentElement.children
        Array.from(siblings).forEach((sibling) => {
            sibling.removeEventListener('click',check)
        })
    }
}

next.addEventListener('click', nextPg)
function nextPg() { 
    next.style.display='none'
    if ((questionNum + 1) < total) {
    slidesArg[questionNum].classList.remove('active')
    questionNum ++
    slidesArg[questionNum].classList.add('active')
    }
    else {
        slidesArg[questionNum].classList.remove('active')
        if(accuracy >= 80) {

            win.classList.add('active')
        }
        else {
            lost.classList.add('active')
        }
    }
}