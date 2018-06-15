/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function ($) {
  $(window).on('load', function () {
    $('.switcher .login').on('click', function (e) {
      $('.login-screen').show();
      $('.registration-screen').hide();
      setErrormessage('');
    });
    $('.switcher .register').on('click', function (e) {
      $('.login-screen').hide();
      $('.registration-screen').show();
      setErrormessage('');
    });
    $('.btn-refresh').on('click', function (e) {
      refreshData();
    });

    $('.btn-extract').on('click', function (e) {
      $('.screen').hide();
      $('.extract-screen').show();
      setErrormessage('');
    });

    $('.btn-payment').on('click', function (e) {
      $('.screen').hide();
      $('.payment-screen').show();
      setErrormessage('');
    });

    $('.btn-transfer').on('click', function (e) {
      $('.screen').hide();
      $('.transfer-screen').show();
      setErrormessage('');
    });

    $('.btn-logout').on('click', function (e) {
      localStorage.api_token = null;
      localStorage.name = null;
      localStorage.balance = null;
      localStorage.email = null;
      $('.auth-screens, .screen').hide();
      $('.anon-screens, .login-screen').show();
      setErrormessage('');
    });

    $('.login-form').on('submit', function (e) {
      e.preventDefault();
      $.ajax({
        url: 'http://sistema-central.test/api/login',
        type: 'post',
        data: JSON.stringify({
          email: $('.login-form #email').val(),
          password: $('.login-form #password').val()
        }),
        headers: {
          Accept: 'application/json',
          "Content-Type": 'application/json'
        },
        dataType: 'json',
        success: function success(data) {
          $('#password, #email').removeClass('is-invalid');
          localStorage.id = data.data.id;
          localStorage.name = data.data.name;
          localStorage.email = data.data.email;
          localStorage.api_token = data.data.api_token;
          $('.anon-screens, .screen').hide();
          $('.auth-screens, .extract-screen').show();
          refreshData();
        },
        error: function error(data) {
          $('#password, #email').addClass('is-invalid');
          setErrormessage(data.message);
        }
      });
    });
    $('.registration-form').on('submit', function (e) {
      e.preventDefault();
      $.ajax({
        url: 'https://mc857.viniciusfabri.com/api/register',
        type: 'post',
        data: JSON.stringify({
          email: $('.registration-form #email').val(),
          rfid_key: $('.registration-form #rfid_key').val(),
          name: $('.registration-form #name').val(),
          password: $('.registration-form #password').val()
        }),
        headers: {
          Accept: 'application/json',
          "Content-Type": 'application/json'
        },
        dataType: 'json',
        success: function success(data) {
          $('#password, #email, #name, #rfid_key', '.registration-form').removeClass('is-invalid');
          localStorage.name = data.data.name;
          localStorage.email = data.data.email;
          localStorage.api_token = data.data.api_token;
          localStorage.id = data.data.id;
          $('.anon-screens, .screen').hide();
          $('.auth-screens, .extract-screen').show();
          refreshData();
        },
        error: function error(data) {
          setErrormessage(data.responseJSON.message);
          $('#password, #email, #name, #rfid_key', '.registration-form').addClass('is-invalid');
        }
      });
    });

    $('.payment-form').on('submit', function (e) {
      e.preventDefault();

      var id = $('.payment-form #payment_id').val();
      var price = id.substring(0, 7);
      $.ajax({
        url: 'http://sistema-central.test/api/payments',
        type: 'post',
        data: JSON.stringify({
          api_token: localStorage.api_token,
          description: $('.payment-form #description').val(),
          price: price
        }),
        headers: {
          Accept: 'application/json',
          "Content-Type": 'application/json'
        },
        dataType: 'json',
        success: function success(data) {
          refreshData();
          $('.screen').hide();
          $('.extract-screen').show();
        },
        error: function error(data) {
          setErrormessage(data.responseJSON.message);
          $('#payment_id, #description').addClass('is-invalid');
        }
      });
    });

    $('.transfer-form').on('submit', function (e) {
      e.preventDefault();

      $.ajax({
        url: 'https://mc857.viniciusfabri.com/api/transfer',
        type: 'post',
        data: JSON.stringify({
          api_token: localStorage.api_token,
          to: $('.transfer-form #email').val(),
          ammount: $('.transfer-form #ammount').val()
        }),
        headers: {
          Accept: 'application/json',
          "Content-Type": 'application/json'
        },
        dataType: 'json',
        success: function success(data) {
          $('.screen').hide();
          $('.extract-screen').show();
        },
        error: function error(data) {
          setErrormessage(data.responseJSON.message);
          $('#email, #ammount').addClass('is-invalid');
        }
      });
    });

    if (localStorage.api_token !== "null") {
      $('.screen, .anon-screens').hide();
      $('.auth-screens').show();
      $('.extract-screen').show();
      refreshData();
    } else {
      $('.screen, .auth-screens').hide();
      $('.login-screen').show();
    }
  });

  function refreshData() {
    setErrormessage('');
    $.ajax({
      url: 'http://sistema-central.test/api/user',
      type: 'get',
      data: {
        api_token: localStorage.api_token
      },
      headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
      },
      dataType: 'json',
      success: function success(data) {
        localStorage.name = data.name;
        $('.placeholder').each(function () {
          var text = $(this).text();
          text = text.replace('{name}', data.name);
          text = text.replace('{extract}', data.balance);
          $(this).text(text);
        });
      },
      error: function error(data) {}
    });
    $.ajax({
      url: 'http://sistema-central.test/api/payments',
      type: 'get',
      data: {
        api_token: localStorage.api_token
      },
      headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
      },
      dataType: 'json',
      success: function success(data) {
        var $tbody = $('.payments tbody');
        $tbody.empty();
        for (var key in data) {
          if (data[key].description) {
            var descripion = data[key].description;
            var price = data[key].price;
          } else {
            if (localStorage.id == data[key].user_id) {
              var descripion = "Transferencia para " + data[key].to_user_id;
              var price = -data[key].to_user_id;
            } else {
              var descripion = "Transferencia de " + data[key].user_id;
              var price = data[key].ammount;
            }
          }

          var $tr = $('<tr />');
          $tr.append($('<td>', {
            text: descripion
          }));
          $tr.append($('<td>', {
            text: price
          }));
          $tbody.append($tr);
        }
      },
      error: function error(data) {
        setErrormessage(data.message);
      }
    });
  }

  function setErrormessage(message) {
    $('.error-messages p').text(message);
  }
})(jQuery);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);