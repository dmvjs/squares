/**
 * A wrapper for merging style objects.
 * @type {exports}
 * @private
 */

var _ = require('lodash');

module.exports = function (element, style) {
    if ((element.style || Object.prototype.hasOwnProperty.call(element, 'style')) &&
        _.isObject(element) && _.isObject(style)) {
        _.merge(element.style, style);
    }
};