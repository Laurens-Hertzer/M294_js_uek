let name = prompt("Wie heisst du?");
let jetzt = new Date();
let stunde = jetzt.getHours();
let begruessung = "";

if (stunde >= 5 && stunde < 10) {
    begruessung = "Guten Morgen " + name;
} else if (stunde >= 10 && stunde < 17) {
    begruessung = "Guten Tag " + name;
} else if (stunde >= 17 && stunde < 22) {
    begruessung = "Guten Abend " + name;
} else {
    begruessung = "Gute Nacht " + name;
}

// Begrüßung anzeigen
alert(begruessung);
