/**
 * A wrapper for adding event listeners
 * @param type
 * @param fn
 */

var _ = require('lodash'),
    add = !!window.attachEvent;

function attachEvent (type, fn) {
    window.attachEvent('on' + type, fn);
}

function addEventListener(type, fn) {
    window.addEventListener(type, fn, true)
}

function listen(type, fn) {
    var types = type.split(' ');

    _.each(types, function (e) {
        add ? attachEvent(e, fn) : addEventListener(e, fn);
    })
}

module.exports = listen;