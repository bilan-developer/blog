<?php
Route::get('news', 'NewsController@index')->name('admin.news.index');
Route::get('/news/create', 'NewsController@create')->name('admin.news.create');
Route::post('/news', 'NewsController@store')->name('admin.news.store');
Route::get('/news/{news}', 'NewsController@edit')->name('admin.news.edit');
Route::put('/news/{news}', 'NewsController@update')->name('admin.news.update');
Route::delete('/news/{news}', 'NewsController@destroy')->name('admin.news.destroy');