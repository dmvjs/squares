var css = require('../style/cssMerge'),
    util = require('./util'),
    gameBoard = require('../dom/gameBoard'),
    gridSize = 6;

function getScale() {
    return 100/6 + '%';
}

function createTile(index) {
    var div = document.createElement('div');
    css(div, {
        width: getScale(),
        height: getScale(),
        backgroundColor: util.getRandomColor(),
        display: 'inline-block',
        border: '1px solid #ff0000',
        boxSizing: 'border-box'
    });

    gameBoard.appendChild(div);
}

for (var i = 0; i < Math.pow(gridSize, 2); i += 1) {
    createTile(i);
}