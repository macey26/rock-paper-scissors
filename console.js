let answer = ""

//generates rock paper or scissors randomly from the computer
let computerPlay = () => {
	let comPick = ["rock", "paper", "scissors"];
	let computer = comPick[Math.floor(Math.random() * comPick.length)];
	return computer;
};
	
// prompt the user to select rock paper or scissors		 
let userPlay = () => {
	let player = prompt("please enter your choice of rock paper scissors").toLowerCase();
	return player;
};

// creates a round of rock paper scissors to return the answer 
let playRound = (playerSelection, computerSelection) => {

    console.log("Player chose " + playerSelection);
	console.log("Computer chose " + computerSelection);
	


    switch(playerSelection){
	    case "rock" :
		    if (computerSelection === "scissors"){
			answer = "You WIN!!!";
		    } else if (computerSelection === "paper") {
			answer = "Computer WINS!!!";
		    }else {

	      	 answer = "Its a tie";
	        }
	    break; 

	    case "paper": 

		    if (computerSelection === "rock") { 
            answer = "You WIN!!!";
		    } else if (computerSelection === "scissors") {

			answer = "Computer WINS!!!";
		    } else {

	      	 answer = "Its a tie";
	        }

        break;

	    case "scissors": 

		    if (computerSelection === "paper"){

			answer = "You WIN!!!";

		    }else if(computerSelection === "rock") {

		    answer = "Computer WINS!!!";

	        } else {

	      	 answer = "Its a tie";
	        }

	    break;

	    default:
	    answer = "something went wrong"
	}

	 return answer;
}; 

// runs 5 rounds of rock paper scissors and returns the winner
  let game = () => {
       let playerScore = 0;
       let computerScore = 0;
       let rounds = 5;

       for (let i = 0; i < rounds; i++) {

       	let computerSelection = computerPlay();
        let playerSelection = userPlay();
console.log(playRound(playerSelection, computerSelection));


       	if (answer === "Computer WINS!!!"){

       		computerScore ++;

       		console.log(computerScore);
       	} else if (answer === "You WIN!!!" ) {
         
       	     playerScore ++;	

       		console.log(playerScore );
       	} else {

       		console.log("You tied");
       	}

       	console.log(playerScore, computerScore);
       
       }

       if (playerScore > computerScore){
           
           alert( "Give the player a medal");
       } else if(playerScore < computerScore){

       	   alert(" Give the Computer a medal")
       	}else{

       		alert("Its a Tie, you both get a medal")
       	}
  }

 ; 