const button = document.createElement('button');
button.textContent = 'extern';
document.body.appendChild(button);

button.addEventListener('click', function() {
    alert('Hallo Welt!');
});
