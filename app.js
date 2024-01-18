const computerChoiceDisplay=document.getElementById('computer-choice');
const userChoiceDisplay=document.getElementById('user-choice');
const resultDisplay=document.getElementById('result');
const possibleChoices= document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    userChoice=e.target.id;
    userChoiceDisplay.innerHTML= userChoice;
    generateComputerChoice();
    getResult();
}) );

function generateComputerChoice(){
    const randomNumber =Math.floor(Math.random()*3) +1 ;
    console.log(randomNumber);
    
    switch (randomNumber) {
        case 1:
            computerChoice = 'rock';
        break ;

        case 2 :
            computerChoice='scissors';
        break ;

        case 3 :
            computerChoice='paper';
        break
    }

    computerChoiceDisplay.innerHTML= computerChoice;

}

function getResult(){
    switch(true){
        case computerChoice===userChoice :
            result="it's a draw";
            break;
        
        case computerChoice==='rock' && userChoice === 'paper' :
            result='you win !';
            break;
        
        case computerChoice==='rock' && userChoice === 'scissors':
            result='you lost !';
            break;

        case computerChoice==='paper' && userChoice === 'scissors':
            result='you win !';
            break;

        case computerChoice==='paper' && userChoice === 'rock':
            result='you lose !';
            break;

        case computerChoice==='scissors' && userChoice === 'rock':
            result='you win';
            break;

        case computerChoice==='scissors' && userChoice === 'paper':
            result='you lost';
            break;
    }
    resultDisplay.innerHTML=result;
}