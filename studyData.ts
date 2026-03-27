// Assume we have a function "getQuestionCards()" that returns an array of question card objects.

const questionCards = getQuestionCards();

// Add sequential numbers to each question card.
questionCards.forEach((card, index) => {
    card.sequentialNumber = index + 1;
});

// Assuming a function to update the field with sequential numbers
updateQuestionCards(questionCards);