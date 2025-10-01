let balls = [true, false, false];

function shuffle() {
    balls.sort(() => Math.random() - 0.5);
    document.getElementById('ball1').innerText = balls[0];
    document.getElementById('ball2').innerText = balls[1];
    document.getElementById('ball3').innerText = balls[2];
}


