(function($) {
    $(window).on('load', function() {
        $('.switcher .login').on('click', function(e) {
            $('.login-screen').show();
            $('.registration-screen').hide();
        });
        $('.switcher .register').on('click', function(e) {
            $('.login-screen').hide();
            $('.registration-screen').show();
        });

        $('.login-form').on('submit', function(e) {
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
                }
            });

        });

        $('.registration-form').on('submit', function(e) {
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
                    $('#password, #email, #name, #rfid_key', '.registration-form').addClass('is-invalid');
                }
            });

        });

        if (localStorage.api_token === null) {
            $('.anon-screens').hide();
            $('.auth-screens').show();
        }
        else {
            $('.anon-screens').show();
            $('.auth-screens').hide();
            $('.switcher .login').click();
        }
    });
})(jQuery);
