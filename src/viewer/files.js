var Files = (function () {
  var filesDownloaded = 0;
  var files;

  return {
    getFile: function (callback, numberOfFiles) {
      return function(url, index) {
        var request = new XMLHttpRequest();

        request.open('GET', url, true);
        request.responseType = 'arraybuffer';

        request.onload = function(event) {
          var arrayBuffer = request.response;

          if (arrayBuffer) {
            try {
              files[index] = new Blob([arrayBuffer], { type: 'application/dicom' });

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
      }
    },
    getCaseImages: function (callback) {
      var $overlay = $('.loading-overlay');
      $overlay.addClass('loading');
      $overlay.removeClass('invisible');

      filesDownloaded = 0;

      var handleCaseData = function (error, caseStudy) {
        if (error) {
          return callback(error);
        }

        if (caseStudy && caseStudy.urls) {
          var numberOfFiles = caseStudy.urls.length;
          var handleImages = function (imgError) {
            if (imgError) {
              return callback(imgError);
            }

            $overlay.addClass('invisible');
            $overlay.removeClass('loading');

            callback(null, files.map(cornerstoneWADOImageLoader.wadouri.fileManager.add));
          }

          files = new Array(numberOfFiles);

          caseStudy.urls.map(Files.getFile(handleImages, caseStudy.urls.length));
        }
      }

      Connector.getCase(handleCaseData);
    }
  };
})();
