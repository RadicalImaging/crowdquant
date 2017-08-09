var Commands = (function () {
  var commandSelector = '.viewer-tools';
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
