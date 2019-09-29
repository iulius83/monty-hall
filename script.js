function BlockMove(e) { e.preventDefault(); }

Array.prototype.shuffle = function () {
    var input = this;

    for (var i = input.length - 1; i >= 0; i--) {

        var randomIndex = Math.floor(Math.random() * (i + 1));

        var itemAtIndex = input[randomIndex];
        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}

document.getElementById('ok-button').addEventListener('click', () => {
    document.getElementById('modal').style.display = "none";
});
document.getElementById('won-ok-button').addEventListener('click', () => {
    document.getElementById('you-won-modal').style.display = "none";
});

document.getElementById('start').addEventListener('click', () => {
    let pass = 0;

    document.querySelector('.door1').innerHTML = "<img src='images/1.png' alt='prize'>";
    document.querySelector('.door2').innerHTML = "<img src='images/2.png' alt='prize'>";
    document.querySelector('.door3').innerHTML = "<img src='images/3.png' alt='prize'>";

    document.getElementById('started').style.display = "inline";

    let prize = "<img src='images/prize.png' alt='prize'>";
    let goat = "<img src='images/goat.png' alt='prize'>";

    let randomArray = [prize, goat, goat];

    randomArray = randomArray.shuffle();

    document.querySelector('.door1').addEventListener('click', () => {

        if (pass === 0) {
            document.getElementById('modal').style.display = "block";
            document.getElementById('started').style.display = "none";

            if (randomArray[1] != prize) {
                document.querySelector('.door2').innerHTML = randomArray[1];
            } else {
                document.querySelector('.door3').innerHTML = randomArray[2];
            }

            pass++;
        } else if (pass === 1) {
            if (randomArray[0] === prize) {
                document.getElementById('you-won-modal').style.display = "block";
            }
            document.querySelector('.door1').innerHTML = randomArray[0];
            document.querySelector('.door2').innerHTML = randomArray[1];
            document.querySelector('.door3').innerHTML = randomArray[2];

            pass++;
        }
    });
    document.querySelector('.door2').addEventListener('click', () => {
        if (pass === 0) {
            document.getElementById('modal').style.display = "block";
            document.getElementById('started').style.display = "none";

            if (randomArray[0] != prize) {
                document.querySelector('.door1').innerHTML = randomArray[0];
            } else {
                document.querySelector('.door3').innerHTML = randomArray[2];
            }

            pass++;
        } else if (pass === 1) {
            if (randomArray[1] === prize) {
                document.getElementById('you-won-modal').style.display = "block";
            }
            document.querySelector('.door1').innerHTML = randomArray[0];
            document.querySelector('.door2').innerHTML = randomArray[1];
            document.querySelector('.door3').innerHTML = randomArray[2];

            pass++;
        }

    });
    document.querySelector('.door3').addEventListener('click', () => {
        if (pass === 0) {
            document.getElementById('modal').style.display = "block";
            document.getElementById('started').style.display = "none";

            if (randomArray[0] != prize) {
                document.querySelector('.door1').innerHTML = randomArray[0];
            } else {
                document.querySelector('.door2').innerHTML = randomArray[1];
            }

            pass++;
        } else if (pass === 1) {
            if (randomArray[2] === prize) {
                document.getElementById('you-won-modal').style.display = "block";
            }
            document.querySelector('.door1').innerHTML = randomArray[0];
            document.querySelector('.door2').innerHTML = randomArray[1];
            document.querySelector('.door3').innerHTML = randomArray[2];

            pass++;
        }
    });
});





