// needed variables are defined
var i = 0;
var correct = 0;
var wrong  = 0;
var seconds = 91;
var myTimer;
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
        question: "How difficult is  to learn javascript for Salman?",
        answers: [
             "hard",
             "very hard",
             " I don't know",
             "He should just shut up and learn it. He will get it"
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

    $("#display").hide();
    $(".finale").hide();
    $("#hello").hide(); // certain dives are made hidden and show up during the application as needed.
    $("#nobaby").hide();
    $(".quiz").hide(); // hides the div which becomes visible when start button is clicked

    
        
    
    $(".btn-primary").click(function(event){
    $("#ans4").html(myQuestions[i].answers[3]);
    var clicked = $(this);
    var isAnswerCorrect = clicked.attr("correctAnswer");
    if (isAnswerCorrect === "true" ) {
        

        correct++; // adds to correct answer if chosen correct answer
        $("#correct").text(correct);
        $("#hello").show();
        setTimeout(hiding, 2000); // when answered correct, it gives correct alert and then disappears after two seconds.
        
    }
    else { 
        wrong++ // adds to wrong answer count is answer chosen is wrong
        $("#notCorrect").text(wrong);
        seconds -= 10;
        $("#nobaby").show();
        setTimeout(message, 4000); //if answered incorrectly, this message will show up then disappear after 4 seconds

    };

    i++;

    if (
        i === myQuestions.length) {
            clearInterval(myTimer);     // when all questions are answered, the timer will stop.
            $(".quiz").hide();
            $(".finale").show();

        }

    reRender();
    
    
});

});

$(".start").on("click", function(){
    $(".quiz").show();
    $("#startdiv").hide() // when clicked start button, this start div is hid and question/answer div is generated
    
       myTimer =  setInterval(starting, 1000);
     
    
    
});




// this function renders all quetstions and answers relevent to them to the appropriate elements and divs. 
function reRender() {
    if (i < myQuestions.length) {
        
                $("#quest").html(myQuestions[i].question); 
                $("#ans1").html(myQuestions[i].answers[0]).attr("correctAnswer", 0 === myQuestions[i].correctAnswer);
                $("#ans2").html(myQuestions[i].answers[1]).attr("correctAnswer", 1 === myQuestions[i].correctAnswer);
                $("#ans3").html(myQuestions[i].answers[2]).attr("correctAnswer", 2 === myQuestions[i].correctAnswer);
                $("#ans4").html(myQuestions[i].answers[3]).attr("correctAnswer", 3 === myQuestions[i].correctAnswer); 
            
                
    }
            };


            

            function starting(){

                seconds--;  // countdown timer
                $("#time").text(seconds)
            };

            function message(){
                $("#nobaby").hide(); // hides the alert after notifying the user that he answered incorrectly
            };

            function hiding(){
                $("#hello").hide();

            };
            

            

                 $(".btn-info").on("click", function(){
                    $("container").hide(); 
                    $(".finale").hide();
                    $("#display").show();
                    $("#corr").text(correct);


                 });
                

                




        
            
           