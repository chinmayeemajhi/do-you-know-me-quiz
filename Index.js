var readLineSync = require("readline-sync");
var userName= readLineSync.question("What is your Name?");
console.log("Welcome! " + userName + " to DO YOU KNOW CHINMAYEE?");
var score = 0;

function play(question, answer){
  var userAnswer = readLineSync.question(question);
  console.log("Your answer : "+userAnswer);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("you are right!");
    score = score+10;
    console.log("score : "+score)
  }else{
    console.log("you are wrong!");
    score = score-5;
    console.log("score : "+score)
  }
}


var questionSet=[

  {question: "what is my name?",answer: "Chinmayee"},
  {question: "where do I live?",answer: "Bargarh"},
  {question: "where do I work?",answer: "Capgemini"},
  {question: "what do I want?",answer: "Unicorn"},
  {question: "what do I love?",answer: "Sleep"}

]

for(i=0; i<questionSet.length; i++){
  play(questionSet[i].question, questionSet[i].answer);
}
console.log("-----------");
console.log("Your final score :"+score);
if(score<50){
  console.log("Shame!!!!");
}else{
  console.log("meh!");
}
