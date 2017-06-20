var inquirer = require('inquirer');
//console.log(inquirer);

var ClozeCard = function(fullText, partialText, clozeDeletion) {
    this.fullText      = fullText;
    this.partialText   = partialText;
    this.clozeDeletion = clozeDeletion
};
//console.log(ClozeCard);

var questionOneCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(questionOneCloze.cloze); 

// " ... was the first president of the United States.
console.log(questionOneCloze.partial);

// "George Washington was the first president of the United States.
console.log(questionOneCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");