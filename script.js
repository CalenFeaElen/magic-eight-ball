$(document).ready(function(){
var magicEightBall ={};
	magicEightBall.listOfAnswers = ["outlook not so good", "Don't count on it", "Ask again later", "Yes", "It is certain", "Reply hazy, try again.", "Signs point to yes", "Try again later", "Outlook good", "Very doubtful", "My sources say no"]; 	
	magicEightBall.askQuestion = function(question) {
		var randomNumber = Math.random();
		var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
		var randomIndex = Math.floor(randomNumberForListOfAnswers);
	var answer = this.listOfAnswers[randomIndex];
	$("#answer").text(answer);
	console.log(question);
	console.log(answer);
	$("#answer").hide();
	$("#8ball").effect( "shake" );
  $("#answer").fadeIn(4000);
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

};
	$("#answer").hide();
  
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
	
  var onClick = function () {
    setTimeout(
    function() {
    var question = prompt ("Ask a YES/NO question!");
		magicEightBall.askQuestion(question);
    }, 500);
	};
	$("#questionButton").click( onClick);
});
