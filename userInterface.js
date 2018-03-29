
const textBox = document.querySelector('#textBox');
const alexDiv = document.querySelector('#alexDiv');
const parplinDiv = document.querySelector('#parplinDiv');
const alexScoreBoard = document.querySelector('#alexScoreBoard');
const parplinScoreBoard = document.querySelector('#parplinScoreBoard');

const displayText = document.createElement('div');
displayText.classList.add('displayText');
textBox.setAttribute('style', 'background: black; color:white; fontSize: 16px; margin: 15px -10px -10px 15px; padding: 20px -2px 2px 20px; maxHeight: 55%;');
displayText.textContent = 'Alex the Kidd Jenkan You must choose "Rock", "Paper" or "Scissors" to play'; 

const alexScore = document.createElement('div');
alexScore.classList.add('alexScore');
alexScore.setAttribute('style', 'max-width: 90%; fontSize: 16px; color: black; position: relative; top: 50px; left: 90px; ' );

const parplinScore = document.createElement('div');
parplinScore.classList.add('parplinScore');
parplinScore.setAttribute('style', 'max-width: 90%;color: black; fontSize: 16px; position: relative; top: 100px; left: 130px;' );


const alexStand = document.createElement('img');
alexStand.classList.add("alexStand");
alexStand.setAttribute('style', 'display: block;  position: relative; top:44px; left: 83px;');
alexStand.src = "images/alex-standing.png";

const alexRock = document.createElement('img');
alexRock.classList.add("alexRock");


const alexPaper = document.createElement('img');
alexPaper.classList.add("alexPaper");


const alexScissors = document.createElement('img');
alexScissors.classList.add("alexScissors");


const parplinStand =document.createElement('img');
parplinStand.classList.add('parplinStand');
parplinStand.setAttribute('style', 'position:relative; top:65px; left: 140px;');
parplinStand.src = "images/parplinStanding.png";


const parplinRock = document.createElement('img');
parplinRock.classList.add("parplinRock");


const parplinPaper = document.createElement('img');
parplinPaper.classList.add("img");


const parplinScissors = document.createElement('img');
parplinScissors.classList.add("parplinScissors");

let computerPlay = () => {
	let comPick = ["rock", "paper", "scissors"];
	let computer = comPick[Math.floor(Math.random() * comPick.length)];
	return computer;
};
	
let playRound = (playerSelection, computerSelection) => {
 
    switch(playerSelection){
	    case "rock" :
		    if (computerSelection === "scissors"){

			answer = "Darn it i loose";

				alexRock.setAttribute('style', 'display: block;  position: relative; top:70px; left: 80px;');
				alexPaper.setAttribute('style', 'display: none;  ');
				alexScissors.setAttribute('style', 'display: none;  ');
				alexStand.setAttribute('style', 'display: none;  ');

			alexRock.src = "images/alexRock.png";

				parplinStand.setAttribute('style', 'display: none;');
				parplinRock.setAttribute('style', "display: none;");
				parplinPaper.setAttribute('style', "display: none;");
				parplinScissors.setAttribute("style", " display: block; position:relative; top:50px; left: 80px;");

			parplinScissors.src = "images/parplinScissors.png";
			
		    } else if (computerSelection === "paper") {

			answer = "I win you got it";

				alexRock.setAttribute('style', 'display: block;  position: relative; top:75px; left: 80px;');
				alexPaper.setAttribute('style', 'display: none;  ');
				alexScissors.setAttribute('style', 'display: none;  ');
				alexStand.setAttribute('style', 'display: none;  ');
			
			alexRock.src = "images/alexRock.png";

				parplinStand.setAttribute('style', 'display: none;');
				parplinRock.setAttribute('style', "display: none;");
				parplinPaper.setAttribute('style', " display: block; position:relative; top:50px; left: 80px;");
				parplinScissors.setAttribute("style", " display: none;");

			parplinPaper.src = "images/parplinPaper.png";
			
		    }else {

	      	 answer = "It's a draw you sure lucked out";

	      	    alexRock.setAttribute('style', 'display: block; position: relative; top:75px; left: 80px;');
				alexPaper.setAttribute('style', 'display: none; ');
				alexScissors.setAttribute('style', 'display: none; ');
				alexStand.setAttribute('style', 'display: none; ');

	      	  alexRock.src = "images/alexRock.png";

	      	  	parplinStand.setAttribute('style', 'display: none;');
				parplinRock.setAttribute('style', "display: block; position:relative; top:50px; left: 80px;");
				parplinPaper.setAttribute('style', " display: none;");
				parplinScissors.setAttribute("style", " display: none;");


	      	 parplinRock.src = "images/parplinRock.png";
	     
	        }

	    break; 

	    case "paper": 

		    if (computerSelection === "rock") { 

            answer = "Darn it i loose";

            	alexRock.setAttribute('style', 'display: none; ');
				alexPaper.setAttribute('style', 'display: block;  position: relative; top:75px; left: 80px;' );
				alexScissors.setAttribute('style', 'display: none;  ');
				alexStand.setAttribute('style', 'display: none;  ');

            alexPaper.src = "images/alexPaper.png"

            	parplinStand.setAttribute('style', 'display: none;');
				parplinRock.setAttribute('style', "display: block; position:relative; top:50px; left: 80px;");
				parplinPaper.setAttribute('style', " display: none;");
				parplinScissors.setAttribute("style", " display: none;");

            parplinRock.src = "images/parplinRock.png";

		    } else if (computerSelection === "scissors") {

			answer = "I win you got it";

				alexRock.setAttribute('style', 'display: none; ');
				alexPaper.setAttribute('style', 'display: block; position: relative; top:75px; left: 80px; ');
				alexScissors.setAttribute('style', 'display: none;  ');
				alexStand.setAttribute('style', 'display: none;  ');

			alexPaper.src = "images/alexPaper.png"

				parplinStand.setAttribute('style', 'display: none;');
				parplinRock.setAttribute('style', "display: none;");
				parplinPaper.setAttribute('style', "display: none;");
				parplinScissors.setAttribute("style", " display: block; position:relative; top:50px; left: 80px;");

			parplinScissors.src = "images/parplinScissors.png";
		    } else {

	      	 answer = "It's a draw you sure lucked out";

	      	    alexRock.setAttribute('style', 'display: none; ');
				alexPaper.setAttribute('style', 'display: block; position: relative; top:75px; left: 80px; ');
				alexScissors.setAttribute('style', 'display: none;  ');
				alexStand.setAttribute('style', 'display: none;  ');

	      	 alexPaper.src = "images/alexPaper.png";

	      	 	parplinStand.setAttribute('style', 'display: none;');
				parplinRock.setAttribute('style', "display: none; ");
				parplinPaper.setAttribute('style', " display: block; position:relative; top:50px; left: 80px;");
				parplinScissors.setAttribute("style", " display: none;");

	      	 parplinPaper.src = "images/parplinPaper.png";
	        }

        break;

	    case "scissors": 

		    if (computerSelection === "paper"){

			answer = "Darn it i loose";

				alexRock.setAttribute('style', 'display: none; ');
				alexPaper.setAttribute('style', 'display: none;');
				alexScissors.setAttribute('style', 'display: block; position: relative; top:75px; left: 80px; ');
				alexStand.setAttribute('style', 'display: none;  ');

			alexScissors.src = "images/alexScissors.png";

				parplinStand.setAttribute('style', 'display: none;');
				parplinRock.setAttribute('style', "display: none; ");
				parplinPaper.setAttribute('style', " display: block; position:relative; top:50px; left: 80px;");
				parplinScissors.setAttribute("style", " display: none;");

			parplinPaper.src = "images/parplinPaper.png";

		    }else if(computerSelection === "rock") {

		    answer = "I win you got it";

		        alexRock.setAttribute('style', 'display: none; ');
				alexPaper.setAttribute('style', 'display: none;');
				alexScissors.setAttribute('style', 'display: block; position: relative; top:75px; left: 80px; ');
				alexStand.setAttribute('style', 'display: none;  ');

		    alexScissors.src = "images/alexScissors.png";

		    	parplinStand.setAttribute('style', 'display: none;');
				parplinRock.setAttribute('style', "display: block; position:relative; top:50px; left: 80px;");
				parplinPaper.setAttribute('style', " display: none;");
				parplinScissors.setAttribute("style", " display: none;");

             parplinRock.src = "images/parplinRock.png";

	        } else {

	      	 answer = "It's a draw you sure lucked out";

	      	    alexRock.setAttribute('style', 'display: none; ');
				alexPaper.setAttribute('style', 'display: none;');
				alexScissors.setAttribute('style', 'display: block; position: relative; top:75px; left: 80px; ');
				alexStand.setAttribute('style', 'display: none;  ');

	      	 alexScissors.src = "images/alexScissors.png";

	      	 	parplinStand.setAttribute('style', 'display: none;');
				parplinRock.setAttribute('style', "display: none;");
				parplinPaper.setAttribute('style', "display: none;");
				parplinScissors.setAttribute("style", " display: block; position:relative; top:50px; left: 80px;");

	      	parplinScissors.src = "images/parplinScissors.png";
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
    let rounds = 0;

const buttons = document.querySelectorAll('a');

buttons.forEach((a) => {
 
   a.addEventListener('click', (e) => {
   
     let computerSelection = computerPlay();
        let playerSelection = a.id; 
       
           displayText.textContent = playRound(playerSelection, computerSelection);

            if (answer === "I win you got it"){

       		computerScore ++;
       		rounds ++;

       		parplinScore.textContent = computerScore;
       		alexScore.textContent = playerScore;
           }

       	else if (answer === "Darn it i loose"){
         
       	     playerScore ++;
       	     rounds ++;	

       		parplinScore.textContent =  computerScore;
       		alexScore.textContent = playerScore;
       	} else {

       			rounds ++;

       		 displayText.textContent = "It's a draw you sure lucked out";
       	}
       
       console.log(rounds);

       if (rounds == 5){

          if(playerScore < computerScore){   
           displayText.textContent = "Well it looks like thats the way its meant to be you win";
           }

           if(playerScore > computerScore){

       	   displayText.textContent = " You better accept the inevitable";
           }

           if(playerScore == computerScore){ 

       		displayText.textContent = "It's a draw you sure lucked out*";

       	   }
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
parplinDiv.appendChild(parplinPaper);
parplinDiv.appendChild(parplinScissors);

  game();

