//Variables
var questions = {
	q1 : {
		q: "How many times did Cael Sanderson lose in college?",
		a1: 2,
		a2: 3,
		a3: 6,
		ca: 0,
	},

	q2 : {
		q:"At What age did Henry Cejudo win gold in the olympics?",
		a1: 25,
		a2: 22,
		a3: 19,
		ca: 21,
	},

	q3 : {
		q:"At which of the following weights did Kyle Dake not win an NCAA Championship?",
		a1:165,
		a2:149,
		a3:141,
		ca:133,
	},

	q4 : {
		q:"The movie foxcatcher was based off of the true story involving the murder of which of the following wrestlers?",
		a1:"Mark Schultz",
		a2:"Bruce Baumgartner",
		a3:"Ed Banach",
		ca:"Dave Schultz",
	},

	q5 : {
		q:"Andy Bisek best known for his stunning mustache has been a world medalist how many times?",
		a1:1,
		a2:3,
		a3:5,
		ca:2,
	},

	q6 : {
		q: "Which WWE wrestler was actually an olympic gold medalist befor moving to the promotion?",
		a1: "The Rock",
		a2: "John Cena",
		a3: "Brock Lesnar",
		ca: "Kurt Angle",
	},

	q7 : {
		q: "Which UFC star was not a Wrestling Olympian?",
		a1: "Dan Henderson",
		a2: "Daniel Cormier",
		a3: "Henry Cejudo",
		ca: "Jon Jones",

	},
}

var answerSelected = false;

var correctAnswer = false;

var wrongAnswer = false;

var score = 0;

var points = 0;

var gameOver = false;

//Functions 
//Questions
function computerQuestion(cpu) {
	question.q = cpu.q;
}
//Selecting Answer
function userSelection(selection) {
	answers.a1 = selection.a1;
	answers.a2 = selection.a2;
	answers.a3 = selection.a3;
	answers.ca = selection.ca;
}

function rightResult(){
	$(".answers").removeClass("answers").addClass("correct");
	$(".correct").html("You Are Correct! You have scored " + points + "Your total score is " + score);
}

function wrongResult(){
	$("answers").removeClass("answers").addClass("wrong");
	$(".wrong").html("That is incorrect! Your total score is " + score);
}

function get



function reset() {
	answerSelected = false;
	correctAnswer = false;
	wrongAnswer = false;
	score = 0;
	points = 0;
	gameOver = false;
}