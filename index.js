var readline = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.cyan("How well do you know about karanataka?\n"));

var userName = readline.question("What is your name?\n");
var score = 0;

console.log(chalk.yellow("Welcome " + userName.toUpperCase() + "! \n"));

console.log(chalk.yellow("Let Play!\n"));
console.log("========================");

function play(question, answer) {
	var userAnswer = readline.question(question);

	if(userAnswer.toUpperCase() == answer.toUpperCase()) 
	{
		console.log(chalk.green("Right answer! Congrats..!\n"));
		console.log(chalk.yellow("You have earned 1 - point\n"));
		score++;
	}
	else
	{
		console.log(chalk.red("Wrong answer!\n"));
	}
}

var questions = [
	{
		question:"What is the capital of Karanaataka ?\n",
		answer: "Bangalore"
	},
	{
		question: "What is name of Karnataka IPL team?\n",
		answer: "RCB"
	},
	{
		question: "In which district the Hampi monuments are located?\n",
		answer:"Bellary"
	},
	{	
		question: "Which is the largest river in karnataka?\n",
		answer:"kaveri"
	},
	{	
		question: "Jog falls which is one of the highest waterfalls in India, is created by which river?\n",
		answer: "Sharavati"
	},
	{
		question: "In which district, the Bandipur National Park is located?\n",
		answer: "Chamrajnagar"
	},
	{	
		question: "Which is the highest peak in Karnataka?\n",
		answer: "Mullayangiri"
	},
	{
		question: "Which symbolise Karnataka state flower?\n",
		answer: "Lotus"
	}
]

for (var questionNumber = 0; questionNumber < questions.length; questionNumber++) 
{
	play(questions[questionNumber].question, questions[questionNumber].answer);
  console.log("========================");
}

console.log(chalk.yellow("HEY," + userName + "! Your score is: ", score));
console.log(chalk.redBright("DON'T FORGET TO SHARE YOUE SCORE\n"));

console.log(chalk.blue("Thanks for playing! Have nice day!\n"));
