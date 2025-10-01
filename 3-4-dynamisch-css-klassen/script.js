let reiseziel = document.querySelectorAll("li")
let ziel = null;

document.getElementById('choose').addEventListener('click', function() {
if (ziel != null) {
    ziel.classList.remove("highlight");
}
    ziel = zufaelligziel();
    alert("Ihr nächstes Reiseziel: " + ziel.textContent);
    ziel.classList.add("highlight");
});

function zufaelligziel(){
    let index = Math.floor(Math.random() * reiseziel.length)
    return reiseziel[index]
}


