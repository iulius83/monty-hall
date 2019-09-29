function BlockMove(e) { e.preventDefault(); }

// create a shuffle function for arrays
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

// first modal OK click to hide the modal
document.getElementById('ok-button').addEventListener('click', () => {
    document.getElementById('modal').style.display = "none";
});

// second "you win" modal OK click to hide the modal
document.getElementById('won-ok-button').addEventListener('click', () => {
    document.getElementById('you-won-modal').style.display = "none";
});

// listen for the start game click event
document.getElementById('start').addEventListener('click', () => {
    // pass variable for knowing in which step of the game you are
    let pass = 0;

    // show the closed doors
    document.querySelector('.door1').innerHTML = "<img src='images/1.png' alt='prize'>";
    document.querySelector('.door2').innerHTML = "<img src='images/2.png' alt='prize'>";
    document.querySelector('.door3').innerHTML = "<img src='images/3.png' alt='prize'>";
    
    // show the game started text
    document.getElementById('started').style.display = "inline";

    // create the elements of the array and the array
    let prize = "<img src='images/prize.png' alt='prize'>";
    let goat = "<img src='images/goat.png' alt='prize'>";

    let randomArray = [prize, goat, goat];

    // randomize the array
    randomArray = randomArray.shuffle();

    // listen for a click on door 1
    document.querySelector('.door1').addEventListener('click', () => {
        // depending on pass state show the other door open or the "you win" modal
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

    // listen for a click on door 2
    document.querySelector('.door2').addEventListener('click', () => {
        // depending on pass state show the other door open or the "you win" modal
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

    // listen for a click on door 3
    document.querySelector('.door3').addEventListener('click', () => {
        // depending on pass state show the other door open or the "you win" modal
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





