(function($) {
    $(window).on('load', function() {
        $('.login-form').on('submit', function(e) {
            e.preventDefault();
            $.ajax({
                url: 'https://mc857.viniciusfabri.com/api/login',
                type: 'post',
                data: {
                    email: $('#email').val(),
                    password: $('#password').val()
                },
                headers: {
                    Accept: 'application/json',
                    "Content-Type": 'application/json'
                },
                dataType: 'json',
                success: function (data) {
                    console.info('success', data);
                },
                error: function (data) {
                    console.info('error', data);
                }
            });

        });
    });
})(jQuery);
