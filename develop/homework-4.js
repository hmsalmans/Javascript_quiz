
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

    $("btn-primary").on("click", function(event){
    
    })
    var clicked = $(this);
    var isAnswerCorrect = clicked.attr("corrected");
    if (isAnswerCorrect === true ) {

        correct++
    }
    else { 
        wrong++
    };
    
    
});

$(".start").on("click", function(){
    $(".quiz").show();
    $("#startdiv").hide()
    reRender(); 
});


    function reRender() {
        
        $("#quest").html(myQuestions[i].question) 
              $("#ans1").html(myQuestions[i].answers.a).attr("corrected", 0 === myQuestions[i].correctAnswer);
              $("#ans2").html(myQuestions[i].answers.b).attr("corrected", 1 === myQuestions[i].correctAnswer);
              $("#ans3").html(myQuestions[i].answers.c).attr("corrected", 2 === myQuestions[i].correctAnswer);
              $("#ans4").html(myQuestions[i].answers.d).attr("corrected", 3 === myQuestions[i].correctAnswer); 
    i++;
    };







$("#next").on("click", function() {

    reRender();
    $("#correct").html(correct);
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