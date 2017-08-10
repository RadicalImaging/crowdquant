var Viewer = (function () {
  var $window = $(window);
  var $viewer = $('.viewer-wrapper');
  var $overlay = $('.loading-overlay');
  var $element;

  return {
    getNextCase: function () {
      $overlay.removeClass('invisible').addClass('loading');

      Files.getCaseImages(function (imagesIds) {
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

      this.$window.on('resize', function () { return cornerstone.resize($element, true); });

      cornerstone.enable($element);

      this.getNextCase();
    }
  };
})();
