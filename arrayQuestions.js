
let questions = [
  ['Why is a duck?', 'boots'],
  ['I just a whole bottle, is this bad?', 'what'],
  ['what comes after kafive?', 'meatwad'],
];

let correctAnswers = 0;
let question;
let answer;
let response;
let html;
let correct = [];
let incorrect = [];

function print(message) {
  let outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function questionLists(array) {
  let list = "<ol>";
  for (let i = 0; i < array.length; i+=1) {
    list += '<li>' + array[i] + '</li>';
  }
  list += '</ol>';
  return list;
}

for (let i = 0; i < questions.length; i +=1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
if (response === answer) {
  correctAnswers +=1;
  correct.push(question);
  } else {
    incorrect.push(question);
  }
}


html = "You got " + correctAnswers + " questions right.";
html += "<h1>You got these right</h1>";
html += questionLists(correct);
html += "<h1>And these you need some improvement on.</h1>";
html += questionLists(incorrect);
print(html);