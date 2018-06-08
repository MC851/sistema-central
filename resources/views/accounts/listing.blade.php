<!doctype html>
<html lang="{{ app()->getLocale() }}" class="h-100">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Sistema central</title>

    <!-- Fonts -->
    <link href="/css/app.css" rel="stylesheet">
</head>
<body class="h-100">
<div class="container h-100">
    <div class="row h-100">
        <div class="row">
            @include('partials.header')

            <h1 class="col-md-12">Accounts</h1>
            <form class="col-md-12" action="/accounts" method="POST">
                {{ csrf_field() }}
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="email" placeholder="Email" name="email">
                </div>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Name" name="name">
                </div>
                <div class="form-group">
                    <label for="rfid_key">RFID Key</label>
                    <input type="text" class="form-control" id="rfid_key" placeholder="RFID Key" name="rfid_key">
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password" name="password">
                </div>
                <div class="form-group">
                    <input type="submit" class="form-control btn-primary" id="submit" placeholder="Submit" name="submit"
                           value="Create">
                </div>
            </form>
            <div class="col-md-12">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Balance</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($accounts as $account)
                        <tr>
                            <td><a href="/accounts/{{ $account->id }}">{{ $account->id }}</a></td>
                            <td>{{ $account->user->name }}</td>
                            <td>{{ $account->user->email }}</td>
                            <td>{{ $account->balance }}</td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</body>
</html>
