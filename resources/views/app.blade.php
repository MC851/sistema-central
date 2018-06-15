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
    <div class="login-screen screen">
        <form class="col-md-12 login-form" action="#" method="POST">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email" placeholder="Email" name="email"
                       value="">
            </div>
            <div class="form-group">
                <label for="password">Senha</label>
                <input type="password" class="form-control" id="password" placeholder="Password" name="password"
                       value="">
            </div>
            <div class="form-group">
                <input type="submit" class="form-control btn-primary" id="submit" placeholder="Submit" name="submit"
                       value="Login">
            </div>
        </form>
    </div>

    <div class="registration-screen screen">
        <form class="col-md-12 registration-form" action="#" method="POST">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="name" name="Name"
                       value="">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email" placeholder="Email" name="email"
                       value="">
            </div>
            <div class="form-group">
                <label for="rfid_key">Chave RFID</label>
                <input type="text" class="form-control" id="rfid_key" placeholder="RFID Key" name="rfid_key"
                       value="">
            </div>
            <div class="form-group">
                <label for="password">Senha</label>
                <input type="password" class="form-control" id="password" placeholder="Password" name="password"
                       value="">
            </div>
            <div class="form-group">
                <input type="submit" class="form-control btn-primary" id="submit" placeholder="Register" name="submit"
                       value="Cadastrar">
            </div>
        </form>
    </div>
    <div class="switcher row">
        <div class="col-6 login text-center">Login</div>
        <div class="col-6 register text-center">Registration</div>
    </div>
</div>
<div class="auth-screens">
    <div class="menu">
        <div class="btn-group-vertical" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-refresh">Atualizar</button>
            <button type="button" class="btn btn-extract">Extrato</button>
            <button type="button" class="btn btn-payment">Fazer pagamento</button>
            <button type="button" class="btn btn-transfer">Fazer transferencia</button>
            <button type="button" class="btn btn-logout">Logout</button>
        </div>
    </div>
    <div class="error-messages">
        <p class="text-warning text-center"></p>
    </div>

    <div class="extract-screen screen">
        <br />
        <h1 class="text-center placeholder" placeholder_name="{name}">Olá, {name}</h1>
        <p class="text-center placeholder"placeholder_extract="{extract}">Seu extrato é de <span class="bigger">{extract}</span> DK coins</p>
        <br />
        <br />
        <p class="text-center">Ultimos lançamentos:</p>
        <table class="table payments">
            <thead>
            <tr>
                <th scope="col">Descrição</th>
                <th scope="col">Preço</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
    <div class="payment-screen screen">
        <br />
        <h1 class="text-center placeholder" placeholder_name="{name}">Olá, {name}</h1>
        <br />
        <form class="col-md-12 payment-form" action="#" method="POST">
            <div class="form-group">
                <label for="email">ID do Pagamento</label>
                <input type="number" class="form-control" id="payment_id" placeholder="ID do Pagamento" name="payment_id"
                       value="">
            </div>
            <div class="form-group">
                <label for="password">Descrição</label>
                <input type="text" class="form-control" id="description" placeholder="description" name="description"
                       value="">
            </div>
            <div class="form-group">
                <input type="submit" class="form-control btn-primary" id="submit" placeholder="Submit" name="submit"
                       value="Fazer pagamento">
            </div>
        </form>
    </div>
    <div class="transfer-screen screen">
        <br />
        <h1 class="text-center placeholder" placeholder_name="{name}">Olá, {name}</h1>
        <br />
        <form class="col-md-12 transfer-form" action="#" method="POST">
            <div class="form-group">
                <label for="email">E-mail destinatário</label>
                <input type="email" class="form-control" id="email" placeholder="E-mail destinatário" name="email"
                       value="">
            </div>
            <div class="form-group">
                <label for="ammount">Montante</label>
                <input type="number" class="form-control" id="ammount" placeholder="Montante" name="ammount"
                       value="">
            </div>
            <div class="form-group">
                <input type="submit" class="form-control btn-primary" id="submit" placeholder="Submit" name="submit"
                       value="Fazer transferência">
            </div>
        </form>
    </div>
</div>

</body>
</html>
