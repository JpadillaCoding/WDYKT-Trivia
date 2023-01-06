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
answer.addEventListener('click', clicked)
function clicked(e) {
    console.log(e)
        if(e.target.localName =='button'){
            if(e.target.className=='btn correct'){
                next.style.display =' block'
            }
        }
}