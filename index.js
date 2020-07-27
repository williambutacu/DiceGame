var randomNumber= Math.floor(Math.random()*6+1);
document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber+".png");
var randomNumber2= Math.floor(Math.random()*6+1);
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

if (randomNumber>randomNumber2){
  document.querySelector("h1").innerHTML="Player1 wins.🚩"
}
else if (randomNumber===randomNumber2){
  document.querySelector("h1").innerHTML="Draw.🚩"
}
else {
  document.querySelector("h1").innerHTML="Player2 wins.🚩"
}
