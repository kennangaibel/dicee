// alert("Working");
var randomNumber1 = Math.floor((Math.random() * (6 - 1)) + 1);
var randomNumber2 = Math.floor((Math.random() * (6 - 1)) + 1);
var imgNumber = "images/dice" + randomNumber1 + ".png";
var imgNumber2 = "images/dice" + randomNumber2 + ".png";
// var finalNumber = imgNumber
// alert(imgNumber);
// document.getElementsByClassName("img1").setAttribute("src", "dice${randomNumber1}.png";
// document.getElementsByClassName("img1").setAttribute("src", imgNumber);
document.querySelectorAll("img")[0].setAttribute("src", imgNumber);
document.querySelectorAll("img")[1].setAttribute("src", imgNumber2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Tie!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
