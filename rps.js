let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#userscore");
const compscore = document.querySelector("#compscore");

const choices = document.querySelectorAll(".choice");

const drawGame = () =>{
    console.log("draw");
    msg.innerText = "Match draw!"
}
let user_score = 0;
let comp_score = 0;
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        user_score++;
        console.log("you win");
        msg.innerText= `you win! your ${userChoice} beats ${compChoice}`
        userscore.innerText = user_score;
        
    }
    else{
        comp_score++;
        console.log("comp win");
        msg.innerText= `you lost! ${compChoice} beats your ${userChoice}`
        compscore.innerText = comp_score;
        
    }
}

const genCompChoice = () =>{
    const option = ["rock","paper","scissor"];
    const rndIdx = Math.floor(Math.random()*3);
    return option[rndIdx]
}

const playgame = (userChoice) => {
    console.log("userchoice= ",userChoice);
    const compChoice = genCompChoice();
    console.log("compChoice=",compChoice);
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false:true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false:true;
        }
        else{
            userWin = compChoice === "rock" ? false:true; 
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener(("click"),() => {
        const userChoice = choice.getAttribute("id");
        // console.log("clicked",userChoice);
        playgame(userChoice);
    })
});