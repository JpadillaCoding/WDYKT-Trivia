//loads the right js for the file the user is on.
let page = document.body.className
let answer = document.querySelector('.game-question')
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
answer.addEventListener('click', response)
function response(e) {
/*         Changes the buttons color depending if it was a correct class or not. 
        adds to accuracy when correct button is added */
        if(e.target.localName =='button'){
            if(e.target.className=='btn correct'){
                e.target.style.backgroundColor='rgba(34, 251, 46, 0.8)'
                next.style.display='block'
                correct ++
                accuracy = Math.floor((correct/total)*100)
                counter.innerHTML =`Accuracy: ${accuracy}`
            }
            else {
                e.target.style.backgroundColor='rgba(255, 72, 72, 0.8)'
                next.style.display='block'
            }
        }
        else{
            return;
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
console.log(win)