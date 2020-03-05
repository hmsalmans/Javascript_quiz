
var i = 0;
var correct = 0;
var wrong  = 0;
var answer;


var myQuestions = [
    {
        question: "The computer language that makes the pages live is called?",
        answers: {
            a: "HTML",
            b: "Javascript",
            c: "CSS",
            d: "None of the above"
        },
        correctAnswer: "b"
    },
    {
        question: "How difficult is  javascript to a newbei like me?",
        answers: {
            a: "hard",
            b: "very hard",
            c: " I don't know",
            d: "Just shut up and learn it! You be fine"
        },
        correctAnswer: "d"   
     },
     {
        question: "The library of javascript is?",
        answers: {
            a: "HTML",
            b: "CSS",
            c: "Jquery",
            d: "None of the above"
        },
        correctAnswer: "c"
    },
    {
        question: "When was javascript created?",
        answers: {
            a: "2005",
            b: "1887",
            c: " 1995",
            d: "2016"
        },
        correctAnswer: "c"    }

];

$(document).ready(function() {
    $(".quiz").hide();
    
    
});

$(".start").on("click", function(){
    $(".quiz").show();
    $("#startdiv").hide()
    reRender(); 
});


    function reRender() {
        
      answer =  $("#quest").html(myQuestions[i].question) 
        $("#ans1").html(myQuestions[i].answers.a)
        $("#ans2").html(myQuestions[i].answers.b)
        $("#ans3").html(myQuestions[i].answers.c)
        $("#ans4").html(myQuestions[i].answers.d)
    i++;
    };

$("#next").on("click", function() {

  reRender();
});



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
});*/