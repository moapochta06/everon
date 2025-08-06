<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="ltr">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="@yield('meta_description', 'Описание сайта по умолчанию')">
    <title>@yield('title', 'Everon')</title>
    <link rel="icon" href="{{ asset('favicon.ico') }}">
    @vite(['resources/css/app.css','resources/js/app.js'])

</head>
<body>
    <header>
        @include('layouts.header')
    </header>

    <main>
            @yield('content')
    </main>

    <footer>
        <div class="container">
            @yield('footer')
        </div>
    </footer>
</body>
</html>
