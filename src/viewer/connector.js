var Connector = (function () {
  var mockUrl = 'http://localhost:4000/mock.json';

  return {
    getCase: function (successCB, failCB) {
      return new Promise(function (resolve, reject) {
        var successHandler = function (response) {
          successCB(response);
        };

        var errorHandler = function (error) {
          if (error) {
            console.error(error);
          }

          failCB(error);
        };

        $.ajax(mockUrl).done(successHandler).fail(errorHandler);
      });
    }
  }
})();
