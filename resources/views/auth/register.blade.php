<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>安卓网 - 用户注册</title>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
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
        <form method="post" action="{{ route('register') }}">
            {{ csrf_field() }}

            <div class="i-row clearfix">
                <input type="text" class="t-input t-input-1" name="name" value="{{ old('name') }}">
                @if ($errors->has('name'))
                    <em><i class="fl spr code-wrong"></i>{{ $errors->first('name') }}</em>
                @else
                    <em><i class="fl spr code-right"></i>请填写账号</em>
                @endif
            </div>

            <div class="i-row clearfix">
                <input type="text" class="t-input t-input-4" name="email" value="{{ old('email') }}">
                @if ($errors->has('email'))
                    <em><i class="fl spr code-wrong"></i>{{ $errors->first('email') }}</em>
                @else
                    <em><i class="fl spr code-right"></i>请填写邮箱</em>
                @endif

            </div>

            <div class="i-row clearfix">
                <input type="password" name="password" class="t-input t-input-2 ps"  autocomplete="off"
                       value="">

                @if ($errors->has('password'))
                    <em><i class="fl spr code-wrong"></i>{{ $errors->first('password') }}</em>
                @else
                    <em><i class="fl spr code-right"></i>6~16位字符，英文字母、数字或特殊符号，区分大小写</em>
                @endif
            </div>


            <div class="i-row clearfix">
                <input type="password" class="t-input t-input-2" name="password_confirmation"
                                               autocomplete="off">

                <em id="password2Tip"><i class="fl spr code-right"></i>请再次输入密码</em>
            </div>

            <div class="i-row v-row clearfix">
                <button type="submit" class="btn btn-420">注 册</button>
            </div>
            <div class="i-row b-row clearfix">
                <div class="fl">我已注册，马上<a href="{{ url('login') }}">登录</a></div>
                {{--<a class="fr" href="#" target="_blank">反馈问题</a>--}}
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