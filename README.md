# WDYKT Trivia!
A Trivia game made with the tid-bit information I know about the world. Featuring my capabilities of DOM control using Javascript. I demonstrate interactive visuals and Html manipulation via user input. CSS features include responsiveness to mobile devices.
    
## View the Demo
    
Visit my github [page](https://jpadillacoding.github.io/WDYKT-Trivia/) on mobile or browser!


## Instructions

To play, visit my view demo link. The game is scored based on your accuracy of questions answered right on the top right corner. Try to guess the right answer to get a 80% accuracy rate to win the game!

## Challenges 

I faced various challenges making this project since it was my first time using javascript for DOM control. 

My first challenge didn't affect the function of my code, but would give an error code on the console. Could I leave it be? Of course not! I couldn't let potential employers see ANY bugs.
The error code was `Cannot set properties of null (setting 'onclick')`. Which happened when a button was clicked to move onto the next file. Once on the next file, javascript would look for a class that wasn't in that html file and thus, an error code. The simple solution was to add the onclick attribute onto html tag and give it a file path. The solution I went for was a `switch case`, because I felt it was a bit more involved for practicing JS. 
```
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
```
 Each html file has a unique class on the body, so the switch case just looks for which class is on the current file's body tag. The code for that specific file is then invoked.

 The second challenge is has the solution I'm most proud of. In the game logic, I needed to dynamically make every button unclickable and also color coat buttons for right/wrong. The solution is the functions `removeEvent` & `siblingColorChange`. Both's core functionality is to grab the siblings of the current question's answer choices. I needed a solution to go into the parent sibling of whatever answer choice was clicked and then reference all the children- all the answer choices of the current question. The problem was that all the solutions I found online involved confusing for loops since going through the parent/children object returned an `Element object`. I want to make readable and maintainable code, which led me to my solution. 
 ```
     function removeEvent(answerChoiceSiblings) {
        Array.from(answerChoiceSiblings).forEach((sibling) => {
            sibling.removeEventListener('click',check)
        })
    }
 ```
They key was to make the children into an array instead of leaving it as an `Element object`, which enabled me to use the `forEach` loop. 

 ## Game Logic

My core logic was checking if the answer choice is correct. 
```
function check(choice) {

    let answerChoiceSiblings = choice.target.parentElement.children

    if (choice.target.classList=='game-answer correct') {
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
```
The function checks for the hard coded `correct` class and changes styling to green or red depending if the right choice was picked. Accuracy is calculated every time a button is clicked and updated live using template literals. Colors are changed by taking advantage of the DOM's styling property. 

## AI Usage 

I chose this challenge/issue I faced as it's own section to highlight the utility of AI. It was a trivial problem <em>every</em> developer faces- the background image. I couldn't find any images that fit my criteria. The image needed to contain various cartoon styled questions marks, grey-scaled, and there had to be a lot of them with variability in style. Google could only find corporate clip-art of question marks and I needed something fun! 

[Dall.e](https://openai.com/dall-e-2/) has mainstreamed AI usage to make art, voice to text, music, etc. Why scroll through various google images trying to find something specific when I can use an AI art generator? Heck, I've seen people ask the AI for a squirrel in a knights armor, why couldnt I ask it for cartoon questions marks? This definitely saved me time and a headache of having to find the <em>perfect</em> background image. Some fellow developers see AI as a threat, but I see it as a tool. 

## Built With

![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
## Contact 

Jose Padilla - Jose.apadilla99@gmail.com

Project link - [WDTKY-Trivia](https://github.com/JpadillaCoding/WDYKT-Trivia)



## Acknowledgments

  - References to images, fonts, and the AI art can be found on my [reference file](https://github.com/JpadillaCoding/WDYKT-Trivia/blob/main/misc/refrences) with the following path: Misc -> References  
  - Hat tip to anyone whose code is used
  - [Badges/shields](https://github.com/alexandresanlim/Badges4-README.md-Profile)