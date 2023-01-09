
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
        break;
    case 'game-body':
        gamePage();
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
function gamePage(){
    let playAgainButton = document.querySelectorAll('.playAgainBtn')

    playAgainButton.forEach((playAgain) => {
        playAgain.onclick = function() {
            location.href = 'index.html'
        }
    })


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
            counter.innerHTML =`Accuracy: ${accuracy}%`
            siblings(choice)
        }
        else {
            choice.target.style.backgroundColor='rgba(255, 72, 72, 0.8)'
            next.style.display='block'

            let siblings2 = choice.target.parentElement.children
            Array.from(siblings2).forEach((sibling) => {
                if(sibling.id=='correct') {
                    sibling.style.backgroundColor='rgba(34, 251, 46, 0.8)'
                }
            })

            siblings(choice)
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

                win.classList.add('outcome')
            }
            else {
                lost.classList.add('outcome')
            }
        }
    }
    /* User was a ble to click on other answers after choosing a response. User was able to
    add to the score even when they got the wrong answer. */
    function siblings(choice) {

        let siblings = choice.target.parentElement.children
        Array.from(siblings).forEach((sibling) => {
            sibling.removeEventListener('click',check)
        })
    }
}