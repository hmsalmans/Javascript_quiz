
var i = 0;
var correct = 0;
var wrong  = 0;
var answer;


var myQuestions = [
    {
        question: "The computer language that makes the pages live is called?",
        answers: [
             "HTML",
             "Javascript",
             "CSS",
             "None of the above"],
        
        correctAnswer: 1
    },
    {
        question: "How difficult is  javascript to a newbei like me?",
        answers: [
             "hard",
             "very hard",
             " I don't know",
             "Just shut up and learn it! You be fine"
        ],
        correctAnswer: 3   
     },
     {
        question: "The library of javascript is?",
        answers: [
             "HTML",
             "CSS",
             "Jquery",
             "None of the above"
        ],
        
        correctAnswer: 2
    },
    {
        question: "When was javascript created?",
        answers: [
            "2005",
             "1887",
             " 1995",
             "2016"
        ],
        correctAnswer: 2    }

];

$(document).ready(function() {
    
    reRender();

    $(".quiz").hide();

    
        
    
    $(".btn-primary").click(function(event){
    

    var clicked = $(this);
    var isAnswerCorrect = clicked.attr("correctAnswer");
    if (isAnswerCorrect === "true" ) {

        correct++;
        $("#correct").text(correct);
        
    }
    else { 
        wrong++
        $("#notCorrect").text(wrong)
    }
    i++;
    reRender();
    
    
});

});

$(".start").on("click", function(){
    $(".quiz").show();
    $("#startdiv").hide()
    
});





function reRender() {
        
                $("#quest").html(myQuestions[i].question); 
                $("#ans1").html(myQuestions[i].answers[0]).attr("correctAnswer", 0 === myQuestions[i].correctAnswer);
                $("#ans2").html(myQuestions[i].answers[1]).attr("correctAnswer", 1 === myQuestions[i].correctAnswer);
                $("#ans3").html(myQuestions[i].answers[2]).attr("correctAnswer", 2 === myQuestions[i].correctAnswer);
                $("#ans4").html(myQuestions[i].answers[3]).attr("correctAnswer", 3 === myQuestions[i].correctAnswer); 
    
            };



/*
  function reRender() {
    $(“#questions”).html(questions[i].question);
    $(“#btn1”).html(questions[i].answer[0]).attr(“correct”, 0 === questions[i].correct);
    $(“#btn2”).html(questions[i].answer[1]).attr(“correct”, 1 === questions[i].correct);
    $(“#btn3”).html(questions[i].answer[2]).attr(“correct”, 2 === questions[i].correct);
  }
$(document).ready(function() {
  reRender();
  $(“.btn-lg”).click(function(event) {
    var clickedElement = $(this);
    var isAnswerCorrect = clickedElement.attr(“correct”);
    if(isAnswerCorrect === “true”) {
      correctAnswer = correctAnswer + 1; //correctAnswer += 1; correctAnswer++;
    } else {
      inCorrect++;
    }
    i++;
    reRender();
  });
});


var i = 0;
var correctAnswer = 0;
var inCorrect = 0;
var questions = [
  {
      question: “What does HTML stand for?“,
      answer: [
        “Home Tool Masrkup Language”,
        “Hyper Text Markup Language”,
        “Hyperlink and Text Markup Language”,
      ],
      correct: 1
    }, {
      question: “Questin number 2?“,
      answer:[
        “Answer 1”,
        “Answer 2",
        “Answer 3”,
      ],
      correct: 2
    }
  ];

  function reRender() {
    $(“#questions”).html(questions[i].question);
    $(“#btn1”).html(questions[i].answer[0]).attr(“correct”, 0 === questions[i].correct);
    $(“#btn2”).html(questions[i].answer[1]).attr(“correct”, 1 === questions[i].correct);
    $(“#btn3”).html(questions[i].answer[2]).attr(“correct”, 2 === questions[i].correct);
  }
$(document).ready(function() {
  reRender();
  $(“.btn-lg”).click(function(event) {
    var clickedElement = $(this);
    var isAnswerCorrect = clickedElement.attr(“correct”);
    if(isAnswerCorrect === “true”) {
      correctAnswer = correctAnswer + 1; //correctAnswer += 1; correctAnswer++;
    } else {
      inCorrect++;
    }
    i++;
    reRender();
  });
});*/