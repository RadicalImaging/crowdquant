var Modal = (function () {
  var $modal = $('.modal');
  var $overlay = $('.loading-overlay');

  return {
    logout: function () {
      $modal.removeClass('show');
      $overlay.addClass('invisible');
      
      Login.logout();
    },
    nextCase: function () {
      Modal.hide();

      Viewer.getNextCase();
    },
    show: function () {
      $modal.addClass('show');
      $overlay.removeClass('invisible');
    },
    hide: function () {
      $modal.removeClass('show');
      $overlay.addClass('invisible');
    },
    init() {
      $modal.find('.logout').on('click', Modal.logout);
      $modal.find('.next-case').on('click', Modal.nextCase);
    }
  }
})();
