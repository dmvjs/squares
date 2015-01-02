var css = require('../style/cssMerge'),
    boundingBox = require('./boundingBox'),
    gameBoard;

// create the biggest centered square possible
(function createBigSquare() {
    if (!gameBoard) {
        var div = document.createElement('div');
        gameBoard = div;

        div.id = '__squares__big__square';

        css(div, {
            backgroundColor: '#050505'
        });

        boundingBox.appendChild(div);
    }
}());

module.exports = gameBoard;