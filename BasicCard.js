var inquirer = require('inquirer');
//console.log(inquirer);

var BasicCard = function(front, back) {
    this.front = front;
    this.back = back;
};
//console.log(BasicCard);

var questionOne = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(questionOne.front); 

// "George Washington"
console.log(questionOne.back); 