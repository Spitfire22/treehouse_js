let questions = [
    new Question("What does 'js' stand for?",["Just Sitting","JavaScript","Javelin Swat"],"JavaScript"),
    new Question("What does 'py' stand for?",["Please Yes","Poked you","Python"],"Python"),
    new Question("What is the most productive activity to do when Windows Updates?",["Stack coins","Cut a cardboard box into confetti","Read a book"],"Read a book"),
    new Question("What does 'css' stand for?",["Counter Strike Source","Cascading Style Sheets","Countering stupid Stephen"],"Cascading Style Sheets"),
    new Question("Who does number two work for?",["The Throne","Dr. Evil","Mr. John"],"Dr. Evil")
];

let quiz = new Quiz(questions);

QuizUI.displayNext();