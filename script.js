let userScore = 0;
let computerScore = 0;

const msg = document.querySelector('.msg')
let user_score = document.querySelector('#user-score')
let comp_score = document.querySelector('#comp-score')


const choices = document.querySelectorAll('.choice');

const genComputerChoice = () =>{
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() *  3);
    return options[randomIndex];
}

const showWinner = (userWin) =>{
    if(userWin){
        console.log('You Win');
        msg.innerText = 'you win';
        userScore++;
        user_score.innerText = userScore;
        msg.style.backgroundColor = 'green';
    }else{
        console.log('You loose');
        msg.innerText = 'you lose';
        computerScore++;
        comp_score.innerText = computerScore;
        msg.style.backgroundColor = 'red';
    }
}

const drowGame = () =>{
    console.log('game was draw');
    msg.innerText = 'game draw';
    msg.style.backgroundColor = '#190765';
}

const playGame = (userChoice) =>{

    console.log("user choice = " , userChoice);
    
    
    const compChoice = genComputerChoice();
    console.log("computer choice = " , compChoice);

    if(userChoice === compChoice){
        drowGame();
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
           userWin = compChoice === 'paper' ? false : true;
        }else if(userChoice === 'paper'){
            userWin = compChoice === 'scissors' ? false : true;
        }else{
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin);
    }

}

choices.forEach((choice)=>{
    console.log(choice);
    
    choice.addEventListener('click', (e)=>{
        const userChoice = choice.getAttribute('id')
        playGame(userChoice);
    });
});
