//global variables
var countdown = 75;
var startBtn = $("#start-button");
var score = $('#score');
/// Questions and Answers
const questions = [ {question: "What is an API?",
                    answerOne:
                     {quest:"Access Portal Interface",
                      correctAnswer: true},
                    answertwo: {quest:"Application Program Interface",
                                correctAnswer:false},
                    answerThree: {quest:"Application Point Interlace",
                                correctAnswer:false},
                    answerFour: {quest:"Artificial Progamming Imprint",
                                correctAnswer: false},
                    },

                    {question: "What does the DOM stand for?",
                    answerOne: {quest:"Digital Object Modal",
                                correctAnswer:false},
                    answertwo: {quest:"Data Oriented Module",
                                correctAnswer: false},
                    answerThree: {quest:"Document Object Model",
                                correctAnswer:true},
                    answerFour: { quest:"Desktop Object Monitor",
                                correctAnswer: false}},

                    {question: "What file is use mainly to style the website?",
                    answerOne: {quest:"CSS",
                                correctAnswer: true},
                    answertwo: {quest:"Javascript",
                                correctAnswer:false},
                    answerThree: {quest:"Dom",
                                correctAnswer:false},
                    answerFour: {quest:"Bootsrap",
                                correctAnswer: false}},


                    {question: "What file is use mainly to add function the website?",
                    answerOne: {quest:"CSS",
                                correctAnswer:false},
                    answertwo: {quest:"Javascript",
                                correctAnswer: true},
                    answerThree: {quest:"Dom",
                                correctAnswer:false},
                    answerFour: {quest:"Bootsrap",
                                correctAnswer:false}}

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
    $('#button-a').html(activeQuest.answerOne.quest);
    $('#button-b').html(activeQuest.answertwo.quest);
    $('#button-c').html(activeQuest.answerThree.quest);
    $('#button-d').html(activeQuest.answerFour.quest);
}



function checkAnswer(answer){
    correctAnswer = questions
}



//Start the quiz main function
startBtn.on('click', function(){

    //Timer countdown
    timerCountdown();
    $('.container').hide();
    $('.question-container').show();
    questionGenerator();

});


