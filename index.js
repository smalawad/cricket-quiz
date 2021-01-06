var readline = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.cyan("Are you cricket fan? If yes you will enjoy this game!\n"));

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
		question:"Where was the IPL inauguration match played ?\n",
		answer: "Bangalore"
	},
	{
		question: "Who scored first century in IPL?\n",
		answer: "Brandon McCullum"
	},
	{
		question: "Whos scored most runs in IPL ?\n",
		answer:"Virat Kohli"
	},
	{	
		question: "Which hit first six 6's in T20 world cup?\n",
		answer:"Yuvaraj Singh"
	},
	{	
		question: "Who is most successful wicketkeeper  catain in world cricket?\n",
		answer: "MS Dhoni"
	},
	{
		question: "How many teams won more than 2 title in IPL?\n",
		answer: "3"
	},
	{	
		question: "Maximum how many overseas players can inclue in playing-XI of an IPL match?\n",
		answer: "4"
	},
  {	
		question: "Which bowler bowled  the first ever ball in IPL history?\n",
		answer: "praveen kumar"
	},
  {	
		question: "How many teams has MS Dhoni represented in IPL?\n",
		answer: "2"
	},
	{
		question: "Who scored 4 or more centuries in the same IPL season?\n",
		answer: "Virat Kohli"
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
