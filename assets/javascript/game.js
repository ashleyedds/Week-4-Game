$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var counter = 0;

   var targetScore = $("#targetScore");

    var gem1 = $("#gem1");
    var gem2 = $("#gem2");
    var gem3 = $("#gem3");
    var gem4 = $("#gem4");

    //Game reset
    function gameReset() {

        //Generates random number
        targetScore = Math.floor(Math.random() * 101 + 19);
        //19-120 (check instructions)
        $("#targetScore").text(targetScore);
        console.log("This is the target: " + targetScore);

        //Assigns random number to crystals
        for (var i = 1; i <= 4; i++) {
            var randomCrystal = Math.floor(Math.random() * 12) + 1;
            $("#gem" + i).attr("data-crystalvalue", randomCrystal);
        };

        counter = 0;
        $("#counter").text(counter);
    }

    gameReset();

    //On click functions
    $("#crystals img").on("click", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#counter").text(counter);
        console.log("I've been clicked!");
        console.log("This is the counter: " + counter);

    //Determine win or loss and update score/game
        if (counter === targetScore) {
            wins++;
            $("#winOrLose").text("You win!");
            $("#wins").text("Wins: " + wins);
            $("#resultImage").html("<img src='assets/images/win.gif'/>");
            gameReset();
          }
      
          else if (counter >= targetScore) {
            losses++;
            $("#winOrLose").text("You lose! Try again!");
            $("#losses").text("Losses: " + losses);
            $("#resultImage").html("<img src='assets/images/loss.gif'/>");
            gameReset();
          }
    });
});