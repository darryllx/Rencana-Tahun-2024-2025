function submitForm() {
    const namaPanggilan = document.getElementById('namaPanggilan').value;
    if (namaPanggilan) {
        localStorage.setItem('namaPanggilan', namaPanggilan);
        window.location.href = 'questionPage.html';
    } else {
        alert('Please enter your nickname');
    }
}

function checkAnswer(answer) {
    if (answer) {
        window.location.href = 'homePage.html';
    } else {
        alert('Jawaban anda salah');
    }
}

function toggleMusic() {
    var music = document.getElementById("backgroundMusic");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const displayNamaPanggilan = document.getElementById('displayNamaPanggilan');
    if (displayNamaPanggilan) {
        displayNamaPanggilan.textContent = localStorage.getItem('namaPanggilan');
    }
    
    document.getElementById('trueBtn').addEventListener('click', function() {
        checkAnswer(true);
    });

    document.getElementById('falseBtn').addEventListener('click', function() {
        checkAnswer(false);
    });
});
