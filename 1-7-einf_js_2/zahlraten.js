let ratzahl = prompt("Rate eine Zahl von 1-100");
let echtzahl = Math.floor(Math.random() * 100) + 1;

if (Number(ratzahl) >= 1 && Number(ratzahl) <= 100){

    while (ratzahl != echtzahl) {
        if (ratzahl < echtzahl) {
            ratzahl = prompt("Zu klein, versuch es nochmal");
        } else if (ratzahl > echtzahl) {
            ratzahl = prompt("Zu gross, versuch es nochmal");
        }
    }
    alert("Richtig geraten! Die Zahl war " + echtzahl);

}else{
    alert("ungültige Zahl")
}
