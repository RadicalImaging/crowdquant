var Menu = (function () {
  var $hamburguerMenu = $('.hamburguer-menu');
  var $menuWrapper = $('.menu-wrapper');
  var $overlay = $('.loading-overlay');

  return {
    submit: function () {
      Menu.closeMenu();
      $overlay.removeClass('invisible').addClass('submitting');

      setTimeout(function () {
        Modal.show();

        $overlay.removeClass('submitting');
      }, 2000);
    },
    nextCase: function () {
      Menu.closeMenu();
      Viewer.getNextCase();
    },
    logout: function () {
      Menu.closeMenu();
      Login.logout();
    },
    closeMenu: function () {
      $overlay.addClass('invisible');
      $menuWrapper.removeClass('opened');

      setTimeout(function () {
        $menuWrapper.addClass('invisible');
      }, 1200);
    },
    init: function () {
      Modal.init();

      $hamburguerMenu.on('click', function (event) {
        event.preventDefault();

        $overlay.removeClass('invisible');
        $menuWrapper.removeClass('invisible');

        setTimeout(() => {
          $menuWrapper.addClass('opened');
          $overlay.removeClass('invisible');
        }, 200);
      });

      $menuWrapper.on('click', 'a[data-menu]', function (event) {
        var $element = $(event.currentTarget);
        var menuItem = $element.attr('data-menu');

        event.preventDefault();

        if (menuItem) {
          Menu[menuItem]();
        }
      });

      $overlay.on('click', function (event) {
        if ($menuWrapper.hasClass('opened')) {
          Menu.closeMenu();
        }
      });
    }
  }
})();
