var Files = (function () {
  var filesDownloaded = 0;

  return {
    getFile: function (callback, numberOfFiles) {
      return function(url) {
        var request = new XMLHttpRequest();
        var file = null;

        request.open('GET', url, true);
        request.responseType = 'arraybuffer';

        request.onload = function(event) {
          var arrayBuffer = request.response;

          if (arrayBuffer) {
            try {
              file = new Blob([arrayBuffer], { type: 'application/dicom' });

              filesDownloaded++;

              if (filesDownloaded === numberOfFiles) {
                callback(null)
              }
            } catch (error) {
              callback(error);
            }
          }
        };

        request.send(null);

        return file;
      }
    },
    getCaseImages: function (callback) {
      var $overlay = $('.loading-overlay');
      $overlay.addClass('loading');
      $overlay.removeClass('invisible');

      var handleCaseData = function (error, caseStudy) {
        if (error) {
          return callback(error);
        }

        if (caseStudy && caseStudy.urls) {
          var numberOfFiles = caseStudy.urls.length;

          var handleImages = function (imgError) {
            if (imgError) {
              return callback(error);
            }

            $overlay.addClass('invisible');
            $overlay.removeClass('loading');

            callback(null, caseStudy.urls.map(cornerstoneWADOImageLoader.wadouri.fileManager.add));
          }

          caseStudy.urls.map(this.getFile(callback, numberOfFiles));
        }
      }

      Connector.getCase(handleCaseData);
    }
  };
})();
