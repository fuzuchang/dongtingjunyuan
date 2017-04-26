
@extends('layouts.app2')

@section('content')
<div class="wrapper">
    <!--header-->
    <div class="header clearfix"></div>
    <!--//header-->
    <!--g2-->

    <!--//g2-->
    <div class="recommend mt30 clearfix">
        <ul class="fl recommend_tab" id="tabHnadle8">
            <li></li>
        </ul>
        <div class="fl search">
            <div class="fl search_drop">
                <span id="search_drop" class="dropon">全部</span>
                <ul class="search_title" id="search_title">
                    <li class="on">全部</li>
                </ul>
            </div>
            <input type="text" class="fl st_box" autocomplete="off" placeholder="输入您要搜索的内容" name="0">
            <input type="submit" class="fl st_btn" value="搜站内">
        </div>

    </div>

    <div class="mt20 clearfix">
        <div class="headline w385 overh fl">

            <h2>
                <a title="除了黑科技旗舰 索尼还发布了中低端手机" target="_blank" href="/article/1">除了黑科技旗舰
                    索尼还发布了中低端手机</a>
            </h2>

            <p class="mb10 clearfix">

                <span>[<a title="印度25元“世界最便宜”手机制造商涉嫌欺诈" target="_blank"
                          href="#">印度25元“世界最便宜”手机制造商涉嫌欺诈</a>]</span>
            </p>


        </div>
        <div class="w765 fr">
            <!-- 轮播 -->
            <div class="slide pr">
                <a class="prev" href="javascript:void(0);" style="display: none;">&lt;</a>
                <a class="next" href="javascript:void(0);" style="display: none;">&gt;</a>
                <ul class="slide_con clearfix" id="tabBody1">

                    <li style="display: list-item;">
                        <a target="_blank" href="#">
                            <img width="765" height="332" alt="每周最佳游戏：同名日漫改编游戏《学园偶像祭》上架安卓"
                                 src="{{ asset('img/ad/1.jpg') }}">
                            <strong class="tit">每周最佳游戏：同名日漫改编游戏《学园偶像祭》上架安卓</strong>
                        </a>
                    </li>
                    <li style="display: list-item;">
                        <a target="_blank" href="#">
                            <img width="765" height="332" alt="每周最佳游戏：同名日漫改编游戏《学园偶像祭》上架安卓"
                                 src="{{ asset('img/ad/1.jpg') }}">
                            <strong class="tit">每周最佳游戏：同名日漫改编游戏《学园偶像祭》上架安卓</strong>
                        </a>
                    </li>
                    <li style="display: list-item;">
                        <a target="_blank" href="#">
                            <img width="765" height="332" alt="每周最佳游戏：同名日漫改编游戏《学园偶像祭》上架安卓"
                                 src="{{ asset('img/ad/1.jpg') }}">
                            <strong class="tit">每周最佳游戏：同名日漫改编游戏《学园偶像祭》上架安卓</strong>
                        </a>
                    </li>
                    <li style="display: list-item;">
                        <a target="_blank" href="#">
                            <img width="765" height="332" alt="每周最佳游戏：同名日漫改编游戏《学园偶像祭》上架安卓"
                                 src="{{ asset('img/ad/1.jpg') }}">
                            <strong class="tit">每周最佳游戏：同名日漫改编游戏《学园偶像祭》上架安卓</strong>
                        </a>
                    </li>
                    <li style="display: list-item;">
                        <a target="_blank" href="#">
                            <img width="765" height="332" alt="每周最佳游戏：同名日漫改编游戏《学园偶像祭》上架安卓"
                                 src="{{ asset('img/ad/1.jpg') }}">
                            <strong class="tit">每周最佳游戏：同名日漫改编游戏《学园偶像祭》上架安卓</strong>
                        </a>
                    </li>

                </ul>
                <ul class="slide_tab pa clearfix" id="tabHnadle1">
                    <li class="on"></li>
                    <li class=""></li>
                    <li class=""></li>
                    <li class=""></li>
                    <li class=""></li>
                </ul>
            </div>
            <!-- /轮播 -->
        </div>
    </div>

    <div class="mt30 clearfix">
        <div class="w385 fl newhot">
            <ul class="newhot_tab clearfix" id="tabHnadle9">
                <li class="on">最新</li>
                <li>热门</li>
            </ul>
            <div class="mt5 newhot_con" id="tabBody9">
                <div class="con newhot_new" style="display: block;">
                    <ul class="txt_li_t mt15 clearfix">

                        <li class="hx"><a title="除了黑科技旗舰 索尼还发布了中低端手机" target="_blank"
                                          href="http://news.hiapk.com/sony/s58b4037b136b.html">除了黑科技旗舰 索尼还发布了中低端手机</a>
                        </li>


                        <li><a class="type" href="http://news.hiapk.com/lg/" target="_blank">LG</a><a
                                    title="双摄手机LG G6发布 配备Full Vision全面屏" target="_blank"
                                    href="http://news.hiapk.com/lg/s58b4032c172c.html">双摄手机LG G6发布 配备Full Vision全面屏</a>
                        </li>

                        <li><a class="type" href="http://news.hiapk.com/nokia/" target="_blank">诺基亚</a><a
                                    title="诺基亚3310发布 通话长达22小时 售360元" target="_blank"
                                    href="http://news.hiapk.com/nokia/s58b402cfd6f4.html">诺基亚3310发布 通话长达22小时 售360元</a>
                        </li>

                        <li><a class="type" href="http://news.hiapk.com/other/" target="_blank">其他</a><a
                                    title="阿尔卡特A5暗示未来或推中端模块化手机" target="_blank"
                                    href="http://news.hiapk.com/other/s58b4028723e7.html">阿尔卡特A5暗示未来或推中端模块化手机</a></li>

                        <li><a class="type" href="http://news.hiapk.com/lenovo/" target="_blank">联想</a><a
                                    title="MWC 2017 联想宣布推出四款Android平板" target="_blank"
                                    href="http://news.hiapk.com/lenovo/s58b4021ccabc.html">MWC 2017
                                联想宣布推出四款Android平板</a></li>

                        <li><a class="type" href="http://news.hiapk.com/samsung/" target="_blank">三星</a><a
                                    title="三星Galaxy Tab S3和Galaxy Book现场上手" target="_blank"
                                    href="http://news.hiapk.com/samsung/s58b401cc81c9.html">三星Galaxy Tab S3和Galaxy
                                Book现场上手</a></li>

                        <li><a class="type" href="http://news.hiapk.com/internet/" target="_blank">互联</a><a
                                    title="丽江官微疑怼网友" 永远别来"="" 回应:正调查"="" target="_blank"
                            href="http://news.hiapk.com/internet/s58b3bf0eccea.html">丽江官微疑怼网友"永远别来" 回应:正调查</a></li>

                    </ul>
                    <ul class="txt_li_t mt15 clearfix">

                        <li class="hx"><a title="网红遭家暴 网友：被打后为何假睫毛还在" target="_blank"
                                          href="http://news.hiapk.com/internet/s58b3bd5d9a84.html">网红遭家暴
                                网友：被打后为何假睫毛还在</a></li>


                        <li><a class="type" href="http://news.hiapk.com/internet/" target="_blank">互联</a><a
                                    title="凌晨叫外卖遭猥亵 男子称 见美女一时冲动" target="_blank"
                                    href="http://news.hiapk.com/internet/s58b3bcbb3591.html">凌晨叫外卖遭猥亵 男子称 见美女一时冲动</a>
                        </li>

                        <li><a class="type" href="http://news.hiapk.com/internet/" target="_blank">互联</a><a
                                    title="微信抢红包输千万 抢红包赌钱庄家多作弊" target="_blank"
                                    href="http://news.hiapk.com/internet/s58b3bc1ddc73.html">微信抢红包输千万 抢红包赌钱庄家多作弊</a>
                        </li>

                        <li><a class="type" href="http://news.hiapk.com/internet/" target="_blank">互联</a><a
                                    title="富士康或6亿美元收购软银子公司过半股权" target="_blank"
                                    href="http://news.hiapk.com/internet/s58b397167d14.html">富士康或6亿美元收购软银子公司过半股权</a>
                        </li>

                        <li><a class="type" href="http://news.hiapk.com/huawei/" target="_blank">华为</a><a
                                    title="5000你买谁？华为P10对比iPhone 7：答案是..." target="_blank"
                                    href="http://news.hiapk.com/huawei/s58b396d59626.html">5000你买谁？华为P10对比iPhone
                                7：答案是...</a></li>

                        <li><a class="type" href="http://news.hiapk.com/xiaomi/" target="_blank">小米</a><a
                                    title="明天发布！小米众筹新品曝光：轻松对熬夜说不" target="_blank"
                                    href="http://news.hiapk.com/xiaomi/s58b396a8ea21.html">明天发布！小米众筹新品曝光：轻松对熬夜说不</a>
                        </li>

                        <li><a class="type" href="http://news.hiapk.com/internet/" target="_blank">互联</a><a
                                    title="小米自主松果处理器官方预告：性能强大" target="_blank"
                                    href="http://news.hiapk.com/internet/s58b38e154777.html">小米自主松果处理器官方预告：性能强大</a></li>

                    </ul>
                </div>
                <div class="con" style="display:none;">
                    <ul class="img_li_s clearfix">

                        <li>
                            <a title="印度25元“世界最便宜”手机制造商涉嫌欺诈" target="_blank"
                               href="http://news.hiapk.com/other/s58b386892d29.html">
                                <img class="lazy" src="./安卓网-中国最大Android手机垂直门户_files/grey.gif"
                                     data-original="http://img.qt.baidu.com/hiapk_news/201702/27/focus_58b386846da51.jpg"
                                     alt="印度25元“世界最便宜”手机制造商涉嫌欺诈" width="77" height="58">
                                <b>印度25元“世界最便宜”手机制造商涉嫌欺诈</b>
                                <span>中国成功地扮演了“世界工厂”的角色</span>
                            </a>
                        </li>

                        <li>
                            <a title="中国宽带真相调查 各家公布网速数据差别" target="_blank"
                               href="http://news.hiapk.com/internet/s58b386198ae3.html">
                                <img class="lazy" src="./安卓网-中国最大Android手机垂直门户_files/grey.gif"
                                     data-original="http://img.qt.baidu.com/hiapk_news/201702/27/focus_58b38616910cf.jpg"
                                     alt="中国宽带真相调查 各家公布网速数据差别" width="77" height="58">
                                <b>中国宽带真相调查 各家公布网速数据差别</b>
                                <span>解答你对于宽带网速的所有疑问</span>
                            </a>
                        </li>

                        <li>
                            <a title="一张图看懂华为P10/Plus 顶级旗舰智能机" target="_blank"
                               href="http://news.hiapk.com/huawei/s58b37ece9b21.html">
                                <img class="lazy" src="./安卓网-中国最大Android手机垂直门户_files/grey.gif"
                                     data-original="http://img.qt.baidu.com/201702/27/58b37d74bc498.jpg"
                                     alt="一张图看懂华为P10/Plus 顶级旗舰智能机" width="77" height="58">
                                <b>一张图看懂华为P10/Plus 顶级旗舰智能机</b>
                                <span>华为在西班牙巴塞罗那召开发布会</span>
                            </a>
                        </li>

                        <li>
                            <a title="诺基亚在MWC上推3款全新安卓智能手机" target="_blank"
                               href="http://news.hiapk.com/nokia/s58b354e563ce.html">
                                <img class="lazy" src="./安卓网-中国最大Android手机垂直门户_files/grey.gif"
                                     data-original="http://img.qt.baidu.com/201702/27/58b354e388d5a.jpg"
                                     alt="诺基亚在MWC上推3款全新安卓智能手机" width="77" height="58">
                                <b>诺基亚在MWC上推3款全新安卓智能手机</b>
                                <span>标志性Nokia 3310 携现代经典设计归来</span>
                            </a>
                        </li>

                        <li>
                            <a title="互联网真不安全 基础加密算法被谷歌攻破" target="_blank"
                               href="http://news.hiapk.com/google/s58af8c8cb9b3.html">
                                <img class="lazy" src="./安卓网-中国最大Android手机垂直门户_files/grey.gif"
                                     data-original="http://img.qt.baidu.com/hiapk_news/201702/24/focus_58af8c89b55d1.jpg"
                                     alt="互联网真不安全 基础加密算法被谷歌攻破" width="77" height="58">
                                <b>互联网真不安全 基础加密算法被谷歌攻破</b>
                                <span>研究人员可以演示“碰撞攻击”</span>
                            </a>
                        </li>

                        <li>
                            <a title="中兴再获美临时出口许可证 达成和解协议" target="_blank"
                               href="http://news.hiapk.com/zte/s58af8c0d5e73.html">
                                <img class="lazy" src="./安卓网-中国最大Android手机垂直门户_files/grey.gif"
                                     data-original="http://img.qt.baidu.com/hiapk_news/201702/24/focus_58af8c07f2013.jpg"
                                     alt="中兴再获美临时出口许可证 达成和解协议" width="77" height="58">
                                <b>中兴再获美临时出口许可证 达成和解协议</b>
                                <span>再次决定暂缓执行针对中兴的出口禁令</span>
                            </a>
                        </li>

                        <li>
                            <a title="中国电信 手机上网流量单价两年降57.4%" target="_blank"
                               href="http://news.hiapk.com/internet/s58af8a085f30.html">
                                <img class="lazy" src="./安卓网-中国最大Android手机垂直门户_files/grey.gif"
                                     data-original="http://img.qt.baidu.com/hiapk_news/201702/24/focus_58af8a059e4e9.jpg"
                                     alt="中国电信 手机上网流量单价两年降57.4%" width="77" height="58">
                                <b>中国电信 手机上网流量单价两年降57.4%</b>
                                <span>加大网络投资，提升网络质量和覆盖</span>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        <div class="w765 fr">
            <div class="fl w375">
                <div class="azzb">
                    <div class="azzb_con" id="tabBody_azzb">

                        <div class="con" style="display: block;">
                            <div class="box_tit box_tit2 clearfix">
                                <h4 class="fl">安卓日报</h4>
                                <a class="fr more" target="_blank" href="http://news.hiapk.com/column/days/">查看更多</a>
                            </div>
                            <a class="title" target="_blank"
                               href="http://news.hiapk.com/column/days/s58b3f5581198.html"><i></i>安卓日报：MWC一大波新机
                                谷歌助手不再是Pixel手机专属</a>
                            <p class="clearfix info">在MWC2017上，接手Nokia品牌的HMD一口气带来了三款产品：Nokia 6/5/3以及复刻Nokia
                                3310。虽然这几款手机的配置并不...<a class="red" target="_blank"
                                                       href="http://news.hiapk.com/column/days/s58b3f5581198.html">[详情]</a>
                            </p>
                        </div>


                        <div class="con" style="display:none;">
                            <div class="box_tit box_tit2 clearfix">
                                <h4 class="fl">每日话题</h4>
                                <a class="fr more" target="_blank" href="http://news.hiapk.com/column/topic/">查看更多</a>
                            </div>
                            <a class="title" target="_blank"
                               href="http://news.hiapk.com/column/topic/s58b37cb5b952.html"><i></i>互联网手机的尴尬下半场 “退烧”之后咋办</a>
                            <p class="clearfix info">尽管全球智能手机增速趋缓，但并没有影响中国市场，更可怕的是这里永远没有规律可循，即便是凭借性价比...<a class="red"
                                                                                                           target="_blank"
                                                                                                           href="http://news.hiapk.com/column/topic/s58b37cb5b952.html">[详情]</a>
                            </p>
                        </div>

                        <div class="con" style="display:none;">
                            <div class="box_tit box_tit2 clearfix">
                                <h4 class="fl">每日话题</h4>
                                <a class="fr more" target="_blank" href="http://news.hiapk.com/column/topic/">查看更多</a>
                            </div>
                            <a class="title" target="_blank"
                               href="http://news.hiapk.com/column/topic/s58b24bc50eb4.html"><i></i>日本开行最豪华火车：票价7万供不应求</a>
                            <p class="clearfix info">日本轨道交通十分发达，甚至被开发成为旅游项目。日本JR西日本铁道公司推出的豪华版观光列车“瑞风”打...<a class="red"
                                                                                                            target="_blank"
                                                                                                            href="http://news.hiapk.com/column/topic/s58b24bc50eb4.html">[详情]</a>
                            </p>
                        </div>

                        <div class="con" style="display:none;">
                            <div class="box_tit box_tit2 clearfix">
                                <h4 class="fl">每日话题</h4>
                                <a class="fr more" target="_blank" href="http://news.hiapk.com/column/topic/">查看更多</a>
                            </div>
                            <a class="title" target="_blank"
                               href="http://news.hiapk.com/column/topic/s58b0eabf5927.html"><i></i>湖北高校首开小龙虾专业 录取后不得转专业</a>
                            <p class="clearfix info">“小龙虾”今年起将走进湖北高校成为正式专业。湖北省招办昨发布消息，经省教育厅同意，江汉艺术职业学...<a class="red"
                                                                                                           target="_blank"
                                                                                                           href="http://news.hiapk.com/column/topic/s58b0eabf5927.html">[详情]</a>
                            </p>
                        </div>

                        <div class="con" style="display:none;">
                            <div class="box_tit box_tit2 clearfix">
                                <h4 class="fl">安卓日报</h4>
                                <a class="fr more" target="_blank" href="http://news.hiapk.com/column/days/">查看更多</a>
                            </div>
                            <a class="title" target="_blank"
                               href="http://news.hiapk.com/column/days/s58b003e07397.html"><i></i>安卓日报：MWC诺基亚将发布多款新品
                                华为Watch 2高清图</a>
                            <p class="clearfix info">最新消息，作为老牌劲旅的诺基亚，将在巴塞罗那世界移动通信大会(MWC 2017)上发布22款新产品，展示60多项新...<a
                                        class="red" target="_blank"
                                        href="http://news.hiapk.com/column/days/s58b003e07397.html">[详情]</a></p>
                        </div>

                    </div>
                    <div class="azzb_tab clearfix" id="tabHnadle_azzb">
                        <a class="on" href="javascript:;"></a>
                        <a href="javascript:;"></a>
                        <a href="javascript:;"></a>
                        <a href="javascript:;"></a>
                        <a href="javascript:;"></a>
                    </div>
                </div>
                <div class="mt20 rmhd">
                    <div class="box_tit box_tit2 clearfix">
                        <h4 class="fl">热门活动</h4>
                        <a class="fr more" target="_blank" href="http://bbs.hiapk.com/forum-474-1.html">活动版块</a>
                    </div>
                    <div class="con mt20 pr">
                        <a class="rmhd_prev" href="javascript:;" id="rmhd_prev">&lt;</a>
                        <a class="rmhd_next" href="javascript:;" id="rmhd_next">&gt;</a>
                        <div class="rmhd_slide" id="rmhd_slide">
                            <ul style="width: 2250px;">
                                <li><a target="_blank" href="http://bbs.hiapk.com/thread-27929350-1-1.html"><img
                                                class="lazy" width="375" height="179" alt="人民律师助力2017！“迎春平安出行活动”！"
                                                src="./安卓网-中国最大Android手机垂直门户_files/7742-1F2231053160-L.jpg"
                                                data-original="http://p4.image.hiapk.com/uploads/allimg/170223/7742-1F2231053160-L.jpg"
                                                style="display: inline;"><strong>人民律师助力2017！“迎春平安出行活动”！</strong></a>
                                </li>
                                <li><a target="_blank" href="http://bbs.hiapk.com/thread-27928062-1-1.html"><img
                                                class="lazy" width="375" height="179" alt="《西游伏妖篇》手游 晒三界自拍 赢伏妖好礼"
                                                src="./安卓网-中国最大Android手机垂直门户_files/7742-1F1241330310-L.jpg"
                                                data-original="http://p3.image.hiapk.com/uploads/allimg/170124/7742-1F1241330310-L.jpg"
                                                style="display: inline;"><strong>《西游伏妖篇》手游 晒三界自拍 赢伏妖好礼</strong></a></li>
                                <li><a target="_blank" href="http://bbs.hiapk.com/thread-27927424-1-1.html"><img
                                                class="lazy" width="375" height="179" alt="《火炬之光》移动版全平台公测晒图赢大奖"
                                                src="./安卓网-中国最大Android手机垂直门户_files/7742-1F1111645250-L.jpg"
                                                data-original="http://p4.image.hiapk.com/uploads/allimg/170111/7742-1F1111645250-L.jpg"
                                                style="display: inline;"><strong>《火炬之光》移动版全平台公测晒图赢大奖</strong></a></li>

                                <li><a target="_blank" href="http://bbs.hiapk.com/thread-27929350-1-1.html"><img
                                                class="lazy" width="375" height="179" alt="人民律师助力2017！“迎春平安出行活动”！"
                                                src="./安卓网-中国最大Android手机垂直门户_files/7742-1F2231053160-L.jpg"
                                                data-original="http://p4.image.hiapk.com/uploads/allimg/170223/7742-1F2231053160-L.jpg"
                                                style="display: inline;"><strong>人民律师助力2017！“迎春平安出行活动”！</strong></a>
                                </li>
                                <li><a target="_blank" href="http://bbs.hiapk.com/thread-27928062-1-1.html"><img
                                                class="lazy" width="375" height="179" alt="《西游伏妖篇》手游 晒三界自拍 赢伏妖好礼"
                                                src="./安卓网-中国最大Android手机垂直门户_files/7742-1F1241330310-L.jpg"
                                                data-original="http://p3.image.hiapk.com/uploads/allimg/170124/7742-1F1241330310-L.jpg"
                                                style="display: inline;"><strong>《西游伏妖篇》手游 晒三界自拍 赢伏妖好礼</strong></a></li>
                                <li><a target="_blank" href="http://bbs.hiapk.com/thread-27927424-1-1.html"><img
                                                class="lazy" width="375" height="179" alt="《火炬之光》移动版全平台公测晒图赢大奖"
                                                src="./安卓网-中国最大Android手机垂直门户_files/7742-1F1111645250-L.jpg"
                                                data-original="http://p4.image.hiapk.com/uploads/allimg/170111/7742-1F1111645250-L.jpg"
                                                style="display: inline;"><strong>《火炬之光》移动版全平台公测晒图赢大奖</strong></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="mt20 pljj">
                    <div class="box_tit box_tit2 clearfix">
                        <h4 class="fl">评论聚集</h4>
                        <a class="fr tit red" target="_blank" href="http://game.hiapk.com/chinajoy2016/">Chinajoy2016专题精彩回顾</a>
                    </div>
                    <div class="pljj_con" id="tabBody_pljj">
                        <div class="con" style="display: block;">
                            <a class="title" target="_blank" href="http://news.hiapk.com/internet/s585ba67e8d1c.html"
                               title="支付宝红包玩出新花样 推出AR实景红包"><i></i>支付宝红包玩出新花样 推出AR实景红包</a>
                            <p class="clearfix info"><a class="fr more"
                                                        href="http://news.hiapk.com/internet/s585ba67e8d1c.html"
                                                        target="_blank">&nbsp;&nbsp;</a>评论(<span
                                        id="url::http://news.hiapk.com/internet/s585ba67e8d1c.html"
                                        class="cy_cmt_participate">104</span>人参与，<span
                                        id="url::http://news.hiapk.com/internet/s585ba67e8d1c.html"
                                        class="cy_cmt_count">104</span>条评论，<span>1</span>人关注)</p>
                        </div>

                        <div class="con" style="display:none;">
                            <a class="title" target="_blank" href="http://news.hiapk.com/zb/minotebook/"
                               title="给你所要！小米笔记本新品发布会直播回顾"><i></i>给你所要！小米笔记本新品发布会直播回顾</a>
                            <p class="clearfix info"><a class="fr more" href="http://news.hiapk.com/zb/minotebook/"
                                                        target="_blank">&nbsp;&nbsp;</a>评论(<span
                                        id="url::http://news.hiapk.com/zb/minotebook/"
                                        class="cy_cmt_participate">0</span>人参与，<span
                                        id="url::http://news.hiapk.com/zb/minotebook/" class="cy_cmt_count">0</span>条评论，<span>1</span>人关注)
                            </p>
                        </div>
                        <div class="con" style="display:none;">
                            <a class="title" target="_blank" href="http://mobile.hiapk.com/new/s5858a45495a5.html"
                               title="8848钛金手机故宫贺岁版图赏：这画风..."><i></i>8848钛金手机故宫贺岁版图赏：这画风...</a>
                            <p class="clearfix info"><a class="fr more"
                                                        href="http://mobile.hiapk.com/new/s5858a45495a5.html"
                                                        target="_blank">&nbsp;&nbsp;</a>评论(<span
                                        id="url::http://mobile.hiapk.com/new/s5858a45495a5.html"
                                        class="cy_cmt_participate">160</span>人参与，<span
                                        id="url::http://mobile.hiapk.com/new/s5858a45495a5.html" class="cy_cmt_count">160</span>条评论，<span>1</span>人关注)
                            </p>
                        </div>
                        <div class="con" style="display:none;">
                            <a class="title" target="_blank" href="http://game.hiapk.com/mgame/10000841.html"
                               title="《火炬之光》App Store独家首发 CG大片曝光"><i></i>《火炬之光》App Store独家首发 CG大片曝光</a>
                            <p class="clearfix info"><a class="fr more" href="http://game.hiapk.com/mgame/10000841.html"
                                                        target="_blank">&nbsp;&nbsp;</a>评论(<span
                                        id="url::http://game.hiapk.com/mgame/10000841.html" class="cy_cmt_participate">56</span>人参与，<span
                                        id="url::http://game.hiapk.com/mgame/10000841.html"
                                        class="cy_cmt_count">52</span>条评论，<span>1</span>人关注)</p>
                        </div>
                        <div class="con" style="display:none;">
                            <a class="title" target="_blank" href="http://news.hiapk.com/xiaomi/s585804f40167.html"
                               title="神速 这三款小米手机升级Android 7.0！"><i></i>神速 这三款小米手机升级Android 7.0！</a>
                            <p class="clearfix info"><a class="fr more"
                                                        href="http://news.hiapk.com/xiaomi/s585804f40167.html"
                                                        target="_blank">&nbsp;&nbsp;</a>评论(<span
                                        id="url::http://news.hiapk.com/xiaomi/s585804f40167.html"
                                        class="cy_cmt_participate">12</span>人参与，<span
                                        id="url::http://news.hiapk.com/xiaomi/s585804f40167.html" class="cy_cmt_count">12</span>条评论，<span>1</span>人关注)
                            </p>
                        </div>

                    </div>
                    <div class="pljj_tab clearfix" id="tabHnadle_pljj">
                        <a class="on" href="javascript:;"></a>
                        <a href="javascript:;"></a>
                        <a href="javascript:;"></a>
                        <a href="javascript:;"></a>
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
            <div class="fr w350">
                <div class="jpm clearfix">
                    <div class="box_tit box_tit2 clearfix">
                        <h4 class="fl">金评媒</h4>
                    </div>
                    <div class="jpm_con" id="tabBody_jpm">

                        <div class="con clearfix" style="display: block;">
                            <div class="fl jpm_l">
                                <p class="tit"><a class="ft16" target="_blank"
                                                  href="http://news.hiapk.com/column/jpm/s5795d5d3e1fc.html"
                                                  title="【金评媒 第131期】">【金评媒 第131期】</a></p>
                                <p class="info">hi，大家周一好!你们知道蛏是怎么来的吗?! 这么...</p>
                            </div>
                            <div class="fr jpm_r">
                                <a target="_blank" href="http://news.hiapk.com/column/jpm/s5795d5d3e1fc.html"><img
                                            class="lazy" width="160" height="120" alt="【金评媒 第131期】"
                                            src="./安卓网-中国最大Android手机垂直门户_files/5795d442c54ba.jpg"
                                            data-original="http://p6.image.hiapk.com/hiapk_news/201607/25/5795d442c54ba.jpg"
                                            style="display: inline;"></a>
                            </div>
                        </div>


                        <div class="con clearfix" style="display:none;">
                            <div class="fl jpm_l">
                                <p class="tit"><a class="ft16" target="_blank"
                                                  href="http://news.hiapk.com/column/jpm/s578345d163e6.html"
                                                  title="金评媒 第130期">金评媒 第130期</a></p>
                                <p class="info">即使因伤无法踏上草坪，葡萄牙当家球星依然在...</p>
                            </div>
                            <div class="fr jpm_r">
                                <a target="_blank" href="http://news.hiapk.com/column/jpm/s578345d163e6.html"><img
                                            class="lazy" width="160" height="120" alt="金评媒 第130期"
                                            src="./安卓网-中国最大Android手机垂直门户_files/grey.gif"
                                            data-original="http://p6.image.hiapk.com/hiapk_news/201607/11/578344224f694.jpg"></a>
                            </div>
                        </div>

                        <div class="con clearfix" style="display:none;">
                            <div class="fl jpm_l">
                                <p class="tit"><a class="ft16" target="_blank"
                                                  href="http://news.hiapk.com/column/jpm/s577a01f20dbe.html"
                                                  title="金评媒 第129期">金评媒 第129期</a></p>
                                <p class="info">又到一周星期一，早上小媒出门的时候感觉都要...</p>
                            </div>
                            <div class="fr jpm_r">
                                <a target="_blank" href="http://news.hiapk.com/column/jpm/s577a01f20dbe.html"><img
                                            class="lazy" width="160" height="120" alt="金评媒 第129期"
                                            src="./安卓网-中国最大Android手机垂直门户_files/grey.gif"
                                            data-original="http://p6.image.hiapk.com/hiapk_news/201607/04/577a01c31ab07.jpg"></a>
                            </div>
                        </div>

                        <div class="con clearfix" style="display:none;">
                            <div class="fl jpm_l">
                                <p class="tit"><a class="ft16" target="_blank"
                                                  href="http://news.hiapk.com/column/jpm/s577359382b5f.html"
                                                  title="金评媒 第128期">金评媒 第128期</a></p>
                                <p class="info">19日凌晨重庆一女子从出租车上冲出一边说着英文...</p>
                            </div>
                            <div class="fr jpm_r">
                                <a target="_blank" href="http://news.hiapk.com/column/jpm/s577359382b5f.html"><img
                                            class="lazy" width="160" height="120" alt="金评媒 第128期"
                                            src="./安卓网-中国最大Android手机垂直门户_files/grey.gif"
                                            data-original="http://p6.image.hiapk.com/hiapk_news/201606/29/577357abcfb8f.jpg"></a>
                            </div>
                        </div>

                        <div class="con clearfix" style="display:none;">
                            <div class="fl jpm_l">
                                <p class="tit"><a class="ft16" target="_blank"
                                                  href="http://news.hiapk.com/column/jpm/57397014df13d.html"
                                                  title="金评媒 第124期">金评媒 第124期</a></p>
                                <p class="info">又到周一了，都说周一最没精神了，来，给各...</p>
                            </div>
                            <div class="fr jpm_r">
                                <a target="_blank" href="http://news.hiapk.com/column/jpm/57397014df13d.html"><img
                                            class="lazy" width="160" height="120" alt="金评媒 第124期"
                                            src="./安卓网-中国最大Android手机垂直门户_files/grey.gif"
                                            data-original="http://p6.image.hiapk.com/201605/16/57396d64bfe1b.jpg"></a>
                            </div>
                        </div>

                    </div>
                    <div class="jpm_tab clearfix" id="tabHnadle_jpm">
                        <a class="on" href="javascript:;"></a>
                        <a href="javascript:;"></a>
                        <a href="javascript:;"></a>
                        <a href="javascript:;"></a>
                        <a href="javascript:;"></a>
                    </div>
                </div>
                <div class="mt20 jplm">
                    <div class="box_tit box_tit2 clearfix">
                        <h4 class="fl">精品栏目</h4>
                    </div>
                    <div class="con mt5 clearfix">
                        <a class="bg01" target="_blank" href="http://game.hiapk.com/weekly/"><span>每周<br>最佳游戏</span></a>
                        <a class="bg02" target="_blank" href="http://news.hiapk.com/column/days/"><span>安卓日报</span></a>
                        <a class="bg03" target="_blank" href="http://news.hiapk.com/column/tmr/"><span>少数派<br>报告</span></a>
                        <a class="bg04" target="_blank" href="http://mobile.hiapk.com/video/"><span>安TV</span></a>
                        <a class="bg05" target="_blank"
                           href="http://game.hiapk.com/lab/newgames/xinyoufang/"><span>新游坊</span></a>
                        <a class="bg06" target="_blank"
                           href="http://game.hiapk.com/chanye/syqdnxs/"><span>手游圈<br>那些事</span></a>
                        <a class="bg07" target="_blank" href="http://news.hiapk.com/column/geek/"><span>Geek说</span></a>
                        <a class="bg08" target="_blank" href="http://game.hiapk.com/lab/pic/yjkxinyou/"><span>Y姐<br>侃新游</span></a>
                    </div>
                </div>
                <div class="mt5 jplmx">
                    <ul class="txt_li_t clearfix">
                        <li>

                            <div><a class="type" href="http://pic.hiapk.com/bagua/chinajoy/" target="_blank">看美女</a><a
                                        title="有着“巨乳”传说的人气声优上坂堇！" target="_blank"
                                        href="http://pic.hiapk.com/bagua/chinajoy/p58b3c78f2ac6.html">有着“巨乳”传说的人气声优上坂堇！</a>
                            </div>

                            <div><a class="type" href="http://pic.hiapk.com/bagua/chinajoy/" target="_blank">看美女</a><a
                                        title="有着“巨乳”传说的人气声优上坂堇！" target="_blank"
                                        href="http://pic.hiapk.com/bagua/chinajoy/p58b3c78f2ac6.html">有着“巨乳”传说的人气声优上坂堇！</a>
                            </div>

                        </li>
                        <li>

                            <div><a class="type" href="http://joy.hiapk.com/vedio/" target="_blank">看视频</a><a
                                        title="捶你胸口！水浒传版本神配音堪称泥石流" target="_blank"
                                        href="http://joy.hiapk.com/vedio/s5893e7f9d3c4.html">捶你胸口！水浒传版本神配音堪称泥石流</a>
                            </div>

                        </li>
                        <li>

                            <div><a class="type" href="http://pic.hiapk.com/jc/" target="_blank">看内涵</a><a
                                        title="你的良心不会痛吗？用表情包怼回去" target="_blank"
                                        href="http://pic.hiapk.com/bqb/p58afd072e0ce.html">你的良心不会痛吗？用表情包怼回去</a></div>

                            <div><a class="type" href="http://pic.hiapk.com/jc/" target="_blank">看内涵</a><a
                                        title="你的良心不会痛吗？用表情包怼回去" target="_blank"
                                        href="http://pic.hiapk.com/bqb/p58afd072e0ce.html">你的良心不会痛吗？用表情包怼回去</a></div>

                        </li>
                        <li>

                            <div><a class="type" href="http://pic.hiapk.com/recreation/" target="_blank">看八卦</a><a
                                        title="美少女才木玲佳：下面的画面让男生都膜拜！" target="_blank"
                                        href="http://pic.hiapk.com/recreation/p58b3de58c5e9.html">美少女才木玲佳：下面的画面让男生都膜拜！</a>
                            </div>

                            <div><a class="type" href="http://pic.hiapk.com/recreation/" target="_blank">看八卦</a><a
                                        title="美少女才木玲佳：下面的画面让男生都膜拜！" target="_blank"
                                        href="http://pic.hiapk.com/recreation/p58b3de58c5e9.html">美少女才木玲佳：下面的画面让男生都膜拜！</a>
                            </div>

                        </li>
                        <li>

                            <div><a class="type" href="http://joy.hiapk.com/pic/" target="_blank">看段子</a><a
                                        title="夹趾凉鞋容易被夹！17张手扶电梯上的惨烈现场照" target="_blank"
                                        href="http://joy.hiapk.com/pic/s58afdfc3398b.html">夹趾凉鞋容易被夹！17张手扶电梯上的惨烈现场照</a>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    <!--g2-->
    <div class="g2 mt30 clearfix">
        <div class="g2_img_l"><a href="http://woool.hgame.com/?aid=100456" target="_blank">
                <img src="{{ asset('img/ad/6.jpg') }}" alt="" width="790" height="90"></a></div>
        <div class="g2_img_r"><a
                    href="http://jaward.chinajoy.net:8080/jinlingjiangproject/home/home_findHomePage.action"
                    target="_blank"
                    rel="nofollow">
                <img src="{{ asset('img/ad/6.jpg') }}" alt="" width="350" height="90">
            </a></div>
    </div>


</div>
@endsection