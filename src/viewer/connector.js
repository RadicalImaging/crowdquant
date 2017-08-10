var Connector = (function () {
  var mockUrl = 'http://localhost:4000/mock.json';

  return {
    getCase: function (callback) {
      return new Promise(function (resolve, reject) {
        var successHandler = function (response) {
          callback(null, response);
        };

        var errorHandler = function (error) {
          if (error) {
            console.error(error);
          }

          callback(error);
        };

        $.ajax(mockUrl).done(successHandler).fail(errorHandler);
      });
    }
  }
})();
