<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script src="{{ asset('js/push.js') }}"></script>
    <title>东庭郡园-中国最大社区门户</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="generator" content="">
    <meta name="author" content="">
    <meta name="copyright" content="2017-2017 Fuzuchang Inc.">
    <link rel="stylesheet" href="{{ asset('css/puBlicHiapk.css') }}" type="text/css">
    <link type="text/css" rel="stylesheet" href="{{ asset('css/index_v4.1.css') }}">
    <script src="{{ asset('js/share.js') }}"></script>

    <style type="text/css">
        object, embed {
            -webkit-animation-duration: .001s;
            -webkit-animation-name: playerInserted;
            -ms-animation-duration: .001s;
            -ms-animation-name: playerInserted;
            -o-animation-duration: .001s;
            -o-animation-name: playerInserted;
            animation-duration: .001s;
            animation-name: playerInserted;
        }

        @-webkit-keyframes playerInserted {
            from {
                opacity: 0.99;
            }
            to {
                opacity: 1;
            }
        }

        @-ms-keyframes playerInserted {

        from {
            opacity: 0.99;
        }

        to {
            opacity: 1;
        }

        }
        @-o-keyframes playerInserted {
            from {
                opacity: 0.99;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes playerInserted {
            from {
                opacity: 0.99;
            }
            to {
                opacity: 1;
            }
        }</style>
    <link type="text/css" rel="stylesheet" href="{{ asset('css/slide_share.css') }}">
</head>
<body style="">
<div class="top_v3">
    <div class="wrapper clearfix">
        <div class="top_l">
            <a class="top_home" href="/" target="_blank">东庭郡园</a>
            <a href="/" target="_blank">楼盘详情</a>
            <a href="/" target="_blank">楼盘动态</a>
            <a href="/" target="_blank">户型</a>
            <a href="/" target="_blank">楼盘相册</a>
            <a href="/" target="_blank">出租信息</a>
            <a href="/" target="_blank">装修案例</a>
            <a href="/" target="_blank">找人装修</a>
        </div>

        <div class="top_r">
            <span class="login_top_r" id="login_top_r">				<a
                        href="{{ route('register') }}" target="_blank">注册</a>				<a
                        href="{{ route('login') }}" target="_blank">登录</a>			</span>

        </div>
    </div>
</div>

@yield('content')
<div class="footnav mt20">
    <div class="wrapper">

        <div class="footer clearfix mt10">
            <div class="public_footer"><a href="http://www.hiapk.com/" target="_blank">安卓网</a>┊ <a
                        href="http://www.hiapk.com/about/aboutus.html" style="color: rgb(204, 51, 0);" target="_blank">关于我们</a>┊
                <a href="http://www.hiapk.com/about/contactus.html" target="_blank">联系我们</a>┊ <a
                        href="http://bbs.hiapk.com/" target="_blank">安卓论坛</a>┊ <a
                        href="http://talent.baidu.com/baidu/web/index/enterWeb91?urlCorpEdition=null&amp;operational=1AA4DB29A255568E7BE9D2A866B1C9AD4E5B7140C92404272C8C6FC5F5521E060430716735356C4582DCD373022D95B59DB3B4033103467D02DE7D4D843EF813E4858169F989EFE1/"
                        target="_blank" rel="nofollow">加入我们</a>┊ <a href="http://www.hiapk.com/about/link.html"
                                                                    target="_blank">友情链接</a> ┊ <a
                        href="http://www.hiapk.com/about/map.html" target="_blank">网站地图</a> <br> ICP证闽 11018580号-1　 <a
                        href="http://www.hiapk.com/about/Certificate1.html" target="_blank">增值电信业务经营许可证 闽B2-20120115</a>　
                <a href="http://www.hiapk.com/about/Certificate2.html" target="_blank">闽网文『2014』1186-017号</a> <br>
                Copyright 1999-2017 © <a href="http://www.hiapk.com/" target="_blank">hiapk.com</a> All rights reserved.
                福建百度博瑞网络科技有限公司 版权所有
            </div>

        </div>

    </div>
</div>

</body>
</html>