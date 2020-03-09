// needed variables are defined
var i = 0;
var correct = 0;
var wrong  = 0;
var seconds = 91;
var answer;


//  obect has certain properties and some of them are arrays.
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

// HTML is made dynamic.

$(document).ready(function() {
    
    reRender();

    $(".quiz").hide(); // hides the div which becomes visible when start button is clicked

    
        
    
    $(".btn-primary").click(function(event){
    $("#ans4").html(myQuestions[i].answers[3]) // what is happening here Lada?
    var clicked = $(this);
    var isAnswerCorrect = clicked.attr("correctAnswer");
    if (isAnswerCorrect === "true" ) {
        

        correct++; // adds to correct answer if chosen correct answer
        $("#correct").text(correct);
        
    }
    else { 
        wrong++ // adds to wrong answer count is answer chosen is wrong
        $("#notCorrect").text(wrong);
    };
    i++;
    reRender();
    
    
});

});

$(".start").on("click", function(){
    $(".quiz").show();
    $("#startdiv").hide() // when clicked start button, this start div is hid and question/answer div is generated
    
        setInterval(starting, 1000)
    
    
});




// this function renders all quetstions and answers relevent to them to the appropriate elements and divs. 
function reRender() {
        
                $("#quest").html(myQuestions[i].question); 
                $("#ans1").html(myQuestions[i].answers[0]).attr("correctAnswer", 0 === myQuestions[i].correctAnswer);
                $("#ans2").html(myQuestions[i].answers[1]).attr("correctAnswer", 1 === myQuestions[i].correctAnswer);
                $("#ans3").html(myQuestions[i].answers[2]).attr("correctAnswer", 2 === myQuestions[i].correctAnswer);
                $("#ans4").html(myQuestions[i].answers[3]).attr("correctAnswer", 3 === myQuestions[i].correctAnswer); 
    
            };


            

            function starting(){

                seconds--;
                $("#time").text(seconds)
            };