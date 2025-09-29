document.body.style.backgroundColor = "lightblue";

document.querySelector('h1').innerHTML = "Laurens";

document.querySelector("h1").style.color = "white";

document.querySelector("p").classList.add("large");

document.querySelector("ul").append(document.createElement("li"))
document.querySelector("ul li:last-child").innerHTML = "Hertzer";

document.querySelector("ul li:nth-child(2)").remove();

const img = document.createElement("img");
img.src = "pictures/dire_straits.jpg";
document.querySelector("h1").after(img);
