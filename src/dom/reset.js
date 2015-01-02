var css = require('../style/cssMerge'),
    resetCSS;

// Remove default margin, disable scrolling, only once
(function reset () {
    if (!resetCSS) {
        var style = {
            margin: 0,
            height: '100%',
            overflow: 'hidden'
        };
        css(document.documentElement, style);
        css(document.body, style);

        resetCSS = true;
    }
}());