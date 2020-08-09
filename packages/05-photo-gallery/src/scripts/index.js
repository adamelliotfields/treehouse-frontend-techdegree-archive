(function (document, baguetteBox) {
  var form = document.getElementById('form');
  var gallery = document.getElementById('gallery');
  var search = document.getElementById('search');

  // DOM collections don't have the `forEach` method, so make an array.
  var photos = Array.prototype.slice.call(gallery.children);

  // Prevent page refresh if you press "enter" or "return" in the search input.
  var handleSubmit = function (event) {
    event.preventDefault();
  };

  var handleInput = function (event) {
    var value = event.target.value.toLowerCase();

    photos.forEach(function (photo) {
      var caption = photo.getAttribute('data-caption').toLowerCase();

      // If the search input is not empty and its value is not a substring of the caption, then hide
      // the thumbnail link; otherwise, show the thumbnail link.
      // prettier-ignore
      photo.style.display = value !== '' && caption.indexOf(value) === -1
        ? 'none'
        : '';
    });
  };

  form.addEventListener('submit', handleSubmit);
  search.addEventListener('input', handleInput);

  baguetteBox.run('.gallery', { noScrollbars: true });
})(window.document, window.baguetteBox);
