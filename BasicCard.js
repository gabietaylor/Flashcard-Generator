var inquirer = require('inquirer');
//console.log(inquirer);

var BasicCard = function(front, back) {
    this.front = front;
    this.back = back;
};
//console.log(BasicCard);

// Question/Answer One
var questionOne = new BasicCard(
    "The Galilean moons orbit what planet?", "Jupiter");
//console.log(questionOne.front); 
//console.log(questionOne.back); 

// Question/Answer Two
var questionTwo = new BasicCard(
    "Phobos and Deimos are moons of what planet?", "Mars");
//console.log(questionTwo.front); 
//console.log(questionTwo.back);

// Question/Answer Three
var questionThree = new BasicCard(
    "What is the brightest planet in the night sky?", "Venus");
//console.log(questionThree.front); 
//console.log(questionThree.back);

// Start Inquire Prompt
inquirer.prompt([{
    type: 'input',
    message: questionOne.front,
    name: 'answerOne'
}, {
    type: 'input',
    message: questionTwo.front,
    name: 'answerTwo'
}, {
    type: 'input',
    message: questionThree.front,
    name: 'answerThree'
}]).then(function(inquirer) {
    if (inquirer.answerOne === questionOne.back) {
        console.log('Correct!')
    } else {
        console.log('Wrong!')
    }

    if (inquirer.answerTwo === questionTwo.back) {
        console.log('Correct!')
    } else {
        console.log('Wrong!')
    }

    if (inquirer.answerThree === questionThree.back) {
        console.log('Correct!')
    } else {
        console.log("Wrong!")
    }
});