
const textBox = document.querySelector('#textBox');
const alexDiv = document.querySelector('#alexDiv');
const parplinDiv = document.querySelector('#parplinDiv');
const alexScoreBoard = document.querySelector('#alexScoreBoard');
const parplinScoreBoard = document.querySelector('#parplinScoreBoard');


const displayText = document.createElement('div');
displayText.classList.add('displayText');
textBox.setAttribute('style', 'background: black; color:white; fontSize: 18px; margin:20px; padding: 2px -2px 2px 20px;');
displayText.textContent = 'Alex the Kidd Jenkan You must choose "rock", "paper" or "scissors" to play'; 

const alexScore = document.createElement('div');
alexScore.classList.add('alexScore');
alexScore.setAttribute('style', 'max-width: 90%; fontSize: 16px; color: black; position: relative; top: 50px; left: 90px; ' );

const parplinScore = document.createElement('div');
parplinScore.classList.add('parplinScore');
parplinScore.setAttribute('style', 'max-width: 90%;color: black; fontSize: 16px; position: relative; top: 105px; left: 130px;' );


const alexStand = document.createElement('img');
alexStand.classList.add("alexStand");
alexStand.setAttribute('style', 'margin: 73px 0 0 5px;');
//alexStand.src = "images/alex-standing.png";

const alexRock = document.createElement('img');
alexRock.classList.add("alexRock");
alexRock.setAttribute('style', "margin: 50px 0 0 0;");

const alexPaper = document.createElement('img');
alexPaper.classList.add("alexPaper");
alexPaper.setAttribute('style', "margin: 0px 0 -74px 0");

const alexScissors = document.createElement('img');
alexScissors.classList.add("alexScissors");
alexScissors.setAttribute('style', "margin:72px 0 0 20px;");

const parplinStand =document.createElement('img');
parplinStand.classList.add('parplinStand');
parplinStand.setAttribute('style', 'margin: 50px 0 0 145px;');


const parplinRock = document.createElement('img');
parplinRock.classList.add("parplinRock");
parplinRock.setAttribute('style', "margin: 0 0 0 80px;");

let computerPlay = () => {
	let comPick = ["rock", "paper", "scissors"];
	let computer = comPick[Math.floor(Math.random() * comPick.length)];
	return computer;
};
	
	 
let imgResult = () =>{


if (a.id == rock){
	alexRock.src = "images/alexRock.png";
} else if (a.id == paper){
	alexPaper.src = "images/alexPaper.png"
    
} else {
    alexScissors.src = "images/alexScissors.png";

}

};


let playRound = (playerSelection, computerSelection) => {
 

	
    switch(playerSelection){
	    case "rock" :
		    if (computerSelection === "scissors"){
			answer = "Darn it i loose";
			alexRock.src = "images/alexRock.png";
			
		    } else if (computerSelection === "paper") {
			answer = "I win you got it";
			alexRock.src = "images/alexRock.png";
			
		    }else {

	      	 answer = "It's a draw you sure lucked out";
	      	 alexRock.src = "images/alexRock.png";
	      	 parplinRock.src = "images/parplinRock.png";
	     
	        }
	    break; 

	    case "paper": 

		    if (computerSelection === "rock") { 
            answer = "Darn it i loose";
            //alexPaper.src = "images/alexPaper.png"
            parplinRock.src = "images/parplinRock.png";
		    } else if (computerSelection === "scissors") {

			answer = "I win you got it";
			//alexPaper.src = "images/alexPaper.png"
		    } else {

	      	 answer = "It's a draw you sure lucked out";
	      	 //alexPaper.src = "images/alexPaper.png"
	        }

        break;

	    case "scissors": 

		    if (computerSelection === "paper"){

			answer = "Darn it i loose";
			//alexScissors.src = "images/alexScissors.png";

		    }else if(computerSelection === "rock") {

		    answer = "I win you got it";
		    //alexScissors.src = "images/alexScissors.png";
             parplinRock.src = "images/parplinRock.png";
	        } else {

	      	 answer = "It's a draw you sure lucked out";
	      	 //alexScissors.src = "images/alexScissors.png";
	        }

	    break;

	    default:
	    answer = "something went wrong";
	};

	 return answer;
}; 



let game = () => {
    let playerScore = 0;
    let computerScore = 0;

const buttons = document.querySelectorAll('a');

buttons.forEach((a) => {
 
   a.addEventListener('click', (e) => {
   
     let computerSelection = computerPlay();
        let playerSelection = a.id; 

        
       
           displayText.textContent = playRound(playerSelection, computerSelection);

              
            if (answer === "I win you got it"){

       		computerScore ++;

       		parplinScore.textContent = computerScore;
       		alexScore.textContent = playerScore;

       	} else if (answer === "Darn it i loose" ) {
         
       	     playerScore ++;	

       		parplinScore.textContent =  computerScore;
       		alexScore.textContent = playerScore;
       	} else {

       		 displayText.textContent = "It's a draw you sure lucked out";
       	}
       
       

       if (playerScore >= 5){
           
           displayText.textContent = "Well it looks like thats the way its meant to be you win";
       } else if(computerScore >= 5){

       	   displayText.textContent = " You better accept the inevitable";
       }else{

       		displayText.textContent = "It's a draw you sure lucked out";
       };

    });

});

  	
  }; 

textBox.appendChild(displayText);
alexScoreBoard.appendChild(alexScore);
parplinScoreBoard.appendChild(parplinScore);
alexDiv.appendChild(alexRock);
alexDiv.appendChild(alexStand);
alexDiv.appendChild(alexPaper);
alexDiv.appendChild(alexScissors);
parplinDiv.appendChild(parplinStand);
parplinDiv.appendChild(parplinRock);

  game();

