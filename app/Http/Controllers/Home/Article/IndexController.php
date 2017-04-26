<?php

namespace App\Http\Controllers\Home\Article;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    //
    public function index()
    {
        return $this->view('home.article.index');
    }
}
