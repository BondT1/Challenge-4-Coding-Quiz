var homepageEl = document.getElementById("homepage");
var questionViewEl = document.getElementById("question-view");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answers");
var viewHighScoreEl = document.getElementById("view-high-scores");
var HighScoreBoxEl = document.getElementById("high-score-box")
var HighScoreListEl = document.getElementById("high-score-list")
var ScoreInitialsEl = document.getElementById("score-initials")



var startQuizBtnEL = document.querySelector("#start-quiz");
var timerEl = document.querySelector("#timer");


startQuizBtnEL.addEventListener("click", startQuiz);
viewHighScoreEl.addEventListener("click", HighScoresDisplay);
ScoreInitialsEl.addEventListener("submit", HighScoreCreation);



// list of all questions, choices, and answers
var questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts',
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses',
  },
  {
    title: 'Arrays in JavaScript can be used to store ____.',
    choices: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above',
    ],
    answer: 'all of the above',
  },
  {
    title:
      'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'quotes',
  },
  {
    title:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
    answer: 'console.log',
  },
];
