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

            <h1 class="col-md-12">Account</h1>
            <div class="col-md-12">
                <p><strong>ID: </strong>{{ $account->id }}</p>
                <p><strong>Name: </strong>{{ $account->user->name }}</p>
                <p><strong>Email: </strong>{{ $account->user->email }}</p>
                <p><strong>Balance: </strong>{{ $account->balance }}</p>
            </div>
            <h2 class="col-md-12">Payments</h2>
            @if (count($account->user->payments))
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($account->user->payments as $payment)
                        <tr>
                            <td>{{ $payment->id }}</td>
                            <td>{{ $payment->description }}</td>
                            <td>{{ $payment->price }}</td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            @else
                <div class="col-md-12">No payments</div>
            @endif
        </div>
    </div>
</div>
</body>
</html>
