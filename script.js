function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function init() {
    var squares = document.querySelector('.squares');
    var colorDisplay = document.getElementById('rgb');
    var newColorsButton = document.getElementById('new');
    var easyButton = document.getElementById('easy');
    var hardButton = document.getElementById('hard');
    var numSquares = 6;

    var colors = [];

    function createSquares(num) {
        squares.innerHTML = '';

        for (var i = 0; i < num; i++) {
            var square = document.createElement('div');
            square.classList.add('square');
            square.style.backgroundColor = colors[i];
            square.addEventListener('click', function () {
                var clickedColor = this.style.backgroundColor;
                if (clickedColor === pickedColor) {
                    changeColors(clickedColor);
                    colorDisplay.textContent = 'Teisingai!';
                    newColorsButton.textContent = 'NEW COLORS';
                } else {
                    this.style.backgroundColor = '#232323';
                    colorDisplay.textContent = 'Bandykite dar kartą';
                }
            });
            squares.appendChild(square);
        }
    }

    function generateRandomColors(num) {
        colors = [];
        for (var i = 0; i < num; i++) {
            colors.push(randomColor());
        }
    }

    generateRandomColors(numSquares);

    var pickedColor = colors[Math.floor(Math.random() * numSquares)];
    colorDisplay.textContent = pickedColor.toUpperCase();

    createSquares(numSquares);

    newColorsButton.addEventListener('click', function () {
        generateRandomColors(numSquares);
        pickedColor = colors[Math.floor(Math.random() * numSquares)];
        colorDisplay.textContent = pickedColor.toUpperCase();
        newColorsButton.textContent = 'NEW COLORS';
        createSquares(numSquares);
    });

    easyButton.addEventListener('click', function () {
        numSquares = 3;
        easyButton.classList.add('selected');
        hardButton.classList.remove('selected');
        generateRandomColors(numSquares);
        pickedColor = colors[Math.floor(Math.random() * numSquares)];
        colorDisplay.textContent = pickedColor.toUpperCase();
        newColorsButton.textContent = 'NEW COLORS';
        createSquares(numSquares);
    });

    hardButton.addEventListener('click', function () {
        numSquares = 6;
        easyButton.classList.remove('selected');
        hardButton.classList.add('selected');
        generateRandomColors(numSquares);
        pickedColor = colors[Math.floor(Math.random() * numSquares)];
        colorDisplay.textContent = pickedColor.toUpperCase();
        newColorsButton.textContent = 'NEW COLORS';
        createSquares(numSquares);
    });

  
    var index = Math.floor(Math.random() * numSquares);
    var selectedColor = colors[index];
    colorDisplay.textContent = selectedColor.toUpperCase();


    function changeColors(color) {
        var squares = document.querySelectorAll('.square');
        var header = document.querySelector('.bg');
        squares.forEach(function (square) {
            square.style.backgroundColor = color;
        });
        header.style.backgroundColor = color;
    }
}

init();

