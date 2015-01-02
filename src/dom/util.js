function getHeight () {
    return window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
}

function getWidth () {
    return window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
}

function getSpaceSize () {
    var w = getWidth(),
        h = getHeight();

    return Math.max(h, w) - Math.min(h, w);
}

function getBoardSize (portrait) {
    var w = getWidth(),
        h = getHeight();

    if (portrait) {
        return h > w;
    }
    return Math.min(w, h);
}

function getRandomColor () {
    return '#' + Math.random().toString(16).substring(2, 8);
}

module.exports = {
    getBoardSize: getBoardSize,
    getSpaceSize: getSpaceSize,
    getWidth: getWidth,
    getHeight: getHeight,
    getRandomColor: getRandomColor
};