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

//认证路由
Auth::routes();

//包含前台路由文件
require_once __DIR__ . '/home/web.php';

//包含后台路由文件
require_once __DIR__ . '/admin/web.php';

//包含用户中心路由文件
require_once __DIR__ . '/user/web.php';