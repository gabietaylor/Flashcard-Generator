var inquirer = require('inquirer');
//console.log(inquirer);

var ClozeCard = function(fullText, partialText, clozeDeletion) {
    this.fullText      = fullText;
    this.partialText   = partialText;
    this.clozeDeletion = clozeDeletion
};
//console.log(ClozeCard);

// Question One Cloze
var questionOneCloze = new ClozeCard(
    "The Galilean moons orbit Jupiter.",
    "The Galilean moons orbit ... ",
    "Jupiter");
//console.log(questionOneCloze.cloze); 
//console.log(questionOneCloze.partial);
//console.log(questionOneCloze.fullText);
// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

// Question Two Cloze
var questionTwoCloze = new ClozeCard(
    "Phobos and Deimos are moons of Mars.",
    "Phobos and Deimos are moons of ... ",
    "Mars");
//console.log(questionTwoCloze.cloze); 
//console.log(questionTwoCloze.partial);
//console.log(questionTwoCloze.fullText);
// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

// Question Three Cloze
var questionThreeCloze = new ClozeCard(
    "The brightest planet in the night sky is Venus.",
    "The brightest planet in the night sky is ... ",
    "Venus");
//console.log(questionThreeCloze.cloze); 
//console.log(questionThreeCloze.partial);
//console.log(questionThreeCloze.fullText);
// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

// Start Inquire Prompt
inquirer.prompt([
    {
        type: 'input',
        message: questionOneCloze.partialText,
        name: 'answerOne'
    },
    {
        type: 'input',
        message: questionTwoCloze.partialText,
        name: 'answerTwo'
    },
    {
        type: 'input',
        message: questionThreeCloze.partialText,
        name: 'answerThree'
    }
]).then(function(inquirer) {
    if (inquirer.answerOne === questionOneCloze.clozeDeletion) {
        console.log('Correct!')
    } else {
        console.log('Wrong!')
    }

    if (inquirer.answerTwo === questionTwoCloze.clozeDeletion) {
        console.log('Correct!')
    } else {
        console.log('Wrong!')
    }

    if (inquirer.answerThree === questionThreeCloze.clozeDeletion) {
        console.log('Correct!')
    } else {
        console.log("Wrong!")
    }
});