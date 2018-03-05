let answer = ""

const buttons = document.querySelectorAll('a');

let computerPlay = () => {
	let comPick = ["rock", "paper", "scissors"];
	let computer = comPick[Math.floor(Math.random() * comPick.length)];
	return computer;
};
	
	 
let userPlay = () => {
	let player = prompt("please enter your choice of rock paper scissors").toLowerCase();
	return player;
};

let playRound = (playerSelection, computerSelection) => {

    console.log("Player chose " + playerSelection);
	console.log("Computer chose " + computerSelection);
	
    switch(playerSelection){
	    case "rock" :
		    if (computerSelection === "scissors"){
			answer = "Darn it i loose";
		    } else if (computerSelection === "paper") {
			answer = "I win you got it";
		    }else {

	      	 answer = "It's a draw you sure lucked out";
	        }
	    break; 

	    case "paper": 

		    if (computerSelection === "rock") { 
            answer = "Darn it i loose";
		    } else if (computerSelection === "scissors") {

			answer = "I win you got it";
		    } else {

	      	 answer = "It's a draw you sure lucked out";
	        }

        break;

	    case "scissors": 

		    if (computerSelection === "paper"){

			answer = "Darn it i loose";

		    }else if(computerSelection === "rock") {

		    answer = "I win you got it";

	        } else {

	      	 answer = "It's a draw you sure lucked out";
	        }

	    break;

	    default:
	    answer = "something went wrong";
	};

	 return answer;
}; 


/*let game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 5;

       for (let i = 0; i < rounds; i++) {

       	let computerSelection = computerPlay();
        let playerSelection = userPlay();
            console.log(playRound(playerSelection, computerSelection));


       	if (answer === "I win you got it"){

       		computerScore ++;

       		console.log(computerScore);
       	} else if (answer === "Darn it i loose" ) {
         
       	     playerScore ++;	

       		console.log(playerScore );
       	} else {

       		 console.log("It's a draw you sure lucked out");
       	}

       	console.log(playerScore, computerScore);
       
       };

       if (playerScore > computerScore){
           
           alert( "Well it looks like thats the way its meant to be you win");
       } else if(playerScore < computerScore){

       	   alert(" You better accept the inevitable");
       }else{

       		alert("It's a draw you sure lucked out");
       };
  }; */