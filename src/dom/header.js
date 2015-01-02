var css = require('../style/cssMerge'),
    boundingBox = require('./boundingBox'),
    header;

// create the biggest centered square possible
(function createHeader() {
    if (!header) {
        var div = document.createElement('div');
        header = div;

        div.id = '__squares__header';

        css(div, {
            height: '44px',
            backgroundColor: 'green'
        });

        boundingBox.appendChild(div);
    }
}());

module.exports = header;