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
        success: function (data) {
          $('#password, #email').removeClass('is-invalid');
          localStorage.name = data.data.name;
          localStorage.email = data.data.email;
          localStorage.api_token = data.data.api_token;
        },
        error: function (data) {
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
        success: function (data) {
          $('#password, #email, #name, #rfid_key', '.registration-form').removeClass('is-invalid');
          localStorage.name = data.data.name;
          localStorage.email = data.data.email;
          localStorage.api_token = data.data.api_token;
        },
        error: function (data) {
          setErrormessage(data.message);
          $('#password, #email, #name, #rfid_key', '.registration-form').addClass('is-invalid');
        }
      });

    });

    $('.payment-form').on('submit', function (e) {
      e.preventDefault();

      var id = $('.payment-form #payment_id').val();
      var price = id.substring(0, 7);
      $.ajax({
        url: 'https://mc857.viniciusfabri.com/api/payments',
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
        success: function (data) {
          refreshData();
          $('.screen').hide();
          $('.extract-screen').show();
        },
        error: function (data) {
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
        success: function (data) {
          $('.screen').hide();
          $('.extract-screen').show();
        },
        error: function (data) {
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
    }
    else {
      $('.screen, .auth-screens').hide();
      $('.login-screen').show();
    }
  });

  function refreshData() {
    setErrormessage('');
    $.ajax({
      url: 'https://mc857.viniciusfabri.com/api/user',
      type: 'get',
      data: {
        api_token: localStorage.api_token
      },
      headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
      },
      dataType: 'json',
      success: function (data) {
        localStorage.name = data.name;
        $('.placeholder').each(function () {
          var text = $(this).text();
          text = text.replace('{name}', data.name);
          text = text.replace('{extract}', data.balance);
          $(this).text(text);
        });
      },
      error: function (data) {
      }
    });
    $.ajax({
      url: 'https://mc857.viniciusfabri.com/api/payments',
      type: 'get',
      data: {
        api_token: localStorage.api_token
      },
      headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
      },
      dataType: 'json',
      success: function (data) {
        var $tbody = $('.payments tbody');
        $tbody.empty();
        var arrayLength = data.length;
        for (var i = 0; i < arrayLength; i++) {
          var descripion = data[i].description;
          var price = data[i].price;

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
      error: function (data) {
        setErrormessage(data.message);
      }
    });
  }

  function setErrormessage(message) {
    $('.error-messages p').text(message);
  }
})(jQuery);
