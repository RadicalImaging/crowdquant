var Tools = (function () {
  var active = '';
  var toolsSelector = '.viewer-tools';
  var $cornerstoneViewport = $('#conerstoneViewport');
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  var $element;

  return {
    deactivateActiveTool: function () {
      if (active) {
        Tools.deactivate(active);
        active = '';
      }
    },
    toggleTool: function (toolToActivate) {
      if (!toolToActivate) {
        return;
      }

      if (isMobile) {
        if (toolToActivate === 'length') {
          toolToActivate = toolToActivate + 'Touch';
        } else {
          toolToActivate = toolToActivate + 'TouchDrag';
        }
      }

      if (active) {
        Tools.deactivate(active);
      }

      cornerstoneTools[toolToActivate].enable($element);
      cornerstoneTools[toolToActivate].activate($element, 1);

      active = toolToActivate;
    },
    deactivate: function (tool) {
      cornerstoneTools[tool].disable($element);
      cornerstoneTools[tool].deactivate($element, 1);
    },
    initStackTool: function (imageIds) {
      var $thumb = $('.thumb');
      var stack = {
        currentImageIdIndex: 0,
        imageIds: imageIds
      };
      var configuration = {
        testPointers: function (eventData) {
          return (eventData.numPointers >= 2);
        }
      };

      cornerstoneTools.addStackStateManager($element, ['stack']);
      cornerstoneTools.addToolState($element, 'stack', stack);
      cornerstoneTools.stackScrollWheel.activate($element);

      cornerstoneTools.stackScrollMultiTouch.activate($element);
      cornerstoneTools.stackScrollMultiTouch.setConfiguration(configuration);

      $thumb.css('height', (100/stack.imageIds.length) + '%');

      $($element).on('CornerstoneNewImage', function () {
        var currentIndex = stack.currentImageIdIndex;

        $thumb.css({
          'margin-top': ($thumb.height()*(currentIndex)) + 'px'
        });
      });
    },
    attachEvents: function () {
      // Extract which tool we are using and activating it
      $(toolsSelector).on('click', 'a[data-tool]', function (event) {
        var $targetElement = $(event.currentTarget);
        var tool = $targetElement.attr('data-tool');

        $('.active').removeClass('active');

        Tools.toggleTool(tool);

        $targetElement.parent().addClass('active');
      });

      // Limiting measurements to 1
      $cornerstoneViewport.on('touchstart mousedown', function () {
        var lengths = cornerstoneTools.getToolState($element, 'length');

        if (lengths && lengths.data.length === 2) {
          lengths.data.shift();
          cornerstone.updateImage($element);
        }
      });
    },
    initTools: function (imageIds, $viewportElement) {
      $element = $viewportElement;

      cornerstoneTools.mouseInput.enable($element);
      cornerstoneTools.touchInput.enable($element);
      cornerstoneTools.mouseWheelInput.enable($element);

      Tools.initStackTool(imageIds);

      // removing default context menu
      $element.oncontextmenu = function (event) {
        event.preventDefault();

        return false;
      };

      Tools.attachEvents();
    }
  };
})();
