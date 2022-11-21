var random = Math.floor(Math.random() * 6)+1;
var vasu = "dice"+random+".png";
var amma = "images/"+ vasu;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", amma);
// document.querySelector(".img1").setAttribute()












































var harr = Math.floor(Math.random()*6)+1;
var kasi = "dice" +harr+".png";
var lok = "images/"+kasi;
var sasi = document.querySelectorAll("img")[1];
sasi.setAttribute("src",lok);




























if(random>harr)
{
    document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}
else if(random<harr)
{
    document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}
else{
    document.querySelector("h1").innerHTML="DRAW";
}