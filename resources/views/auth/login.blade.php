<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>安卓网 - 用户注册</title>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <link href="/favicon.ico?v=1" rel="Shortcut Icon"/>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/register_v2.css') }}"/>
    <script type="text/javascript" src="{{ asset('js/jquery-1.9.1.min.js') }}"></script>
</head>
<body>
<div class="wrapper">
    <!--header-->
    <div class="header">

    </div>
    <!--//header-->
    <!--main-->
    <div class="main clearfix">

        <form action="{{ route('login') }}" method="post">
            {{ csrf_field() }}
            <div class="i-row clearfix">
                <input type="text" name="email" value="{{ old('email') }}" class="t-input t-input-4" autocomplete="off">

                @if ($errors->has('email'))
                    <em><i class="fl spr code-wrong"></i>{{ $errors->first('email') }}</em>
                @else
                    <em><i class="fl spr code-right"></i>请填写注册邮箱</em>
                @endif
            </div>

            <div class="i-row clearfix">
                <input type="password" name="password"  class="t-input t-input-2" autocomplete="off">

                @if ($errors->has('password'))
                    <em><i class="fl spr code-wrong"></i>{{ $errors->first('password') }}</em>
                @else
                    <em><i class="fl spr code-right"></i>请输入密码</em>
                @endif

            </div>

            <div class="i-row b-row clearfix">
                <label class="checkbox fl"> <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> 记住我 </label>
                <div class="fr">{{--<a href="{{ route('password.request') }}">忘记密码</a>  | --}} <a href="{{ route('register') }}">注册新账号</a></div>
            </div>
            <div class="i-row clearfix">
                <button type="submit" class="btn btn-420">登 录</button>
            </div>
        </form>
    </div>
    <!--//main-->

    <!--footer-->
    <div class="footer">Copyright 2017 <span class="copy">&copy;</span>
        <a href="http://dt.fuzuchang.com" target="_blank">dt.fuzuchang.com</a> All rights
        reserved. <br/>
        个人版权所有
    </div>
    <!--//footer-->
</div>
</body>
</html>