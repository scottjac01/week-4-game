// create variables for random number, wins, losses, crystals, and score.

var matchNumber = Math.floor((Math.random() * 120) + 19);
var wins = 0;
var losses = 0;
var score = 0;
var isMatch = true;


// Display the values on the DOM objects

$("#numGuess").text(matchNumber);
console.log(matchNumber);
$("#hasWon").text(wins);
$("#hasLost").text(losses);

// create an array to hold values and a for loop to added values to the array

var crystalAmounts = [];
var crystalType = ["diamond", "ruby", "sapphire", "emerald"]


function setAmounts (){
	for( var i = 0; i < 4; i++){
	var gemValue = Math.floor((Math.random() * 12) + 1);
	crystalAmounts.push(gemValue);
	console.log(crystalAmounts[i]);

// set values as attrributes so the DOM can be updated  I should have coded the html different.
// I know there's another to do this without all this code.

var imgButton = $("<button>");
imgButton.addClass(crystalType[i]);
imgButton.addClass("crystal-image");
imgButton.attr("value-crystal", crystalAmounts[i]);
$("#addButtons").append(imgButton);
}

//Run function to set the crystals amounts also reuse this to reset the crystal amounts after user has won

// Each click will add the appropriate value to the crystals
$(".crystal-image").on("click", function() {
  var crystalAmount = ($(this).attr("value-crystal"));
  crystalAmount = parseInt(crystalAmount);
  // Add the crystalAmount to the score and display the score.
  score += crystalAmount;

  // Detemine if the user wins or loses.
  //alert("New score: " + score);
  $("#userScore").text(score);

  if (score === matchNumber) {
  //  alert("You win!");
    wins++;
    $("#hasWon").text(wins);
    confirm("Would you like to play again");
    matchNumber = Math.floor((Math.random() * 120) + 19);
    $("#numGuess").text(matchNumber);
    $("#addButtons").empty();
    crystalAmounts.length = 0;
    score = 0;
    $("#userScore").text(score);
    setAmounts();
  }

  else if (score >= matchNumber) {
   // alert("You lose!!");
    losses++
    $("#hasLost").text(losses);
    confirm("Sorry you lost...you want to play again");
    matchNumber = Math.floor((Math.random() * 120) + 19);
    $("#numGuess").text(matchNumber);
    $("#addButtons").empty();
    crystalAmounts.length = 0;
    score = 0;
    $("#userScore").text(score);
    setAmounts();
  }

})};
setAmounts();