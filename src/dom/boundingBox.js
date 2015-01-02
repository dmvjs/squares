/**
 * Create a bounding box for the application.
 *
 * TODO: forcibly add mobile-friendly meta tags if not present
 * TODO: allow for custom colors & images for background.
 * TODO: allow for custom margin to offset inner box
 */

var css = require('../style/cssMerge'),
    util = require('./util'),
    listen = require('../events/listener'),
    basePadding = 44,
    boundingBox;

/**
 * Fill height and width, use padding to control the size of the inner box.
 *
 */

(function createBoundingBox() {
    if (!boundingBox) {
        var div = document.createElement('div');

        boundingBox = div;
        div.id = '__squares__bounding__box';

        css(div, {
            backgroundColor: 'black'
        });

        resize();

        document.body.appendChild(div);
    }
}());

function resize () {
    var portrait = util.getBoardSize(true),
        space = util.getSpaceSize() / 2,
        paddingV = basePadding || 0,
        paddingH = basePadding || 0;

    if (portrait) {
        paddingV += space;
    } else {
        paddingH += space;
    }

    css(boundingBox, {
        height: util.getBoardSize() - (basePadding * 2),
        paddingLeft: paddingH,
        paddingRight: paddingH,
        paddingTop: paddingV,
        paddingBottom: paddingV
    })
}

listen('resize orientationchange', resize);

module.exports = boundingBox;