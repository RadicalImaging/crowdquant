(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _viewer = require('../viewer/viewer');

var _viewer2 = _interopRequireDefault(_viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$('.login-wrapper form').off('submit').on('submit', function (evt) {
  evt.preventDefault();

  var $loadingImg = $('.login-wrapper form button.submit img.loading');
  var $loginForm = $('.login-wrapper');

  $loadingImg.removeClass('invisible');

  // Mocking login
  setTimeout(function () {
    $loadingImg.addClass('invisible');
    $loginForm.addClass('invisible');

    _viewer2.default.initViewer();
  }, 1000);
});

exports.default = {
  $loginWrapper: $('.login-wrapper'),
  $viewWrapper: $('.viewer-wrapper'),
  $overlay: $('.loading-overlay'),
  logout: function logout() {
    this.$overlay.addClass('invisible');
    this.$loginWrapper.removeClass('invisible');
    this.$viewerWrapper.addClass('invisible');
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMjA1YzRiYTQuanMiXSwibmFtZXMiOlsiJCIsIm9mZiIsIm9uIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCIkbG9hZGluZ0ltZyIsIiRsb2dpbkZvcm0iLCJyZW1vdmVDbGFzcyIsInNldFRpbWVvdXQiLCJhZGRDbGFzcyIsImluaXRWaWV3ZXIiLCIkbG9naW5XcmFwcGVyIiwiJHZpZXdXcmFwcGVyIiwiJG92ZXJsYXkiLCJsb2dvdXQiLCIkdmlld2VyV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBQSxFQUFFLHFCQUFGLEVBQXlCQyxHQUF6QixDQUE2QixRQUE3QixFQUF1Q0MsRUFBdkMsQ0FBMEMsUUFBMUMsRUFBb0QsVUFBVUMsR0FBVixFQUFlO0FBQ2pFQSxNQUFJQyxjQUFKOztBQUVBLE1BQU1DLGNBQWNMLEVBQUUsK0NBQUYsQ0FBcEI7QUFDQSxNQUFNTSxhQUFhTixFQUFFLGdCQUFGLENBQW5COztBQUVBSyxjQUFZRSxXQUFaLENBQXdCLFdBQXhCOztBQUVBO0FBQ0FDLGFBQVcsWUFBWTtBQUNyQkgsZ0JBQVlJLFFBQVosQ0FBcUIsV0FBckI7QUFDQUgsZUFBV0csUUFBWCxDQUFvQixXQUFwQjs7QUFFQSxxQkFBT0MsVUFBUDtBQUNELEdBTEQsRUFLRyxJQUxIO0FBTUQsQ0FmRDs7a0JBaUJlO0FBQ2JDLGlCQUFlWCxFQUFFLGdCQUFGLENBREY7QUFFYlksZ0JBQWNaLEVBQUUsaUJBQUYsQ0FGRDtBQUdiYSxZQUFVYixFQUFFLGtCQUFGLENBSEc7QUFJYmMsUUFKYSxvQkFJSjtBQUNQLFNBQUtELFFBQUwsQ0FBY0osUUFBZCxDQUF1QixXQUF2QjtBQUNBLFNBQUtFLGFBQUwsQ0FBbUJKLFdBQW5CLENBQStCLFdBQS9CO0FBQ0EsU0FBS1EsY0FBTCxDQUFvQk4sUUFBcEIsQ0FBNkIsV0FBN0I7QUFDRDtBQVJZLEMiLCJmaWxlIjoiZmFrZV8yMDVjNGJhNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3ZXIgZnJvbSAnLi4vdmlld2VyL3ZpZXdlcic7XG5cbiQoJy5sb2dpbi13cmFwcGVyIGZvcm0nKS5vZmYoJ3N1Ym1pdCcpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0ICRsb2FkaW5nSW1nID0gJCgnLmxvZ2luLXdyYXBwZXIgZm9ybSBidXR0b24uc3VibWl0IGltZy5sb2FkaW5nJyk7XG4gIGNvbnN0ICRsb2dpbkZvcm0gPSAkKCcubG9naW4td3JhcHBlcicpO1xuXG4gICRsb2FkaW5nSW1nLnJlbW92ZUNsYXNzKCdpbnZpc2libGUnKTtcbiAgXG4gIC8vIE1vY2tpbmcgbG9naW5cbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgJGxvYWRpbmdJbWcuYWRkQ2xhc3MoJ2ludmlzaWJsZScpO1xuICAgICRsb2dpbkZvcm0uYWRkQ2xhc3MoJ2ludmlzaWJsZScpO1xuXG4gICAgVmlld2VyLmluaXRWaWV3ZXIoKTtcbiAgfSwgMTAwMCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAkbG9naW5XcmFwcGVyOiAkKCcubG9naW4td3JhcHBlcicpLFxuICAkdmlld1dyYXBwZXI6ICQoJy52aWV3ZXItd3JhcHBlcicpLFxuICAkb3ZlcmxheTogJCgnLmxvYWRpbmctb3ZlcmxheScpLFxuICBsb2dvdXQoKSB7XG4gICAgdGhpcy4kb3ZlcmxheS5hZGRDbGFzcygnaW52aXNpYmxlJyk7XG4gICAgdGhpcy4kbG9naW5XcmFwcGVyLnJlbW92ZUNsYXNzKCdpbnZpc2libGUnKTtcbiAgICB0aGlzLiR2aWV3ZXJXcmFwcGVyLmFkZENsYXNzKCdpbnZpc2libGUnKTtcbiAgfVxufVxuIl19
},{"../viewer/viewer":9}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _viewer = require('../viewer/viewer');

var _viewer2 = _interopRequireDefault(_viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$('.login-wrapper form').off('submit').on('submit', function (evt) {
  evt.preventDefault();

  var $loadingImg = $('.login-wrapper form button.submit img.loading');
  var $loginForm = $('.login-wrapper');

  $loadingImg.removeClass('invisible');

  // Mocking login
  setTimeout(function () {
    $loadingImg.addClass('invisible');
    $loginForm.addClass('invisible');

    _viewer2.default.initViewer();
  }, 1000);
});

exports.default = {
  $loginWrapper: $('.login-wrapper'),
  $viewWrapper: $('.viewer-wrapper'),
  $overlay: $('.loading-overlay'),
  logout: function logout() {
    this.$overlay.addClass('invisible');
    this.$loginWrapper.removeClass('invisible');
    this.$viewerWrapper.addClass('invisible');
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIiQiLCJvZmYiLCJvbiIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiJGxvYWRpbmdJbWciLCIkbG9naW5Gb3JtIiwicmVtb3ZlQ2xhc3MiLCJzZXRUaW1lb3V0IiwiYWRkQ2xhc3MiLCJpbml0Vmlld2VyIiwiJGxvZ2luV3JhcHBlciIsIiR2aWV3V3JhcHBlciIsIiRvdmVybGF5IiwibG9nb3V0IiwiJHZpZXdlcldyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQUEsRUFBRSxxQkFBRixFQUF5QkMsR0FBekIsQ0FBNkIsUUFBN0IsRUFBdUNDLEVBQXZDLENBQTBDLFFBQTFDLEVBQW9ELFVBQVVDLEdBQVYsRUFBZTtBQUNqRUEsTUFBSUMsY0FBSjs7QUFFQSxNQUFNQyxjQUFjTCxFQUFFLCtDQUFGLENBQXBCO0FBQ0EsTUFBTU0sYUFBYU4sRUFBRSxnQkFBRixDQUFuQjs7QUFFQUssY0FBWUUsV0FBWixDQUF3QixXQUF4Qjs7QUFFQTtBQUNBQyxhQUFXLFlBQVk7QUFDckJILGdCQUFZSSxRQUFaLENBQXFCLFdBQXJCO0FBQ0FILGVBQVdHLFFBQVgsQ0FBb0IsV0FBcEI7O0FBRUEscUJBQU9DLFVBQVA7QUFDRCxHQUxELEVBS0csSUFMSDtBQU1ELENBZkQ7O2tCQWlCZTtBQUNiQyxpQkFBZVgsRUFBRSxnQkFBRixDQURGO0FBRWJZLGdCQUFjWixFQUFFLGlCQUFGLENBRkQ7QUFHYmEsWUFBVWIsRUFBRSxrQkFBRixDQUhHO0FBSWJjLFFBSmEsb0JBSUo7QUFDUCxTQUFLRCxRQUFMLENBQWNKLFFBQWQsQ0FBdUIsV0FBdkI7QUFDQSxTQUFLRSxhQUFMLENBQW1CSixXQUFuQixDQUErQixXQUEvQjtBQUNBLFNBQUtRLGNBQUwsQ0FBb0JOLFFBQXBCLENBQTZCLFdBQTdCO0FBQ0Q7QUFSWSxDIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdlciBmcm9tICcuLi92aWV3ZXIvdmlld2VyJztcblxuJCgnLmxvZ2luLXdyYXBwZXIgZm9ybScpLm9mZignc3VibWl0Jykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldnQpIHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgJGxvYWRpbmdJbWcgPSAkKCcubG9naW4td3JhcHBlciBmb3JtIGJ1dHRvbi5zdWJtaXQgaW1nLmxvYWRpbmcnKTtcbiAgY29uc3QgJGxvZ2luRm9ybSA9ICQoJy5sb2dpbi13cmFwcGVyJyk7XG5cbiAgJGxvYWRpbmdJbWcucmVtb3ZlQ2xhc3MoJ2ludmlzaWJsZScpO1xuICBcbiAgLy8gTW9ja2luZyBsb2dpblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAkbG9hZGluZ0ltZy5hZGRDbGFzcygnaW52aXNpYmxlJyk7XG4gICAgJGxvZ2luRm9ybS5hZGRDbGFzcygnaW52aXNpYmxlJyk7XG5cbiAgICBWaWV3ZXIuaW5pdFZpZXdlcigpO1xuICB9LCAxMDAwKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICRsb2dpbldyYXBwZXI6ICQoJy5sb2dpbi13cmFwcGVyJyksXG4gICR2aWV3V3JhcHBlcjogJCgnLnZpZXdlci13cmFwcGVyJyksXG4gICRvdmVybGF5OiAkKCcubG9hZGluZy1vdmVybGF5JyksXG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLiRvdmVybGF5LmFkZENsYXNzKCdpbnZpc2libGUnKTtcbiAgICB0aGlzLiRsb2dpbldyYXBwZXIucmVtb3ZlQ2xhc3MoJ2ludmlzaWJsZScpO1xuICAgIHRoaXMuJHZpZXdlcldyYXBwZXIuYWRkQ2xhc3MoJ2ludmlzaWJsZScpO1xuICB9XG59XG4iXX0=
},{"../viewer/viewer":9}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _login = require('../login/login');

var _login2 = _interopRequireDefault(_login);

var _modal = require('../modal/modal');

var _modal2 = _interopRequireDefault(_modal);

var _viewer = require('../viewer/viewer');

var _viewer2 = _interopRequireDefault(_viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  $hamburguerMenu: $('.humburguer-menu'),
  $menuWrapper: $('.menu-wrapper'),
  $overlay: $('.loading-overlay'),
  submit: function submit() {
    var _this = this;

    this.closeMenu();
    this.$overlay.removeClass('invisible').addClass('submitting');

    setTimeout(function () {
      _modal2.default.show();

      _this.$overlay.removeClass('submitting');
    }, 2000);
  },
  nextCase: function nextCase() {
    this.closeMenu();
    _viewer2.default.getNextCase();
  },
  logout: function logout() {
    this.closeMenu();
    _login2.default.logout();
  },
  closeMenu: function closeMenu() {
    var _this2 = this;

    this.$overlay.addClass('invisible');
    this.$menuWrapper.removeClass('opened');

    setTimeout(function () {
      _this2.$menuWrapper.addClass('invisible');
    }, 1200);
  },
  init: function init() {
    var _this3 = this;

    _modal2.default.init();

    this.$hamburguerMenu.on('click', function (event) {
      event.preventDefault();

      _this3.$overlay.removeClass('invisible');
      _this3.$menuWrapper.removeClass('invisible');

      setTimeout(function () {
        _this3.$menuWrapper.addClass('opened');
        _this3.$overlay.removeClass('invisible');
      }, 200);
    });

    this.$menuWrapper.on('click', 'a[data-menu]', function (event) {
      var $element = $(event.currentTarget);
      var menu = $element.attr('data-menu');

      event.preventDefault();

      if (menu) {
        _this3[menu]();
      }
    });

    this.$overlay.on('click', function (event) {
      if (_this3.$menuWrapper.hasClass('opened')) {
        _this3.closeMenu();
      }
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuanMiXSwibmFtZXMiOlsiJGhhbWJ1cmd1ZXJNZW51IiwiJCIsIiRtZW51V3JhcHBlciIsIiRvdmVybGF5Iiwic3VibWl0IiwiY2xvc2VNZW51IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInNldFRpbWVvdXQiLCJzaG93IiwibmV4dENhc2UiLCJnZXROZXh0Q2FzZSIsImxvZ291dCIsImluaXQiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkZWxlbWVudCIsImN1cnJlbnRUYXJnZXQiLCJtZW51IiwiYXR0ciIsImhhc0NsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUNiQSxtQkFBaUJDLEVBQUUsa0JBQUYsQ0FESjtBQUViQyxnQkFBY0QsRUFBRSxlQUFGLENBRkQ7QUFHYkUsWUFBVUYsRUFBRSxrQkFBRixDQUhHO0FBSWJHLFFBSmEsb0JBSUo7QUFBQTs7QUFDUCxTQUFLQyxTQUFMO0FBQ0EsU0FBS0YsUUFBTCxDQUFjRyxXQUFkLENBQTBCLFdBQTFCLEVBQXVDQyxRQUF2QyxDQUFnRCxZQUFoRDs7QUFFQUMsZUFBVyxZQUFNO0FBQ2Ysc0JBQU1DLElBQU47O0FBRUEsWUFBS04sUUFBTCxDQUFjRyxXQUFkLENBQTBCLFlBQTFCO0FBQ0QsS0FKRCxFQUlHLElBSkg7QUFLRCxHQWJZO0FBY2JJLFVBZGEsc0JBY0Y7QUFDVCxTQUFLTCxTQUFMO0FBQ0EscUJBQU9NLFdBQVA7QUFDRCxHQWpCWTtBQWtCYkMsUUFsQmEsb0JBa0JMO0FBQ04sU0FBS1AsU0FBTDtBQUNBLG9CQUFNTyxNQUFOO0FBQ0QsR0FyQlk7QUFzQmJQLFdBdEJhLHVCQXNCRDtBQUFBOztBQUNWLFNBQUtGLFFBQUwsQ0FBY0ksUUFBZCxDQUF1QixXQUF2QjtBQUNBLFNBQUtMLFlBQUwsQ0FBa0JJLFdBQWxCLENBQThCLFFBQTlCOztBQUVBRSxlQUFXLFlBQU07QUFDZixhQUFLTixZQUFMLENBQWtCSyxRQUFsQixDQUEyQixXQUEzQjtBQUNELEtBRkQsRUFFRyxJQUZIO0FBR0QsR0E3Qlk7QUE4QmJNLE1BOUJhLGtCQThCTjtBQUFBOztBQUNMLG9CQUFNQSxJQUFOOztBQUVBLFNBQUtiLGVBQUwsQ0FBcUJjLEVBQXJCLENBQXdCLE9BQXhCLEVBQWlDLFVBQUNDLEtBQUQsRUFBVztBQUMxQ0EsWUFBTUMsY0FBTjs7QUFFQSxhQUFLYixRQUFMLENBQWNHLFdBQWQsQ0FBMEIsV0FBMUI7QUFDQSxhQUFLSixZQUFMLENBQWtCSSxXQUFsQixDQUE4QixXQUE5Qjs7QUFFQUUsaUJBQVcsWUFBTTtBQUNmLGVBQUtOLFlBQUwsQ0FBa0JLLFFBQWxCLENBQTJCLFFBQTNCO0FBQ0EsZUFBS0osUUFBTCxDQUFjRyxXQUFkLENBQTBCLFdBQTFCO0FBQ0QsT0FIRCxFQUdHLEdBSEg7QUFJRCxLQVZEOztBQVlBLFNBQUtKLFlBQUwsQ0FBa0JZLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLGNBQTlCLEVBQThDLFVBQUNDLEtBQUQsRUFBVztBQUN2RCxVQUFNRSxXQUFXaEIsRUFBRWMsTUFBTUcsYUFBUixDQUFqQjtBQUNBLFVBQU1DLE9BQU9GLFNBQVNHLElBQVQsQ0FBYyxXQUFkLENBQWI7O0FBRUFMLFlBQU1DLGNBQU47O0FBRUEsVUFBSUcsSUFBSixFQUFVO0FBQ1IsZUFBS0EsSUFBTDtBQUNEO0FBQ0YsS0FURDs7QUFXQSxTQUFLaEIsUUFBTCxDQUFjVyxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFVBQUNDLEtBQUQsRUFBVztBQUNuQyxVQUFJLE9BQUtiLFlBQUwsQ0FBa0JtQixRQUFsQixDQUEyQixRQUEzQixDQUFKLEVBQTBDO0FBQ3hDLGVBQUtoQixTQUFMO0FBQ0Q7QUFDRixLQUpEO0FBS0Q7QUE3RFksQyIsImZpbGUiOiJtZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ2luIGZyb20gJy4uL2xvZ2luL2xvZ2luJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9tb2RhbC9tb2RhbCc7XG5pbXBvcnQgVmlld2VyIGZyb20gJy4uL3ZpZXdlci92aWV3ZXInO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICRoYW1idXJndWVyTWVudTogJCgnLmh1bWJ1cmd1ZXItbWVudScpLFxuICAkbWVudVdyYXBwZXI6ICQoJy5tZW51LXdyYXBwZXInKSxcbiAgJG92ZXJsYXk6ICQoJy5sb2FkaW5nLW92ZXJsYXknKSxcbiAgc3VibWl0KCkge1xuICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgdGhpcy4kb3ZlcmxheS5yZW1vdmVDbGFzcygnaW52aXNpYmxlJykuYWRkQ2xhc3MoJ3N1Ym1pdHRpbmcnKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgTW9kYWwuc2hvdygpO1xuXG4gICAgICB0aGlzLiRvdmVybGF5LnJlbW92ZUNsYXNzKCdzdWJtaXR0aW5nJyk7XG4gICAgfSwgMjAwMCk7XG4gIH0sXG4gIG5leHRDYXNlKCkge1xuICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgVmlld2VyLmdldE5leHRDYXNlKCk7XG4gIH0sXG4gIGxvZ291dCgpe1xuICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgTG9naW4ubG9nb3V0KCk7XG4gIH0sXG4gIGNsb3NlTWVudSgpIHtcbiAgICB0aGlzLiRvdmVybGF5LmFkZENsYXNzKCdpbnZpc2libGUnKTtcbiAgICB0aGlzLiRtZW51V3JhcHBlci5yZW1vdmVDbGFzcygnb3BlbmVkJyk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuJG1lbnVXcmFwcGVyLmFkZENsYXNzKCdpbnZpc2libGUnKTtcbiAgICB9LCAxMjAwKTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICBNb2RhbC5pbml0KCk7XG5cbiAgICB0aGlzLiRoYW1idXJndWVyTWVudS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHRoaXMuJG92ZXJsYXkucmVtb3ZlQ2xhc3MoJ2ludmlzaWJsZScpO1xuICAgICAgdGhpcy4kbWVudVdyYXBwZXIucmVtb3ZlQ2xhc3MoJ2ludmlzaWJsZScpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy4kbWVudVdyYXBwZXIuYWRkQ2xhc3MoJ29wZW5lZCcpO1xuICAgICAgICB0aGlzLiRvdmVybGF5LnJlbW92ZUNsYXNzKCdpbnZpc2libGUnKTtcbiAgICAgIH0sIDIwMCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRtZW51V3JhcHBlci5vbignY2xpY2snLCAnYVtkYXRhLW1lbnVdJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICBjb25zdCBtZW51ID0gJGVsZW1lbnQuYXR0cignZGF0YS1tZW51Jyk7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmIChtZW51KSB7XG4gICAgICAgIHRoaXNbbWVudV0oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuJG92ZXJsYXkub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy4kbWVudVdyYXBwZXIuaGFzQ2xhc3MoJ29wZW5lZCcpKSB7XG4gICAgICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
},{"../login/login":2,"../modal/modal":4,"../viewer/viewer":9}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _login = require('../login/login');

var _login2 = _interopRequireDefault(_login);

var _viewer = require('../viewer/viewer');

var _viewer2 = _interopRequireDefault(_viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  $modal: $('.modal'),
  $overlay: $('.loading-overlay'),
  logout: function logout() {
    this.$modal.removeClass('show');
    this.$overlay.addClass('invisible');

    _login2.default.logout();
  },
  nextCase: function nextCase() {
    this.hide();

    _viewer2.default.getNextCase();
  },
  show: function show() {
    this.$modal.addClass('show');
    this.$overlay.removeClass('invisible');
  },
  hide: function hide() {
    this.$modal.removeClass('show');
    this.$overlay.addClass('invisible');
  },
  init: function init() {
    var _this = this;

    this.$modal.find('.logout').on('click', function () {
      return _this.logout();
    });
    this.$modal.find('.next-case').on('click', function () {
      return _this.nextCase();
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmpzIl0sIm5hbWVzIjpbIiRtb2RhbCIsIiQiLCIkb3ZlcmxheSIsImxvZ291dCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJuZXh0Q2FzZSIsImhpZGUiLCJnZXROZXh0Q2FzZSIsInNob3ciLCJpbml0IiwiZmluZCIsIm9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7a0JBRWU7QUFDYkEsVUFBUUMsRUFBRSxRQUFGLENBREs7QUFFYkMsWUFBVUQsRUFBRSxrQkFBRixDQUZHO0FBR2JFLFFBSGEsb0JBR0o7QUFDUCxTQUFLSCxNQUFMLENBQVlJLFdBQVosQ0FBd0IsTUFBeEI7QUFDQSxTQUFLRixRQUFMLENBQWNHLFFBQWQsQ0FBdUIsV0FBdkI7O0FBRUEsb0JBQU1GLE1BQU47QUFDRCxHQVJZO0FBU2JHLFVBVGEsc0JBU0Y7QUFDVCxTQUFLQyxJQUFMOztBQUVBLHFCQUFPQyxXQUFQO0FBQ0QsR0FiWTtBQWNiQyxNQWRhLGtCQWNOO0FBQ0wsU0FBS1QsTUFBTCxDQUFZSyxRQUFaLENBQXFCLE1BQXJCO0FBQ0EsU0FBS0gsUUFBTCxDQUFjRSxXQUFkLENBQTBCLFdBQTFCO0FBQ0QsR0FqQlk7QUFrQmJHLE1BbEJhLGtCQWtCTjtBQUNMLFNBQUtQLE1BQUwsQ0FBWUksV0FBWixDQUF3QixNQUF4QjtBQUNBLFNBQUtGLFFBQUwsQ0FBY0csUUFBZCxDQUF1QixXQUF2QjtBQUNELEdBckJZO0FBc0JiSyxNQXRCYSxrQkFzQk47QUFBQTs7QUFDTCxTQUFLVixNQUFMLENBQVlXLElBQVosQ0FBaUIsU0FBakIsRUFBNEJDLEVBQTVCLENBQStCLE9BQS9CLEVBQXdDO0FBQUEsYUFBTSxNQUFLVCxNQUFMLEVBQU47QUFBQSxLQUF4QztBQUNBLFNBQUtILE1BQUwsQ0FBWVcsSUFBWixDQUFpQixZQUFqQixFQUErQkMsRUFBL0IsQ0FBa0MsT0FBbEMsRUFBMkM7QUFBQSxhQUFNLE1BQUtOLFFBQUwsRUFBTjtBQUFBLEtBQTNDO0FBQ0Q7QUF6QlksQyIsImZpbGUiOiJtb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dpbiBmcm9tICcuLi9sb2dpbi9sb2dpbic7XG5pbXBvcnQgVmlld2VyIGZyb20gJy4uL3ZpZXdlci92aWV3ZXInO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICRtb2RhbDogJCgnLm1vZGFsJyksXG4gICRvdmVybGF5OiAkKCcubG9hZGluZy1vdmVybGF5JyksXG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLiRtb2RhbC5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgIHRoaXMuJG92ZXJsYXkuYWRkQ2xhc3MoJ2ludmlzaWJsZScpO1xuICAgIFxuICAgIExvZ2luLmxvZ291dCgpO1xuICB9LFxuICBuZXh0Q2FzZSgpIHtcbiAgICB0aGlzLmhpZGUoKTtcblxuICAgIFZpZXdlci5nZXROZXh0Q2FzZSgpO1xuICB9LFxuICBzaG93KCkge1xuICAgIHRoaXMuJG1vZGFsLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgdGhpcy4kb3ZlcmxheS5yZW1vdmVDbGFzcygnaW52aXNpYmxlJyk7XG4gIH0sXG4gIGhpZGUoKSB7XG4gICAgdGhpcy4kbW9kYWwucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICB0aGlzLiRvdmVybGF5LmFkZENsYXNzKCdpbnZpc2libGUnKTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLiRtb2RhbC5maW5kKCcubG9nb3V0Jykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5sb2dvdXQoKSk7XG4gICAgdGhpcy4kbW9kYWwuZmluZCgnLm5leHQtY2FzZScpLm9uKCdjbGljaycsICgpID0+IHRoaXMubmV4dENhc2UoKSk7XG4gIH1cbn1cbiJdfQ==
},{"../login/login":2,"../viewer/viewer":9}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = require('../menu/menu');

var _menu2 = _interopRequireDefault(_menu);

var _modal = require('../modal/modal');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  commandSelector: '.viewer-tools',
  $overlay: $('.loading-overlay'),
  clearAll: function clearAll() {
    var enabledElemet = cornerstone.getEnabledElement(this.$element);
    var viewport = cornerstone.getViewport(this.$element);

    viewport.voi.windowWidth = enabledElemet.image.windowWidth;
    viewport.voi.windowCenter = enabledElemet.image.windowCenter;
    cornerstone.setViewport(this.$element, viewport);

    cornerstoneTools.globalImageIdSpecificToolStateManager.clear(this.$element);
    cornerstone.updateImage(this.$element);
  },

  save: function save() {
    var _this = this;

    _menu2.default.closeMenu();
    this.$overlay.removeClass('invisible').addClass('submitting');

    setTimeout(function () {
      _modal2.default.show();

      _this.$overlay.removeClass('submitting');
    }, 2000);
  },
  initCommands: function initCommands() {
    var _this2 = this;

    $(this.commandSelector).on('click', 'a[data-command]', function (event) {
      var $element = $(event.currentTarget);
      var $wrapper = $element.parent();
      var tool = $element.attr('data-command');

      _this2[tool]();

      $wrapper.addClass('active');

      setTimeout(function () {
        $wrapper.removeClass('active');
      }, 300);
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRzLmpzIl0sIm5hbWVzIjpbImNvbW1hbmRTZWxlY3RvciIsIiRvdmVybGF5IiwiJCIsImNsZWFyQWxsIiwiZW5hYmxlZEVsZW1ldCIsImNvcm5lcnN0b25lIiwiZ2V0RW5hYmxlZEVsZW1lbnQiLCIkZWxlbWVudCIsInZpZXdwb3J0IiwiZ2V0Vmlld3BvcnQiLCJ2b2kiLCJ3aW5kb3dXaWR0aCIsImltYWdlIiwid2luZG93Q2VudGVyIiwic2V0Vmlld3BvcnQiLCJjb3JuZXJzdG9uZVRvb2xzIiwiZ2xvYmFsSW1hZ2VJZFNwZWNpZmljVG9vbFN0YXRlTWFuYWdlciIsImNsZWFyIiwidXBkYXRlSW1hZ2UiLCJzYXZlIiwiY2xvc2VNZW51IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInNldFRpbWVvdXQiLCJzaG93IiwiaW5pdENvbW1hbmRzIiwib24iLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCIkd3JhcHBlciIsInBhcmVudCIsInRvb2wiLCJhdHRyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7a0JBRWU7QUFDYkEsbUJBQWlCLGVBREo7QUFFYkMsWUFBVUMsRUFBRSxrQkFBRixDQUZHO0FBR2JDLFVBSGEsc0JBR0Y7QUFDVCxRQUFNQyxnQkFBZ0JDLFlBQVlDLGlCQUFaLENBQThCLEtBQUtDLFFBQW5DLENBQXRCO0FBQ0EsUUFBTUMsV0FBV0gsWUFBWUksV0FBWixDQUF3QixLQUFLRixRQUE3QixDQUFqQjs7QUFFQUMsYUFBU0UsR0FBVCxDQUFhQyxXQUFiLEdBQTJCUCxjQUFjUSxLQUFkLENBQW9CRCxXQUEvQztBQUNBSCxhQUFTRSxHQUFULENBQWFHLFlBQWIsR0FBNEJULGNBQWNRLEtBQWQsQ0FBb0JDLFlBQWhEO0FBQ0FSLGdCQUFZUyxXQUFaLENBQXdCLEtBQUtQLFFBQTdCLEVBQXVDQyxRQUF2Qzs7QUFFQU8scUJBQWlCQyxxQ0FBakIsQ0FBdURDLEtBQXZELENBQTZELEtBQUtWLFFBQWxFO0FBQ0FGLGdCQUFZYSxXQUFaLENBQXdCLEtBQUtYLFFBQTdCO0FBQ0QsR0FiWTs7QUFjYlksUUFBTSxnQkFBWTtBQUFBOztBQUNoQixtQkFBS0MsU0FBTDtBQUNBLFNBQUtuQixRQUFMLENBQWNvQixXQUFkLENBQTBCLFdBQTFCLEVBQXVDQyxRQUF2QyxDQUFnRCxZQUFoRDs7QUFFQUMsZUFBVyxZQUFNO0FBQ2Ysc0JBQU1DLElBQU47O0FBRUMsWUFBS3ZCLFFBQUwsQ0FBY29CLFdBQWQsQ0FBMEIsWUFBMUI7QUFDRixLQUpELEVBSUcsSUFKSDtBQUtELEdBdkJZO0FBd0JiSSxjQXhCYSwwQkF3QkU7QUFBQTs7QUFDYnZCLE1BQUUsS0FBS0YsZUFBUCxFQUF3QjBCLEVBQXhCLENBQTJCLE9BQTNCLEVBQW9DLGlCQUFwQyxFQUF1RCxpQkFBUztBQUM5RCxVQUFNbkIsV0FBV0wsRUFBRXlCLE1BQU1DLGFBQVIsQ0FBakI7QUFDQSxVQUFNQyxXQUFXdEIsU0FBU3VCLE1BQVQsRUFBakI7QUFDQSxVQUFNQyxPQUFPeEIsU0FBU3lCLElBQVQsQ0FBYyxjQUFkLENBQWI7O0FBRUEsYUFBS0QsSUFBTDs7QUFFQUYsZUFBU1AsUUFBVCxDQUFrQixRQUFsQjs7QUFFQUMsaUJBQVcsWUFBVztBQUNwQk0saUJBQVNSLFdBQVQsQ0FBcUIsUUFBckI7QUFDRCxPQUZELEVBRUcsR0FGSDtBQUdELEtBWkQ7QUFhRDtBQXRDWSxDIiwiZmlsZSI6ImNvbW1hbmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lbnUgZnJvbSAnLi4vbWVudS9tZW51J1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL21vZGFsL21vZGFsJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbW1hbmRTZWxlY3RvcjogJy52aWV3ZXItdG9vbHMnLFxuICAkb3ZlcmxheTogJCgnLmxvYWRpbmctb3ZlcmxheScpLFxuICBjbGVhckFsbCgpIHtcbiAgICBjb25zdCBlbmFibGVkRWxlbWV0ID0gY29ybmVyc3RvbmUuZ2V0RW5hYmxlZEVsZW1lbnQodGhpcy4kZWxlbWVudCk7XG4gICAgY29uc3Qgdmlld3BvcnQgPSBjb3JuZXJzdG9uZS5nZXRWaWV3cG9ydCh0aGlzLiRlbGVtZW50KTtcblxuICAgIHZpZXdwb3J0LnZvaS53aW5kb3dXaWR0aCA9IGVuYWJsZWRFbGVtZXQuaW1hZ2Uud2luZG93V2lkdGg7XG4gICAgdmlld3BvcnQudm9pLndpbmRvd0NlbnRlciA9IGVuYWJsZWRFbGVtZXQuaW1hZ2Uud2luZG93Q2VudGVyO1xuICAgIGNvcm5lcnN0b25lLnNldFZpZXdwb3J0KHRoaXMuJGVsZW1lbnQsIHZpZXdwb3J0KTtcblxuICAgIGNvcm5lcnN0b25lVG9vbHMuZ2xvYmFsSW1hZ2VJZFNwZWNpZmljVG9vbFN0YXRlTWFuYWdlci5jbGVhcih0aGlzLiRlbGVtZW50KTtcbiAgICBjb3JuZXJzdG9uZS51cGRhdGVJbWFnZSh0aGlzLiRlbGVtZW50KTtcbiAgfSxcbiAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgIE1lbnUuY2xvc2VNZW51KCk7XG4gICAgdGhpcy4kb3ZlcmxheS5yZW1vdmVDbGFzcygnaW52aXNpYmxlJykuYWRkQ2xhc3MoJ3N1Ym1pdHRpbmcnKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgTW9kYWwuc2hvdygpO1xuXG4gICAgICAgdGhpcy4kb3ZlcmxheS5yZW1vdmVDbGFzcygnc3VibWl0dGluZycpO1xuICAgIH0sIDIwMDApO1xuICB9LFxuICBpbml0Q29tbWFuZHMoKSB7XG4gICAgJCh0aGlzLmNvbW1hbmRTZWxlY3Rvcikub24oJ2NsaWNrJywgJ2FbZGF0YS1jb21tYW5kXScsIGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgIGNvbnN0ICR3cmFwcGVyID0gJGVsZW1lbnQucGFyZW50KCk7XG4gICAgICBjb25zdCB0b29sID0gJGVsZW1lbnQuYXR0cignZGF0YS1jb21tYW5kJyk7XG5cbiAgICAgIHRoaXNbdG9vbF0oKTtcblxuICAgICAgJHdyYXBwZXIuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAkd3JhcHBlci5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9LCAzMDApO1xuICAgIH0pO1xuICB9XG59O1xuIl19
},{"../menu/menu":3,"../modal/modal":4}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mockUrl = 'http://localhost:4000/mock.json';

exports.default = {
  getCase: function getCase() {
    return new Promise(function (resolve, reject) {
      var successHandler = function successHandler(response) {
        resolve(response);
      };
      var errorHandler = function errorHandler(error) {
        if (error) {
          console.error(error);
        }

        reject(error);
      };

      $.ajax(mockUrl).then(successHandler);
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3Rvci5qcyJdLCJuYW1lcyI6WyJtb2NrVXJsIiwiZ2V0Q2FzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3VjY2Vzc0hhbmRsZXIiLCJyZXNwb25zZSIsImVycm9ySGFuZGxlciIsImVycm9yIiwiY29uc29sZSIsIiQiLCJhamF4IiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxVQUFVLGlDQUFoQjs7a0JBRWU7QUFDYkMsU0FEYSxxQkFDSDtBQUNSLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQzVDLFVBQU1DLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ25DSCxnQkFBUUcsUUFBUjtBQUNELE9BRkQ7QUFHQSxVQUFNQyxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQzlCLFlBQUlBLEtBQUosRUFBVztBQUNUQyxrQkFBUUQsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7O0FBRURKLGVBQU9JLEtBQVA7QUFDRCxPQU5EOztBQVFBRSxRQUFFQyxJQUFGLENBQU9YLE9BQVAsRUFBZ0JZLElBQWhCLENBQXFCUCxjQUFyQjtBQUNELEtBYk0sQ0FBUDtBQWNEO0FBaEJZLEMiLCJmaWxlIjoiY29ubmVjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9ja1VybCA9ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvbW9jay5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRDYXNlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBjb25zdCBzdWNjZXNzSGFuZGxlciA9IChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH07XG4gICAgICBjb25zdCBlcnJvckhhbmRsZXIgPSAoZXJyb3IpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfTtcblxuICAgICAgJC5hamF4KG1vY2tVcmwpLnRoZW4oc3VjY2Vzc0hhbmRsZXIpO1xuICAgIH0pO1xuICB9XG59O1xuIl19
},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _connector = require('./connector');

var _connector2 = _interopRequireDefault(_connector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getFile: function getFile(url) {
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();

      request.open('GET', url, true);
      request.responseType = 'arraybuffer';

      request.onload = function (oEvent) {
        var arrayBuffer = request.response;
        if (arrayBuffer) {
          try {
            resolve(new Blob([arrayBuffer], { type: 'application/dicom' }));
          } catch (error) {
            reject(error);
          }
        }
      };

      request.send(null);
    });
  },
  getCaseImages: function getCaseImages() {
    var _this = this;

    var $overlay = $('.loading-overlay');
    $overlay.addClass('loading');
    $overlay.removeClass('invisible');

    return new Promise(function (resolve, reject) {
      _connector2.default.getCase().then(function (caseStudy) {
        if (caseStudy && caseStudy.urls) {
          Promise.all(caseStudy.urls.map(_this.getFile)).then(function (files) {
            $overlay.addClass('invisible');
            $overlay.removeClass('loading');

            resolve(files.map(cornerstoneWADOImageLoader.wadouri.fileManager.add));
          }).catch(reject);
        }
      }).catch(function (error) {
        reject(error);
      });
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGVzLmpzIl0sIm5hbWVzIjpbImdldEZpbGUiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJvbmxvYWQiLCJvRXZlbnQiLCJhcnJheUJ1ZmZlciIsInJlc3BvbnNlIiwiQmxvYiIsInR5cGUiLCJlcnJvciIsInNlbmQiLCJnZXRDYXNlSW1hZ2VzIiwiJG92ZXJsYXkiLCIkIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImdldENhc2UiLCJ0aGVuIiwiY2FzZVN0dWR5IiwidXJscyIsImFsbCIsIm1hcCIsImZpbGVzIiwiY29ybmVyc3RvbmVXQURPSW1hZ2VMb2FkZXIiLCJ3YWRvdXJpIiwiZmlsZU1hbmFnZXIiLCJhZGQiLCJjYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztrQkFFZTtBQUNiQSxTQURhLG1CQUNMQyxHQURLLEVBQ0E7QUFDWCxXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFVQyxPQUFWLEVBQW1CQyxNQUFuQixFQUEyQjtBQUM1QyxVQUFNQyxVQUFVLElBQUlDLGNBQUosRUFBaEI7O0FBRUFELGNBQVFFLElBQVIsQ0FBYSxLQUFiLEVBQW9CTixHQUFwQixFQUF5QixJQUF6QjtBQUNBSSxjQUFRRyxZQUFSLEdBQXVCLGFBQXZCOztBQUVBSCxjQUFRSSxNQUFSLEdBQWlCLFVBQVNDLE1BQVQsRUFBaUI7QUFDaEMsWUFBTUMsY0FBY04sUUFBUU8sUUFBNUI7QUFDQSxZQUFJRCxXQUFKLEVBQWlCO0FBQ2YsY0FBSTtBQUNGUixvQkFBUSxJQUFJVSxJQUFKLENBQVMsQ0FBQ0YsV0FBRCxDQUFULEVBQXdCLEVBQUVHLE1BQU0sbUJBQVIsRUFBeEIsQ0FBUjtBQUNELFdBRkQsQ0FFRSxPQUFPQyxLQUFQLEVBQWM7QUFDZFgsbUJBQU9XLEtBQVA7QUFDRDtBQUNGO0FBQ0YsT0FURDs7QUFXQVYsY0FBUVcsSUFBUixDQUFhLElBQWI7QUFDRCxLQWxCTSxDQUFQO0FBbUJELEdBckJZO0FBc0JiQyxlQXRCYSwyQkFzQkc7QUFBQTs7QUFDZCxRQUFNQyxXQUFXQyxFQUFFLGtCQUFGLENBQWpCO0FBQ0FELGFBQVNFLFFBQVQsQ0FBa0IsU0FBbEI7QUFDQUYsYUFBU0csV0FBVCxDQUFxQixXQUFyQjs7QUFFQSxXQUFPLElBQUluQixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLDBCQUFVa0IsT0FBVixHQUFvQkMsSUFBcEIsQ0FBeUIsVUFBQ0MsU0FBRCxFQUFlO0FBQ3RDLFlBQUlBLGFBQWFBLFVBQVVDLElBQTNCLEVBQWlDO0FBQy9CdkIsa0JBQVF3QixHQUFSLENBQVlGLFVBQVVDLElBQVYsQ0FBZUUsR0FBZixDQUFtQixNQUFLM0IsT0FBeEIsQ0FBWixFQUE4Q3VCLElBQTlDLENBQW1ELFVBQVVLLEtBQVYsRUFBaUI7QUFDbEVWLHFCQUFTRSxRQUFULENBQWtCLFdBQWxCO0FBQ0FGLHFCQUFTRyxXQUFULENBQXFCLFNBQXJCOztBQUVBbEIsb0JBQVF5QixNQUFNRCxHQUFOLENBQVVFLDJCQUEyQkMsT0FBM0IsQ0FBbUNDLFdBQW5DLENBQStDQyxHQUF6RCxDQUFSO0FBQ0QsV0FMRCxFQUtHQyxLQUxILENBS1M3QixNQUxUO0FBTUQ7QUFDRixPQVRELEVBU0c2QixLQVRILENBU1MsVUFBU2xCLEtBQVQsRUFBZ0I7QUFDdkJYLGVBQU9XLEtBQVA7QUFDRCxPQVhEO0FBWUQsS0FiTSxDQUFQO0FBY0Q7QUF6Q1ksQyIsImZpbGUiOiJmaWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25uZWN0b3IgZnJvbSAnLi9jb25uZWN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldEZpbGUodXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuXG4gICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKG9FdmVudCkge1xuICAgICAgICBjb25zdCBhcnJheUJ1ZmZlciA9IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICAgIGlmIChhcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNvbHZlKG5ldyBCbG9iKFthcnJheUJ1ZmZlcl0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL2RpY29tJyB9KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXF1ZXN0LnNlbmQobnVsbCk7XG4gICAgfSk7XG4gIH0sXG4gIGdldENhc2VJbWFnZXMoKSB7XG4gICAgY29uc3QgJG92ZXJsYXkgPSAkKCcubG9hZGluZy1vdmVybGF5Jyk7XG4gICAgJG92ZXJsYXkuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAkb3ZlcmxheS5yZW1vdmVDbGFzcygnaW52aXNpYmxlJyk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgQ29ubmVjdG9yLmdldENhc2UoKS50aGVuKChjYXNlU3R1ZHkpID0+IHtcbiAgICAgICAgaWYgKGNhc2VTdHVkeSAmJiBjYXNlU3R1ZHkudXJscykge1xuICAgICAgICAgIFByb21pc2UuYWxsKGNhc2VTdHVkeS51cmxzLm1hcCh0aGlzLmdldEZpbGUpKS50aGVuKGZ1bmN0aW9uIChmaWxlcykge1xuICAgICAgICAgICAgJG92ZXJsYXkuYWRkQ2xhc3MoJ2ludmlzaWJsZScpO1xuICAgICAgICAgICAgJG92ZXJsYXkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgICAgICAgICAgcmVzb2x2ZShmaWxlcy5tYXAoY29ybmVyc3RvbmVXQURPSW1hZ2VMb2FkZXIud2Fkb3VyaS5maWxlTWFuYWdlci5hZGQpKTtcbiAgICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG4iXX0=
},{"./connector":6}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _commands = require('./commands');

var _commands2 = _interopRequireDefault(_commands);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

exports.default = {
  active: '',
  toolsSelector: '.viewer-tools',
  $conerstoneViewport: $('#conerstoneViewport'),
  deactivateActiveTool: function deactivateActiveTool() {
    if (this.active) {
      this.deactivate(this.active);
      this.active = '';
    }
  },
  toggleTool: function toggleTool(toolToActivate) {
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

    if (this.active) {
      this.deactivate(this.active);
    }

    cornerstoneTools[toolToActivate].enable(this.$element);
    cornerstoneTools[toolToActivate].activate(this.$element, 1);

    this.active = toolToActivate;
  },
  deactivate: function deactivate(tool) {
    cornerstoneTools[tool].disable(this.$element);
    cornerstoneTools[tool].deactivate(this.$element, 1);
  },
  initStackTool: function initStackTool(imageIds) {
    var $thumb = $('.thumb');
    var stack = {
      currentImageIdIndex: 0,
      imageIds: imageIds
    };
    var configuration = {
      testPointers: function testPointers(eventData) {
        return eventData.numPointers >= 2;
      }
    };

    cornerstoneTools.addStackStateManager(this.$element, ['stack']);
    cornerstoneTools.addToolState(this.$element, 'stack', stack);
    cornerstoneTools.stackScrollWheel.activate(this.$element);

    cornerstoneTools.stackScrollMultiTouch.setConfiguration(configuration);
    cornerstoneTools.stackScrollMultiTouch.activate(this.$element);

    $thumb.css('height', 100 / stack.imageIds.length + '%');

    $(this.$element).on('CornerstoneNewImage', function () {
      var currentIndex = stack.currentImageIdIndex;

      $thumb.css({
        'margin-top': $thumb.height() * currentIndex + 'px'
      });
    });
  },
  attachEvents: function attachEvents() {
    var _this = this;

    // Extract which tool we are using and activating it
    $(this.toolsSelector).on('click', 'a[data-tool]', function (event) {
      var $element = $(event.currentTarget);
      var tool = $element.attr('data-tool');

      $('.active').removeClass('active');

      _this.toggleTool(tool);

      $element.parent().addClass('active');
    });

    // Limiting measurements to 1
    this.$conerstoneViewport.on('touchstart mousedown', function () {
      var lengths = cornerstoneTools.getToolState(_this.$element, 'length');

      if (lengths && lengths.data.length === 2) {
        lengths.data.shift();
        cornerstone.updateImage(_this.$element);
      }
    });
  },
  initTools: function initTools(imageIds) {
    cornerstoneTools.mouseInput.enable(this.$element);
    cornerstoneTools.touchInput.enable(this.$element);
    cornerstoneTools.mouseWheelInput.enable(this.$element);

    this.initStackTool(imageIds);

    // removing default context menu
    this.$element.oncontextmenu = function (event) {
      event.preventDefault();

      return false;
    };

    this.attachEvents();
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xzLmpzIl0sIm5hbWVzIjpbImlzTW9iaWxlIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImFjdGl2ZSIsInRvb2xzU2VsZWN0b3IiLCIkY29uZXJzdG9uZVZpZXdwb3J0IiwiJCIsImRlYWN0aXZhdGVBY3RpdmVUb29sIiwiZGVhY3RpdmF0ZSIsInRvZ2dsZVRvb2wiLCJ0b29sVG9BY3RpdmF0ZSIsImNvcm5lcnN0b25lVG9vbHMiLCJlbmFibGUiLCIkZWxlbWVudCIsImFjdGl2YXRlIiwidG9vbCIsImRpc2FibGUiLCJpbml0U3RhY2tUb29sIiwiaW1hZ2VJZHMiLCIkdGh1bWIiLCJzdGFjayIsImN1cnJlbnRJbWFnZUlkSW5kZXgiLCJjb25maWd1cmF0aW9uIiwidGVzdFBvaW50ZXJzIiwiZXZlbnREYXRhIiwibnVtUG9pbnRlcnMiLCJhZGRTdGFja1N0YXRlTWFuYWdlciIsImFkZFRvb2xTdGF0ZSIsInN0YWNrU2Nyb2xsV2hlZWwiLCJzdGFja1Njcm9sbE11bHRpVG91Y2giLCJzZXRDb25maWd1cmF0aW9uIiwiY3NzIiwibGVuZ3RoIiwib24iLCJjdXJyZW50SW5kZXgiLCJoZWlnaHQiLCJhdHRhY2hFdmVudHMiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJhdHRyIiwicmVtb3ZlQ2xhc3MiLCJwYXJlbnQiLCJhZGRDbGFzcyIsImxlbmd0aHMiLCJnZXRUb29sU3RhdGUiLCJkYXRhIiwic2hpZnQiLCJjb3JuZXJzdG9uZSIsInVwZGF0ZUltYWdlIiwiaW5pdFRvb2xzIiwibW91c2VJbnB1dCIsInRvdWNoSW5wdXQiLCJtb3VzZVdoZWVsSW5wdXQiLCJvbmNvbnRleHRtZW51IiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxXQUFXLDRCQUE0QkMsSUFBNUIsQ0FBaUNDLFVBQVVDLFNBQTNDLENBQWpCOztrQkFFZTtBQUNiQyxVQUFRLEVBREs7QUFFYkMsaUJBQWUsZUFGRjtB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QUtyQyxtQkFBTCxDQUF5QjRCLEVBQXpCLENBQTRCLHNCQUE1QixFQUFvRCxZQUFNO0FBQ3hELFVBQU1VLFVBQVVoQyxpQkFBaUJpQyxZQUFqQixDQUE4QixNQUFLL0IsUUFBbkMsRUFBNkMsUUFBN0MsQ0FBaEI7O0FBRUEsVUFBSThCLFdBQVdBLFFBQVFFLElBQVIsQ0FBYWIsTUFBYixLQUF3QixDQUF2QyxFQUEwQztBQUN4Q1csZ0JBQVFFLElBQVIsQ0FBYUMsS0FBYjtBQUNBQyxvQkFBWUMsV0FBWixDQUF3QixNQUFLbkMsUUFBN0I7QUFDRDtBQUNGLEtBUEQ7QUFRRCxHQXZGWTtBQXdGYm9DLFdBeEZhLHFCQXdGSC9CLFFBeEZHLEVBd0ZPO0FBQ2xCUCxxQkFBaUJ1QyxVQUFqQixDQUE0QnRDLE1BQTVCLENBQW1DLEtBQUtDLFFBQXhDO0FBQ0FGLHFCQUFpQndDLFVBQWpCLENBQTRCdkMsTUFBNUIsQ0FBbUMsS0FBS0MsUUFBeEM7QUFDQUYscUJBQWlCeUMsZUFBakIsQ0FBaUN4QyxNQUFqQyxDQUF3QyxLQUFLQyxRQUE3Qzs7QUFFQSxTQUFLSSxhQUFMLENBQW1CQyxRQUFuQjs7QUFFQTtBQUNBLFNBQUtMLFFBQUwsQ0FBY3dDLGFBQWQsR0FBOEIsVUFBVWhCLEtBQVYsRUFBaUI7QUFDN0NBLFlBQU1pQixjQUFOOztBQUVBLGFBQU8sS0FBUDtBQUNELEtBSkQ7O0FBTUEsU0FBS2xCLFlBQUw7QUFDRDtBQXZHWSxDIiwiZmlsZSI6InRvb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbW1hbmRzIGZyb20gJy4vY29tbWFuZHMnO1xuXG5jb25zdCBpc01vYmlsZSA9IC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFjdGl2ZTogJycsXG4gIHRvb2xzU2VsZWN0b3I6ICcudmlld2VyLXRvb2xzJyxcbiAgJGNvbmVyc3RvbmVWaWV3cG9ydDogJCgnI2NvbmVyc3RvbmVWaWV3cG9ydCcpLFxuICBkZWFjdGl2YXRlQWN0aXZlVG9vbCgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuZGVhY3RpdmF0ZSh0aGlzLmFjdGl2ZSk7XG4gICAgICB0aGlzLmFjdGl2ZSA9ICcnO1xuICAgIH1cbiAgfSxcbiAgdG9nZ2xlVG9vbCh0b29sVG9BY3RpdmF0ZSkge1xuICAgIGlmICghdG9vbFRvQWN0aXZhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNNb2JpbGUpIHtcbiAgICAgIGlmICh0b29sVG9BY3RpdmF0ZSA9PT0gJ2xlbmd0aCcpIHtcbiAgICAgICAgdG9vbFRvQWN0aXZhdGUgPSBgJHt0b29sVG9BY3RpdmF0ZX1Ub3VjaGA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b29sVG9BY3RpdmF0ZSA9IGAke3Rvb2xUb0FjdGl2YXRlfVRvdWNoRHJhZ2A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLmRlYWN0aXZhdGUodGhpcy5hY3RpdmUpO1xuICAgIH1cblxuICAgIGNvcm5lcnN0b25lVG9vbHNbdG9vbFRvQWN0aXZhdGVdLmVuYWJsZSh0aGlzLiRlbGVtZW50KTtcbiAgICBjb3JuZXJzdG9uZVRvb2xzW3Rvb2xUb0FjdGl2YXRlXS5hY3RpdmF0ZSh0aGlzLiRlbGVtZW50LCAxKTtcblxuICAgIHRoaXMuYWN0aXZlID0gdG9vbFRvQWN0aXZhdGU7XG4gIH0sXG4gIGRlYWN0aXZhdGUodG9vbCkge1xuICAgIGNvcm5lcnN0b25lVG9vbHNbdG9vbF0uZGlzYWJsZSh0aGlzLiRlbGVtZW50KTtcbiAgICBjb3JuZXJzdG9uZVRvb2xzW3Rvb2xdLmRlYWN0aXZhdGUodGhpcy4kZWxlbWVudCwgMSk7XG4gIH0sXG4gIGluaXRTdGFja1Rvb2woaW1hZ2VJZHMpIHtcbiAgICBjb25zdCAkdGh1bWIgPSAkKCcudGh1bWInKTtcbiAgICBjb25zdCBzdGFjayA9IHtcbiAgICAgIGN1cnJlbnRJbWFnZUlkSW5kZXg6IDAsXG4gICAgICBpbWFnZUlkczogaW1hZ2VJZHNcbiAgICB9O1xuICAgIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSB7XG4gICAgICB0ZXN0UG9pbnRlcnMoZXZlbnREYXRhKSB7XG4gICAgICAgIHJldHVybiAoZXZlbnREYXRhLm51bVBvaW50ZXJzID49IDIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb3JuZXJzdG9uZVRvb2xzLmFkZFN0YWNrU3RhdGVNYW5hZ2VyKHRoaXMuJGVsZW1lbnQsIFsnc3RhY2snXSk7XG4gICAgY29ybmVyc3RvbmVUb29scy5hZGRUb29sU3RhdGUodGhpcy4kZWxlbWVudCwgJ3N0YWNrJywgc3RhY2spO1xuICAgIGNvcm5lcnN0b25lVG9vbHMuc3RhY2tTY3JvbGxXaGVlbC5hY3RpdmF0ZSh0aGlzLiRlbGVtZW50KTtcblxuICAgIGNvcm5lcnN0b25lVG9vbHMuc3RhY2tTY3JvbGxNdWx0aVRvdWNoLnNldENvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbik7XG4gICAgY29ybmVyc3RvbmVUb29scy5zdGFja1Njcm9sbE11bHRpVG91Y2guYWN0aXZhdGUodGhpcy4kZWxlbWVudCk7XG5cbiAgICAkdGh1bWIuY3NzKCdoZWlnaHQnLCBgJHsoMTAwL3N0YWNrLmltYWdlSWRzLmxlbmd0aCl9JWApO1xuXG4gICAgJCh0aGlzLiRlbGVtZW50KS5vbignQ29ybmVyc3RvbmVOZXdJbWFnZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjdXJyZW50SW5kZXggPSBzdGFjay5jdXJyZW50SW1hZ2VJZEluZGV4O1xuXG4gICAgICAkdGh1bWIuY3NzKHtcbiAgICAgICAgJ21hcmdpbi10b3AnOiBgJHsoJHRodW1iLmhlaWdodCgpKihjdXJyZW50SW5kZXgpKX1weGBcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBhdHRhY2hFdmVudHMoKSB7XG4gICAgLy8gRXh0cmFjdCB3aGljaCB0b29sIHdlIGFyZSB1c2luZyBhbmQgYWN0aXZhdGluZyBpdFxuICAgICQodGhpcy50b29sc1NlbGVjdG9yKS5vbignY2xpY2snLCAnYVtkYXRhLXRvb2xdJywgZXZlbnQgPT4ge1xuICAgICAgY29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgY29uc3QgdG9vbCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtdG9vbCcpO1xuXG4gICAgICAkKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICB0aGlzLnRvZ2dsZVRvb2wodG9vbCk7XG5cbiAgICAgICRlbGVtZW50LnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIC8vIExpbWl0aW5nIG1lYXN1cmVtZW50cyB0byAxXG4gICAgdGhpcy4kY29uZXJzdG9uZVZpZXdwb3J0Lm9uKCd0b3VjaHN0YXJ0IG1vdXNlZG93bicsICgpID0+IHtcbiAgICAgIGNvbnN0IGxlbmd0aHMgPSBjb3JuZXJzdG9uZVRvb2xzLmdldFRvb2xTdGF0ZSh0aGlzLiRlbGVtZW50LCAnbGVuZ3RoJyk7XG5cbiAgICAgIGlmIChsZW5ndGhzICYmIGxlbmd0aHMuZGF0YS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgbGVuZ3Rocy5kYXRhLnNoaWZ0KCk7XG4gICAgICAgIGNvcm5lcnN0b25lLnVwZGF0ZUltYWdlKHRoaXMuJGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBpbml0VG9vbHMoaW1hZ2VJZHMpIHtcbiAgICBjb3JuZXJzdG9uZVRvb2xzLm1vdXNlSW5wdXQuZW5hYmxlKHRoaXMuJGVsZW1lbnQpO1xuICAgIGNvcm5lcnN0b25lVG9vbHMudG91Y2hJbnB1dC5lbmFibGUodGhpcy4kZWxlbWVudCk7XG4gICAgY29ybmVyc3RvbmVUb29scy5tb3VzZVdoZWVsSW5wdXQuZW5hYmxlKHRoaXMuJGVsZW1lbnQpO1xuXG4gICAgdGhpcy5pbml0U3RhY2tUb29sKGltYWdlSWRzKTtcblxuICAgIC8vIHJlbW92aW5nIGRlZmF1bHQgY29udGV4dCBtZW51XG4gICAgdGhpcy4kZWxlbWVudC5vbmNvbnRleHRtZW51ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHRoaXMuYXR0YWNoRXZlbnRzKCk7XG4gIH1cbn07XG4iXX0=
},{"./commands":5}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _files = require('./files');

var _files2 = _interopRequireDefault(_files);

var _tools = require('./tools');

var _tools2 = _interopRequireDefault(_tools);

var _commands = require('./commands');

var _commands2 = _interopRequireDefault(_commands);

var _menu = require('../menu/menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  $window: $(window),
  $viewer: $('.viewer-wrapper'),
  $overlay: $('.loading-overlay'),
  getNextCase: function getNextCase() {
    var _this = this;

    this.$overlay.removeClass('invisible').addClass('loading');

    _files2.default.getCaseImages().then(function (imagesIds) {
      _tools2.default.initTools(imagesIds);
      _commands2.default.initCommands();

      cornerstone.loadImage(imagesIds[0]).then(function (image) {
        cornerstone.displayImage(_this.$element, image);
      });
    }).catch();
  },
  initViewer: function initViewer() {
    var _this2 = this;

    this.$element = $('#conerstoneViewport')[0];

    _menu2.default.init();

    this.$viewer.removeClass('invisible');

    _tools2.default.$element = this.$element;
    _commands2.default.$element = this.$element;

    this.$window.on('resize', function () {
      return cornerstone.resize(_this2.$element, true);
    });

    cornerstone.enable(this.$element);

    this.getNextCase();
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdlci5qcyJdLCJuYW1lcyI6WyIkd2luZG93IiwiJCIsIndpbmRvdyIsIiR2aWV3ZXIiLCIkb3ZlcmxheSIsImdldE5leHRDYXNlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImdldENhc2VJbWFnZXMiLCJ0aGVuIiwiaW1hZ2VzSWRzIiwiaW5pdFRvb2xzIiwiaW5pdENvbW1hbmRzIiwiY29ybmVyc3RvbmUiLCJsb2FkSW1hZ2UiLCJpbWFnZSIsImRpc3BsYXlJbWFnZSIsIiRlbGVtZW50IiwiY2F0Y2giLCJpbml0Vmlld2VyIiwiaW5pdCIsIm9uIiwicmVzaXplIiwiZW5hYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlO0FBQ2JBLFdBQVNDLEVBQUVDLE1BQUYsQ0FESTtBQUViQyxXQUFTRixFQUFFLGlCQUFGLENBRkk7QUFHYkcsWUFBVUgsRUFBRSxrQkFBRixDQUhHO0FBSWJJLGFBSmEseUJBSUM7QUFBQTs7QUFDWixTQUFLRCxRQUFMLENBQWNFLFdBQWQsQ0FBMEIsV0FBMUIsRUFBdUNDLFFBQXZDLENBQWdELFNBQWhEOztBQUVBLG9CQUFNQyxhQUFOLEdBQXNCQyxJQUF0QixDQUEyQixVQUFDQyxTQUFELEVBQWU7QUFDeEMsc0JBQU1DLFNBQU4sQ0FBZ0JELFNBQWhCO0FBQ0EseUJBQVNFLFlBQVQ7O0FBRUFDLGtCQUFZQyxTQUFaLENBQXNCSixVQUFVLENBQVYsQ0FBdEIsRUFBb0NELElBQXBDLENBQXlDLFVBQUNNLEtBQUQsRUFBVztBQUNsREYsb0JBQVlHLFlBQVosQ0FBeUIsTUFBS0MsUUFBOUIsRUFBd0NGLEtBQXhDO0FBQ0QsT0FGRDtBQUdELEtBUEQsRUFPR0csS0FQSDtBQVFELEdBZlk7QUFnQmJDLFlBaEJhLHdCQWdCQTtBQUFBOztBQUNYLFNBQUtGLFFBQUwsR0FBZ0JoQixFQUFFLHFCQUFGLEVBQXlCLENBQXpCLENBQWhCOztBQUVBLG1CQUFLbUIsSUFBTDs7QUFFQSxTQUFLakIsT0FBTCxDQUFhRyxXQUFiLENBQXlCLFdBQXpCOztBQUVBLG9CQUFNVyxRQUFOLEdBQWlCLEtBQUtBLFFBQXRCO0FBQ0EsdUJBQVNBLFFBQVQsR0FBb0IsS0FBS0EsUUFBekI7O0FBRUEsU0FBS2pCLE9BQUwsQ0FBYXFCLEVBQWIsQ0FBZ0IsUUFBaEIsRUFBMEI7QUFBQSxhQUFNUixZQUFZUyxNQUFaLENBQW1CLE9BQUtMLFFBQXhCLEVBQWtDLElBQWxDLENBQU47QUFBQSxLQUExQjs7QUFFQUosZ0JBQVlVLE1BQVosQ0FBbUIsS0FBS04sUUFBeEI7O0FBRUEsU0FBS1osV0FBTDtBQUNEO0FBL0JZLEMiLCJmaWxlIjoidmlld2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZpbGVzIGZyb20gJy4vZmlsZXMnO1xuaW1wb3J0IFRvb2xzIGZyb20gJy4vdG9vbHMnO1xuaW1wb3J0IENvbW1hbmRzIGZyb20gJy4vY29tbWFuZHMnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vbWVudS9tZW51JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAkd2luZG93OiAkKHdpbmRvdyksXG4gICR2aWV3ZXI6ICQoJy52aWV3ZXItd3JhcHBlcicpLFxuICAkb3ZlcmxheTogJCgnLmxvYWRpbmctb3ZlcmxheScpLFxuICBnZXROZXh0Q2FzZSgpIHtcbiAgICB0aGlzLiRvdmVybGF5LnJlbW92ZUNsYXNzKCdpbnZpc2libGUnKS5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgRmlsZXMuZ2V0Q2FzZUltYWdlcygpLnRoZW4oKGltYWdlc0lkcykgPT4ge1xuICAgICAgVG9vbHMuaW5pdFRvb2xzKGltYWdlc0lkcyk7XG4gICAgICBDb21tYW5kcy5pbml0Q29tbWFuZHMoKTtcblxuICAgICAgY29ybmVyc3RvbmUubG9hZEltYWdlKGltYWdlc0lkc1swXSkudGhlbigoaW1hZ2UpID0+IHtcbiAgICAgICAgY29ybmVyc3RvbmUuZGlzcGxheUltYWdlKHRoaXMuJGVsZW1lbnQsIGltYWdlKTtcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKCk7XG4gIH0sXG4gIGluaXRWaWV3ZXIoKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9ICQoJyNjb25lcnN0b25lVmlld3BvcnQnKVswXTtcblxuICAgIE1lbnUuaW5pdCgpO1xuXG4gICAgdGhpcy4kdmlld2VyLnJlbW92ZUNsYXNzKCdpbnZpc2libGUnKTtcblxuICAgIFRvb2xzLiRlbGVtZW50ID0gdGhpcy4kZWxlbWVudDtcbiAgICBDb21tYW5kcy4kZWxlbWVudCA9IHRoaXMuJGVsZW1lbnQ7XG5cbiAgICB0aGlzLiR3aW5kb3cub24oJ3Jlc2l6ZScsICgpID0+IGNvcm5lcnN0b25lLnJlc2l6ZSh0aGlzLiRlbGVtZW50LCB0cnVlKSk7XG5cbiAgICBjb3JuZXJzdG9uZS5lbmFibGUodGhpcy4kZWxlbWVudCk7XG5cbiAgICB0aGlzLmdldE5leHRDYXNlKCk7XG4gIH1cbn1cbiJdfQ==
},{"../menu/menu":3,"./commands":5,"./files":7,"./tools":8}]},{},[1])