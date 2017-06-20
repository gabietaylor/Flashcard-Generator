var inquirer = require('inquirer');
//console.log(inquirer);

var BasicCard = function(front, back) {
    this.front = front;
    this.back = back;
};
//console.log(BasicCard);

// Question/Answer One
var questionOne = new BasicCard(
    "Who was the first president of the United States?", "George Washington");
// "Who was the first president of the United States?"
//console.log(questionOne.front); 
// "George Washington"
//console.log(questionOne.back); 

// Question/Answer Two
var questionTwo = new BasicCard(
    "Who was the first president of the United States?", "George Washington");
// "Who was the first president of the United States?"
//console.log(questionTwo.front); 
// "George Washington"
//console.log(questionTwo.back);

// Question/Answer Three
var questionThree = new BasicCard(
    "Who was the first president of the United States?", "George Washington");
// "Who was the first president of the United States?"
//console.log(questionThree.front); 
// "George Washington"
//console.log(questionThree.back);

// Start Inquire Prompt
inquirer.prompt([
    {
        type: 'input',
        message: questionOne.front,
        name: 'answerOne'
    },
    {
        type: 'input',
        message: questionTwo.front,
        name: 'answerTwo'
    },
    {
        type: 'input',
        message: questionThree.front,
        name: 'answerThree'
    }
]).then(function(inquirer) {
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