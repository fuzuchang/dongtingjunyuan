<?php
/**
 * Created by PhpStorm.
 * User: fzc
 * Date: 2017/4/26
 * Time: 23:17
 */


Route::group(['prefix' => '/'], function () {

    //网站主页
    Route::group(['namespace' => 'Home\Index'], function () {

        //楼盘首页
        Route::get('/', 'IndexController@index');

        //楼盘详细
        Route::get('/detail', 'DetailController@index');

    });


    //楼盘相册
    Route::group(['namespace' => 'Home\Photo'], function () {
        Route::get('/photo', 'IndexController@index');
    });

    //楼盘动态
    Route::group(['namespace' => 'Home\Article'], function () {
        Route::get('/article', 'IndexController@index');
    });


    Route::get('/welcome', 'HomeController@index');

});





