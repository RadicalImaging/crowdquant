var Login = (function () {
  var $loadingImg = $('.login-wrapper form button.submit img.loading');
  var $loginWrapper = $('.login-wrapper');
  var $viewWrapper = $('.viewer-wrapper');
  var $overlay = $('.loading-overlay');

  $('.login-wrapper form').off('submit').on('submit', function (evt) {
    evt.preventDefault();

    $loadingImg.removeClass('invisible');
    
    // Mocking login
    setTimeout(function () {
      $loadingImg.addClass('invisible');
      $loginWrapper.addClass('invisible');

      Viewer.initViewer();
    }, 1000);
  });

  return {
    logout: function() {
      $overlay.addClass('invisible');
      $loginWrapper.removeClass('invisible');
      $viewerWrapper.addClass('invisible');
    }
  }
})();
