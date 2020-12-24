$(document).ready(function(){
var magic8Ball = {};
magic8Ball.listOfAnswers = ["It's all going to happen for you", "You will suffer an unfortunate accident", "No", "Yes", "Perhaps", "You figure it out"];
$("#answer").hide(); 
	
magic8Ball.prediction = function(question) {
var randomNumber = Math.random();
var randomNumberArray = randomNumber * this.listOfAnswers.length;
var randomIndex = Math.floor(randomNumberArray);
var randomAnswer = this.listOfAnswers[randomIndex];
  
$("#answer").text(randomAnswer);
	console.log (question);
	console.log (randomAnswer);
$("#answer").fadeIn(4000);
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
 
};
   
var onClick = function() {
  $("#8ball").effect( "shake" );
setTimeout (
	function() {
   	var question = prompt("ASK A YES/NO QUESTION!");
   	magic8Ball.prediction(question);}, 500);
	$("#answer").hide();
	$("#8ball").attr("src", 		"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	

 };
   
   $("#questionButton").click(onClick);
   
});
