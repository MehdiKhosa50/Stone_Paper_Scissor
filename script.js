console.log("Script loaded successfully!");
let userCounts = 0;
let compCounts = 0;
let choices = document.querySelectorAll(".choice");
let userScorePara = document.querySelector(".userCount");
let compScorePara = document.querySelector(".compCount");
let endMsg = document.querySelector(".playMove");

const generateCompChoice = () => {
    let options = ["Rock","Paper","Scissor"];
    let randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}
const drawGame = () => {
    endMsg.innerText = "This match has been draw";
    endMsg.style.backgroundColor = "green";
}
const playGame = (userChoice) => {
    let winUser = true;
    const compChoice = generateCompChoice();
    console.log(`User choice: ${userChoice}, Computer choice: ${compChoice}`);
    if(userChoice==compChoice){
        drawGame();
    }else{
        if(userChoice=="Rock"){
            winUser = compChoice==="Paper" ? false : true;
        }
        else if(userChoice=="Paper"){
            winUser = compChoice==="Scissor" ? false : true;
        }
        else {
            winUser = compChoice==="Rock" ? false : true;
        }
        winningPerson(winUser,userChoice,compChoice);
    }
};
const winningPerson = (winUser,userChoice,compChoice) => {
    if(winUser){
        userCounts++;
        userScorePara.innerText = userCounts;
        endMsg.innerText = `Congratulations! You have Won. Your ${userChoice} beats Computer's ${compChoice}`;
        endMsg.style.backgroundColor = "green";
    }else{
        compCounts++;
        compScorePara.innerText = compCounts;
        endMsg.innerText = `OOOOPS! You have'nt Win. Computer ${compChoice} beats your's ${userChoice}`;
        endMsg.style.backgroundColor = "red";
    }
};
choices.forEach(choice => {
    choice.addEventListener("click", (event) => {
        const userChoice = event.target.id;
        console.log(`Clicked choice: ${userChoice}`);
        playGame(userChoice);
    });
});