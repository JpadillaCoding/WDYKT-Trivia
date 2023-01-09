
let page = document.body.className
let next = document.querySelector('.next')
let slidesArg = document.querySelectorAll('.question')
let counter = document.querySelector('.accuracy-percentage')
let win = document.querySelector('#win')
let lost = document.querySelector('#lost')
let questionIndex = 0
let totalSlides = slidesArg.length-2 //2 is subratracted since question class has 2 extra pages that aren't actually questions
let correctAnswers = 0
let accuracy = 0


//switch case used to load code needed per each html doc. Works by checking the body's class name
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
    let playAgainButton = document.querySelectorAll('.play-again-btn')

    playAgainButton.forEach((playAgain) => {
        playAgain.onclick = function() {
            location.href = 'index.html'
        }
    })

    /*Goes through each answer choice and adds an event listener for adding into the 
    accuracy counter and having the proper colors used for right or wrong answers.*/
    let answerChoice = document.querySelectorAll('.game-answer')

    answerChoice.forEach(choice => {
        choice.addEventListener('click', check)
    })

    function check(choice) {

        let answerChoiceSiblings = choice.target.parentElement.children

        if (choice.target.id=='correct') {
            choice.target.style.backgroundColor= 'rgba(34, 251, 46, 0.7)'
            next.style.display='block'
            correctAnswers ++
            accuracy = Math.floor((correctAnswers/totalSlides)*100)
            counter.innerHTML =`Accuracy: ${accuracy}%`
            removeEvent(answerChoiceSiblings)
        }
        else {
            choice.target.style.backgroundColor = 'rgba(255, 72, 72, 0.8)'
            next.style.display='block'

            siblingColorChange(answerChoiceSiblings)
            removeEvent(answerChoiceSiblings)
        }
    }
    //Takes the user into the next question.
    next.addEventListener('click', nextPg)
    function nextPg() { 
        /*Next btn hides after every click to make sure user doesn't skip questions
        is also only shown after the user chooses an answer*/
        next.style.display='none'
        if ((questionIndex + 1) < totalSlides) {
        slidesArg[questionIndex].classList.remove('active')
        questionIndex ++
        slidesArg[questionIndex].classList.add('active')
        }
        else {
            //Takes the user to the win or lose page
            slidesArg[questionIndex].classList.remove('active')
            if(accuracy >= 80) {

                win.classList.add('outcome')
            }
            else {
                lost.classList.add('outcome')
            }
        }
    }
    /* User was able to click on other answers after choosing a response. User was able to
    add to the score even when they got the wrong answer. Following code fixes that bug*/
    function removeEvent(answerChoiceSiblings) {
        Array.from(answerChoiceSiblings).forEach((sibling) => {
            sibling.removeEventListener('click',check)
        })
    }
    function siblingColorChange(answerChoiceSiblings) {
        Array.from(answerChoiceSiblings).forEach((sibling) => {
            if(sibling.id=='correct') {
                sibling.style.backgroundColor = 'rgba(34, 251, 46, 0.7)'
            }
        })
    }
}