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
    "George Washington was the first president of the United States.",
    "... was the first president of the United States.",
    "George Washington");
// "George Washington"
//console.log(questionOneCloze.cloze); 
// " ... was the first president of the United States.
//console.log(questionOneCloze.partial);
// "George Washington was the first president of the United States.
//console.log(questionOneCloze.fullText);
// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

// Question Two Cloze
var questionTwoCloze = new ClozeCard(
    "George Washington was the first president of the United States.",
    "... was the first president of the United States.",
    "George Washington");// "George Washington"
//console.log(questionTwoCloze.cloze); 
// " ... was the first president of the United States.
//console.log(questionTwoCloze.partial);
// "George Washington was the first president of the United States.
//console.log(questionTwoCloze.fullText);
// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

// Question Three Cloze
var questionThreeCloze = new ClozeCard(
    "George Washington was the first president of the United States.",
    "... was the first president of the United States.",
    "George Washington");
// "George Washington"
//console.log(questionThreeCloze.cloze); 
// " ... was the first president of the United States.
//console.log(questionThreeCloze.partial);
// "George Washington was the first president of the United States.
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