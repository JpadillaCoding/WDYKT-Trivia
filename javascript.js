let page = document.body.className
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
    console.log(instButton)
}