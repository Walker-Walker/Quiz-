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
    
    //countdown timer 
// Question / Answer Array

// 

let questions = [
    {
        question:"what is my favorite color?",
        answerChoices: [
            "white",
            "blue",
            "black"
        ],
        correctAnswer: 2
    },
    {
        question:"What does DOM stand for?",
        answerChoices: [
            "Document Object Model",
            "Document Object Master",
            "Document Obtuse Model"
        ],
        correctAnswer:0
    }
];

var position = 0;

//Dont use a loop???
 // make all mult-choice answers buttons
 var btn = document.createElement("Button");
 //????
 document.body.appendChild(btn);
 //prints mult choice answers 

 // do this for all of the potential answers? 
 // 

function displayQuestions() {
    document.getElementById("quiz-questions").style.display = "block";
    document.getElementById("question").innerHTML = questions[position].question;
    document.getElementById("answer-1").innerHTML = questions[position].answerChoices[0];
    document.getElementById("answer-1").setAttribute("val", 0);
    document.getElementById("answer-2").innerHTML = questions[position].answerChoices[1];
    document.getElementById("answer-2").setAttribute("val", 1);
    document.getElementById("answer-3").innerHTML = questions[position].answerChoices[2];
    document.getElementById("answer-3").setAttribute("val", 2);
} 
// 
document.getElementById("start-quiz").onclick = function() {
    document.getElementById("Intro").style.display = "none";
    displayQuestions()
};

//document.onclick('.start-btn')
document.getElementById("answer-1").onclick = function() {
    if(document.getElementById("answer-1").getAttribute("val") == questions[position].correctAnswer) {
        console.log("Correct");
    } else {
        console.log("Wrong");
    }
    console.log("HELLO");
    position++;
    displayQuestions();
}

document.getElementById("answer-2").onclick = function() {
    if(document.getElementById("answer-2").getAttribute("val") == questions[position].correctAnswer) {
        console.log("Correct");
    } else {
        console.log("Wrong");
    }
    console.log("HELLO");
    position++;
    displayQuestions();
}

document.getElementById("answer-3").onclick = function() {
    if(document.getElementById("answer-3").getAttribute("val") == questions[position].correctAnswer) {
        console.log("Correct");
    } else {
        console.log("Wrong");
    }
    console.log("HELLO");
    position++;
    displayQuestions();
}

// 
 var btn = document.querySelector(".btn");

// display question and multiple choice answers

// click on any answer 

//if correct print CORRECT and move to next question

//if incorrect print INCORRECT Deduct time and move to next question...

// when correct...

// display next Question

// and end of questions display score 

// when clicked high scores you see high scores in new page...