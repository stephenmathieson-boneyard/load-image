
var loadImage = require('load-image');
var assert = require('assert');

describe('load-image', function () {
  it('should load the image at the given src', function (done) {
    loadImage('/test/penguin.jpg', function (err, img) {
      assert(!err);
      assert(~img.src.indexOf('/test/penguin.jpg'));
      assert(null === img.onload);
      assert(null === img.onerror);
      done();
    });
  });
  it('should fail if the image 404s', function (done) {
    loadImage('/test/nope.jpg', function (err, img) {
      assert(err);
      assert(!img);
      done();
    });
  });
});
