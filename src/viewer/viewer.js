var Viewer = (function () {
  var $window = $(window);
  var $viewer = $('.viewer-wrapper');
  var $overlay = $('.loading-overlay');
  var $element;

  return {
    getNextCase: function () {
      $overlay.removeClass('invisible').addClass('loading');

      Files.getCaseImages(function (error, imagesIds) {
        if (error) {
          console.error(error);

          alert('There was an error fetching the case\'s images... Please wait a moment until you try to get the next case.');
          return;
        }
        Tools.initTools(imagesIds, $element);
        Commands.initCommands($element);

        cornerstone.loadImage(imagesIds[0]).then(function (image) {
          cornerstone.displayImage($element, image);
        });
      });
    },
    initViewer: function () {
      $element = $('#conerstoneViewport')[0];

      Menu.init();

      $viewer.removeClass('invisible');

      $window.on('resize', function () { return cornerstone.resize($element, true); });

      cornerstone.enable($element);

      Viewer.getNextCase();
    }
  };
})();
