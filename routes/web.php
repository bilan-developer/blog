<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['namespace' => 'Backend', 'prefix' => 'admin', 'middleware' => 'auth'], function () {
    Route::get('/', function (){
        return redirect('/admin/category');
    });
    require_once 'backend/category.php';
    require_once 'backend/news.php';
});

Route::group(['namespace' => 'Frontend'], function () {
    Route::get('/', function (){
        return redirect('/category');
    });
    Route::get('/home', function (){
        return redirect('/category');
    });
    require_once 'frontend/category.php';
    require_once 'frontend/news.php';
});

Auth::routes();

