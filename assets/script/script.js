//global variables
var countdown = 75;
var startBtn = $("#start-button");
var scoreEl = $('#score');
var score = 0;
var answerbtn = $('.answer-btn');
/// Questions and Answers
const questions = [ {question: "What is an API?",
                    answers:["Access Portal Interface",
                      
                    "Application Program Interface",
                                
                    "Application Point Interlace",
                               
                    "Artificial Progamming Imprint"],
                    correctAnswer: "Application Program Interface",
                                
                    },

                    {question: "What does the DOM stand for?",
                    answer: ["Digital Object Modal",
                            "Data Oriented Module", 
                            "Document Object Model",
                             "Desktop Object Monitor"],
                    correctAnswer: 2},

                    {question: "What file is use mainly to style the website?",
                    answer: ["CSS",
                            "Javascript",
                            "Dom",
                            ,"Bootsrap"],
                    correctAnswer: 0},


                    {question: "What file is use mainly to add function the website?",
                    answer: ["CSS",
                            "Javascript",
                            "Dom",
                            "Bootsrap"],
                    correctAnswer: 1}
                    ];



var lastQuestion = questions.length;
var activeQuestNum = 0;
var activeQuest = questions[activeQuestNum];





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

/// populates questions from questions object to div 
function questionGenerator(){
    
    if (activeQuestNum < questions.length){
    $('#test-question').text(activeQuest.question);
    $('#button-a').html(activeQuest.answers[0]);
    $('#button-b').html(activeQuest.answers[1]);
    $('#button-c').html(activeQuest.answers[2]);
    $('#button-d').html(activeQuest.answers[3]);

    
};
}


//check answer button
$('.answer-btn').on("click", function(){
    console.log($(this).html());
    if (questions[0].correctAnswer == $(this).html()) {
        score = score + 1;
        scoreEl.text(score);
        activeQuestNum ++;
        (questionGenerator);
        
        console.log("true");
      }else{
          console.log("false");
      }
});


//Start the quiz main function
startBtn.on('click', function(){

    //Timer countdown
    timerCountdown();
    $('.container').hide();
    $('.question-container').show();
    questionGenerator();

});


