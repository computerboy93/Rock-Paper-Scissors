let playerPoints = 0; 
let computerPoints = 0; 





function game(playerSelection){ 

    let computerSelection;
 

    function getComputerChoice () {
      let random = Math.floor(Math.random()*10);

      if (random <3) {computerSelection = "Rock"}
      else if (random <6) {computerSelection = "Paper"}
      else {computerSelection = "Scissors"};
    
      //console.log(computerSelection);
      return computerSelection; 
    }; 
    getComputerChoice ();

    // this game isn't fair.




    let result;

    function playRound (playerSelection, computerSelection) {
    if ((playerSelection == "ROCK" & computerSelection == "Rock") 
    || (playerSelection == "PAPER" & computerSelection == "Paper")
    || (playerSelection == "SCISSORS" & computerSelection == "Scissors"))
    {result = "Tie."} 

    else if ((playerSelection == "ROCK" & computerSelection == "Scissors") 
    || (playerSelection == "PAPER" & computerSelection == "Rock")
    || (playerSelection == "SCISSORS" & computerSelection == "Paper"))
    {result = "You win!"}

    else {result = "You lose."};

    resultDescription.textContent = "Result: " + result;

    return result;

    };

    //alert(playRound(playerSelection, computerSelection));



    function keepScore() {
      if (playRound(playerSelection, computerSelection)=="You win!") {
        playerPoints=++playerPoints
    }
      else if (playRound(playerSelection, computerSelection) == "You lose.") {
            computerPoints=++computerPoints;
            console.log(computerPoints);
      }
      //console.log(points);
      scoreCount.textContent = "Score count: You: " + playerPoints + ". Computer: "  + computerPoints;
    }; 

    keepScore();
    
    if (playerPoints == 5) {
        resultDescription.textContent = "Result: You won the best of 5. Click a button to play again";
        resultDescription.style.fontWeight = "bold";
        playerPoints = 0;
        computerPoints = 0; 
    }
    else if (computerPoints == 5) {
        resultDescription.textContent = "Result: You lost the best of 5. Click a button to play again";
        resultDescription.style.fontWeight = "bold";
        playerPoints = 0;
        computerPoints = 0; 
    }
    else {resultDescription.style.fontWeight = "normal";}
    


    }; 




    
// UI below using DOM methods: 

const buttons = document.querySelector(".buttons");

    const rockButton = document.createElement("button");
    rockButton.textContent = "Rock";
    buttons.appendChild(rockButton);

    const paperButton = document.createElement("button");
    paperButton.textContent = "Paper";
    buttons.appendChild(paperButton);

    const scissorsButton = document.createElement("button");
    scissorsButton.textContent = "Scissors";
    buttons.appendChild(scissorsButton);



const results = document.querySelector(".result");

    const resultDescription = document.createElement('div');
    resultDescription.textContent = "Result: ";
    results.appendChild(resultDescription);
    
    const scoreCount = document.createElement("div"); 
    scoreCount.textContent = "Score count: ";
    results.appendChild(scoreCount);


rockButton.addEventListener('click', () => {
    game("ROCK");   
    });

paperButton.addEventListener('click', () => {
    game("PAPER");  
    });  

scissorsButton.addEventListener('click', () => {
    game("SCISSORS");  
    });   








//reset scores 