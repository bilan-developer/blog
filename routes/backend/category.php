<?php
Route::get('category', 'CategoryController@index')->name('admin.category.index');
Route::get('/category/create', 'CategoryController@create')->name('admin.category.create');
Route::post('/category', 'CategoryController@store')->name('admin.category.store');
Route::get('/category/{category}', 'CategoryController@edit')->name('admin.category.edit');
Route::put('/category/{category}', 'CategoryController@update')->name('admin.category.update');
Route::delete('/category/{category}', 'CategoryController@destroy')->name('admin.category.destroy');