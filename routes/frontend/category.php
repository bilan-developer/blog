<?php
Route::get('category', 'CategoryController@index')->name('category.index');
Route::get('/category/{category}', 'CategoryController@show')->name('category.show');
