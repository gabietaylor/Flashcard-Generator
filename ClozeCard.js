var inquirer = require('inquirer');
console.log(inquirer);

var ClozeCard = function(fullText, partialText, clozeDeletion) {
    this.fullText      = fullText;
    this.partialText   = partialText;
    this.clozeDeletion = clozeDeletion
};
console.log(ClozeCard);