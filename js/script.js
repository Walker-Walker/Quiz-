// code quiz psuedo code 
// display questions and answers 
// switch to next questions and answers 
// 
// 
// click start- 60 second timer starts aka 6000 milliseconds 
// ask user 5 mulitiple choice questions...
// if user clicks the correct option then move to next question
// if user click wrong answer deduct 10 seconds from timer...
// end game when all questions answered or timer reaches 0 
// after game user can save initials and score...
// score based on amount of questions asked correctly...correct answers divided by totals questions...= (2correct/5questons)x10 = 4   
//


// button in html
//addEventListener for button start countdown function and start quiz question pages...
//countdown function    
//Quiz page in html with buttons for all multiple choice answers...

// set up html with basic structure : main element, ul and child li elements , with button classes and id's for the queryselectors...for dynamic application...

//statements to be used: querey selectors, getElementbyId, JSONstringify If i use local storage turn my array into a string....will have to turn data into a string, 
// document.createElement, appendChild,setInterval(), element.setAttribute, 


// setInterval(function(){ alert("Hello"); }, 3000);


// Timer / COUNTDOWN

var secondsLeft = 60;

function countDown() {
    secondsLeft-= 1;
    document.getElementById("timer").innerHTML = "Time:" + secondsLeft;
}

setInterval(countDown, 1000);

let questions = [
    {
        question: "Which one of the following is a primitive data type?",
        answerChoices: [
            "strings",
            "numbers",
            "ALL of the Above"
        ],
        correctAnswer: 2
    },
    {
        question: "What does DOM stand for?",
        answerChoices: [
            "Document Object Model",
            "Document Object Master",
            "Document Obtuse Model"
        ],
        correctAnswer: 0
    },
    {
        question: "What does HTML stand for ?",
        answerChoices: [
            "Hyper Text Markup Languange",
            "Hyper Text Markdown Language",
            "Hyper Text Mark Language"
        ],
        correctAnswer: 0
    },
    {
        question: " SVG stands for ? ",
        answerChoices: [
            "Scalable Visceral Graphics",
            "Scalable Vector Graphics",
            "Science Vector Green"
        ],
        correctAnswer: 1
    },
];

var position = 0;
const delay = 1000;


function displayQuestions() {
    document.getElementById("quiz-questions").style.display = "block";
    document.getElementById("question").innerHTML = questions[position].question;
    console.log(question);
    document.getElementById("answer-1").innerHTML = questions[position].answerChoices[0];
    document.getElementById("answer-1").setAttribute("val", 0);
    document.getElementById("answer-2").innerHTML = questions[position].answerChoices[1];
    document.getElementById("answer-2").setAttribute("val", 1);
    document.getElementById("answer-3").innerHTML = questions[position].answerChoices[2];
    document.getElementById("answer-3").setAttribute("val", 2);

}

// on click start quiz call display questions function
document.getElementById("start-quiz").onclick = function () {
    document.getElementById("Intro").style.display = "none";
    displayQuestions()
};
//display wrong or right after user choice...
function displayIncorrect() {
    document.getElementById("incorrect").style.display = "block";
    document.getElementById("incorrect").textContent = "INCORRECT!";
}
function clearIncorrect() {
    document.getElementById("incorrect").style.display = "none";
}
function displayCorrect() {
    document.getElementById("correct").style.display = "block";
    document.getElementById("correct").textContent = "CORRECT!";
}

function clearCorrect() {
    document.getElementById("correct").style.display = "none";
}

//hide last question and go to score section...
function endQuiz() {
    document.getElementById("quiz-questions").style.display = "none";
    document.getElementById("final-score").style.display = "block";
    document.getElementById("final-score").textContent = "All Done your final score is..."
    //enter initials...input box... 
    //   call high score section ****
    //   show initials and score
    //   go back button-restart quiz 
    //   clear high scores button-clear data in local storage

    //document.onclick('.start-btn')
}



document.getElementById("answer-1").onclick = function () {
    if (document.getElementById("answer-1").getAttribute("val") == questions[position].correctAnswer) {
        console.log("Correct");
        displayCorrect();
        console.log(displayCorrect);
        setTimeout(clearCorrect, delay);
        console.log(clearCorrect);


    } else {
        console.log("Wrong");
        displayIncorrect();
        setTimeout(clearIncorrect, delay);
        console.log(clearIncorrect);
    }


    if (position == 3) {
        setTimeout(endQuiz, delay);
    }
    else {
        position++;
        setTimeout(displayQuestions, delay);
    }
}

document.getElementById("answer-2").onclick = function () {
    if (document.getElementById("answer-2").getAttribute("val") == questions[position].correctAnswer) {
        console.log("Correct");
        displayCorrect();
        console.log(displayCorrect);
        setTimeout(clearCorrect, delay);

    } else {
        console.log("Wrong");
        displayIncorrect();
        setTimeout(clearIncorrect, delay);
    }


    if (position == 3) {
        setTimeout(endQuiz, delay);
    }
    else {
        position++;
        setTimeout(displayQuestions, delay);
    }
}

document.getElementById("answer-3").onclick = function () {
    if (document.getElementById("answer-3").getAttribute("val") == questions[position].correctAnswer) {
        console.log("Correct");
        displayCorrect();
        setTimeout(clearCorrect, delay);



    } else {
        console.log("Wrong");
        displayIncorrect();
        setTimeout(clearIncorrect, delay);

    }


    if (position == 3) {
        setTimeout(endQuiz, delay);
    }

    else {
        position++;
        setTimeout(displayQuestions, delay);
    }



}







//  var btn = document.querySelector(".btn");

// display question and multiple choice answers

// click on any answer 

//if correct print CORRECT and move to next question

//if incorrect print INCORRECT Deduct time and move to next question...

// when correct...

// display next Question

// and end of questions display score 

// when clicked high scores you see high scores in new page...