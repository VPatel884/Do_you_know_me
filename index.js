let readlineSync = require('readline-sync');

let score = 0;
let userName = readlineSync.question("Enter your name : ");
console.log("Welcome " + userName + " to 'DO YOU KNOW VIKASH'");

function QnA(question, answer) {
  let userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right.");
    score++;
  } else {
    console.log("You are wrong!")
  }
  console.log("Your Score is: " + score);
  console.log("-------------------");
}

let questions = [{ question: "Where do I leave? ", answer: "Bilaspur" },
{ question: "My favorite dish is? ", answer: "Biryani" },
{ question: "What is my hobby? ", answer: "Coding" },
{ question: "What is my goal? ", answer: "Web Developer" },
{ question: "Am I following my goal? ", answer: "Yes" },
]

for (let i = 0; i < questions.length; i++) {
  let currentQuestion = questions[i];
  QnA(currentQuestion.question, currentQuestion.answer);
}

console.log("Yay! Your final score is: " + score);
if (score < 3) {
  console.log("You don't know me well!");
} else if (score == 3) {
  console.log("OK!");
} else {
  console.log("You know me very well.");
}