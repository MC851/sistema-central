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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(12);
module.exports = __webpack_require__(43);


/***/ }),

/***/ 12:
/***/ (function(module, exports) {

(function ($) {
    $(window).on('load', function () {
        $('.switcher .login').on('click', function (e) {
            $('.login-screen').show();
            $('.registration-screen').hide();
        });
        $('.switcher .register').on('click', function (e) {
            $('.login-screen').hide();
            $('.registration-screen').show();
        });

        $('.login-form').on('submit', function (e) {
            e.preventDefault();
            $.ajax({
                url: 'https://mc857.viniciusfabri.com/api/login',
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
                    localStorage.name = data.data.name;
                    localStorage.email = data.data.email;
                    localStorage.api_token = data.data.api_token;
                },
                error: function error(data) {
                    $('#password, #email').addClass('is-invalid');
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
                },
                error: function error(data) {
                    $('#password, #email, #name, #rfid_key', '.registration-form').addClass('is-invalid');
                }
            });
        });

        if (localStorage.api_token === null) {
            $('.anon-screens').hide();
            $('.auth-screens').show();
        } else {
            $('.anon-screens').show();
            $('.auth-screens').hide();
            $('.switcher .login').click();
        }
    });
})(jQuery);

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });