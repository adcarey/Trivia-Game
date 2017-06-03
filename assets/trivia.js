//Variables
var questions = ["How many times did Cael Sanderson lose in college?", "At What age did Henry Cejudo win gold in the olympics?", "At which of the following weights did Kyle Dake not win an NCAA Championship?", "The movie foxcatcher was based off of the true story involving the murder of which of the following wrestlers?", "Andy Bisek best known for his stunning mustache has been a world medalist how many times?", "Which WWE wrestler was actually an olympic gold medalist before moving to the promotion?", "Which UFC star was not a Wrestling Olympian?"]

var answers = [[2, 3, 6, 0], [25, 21, 22, 19],[133, 165, 149, 141], ["Mark Schultz", "Bruce Baumgartner", "Ed Banach", "Dave Schultz"], [1, 2, 3, 5], ["The Rock", "John Cena", "Brock Lesnar", "Kurt Angle"], ["Jon Jones", "Dan Henderson", "Daniel Cormier", "Henry Cejudo"]]
		
var correctAnswer = ["D. 0", "B. 21", "A. 133", "D. Dave Schultz", "B. 2", "D. Kurt Angle","A. Jon Jones"]

var image =["<img class='center-block img-right' src='assets/cael.jpg'>", "<img class='center-block img-right' src='assets/henry.jpg'>","<img class='center-block img-right' src='assets/dake.jpeg'>", "<img class='center-block img-right' src='assets/dave.jpeg'>", "<img class='center-block img-right' src='assets/andy.jpg'>", "<img class='center-block img-right' src='assets/kurt.jpg'>", "<img class='center-block img-right' src='assets/jon.jpg'>"]

var selectAnswer;

var timer = 30;

var runDown;

var timeOut;

var questionCount = 0;

var questionsAndAnswers;

var wrong = 0;

var right = 0;
//Functions 
//Questions
function startGame(){
questionsAndAnswers = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questions[questionCount] + "</p><button class='first-answer answer'>A. " + answers[questionCount][0] + "</button><button class='answer'>B. "+answers[questionCount][1]+"</button><button class='answer'>C. "+answers[questionCount][2]+"</button><button class='answer'>D. "+answers[questionCount][3]+"</button>";
	$("#question").html(questionsAndAnswers);
}
function rightResult() {
	right++;
	questionsAndAnswers = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + timer + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswer[questionCount] + "</p>" + image[questionCount];
	$("#question").html(questionsAndAnswers);
	setTimeout(wait, 4000);  //  change to 4000 or other amount
}
function wrongResult() {
	wrong++;
	questionsAndAnswers = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + timer + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswer[questionCount] + "</p>" + image[questionCount];
	$("#question").html(questionsAndAnswers);
	setTimeout(wait, 4000); //  change to 4000 or other amount
}

function timesUp() {
	wrong++;
	questionsAndAnswers = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + timer + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswer[questionCount] + "</p>" + image[questionCount];
	$("#question").html(questionsAndAnswers);
	setTimeout(wait, 4000);  //  change to 4000 or other amount
}

function countDown() {
	runDown = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (timer === 0) {
			clearInterval(runDown);
			timesUp();
		}
		if (timer > 0) {
			timer--;
		}
		$(".timer").html(timer);
	}
}
function wait() {
	if (questionCount < 6) {
	questionCount++;
	startGame();
	timer = 30;
	countDown();
	}
	else {
		gameOver();
	}
}
function play(){
	var audio = document.getElementById("audio");
	audio.play();
}
function gameOver() {
	questionsAndAnswers = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + timer + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + right + "</p>" + "<p>Wrong Answers: " + wrong + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$("#question").html(questionsAndAnswers);
};


function reset() {
	wrong = 0;
	right = 0;
	questionCount = 0;
	timer = 30;
	startGame();
	countDown();
}

//running the functions
$(document).ready(function(){
$(".start").on("click", function(){
	play();
	startGame();
	$(".start").hide();
	countDown();
});
$("body").on("click", ".answer", function(event){
	selectAnswer = $(this).text();
	if(selectAnswer === correctAnswer[questionCount]) {
		clearInterval(runDown);
		rightResult();
		console.log("click")
		play();
		
	} else {
		clearInterval(runDown);
		wrongResult();
		play();
	}
	
});

$("body").on("click", ".reset-button", function(event){
	reset();
	play();
});
});

	



