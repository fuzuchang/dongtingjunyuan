<?php

namespace App\Http\Controllers\Home\Photo;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    //默认 index
    public function index()
    {
        return $this->view('home.photo.index');
    }
}
