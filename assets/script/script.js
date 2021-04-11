//global variables
var countdown = 75;
var startBtn = $("#start-button");
var score = $('#score');
/// Questions and Answers
const questions = [ {question: "What is an API?",
                    answerOne: "Access Portal Interface",
                    answertwo: "Application Program Interface",
                    answerThree: "Application Point Interlace",
                    answerFour: "Artificial Progamming Imprint",
                    correctAnswer: "2"},

                    {question: "What does the DOM stand for?",
                    answerOne: "Digital Object Modal",
                    answertwo: "Data Oriented Module",
                    answerThree: "Document Object Model",
                    answerFour: "Desktop Object Monitor",
                    correctAnswer: "3"},

                    {question: "What file is use mainly to style the website?",
                    answerOne: "CSS",
                    answertwo: "Javascript",
                    answerThree: "Dom",
                    answerFour: "Bootsrap",
                    correctAnswer: "1"},

                    {question: "What file is use mainly to style the website?",
                    answerOne: "CSS",
                    answertwo: "Javascript",
                    answerThree: "Dom",
                    answerFour: "Bootsrap",
                    correctAnswer: "1"}

                    ];



var lastQuestion = questions.length;
var activeQuestNum = 0;





/// timer function - countsdown the timer html
function timerCountdown(){
      //Timer countdown
      var countDownTimer = setInterval(function(){
        countdown--;
        $("#timer").text(countdown);
        if(countdown == 0){
            clearInterval(countDownTimer);
            $("#timer").text("Times up!");
        }
    }, 1000);
    
}


function questionGenerator(){
    var activeQuest = questions[activeQuestNum];
    $('#test-question').text(activeQuest.question);
    $('#button-a').html(activeQuest.answerOne);
    $('#button-b').html(activeQuest.answertwo);
    $('#button-c').html(activeQuest.answerThree);
    $('#button-d').html(activeQuest.answerFour);
}


//Start the quiz main function
startBtn.on('click', function(){

    //Timer countdown
    timerCountdown();
    $('.container').hide();
    $('.question-container').show();
    questionGenerator();

});


