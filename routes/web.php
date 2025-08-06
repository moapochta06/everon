<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('catalog');
});

Route::get('/catalog', function () {
    return view('catalog');
});

Route::get('/about', function () {
    return view('about');
});
