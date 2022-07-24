var readlineSync = require('readline-sync');
var score = 0;

var highScore = [
  {
    name: "Kretos",
    value: 5
  },
  {
    name: "Lynx",
    value: 4
  },
  {
    name: "Titan",
    value: 4
  }

]
var userName = readlineSync.question("Please Enter your Name?");

console.log("Welcome  " + userName + "!!! \n Let's start the game");

function play(question, userAnswer) {
  var answer = readlineSync.question(question);

  if (answer.toUpperCase() == userAnswer.toUpperCase()) {
    console.log("Right !!!");
    score = score + 1;
  }
  else {
    console.log("Wrong!!");
  }
  console.log("Your current score is = " + score);
}

// play(, "Shelly");
// play("What state is Sheldon originally from ?","Texas");

var questions = [
  {
    question: "\n What does Sheldon's mom call him ?",
    answer: "Shelly"
  },
  {
    question: "What state is Sheldon originally from?",
    answer: "Texas"
  },
  {
    question: "What is Sheldon's favorite number?",
    answer: 73
  }
]

for (i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

if (score === 3) {

  if (readlineSync.keyInYN("Hey you have entered in level-2 of the game...Do you wish to continue? ")) {
    var questions = [
      {
        question: "\n What academic theory does Sheldon specialize in?",
        answer: "String theory"
      },
      {
        question: "What song does Penny sing to Sheldon when he's sick?",
        answer: "Soft Kitty"
      },
      {
        question: "What restaurant does Penny work at for a large part of the series?",
        answer: "The Cheesecake Factory"
      }

    ]
    for (i = 0; i < questions.length; i++) {
      var currentQuestion = questions[i];
      play(currentQuestion.question, currentQuestion.answer);
    }
  }

}
else if (score === 6) {

  if (readlineSync.question("Hey you have entered in level-3 of the game...Do you wish to continue? ")) {
    var questions = [
      {
        question: "\n Where did Howard get his engineering degree?",
        answer: "MIT"
      },
      {
        question: "How long is Howard on the space station? ",
        answer: "Five months"
      },
      {
        question: "What is Raj's sister's name? ",
        answer: "Priya"
      },
      {
        question: "Where is Raj from?",
        answer: "New Delhi"
      },
      {
        question: "What is Bernadette's graduate degree in?",
        answer: "Microbiology"
      },
      {
        question: "What branch of science does Amy specialize in?",
        answer: "Neurobiology"
      }

    ]
    for (i = 0; i < questions.length; i++) {
      var currentQuestion = questions[i];
      play(currentQuestion.question, currentQuestion.answer);
    }


  } else {
    console.log("Thanks for playing!!!!");

  }
}
console.log("The Highest Scores are");

for (i = 0; i < highScore.length; i++) {

  var currentHigh = highScore[i];
  if (currentHigh.value < score) {
    console.log("Congrats !!! U have beaten the high score");

  }

}
