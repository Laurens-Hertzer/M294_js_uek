let liste = []
let noNumber = false

while (!noNumber){
    let naechsteZahl  = prompt("Geben sie +/-/*/ / und ihre Zahl ein")
    if (naechsteZahl === ""){
        noNumber = true
    }else{
    arr = liste.push(Number(naechsteZahl))
    alert("Das Zwischenergebnis ist: " + liste.reduce((sum, current) => sum + current, 0))
    }
}
let result = liste.reduce((sum, current) => sum + current, 0);
alert("Das Ergebnis ist: " + result)