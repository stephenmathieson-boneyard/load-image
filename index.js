
/**
 * Expose `loadImage`
 */

module.exports = loadImage;

/**
 * Load the image at `src`, invoking `fn(err, img)`
 *
 * @api public
 * @param {String} src
 * @param {Function} fn
 */

function loadImage(src, fn) {
  var img = new Image;
  img.onload = function () {
    img.onload = img.onerror = null, fn(null, img);
  };
  img.onerror = function () {
    img.onload = img.onerror = null, fn(this)
  };
  img.src = src;
}
