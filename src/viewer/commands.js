var Commands = (function () {
  var commandSelector = '.viewer-tools';
  var $overlay = $('.loading-overlay');
  var $element;

  return {
    clearAll: function () {
      var enabledElemet = cornerstone.getEnabledElement($element);
      var viewport = cornerstone.getViewport($element);

      viewport.voi.windowWidth = enabledElemet.image.windowWidth;
      viewport.voi.windowCenter = enabledElemet.image.windowCenter;
      cornerstone.setViewport($element, viewport);

      cornerstoneTools.globalImageIdSpecificToolStateManager.clear($element);
      cornerstone.updateImage($element);
    },
    save: function () {
      Menu.closeMenu();
      $overlay.removeClass('invisible').addClass('submitting');

      setTimeout(function () {
        Modal.show();

        $overlay.removeClass('submitting');
      }, 2000);
    },
    initCommands: function ($cornerstoneElement) {
      $element = $cornerstoneElement;

      $(commandSelector).on('click', 'a[data-command]', function (event) {
        var $currentElement = $(event.currentTarget);
        var $wrapper = $currentElement.parent();
        var tool = $currentElement.attr('data-command');

        Commands[tool]();

        $wrapper.addClass('active');

        setTimeout(function() {
          $wrapper.removeClass('active');
        }, 300);
      });
    }
  }
})();
