$(document).ready(function() {

//Generate random number to be guessed 
var randomNumber = Math.floor(Math.random()*120);

// Display random Number in the HTML
$("#number").html(randomNumber);

//Generate random number for each crystal 
var gemOne= Math.floor(Math.random()*12+1);
var gemTwo= Math.floor(Math.random()*12+1);
var gemThree= Math.floor(Math.random()*12+1);
var gemFour= Math.floor(Math.random()*12+1);

// Create variables to track player total, wins, and losses 
var playerTotal= 0;
var wins= 0;
var losses= 0;

//Put Wins and Losses in HTML
$("#wins").text(wins);
$("#losses").text(losses);

//create a function to reset the game 
function reset(){
    randomNumber= Math.floor(Math.random()*120);
    console.log(randomNumber)
    $("#number").html(randomNumber);
    gemOne= Math.floor(Math.random()*12+1);
    gemTwo= Math.floor(Math.random()*12+1);
    gemThree= Math.floor(Math.random()*12+1);
    gemFour= Math.floor(Math.random()*12+1);
    playerTotal= 0;
    $("#totalScore").html(playerTotal);
};

//function for Wins

function yaay(){
    alert("You Won!");
    wins++;
    $("#wins").text(wins);
    reset();
}

//function for Losses
function booo(){
    alert("You Lost!")
    losses++;
    $("#losses").text(losses);
    reset();
}

// Crystal Click Functions
$(".green").on("click", function(){
    playerTotal = playerTotal + gemOne;
    console.log("New Total =" + playerTotal);
    $("#totalScore").text(playerTotal);
    //Win or Lose Condition
    if (playerTotal == randomNumber){
        yaay();
    }
    else if (playerTotal > randomNumber){
        booo();
    }
});
$(".blue").on("click", function(){
    playerTotal = playerTotal + gemTwo;
    console.log("New Total =" + playerTotal);
    $("#totalScore").text(playerTotal);
    if (playerTotal == randomNumber){
        yaay();
    }
    else if (playerTotal > randomNumber){
        booo();
    }
});
$(".purple").on("click", function(){
    playerTotal = playerTotal + gemThree;
    console.log("New Total =" + playerTotal);
    $("#totalScore").text(playerTotal);
    if (playerTotal == randomNumber){
        yaay();
    }
    else if (playerTotal > randomNumber){
        booo();
    }
});
$(".diamond").on("click", function(){
    playerTotal = playerTotal + gemFour;
    console.log("New Total =" + playerTotal);
    $("#totalScore").text(playerTotal);
    if (playerTotal == randomNumber){
        yaay();
    }
    else if (playerTotal > randomNumber){
        booo();
    }
});

});


