


$(document).ready(function(){

	  	//global variable declaration
  	var winflag=false;
  	var guesscount;
  	var solution;
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	//start game
	 var startgame = function() {
		//solution=generate a random number between 1 and 100
		solution=Math.floor((Math.random() * 100) + 1);
		console.log(solution);
		//guesscount=0
		guesscount=0;
		console.log("initial guess count is " + guesscount);
		};

 
  	//start game
  	startgame();


	//on click on guess button -- call guessfunction
	$('#guessButton').click(function(){
		event.preventDefault();
		if(!winflag) {
			console.log("calling guessfunction")
			guessfunction();
		}
		else {
			$('#feedback').text("Game is over, click New Game");
		}
	});

	//on click on new game, start new game
	$('.new').click(function() {
		event.preventDefault();
		startgame();
	});
		




	//function guessfunction:
	var guessfunction = function () {
		//guesscount++ -- write guesscount in #count
		guesscount++;
		$('#count').text(guesscount);
		//current guess cguess=get the input from the text box 
		var tcguess = $('#userGuess').val();
		var cguess = +tcguess;
		//if cguess>100 - alert "not valid input"
		if (cguess>100 || cguess<1) {
			$('#feedback').text('Not a valid input');
			return;
		}
		else {
			//append cguess in #guessList
			$('#guessList').append('<li>'+tcguess+'</li>');
			//calculatefeedback(solution,cguess)
			calculatefeedback(solution,cguess);
		}
	};


	//function calculatefeedback(solution,guess):
	var calculatefeedback = function(sol,guess) {
		//difference=absolute value(solution-guess)
		var difference = Math.abs(solution-guess);
		//if difference=>70 --- return you're freezing
		if (difference >= 70) {
			winflag=false;
			return $('#feedback').text('You\'re freezing');
		}
		//else if difference=>30 --- return youre cold
		else if (difference >= 30) {
			winflag=false;
			return $('#feedback').text("You're cold!");
		}
		//else if difference=>15 --- return youre warm
		else if (difference >= 15) {
			winflag=false;
			return $('#feedback').text("You're warm!");
		}
		//else if difference=>5 --- return hot
		else if (difference >= 5) {
			winflag=false;
			return $('#feedback').text("You're hot!");
		}
		//else if difference>=1 --- return burning
		else if (difference >= 1) {
			winflag=false;
			return $('#feedback').text("You're burning!");
		}
		//else if difference=0 --- return GUESSED
		else if (difference == 0) {
			winflag=true;
			return $('#feedback').text("You guessed!");
		}
		//else alert "not valid input"
		else  {
			return $('#feedback').text("Not a valid input");
		}
		//end game
	};



});



