let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

/**
 * Left Dice Image
 */

let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png dice2.png and so on.

let imageSource = "images/" + randomDiceImage; //images/dice1.png images/dice2.png and so on.

let image1 = document.querySelectorAll("img")[0]; //selects first image or left image 

image1.setAttribute("src", imageSource); //src="images/dice1.png" or src="images/dice2.png" and so on. 


/**
 * Right Dice Image
 */
let randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png dice2.png and so on.

let imageSource2 = "images/" + randomDiceImage2; //images/dice1.png images/dice2.png and so on.

let image2 = document.querySelectorAll("img")[1]; //selects second image or right image 

image2.setAttribute("src", imageSource2); //src="images/dice1.png" or src="images/dice2.png" and so on. 

/*
* Conditions to choose the winner
*/
if (randomNumber1 > randomNumber2) {

    document.querySelector("h1").innerHTML = "🎊 Player 1 wins";
}
else if (randomNumber1 < randomNumber2) {

    document.querySelector("h1").innerHTML = "Player 2 wins 🎉";
}
else {
    document.querySelector("h1").innerHTML = "It's a draw!";
}

