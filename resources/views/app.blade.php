<!DOCTYPE html>
<html class="app">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
    />

    <title>Sistema central</title>

    <!-- Fonts -->
    <link href="/css/app.css" rel="stylesheet">
    <script
            src="https://code.jquery.com/jquery-3.3.1.min.js"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
            crossorigin="anonymous"></script>
    <script src="/js/app.js"></script>
</head>
<body class="app">
<header>
    <h1>DK Bank</h1>
</header>

<div class="anon-screens">
    <div class="login-screen">
        <form class="col-md-12 login-form" action="#" method="POST">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email" placeholder="Email" name="email"
                       value="john3@gmail.com">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password" name="password"
                       value="blabla">
            </div>
            <div class="form-group">
                <input type="submit" class="form-control btn-primary" id="submit" placeholder="Submit" name="submit"
                       value="Login">
            </div>
        </form>
    </div>

    <div class="registration-screen">
        <form class="col-md-12 registration-form" action="#" method="POST">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="name" name="Name"
                       value="John Doe">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email" placeholder="Email" name="email"
                       value="john3@gmail.com">
            </div>
            <div class="form-group">
                <label for="rfid_key">RFID Key</label>
                <input type="text" class="form-control" id="rfid_key" placeholder="RFID Key" name="rfid_key"
                       value="my_rfid_key">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password" name="password"
                       value="blabla">
            </div>
            <div class="form-group">
                <input type="submit" class="form-control btn-primary" id="submit" placeholder="Register" name="submit"
                       value="Register">
            </div>
        </form>
    </div>
    <div class="switcher row">
        <div class="col-6 login">Login</div>
        <div class="col-6 register">Registration</div>
    </div>
</div>

<script id="__bs_script__">//<![CDATA[
    document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.23.5'><\/script>".replace("HOST", location.hostname));
    //]]></script>
</body>
</html>
