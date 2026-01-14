// for first image

var randomNumber1 = Math.floor((Math.random()*6)+1);

var randomDiceImg1 = "dice" + randomNumber1 + ".png";
var randomDiceSource1 = "images/"+ randomDiceImg1;

document.querySelector(".img1").setAttribute("src",randomDiceSource1);

// for second image

var randomNumber2 = Math.floor((Math.random()*6)+1);

var randomDiceImg2 = "dice" + randomNumber2 + ".png";
var randomDiceSource2 = "images/" + randomDiceImg2;

document.querySelector(".img2").setAttribute("src",randomDiceSource2);

// for announcing winner

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "Player 1 Wins";
}
else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerText = "It's a Tie";
}
else{
    document.querySelector("h1").innerText = "Player 2 Wins";
}