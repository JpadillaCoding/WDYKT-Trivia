//loads the right js for the file the user is on.
let page = document.body.className
let answer = document.querySelector('.game-question')
let next = document.querySelector('.next')
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

        if(e.target.localName =='button'){
            if(e.target.className=='btn correct'){
                e.target.style.backgroundColor='rgba(34, 251, 46, 0.8)'
                next.style.display='block'
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
let questionNum = 0
next.addEventListener('click', nextPg)
function nextPg() { 
    let slidesArg = document.querySelectorAll('.question')
    console.log(slidesArg)
    slidesArg[questionNum].classList.remove('active')
    questionNum +=1
    slidesArg[questionNum].classList.add('active')
}