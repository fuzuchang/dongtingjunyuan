function addScriptTag(src){
	var script = document.createElement('script');
	script.setAttribute("type","text/javascript");
	script.src = src;
	document.body.appendChild(script);
}
function docallback(val){
	var result;
	try{ result = eval(val); }catch(e){ eval("result = " + val); }
	if(result.code ==0){
	document.getElementById("login_top_r").innerHTML = '<a href="javascript:void(0);">' + result.data.username + '</a><img style="margin-top: -2px; display:none;" src="'+result.data.avatar+'" width="20" height="20"/>'; 
	};
}
var Pub = function(){
	function top(){
		var top = '';
		top += '<div class="top_v3">';
		top += '    <div class="wrapper clearfix">';
		top += '		<div class="top_l">';
		top += '			<a class="top_home" href="http://www.hiapk.com/" target="_blank">安卓网</a>';
		top += '			<a class="top_phone" href="http://www.hiapk.com/client/" target="_blank">新闻客户端</a>';
		top += '			<a href="http://shouji.baidu.com/appsearch?from=as" target="_blank">百度手机助手</a>';
		top += '			<a href="http://apk.hiapk.com/" target="_blank">安卓市场</a>';
		top += '			<a href="http://bbs.hiapk.com/" target="_blank">安卓论坛</a>';
		top += '			<a href="http://pic.hiapk.com/client/" target="_blank">安卓壁纸</a>';
		top += '		</div>';
		top += '		<div id="site_map" class="site_map">';
		top += '			<a id="site_map_btn" class="site_map_btn" href="javascript:;">网站导航</a>';
		top += '			<div id="site_map_wrap" class="site_map_wrap">';
		top += '				<div class="site_map_con">';
		top += '					<div class="site_map_row">';
		top += '						<h3><a href="http://news.hiapk.com/" target="_blank">资讯频道</a></h3>';
		top += '						<p class="clearfix">';
		top += '							<a href="http://news.hiapk.com/android/" target="_blank">安卓资讯</a>';
		top += '							<a href="http://news.hiapk.com/industry/" target="_blank">行业新闻</a>';
		top += '							<a href="http://news.hiapk.com/internet/" target="_blank">互联网</a>';
		top += '							<a class="red" href="http://news.hiapk.com/brands/" target="_blank">手机圈</a>';
		top += '							<a href="http://news.hiapk.com/collection/" target="_blank">专题</a>';
		top += '							<a href="http://news.hiapk.com/column/" target="_blank">专栏</a>';
		top += '							<a href="http://news.hiapk.com/video/" target="_blank">视频</a>';
		top += '							<a href="http://news.hiapk.com/tech/" target="_blank">趣科技</a>';
		top += '						</p>';
		top += '						<h3><a href="http://mobile.hiapk.com/" target="_blank">手机频道</a></h3>';
		top += '						<p class="clearfix">';
		top += '							<a href="http://mobile.hiapk.com/evaluate/" target="_blank">评测中心</a>';
		top += '							<a href="http://mobile.hiapk.com/guide/" target="_blank">手机导购</a>';
		top += '							<a href="http://mobile.hiapk.com/broke/" target="_blank">缺陷曝光</a>';
		top += '							<a href="http://mobile.hiapk.com/video/" target="_blank">视频看机</a>';
		top += '							<a href="http://mobile.hiapk.com/knowledge/common/" target="_blank">手机常识</a>';
		top += '							<a href="http://mobile.hiapk.com/evaluate/cross/" target="_blank">横向评测</a>';
		top += '							<a href="http://mobile.hiapk.com/evaluate/dismantle/" target="_blank">开箱评测</a>';
		top += '							<a href="http://mobile.hiapk.com/evaluate/special/" target="_blank">专项评测</a>';
		top += '						</p>';
		top += '						<h3><a href="http://product.hiapk.com/" target="_blank">手机大全</a></h3>';
		top += '						<p class="clearfix">';
		top += '							<a href="http://product.hiapk.com/mobile/zte/#filter_box" target="_blank">中兴</a>';
		top += '							<a href="http://product.hiapk.com/mobile/mi/#filter_box" target="_blank">小米</a>';
		top += '							<a href="http://product.hiapk.com/mobile/meizu/#filter_box" target="_blank">魅族</a>';
		top += '							<a href="http://product.hiapk.com/mobile/lenovo/#filter_box" target="_blank">联想</a>';
		top += '							<a href="http://product.hiapk.com/mobile/lg/#filter_box" target="_blank">LG</a>';
		top += '							<a href="http://product.hiapk.com/mobile/moto/#filter_box" target="_blank">MOTO</a>';
		top += '							<a href="http://product.hiapk.com/mobile/sony/#filter_box" target="_blank">索尼</a>';
		top += '							<a href="http://product.hiapk.com/" target="_blank">更多品牌>></a>';
		top += '						</p>';
		top += '					</div>';
		top += '					<div class="site_map_row">';
		top += '						<h3><a href="http://game.hiapk.com/" target="_blank">游戏频道</a></h3>';
		top += '						<p class="clearfix">';
		top += '							<a href="http://game.hiapk.com/news/" target="_blank">手游资讯</a>';
		top += '							<a href="http://game.hiapk.com/lab/pic/" target="_blank">手游评测</a>';
		top += '							<a href="http://game.hiapk.com/lab/test/" target="_blank">鲜游试玩</a>';
		top += '							<a href="http://game.hiapk.com/lab/newgame/" target="_blank">新游前瞻</a>';
		top += '							<a class="red"  href="http://hao.hiapk.com/" target="_blank">礼包发号</a>';
		top += '							<a href="http://hao.hiapk.com/opening-list.html" target="_blank">开服表</a>';
		top += '							<a href="http://hao.hiapk.com/testing-list.html" target="_blank">测试表</a>';
		top += '							<a class="red"  href="http://game.hiapk.com/dianjing/" target="_blank">电竞专栏</a>';
		top += '						</p>';
		top += '						<h3><a href="http://game.hiapk.com/chanye/sj/" target="_blank">手游行业</a></h3>';
		top += '						<p class="clearfix">';
		top += '							<a href="http://game.hiapk.com/chanye/yj/" target="_blank">业界资讯</a>';
		top += '							<a href="http://game.hiapk.com/chanye/sj/" target="_blank">数据分析</a>';
		top += '							<a href="http://game.hiapk.com/chanye/gd/" target="_blank">人物观点</a>';
		top += '							<a href="http://game.hiapk.com/chanye/cy/" target="_blank">产业新闻</a>';
		top += '							<a href="http://game.hiapk.com/chanye/td/" target="_blank">团队信息</a>';
		top += '							<a href="http://game.hiapk.com/chanye/cs/" target="_blank">手游厂商</a>';
		top += '						</p>';
		top += '						<h3><a href="http://game.hiapk.com/syzq/" target="_blank">手游专区</a></h3>';
		top += '						<p class="clearfix">';
		top += '							<a class="red"  href="http://game.hiapk.com/wzry/" target="_blank">王者荣耀</a>';
		top += '							<a href="http://game.hiapk.com/lscs/" target="_blank">炉石传说</a>';
		top += '							<a class="red"  href="http://game.hiapk.com/yys/" target="_blank">阴阳师</a>';
		top += '							<a href="http://game.hiapk.com/kxxxl/" target="_blank">开心消消乐</a>';
		top += '							<a href="http://game.hiapk.com/bwlb3/" target="_blank">保卫萝卜3</a>';
		top += '							<a href="http://game.hiapk.com/hszz/" target="_blank">皇室战争</a>';
		top += '							<a href="http://game.hiapk.com/syzq/" target="_blank">更多专区>></a>';
		top += '						</p>';
		top += '					</div>';
		top += '					<div class="site_map_row">';
		top += '						<h3><a href="http://app.hiapk.com">软件频道</a></h3>';
		top += '						<p class="clearfix">';
		top += '							<a href="http://game.hiapk.com/classified/" target="_blank">游戏下载</a>';
		top += '							<a class="red" href="http://game.hiapk.com/classified/" target="_blank">单机游戏</a>';
		top += '							<a href="http://game.hiapk.com/collection/" target="_blank">游戏合集</a>';
		top += '							<a href="http://hao.hiapk.com/game-list.html" target="_blank">最新手游</a>';
		top += '							<a href="http://app.hiapk.com/category/" target="_blank">软件下载</a>';
		top += '							<a href="http://app.hiapk.com/bibei/" target="_blank">装机必备</a>';
		top += '							<a href="http://app.hiapk.com/zuimei/" target="_blank">最美应用</a>';
		top += '							<a href="http://app.hiapk.com/topic/" target="_blank">软件专题</a>';
		top += '						</p>';
		top += '						<h3><a href="http://bbs.hiapk.com/" target="_blank">安卓论坛</a></h3>';
		top += '						<p class="clearfix">';
		top += '							<a href="http://bbs.hiapk.com/forum-1028-1.html" target="_blank">游戏讨论</a>';
		top += '							<a href="http://bbs.hiapk.com/forum-10-1.html" target="_blank">应用分享</a>';
		top += '							<a href="http://bbs.hiapk.com/forum-28-1.html" target="_blank">软件汉化</a>';
		top += '							<a href="http://bbs.hiapk.com/forum-65-1.html" target="_blank">游戏分享</a>';
		top += '							<a href="http://bbs.hiapk.com/#ppai" target="_blank">手机板块</a>';
		top += '							<a href="http://bbs.hiapk.com/forum-1028-1.html" target="_blank">游戏板块</a>';
		top += '							<a href="http://bbs.hiapk.com/forum.php?gid=221" target="_blank">手机乐园</a>';
		top += '							<a href="http://bbs.hiapk.com/thread-11130723-1-1.html" target="_blank">版主招聘</a>';
		top += '						</p>';
		top += '						<h3><a href="http://apk.hiapk.com/" target="_blank">安卓市场</a></h3>';
		top += '						<p class="clearfix">';
		top += '							<a href="http://dev.apk.hiapk.com/login" target="_blank">应用审核</a>';
		top += '							<a href="http://dev.apk.hiapk.com/login" target="_blank">应用提交</a>';
		top += '							<a href="http://dev.apk.hiapk.com/login" target="_blank">开发者联盟</a><br />';
		top += '							<a href="http://bbs.hiapk.com/forum-1143-1.html" target="_blank">开发者社区</a>';
		top += '						</p>';
		top += '					</div>';
		top += '					<div class="site_map_row last">';
		top += '						<h3><a href="http://pic.hiapk.com/" target="_blank">图片频道</a></h3>';
		top += '						<p class="clearfix">';
		top += '							<a href="http://pic.hiapk.com/sjbizhi/" target="_blank">手机壁纸</a>';
		top += '							<a href="http://pic.hiapk.com/pbts/" target="_blank">平板图赏</a>';
		top += '							<a href="http://pic.hiapk.com/jbjx/" target="_blank">机型美图</a>';
		top += '							<a class="red"  href="http://pic.hiapk.com/xjmeinv/" target="_blank">香机美女</a>';
		top += '							<a href="http://pic.hiapk.com/zt/" target="_blank">图片专题</a>';
		top += '							<a href="http://pic.hiapk.com/zhoubian/" target="_blank">游戏周边</a>';
		top += '							<a href="http://pic.hiapk.com/bagua/" target="_blank">八卦灌水</a>';
		top += '                                                        <a href="http://joy.hiapk.com/" target="_blank">乐翻囧图</a>';
		top += '						</p>';
		top += '						<h3><a href="http://vr.hiapk.com/" target="_blank">VR频道</a></h3>';
		top += '						<p class="clearfix">';
		top += '							<a href="http://vr.hiapk.com/news/" target="_blank">VR资讯</a>';
		top += '							<a class="red"  href="http://vr.hiapk.com/videos/" target="_blank">视频中心</a>';
		top += '							<a href="http://vr.hiapk.com/devices/" target="_blank">VR设备</a>';
		top += '							<a href="http://vr.hiapk.com/games/reviews/" target="_blank">游戏评测</a>';
		top += '							<a href="http://bbs.hiapk.com/forum-933-1.html" target="_blank">VR论坛</a>';
		top += '						</p>';
		top += '						<h3><a href="http://guide.hiapk.com/" target="_blank">教程频道</a></h3>';
		top += '						<p class="clearfix">';
		top += '							<a href="http://guide.hiapk.com/xuangou/" target="_blank">选购指南</a>';
		top += '							<a href="http://guide.hiapk.com/jichu/" target="_blank">基础课堂</a>';
		top += '							<a href="http://guide.hiapk.com/jinjie/" target="_blank">进阶使用</a>';
		top += '							<a href="http://guide.hiapk.com/jiqiao/" target="_blank">玩机技巧</a>';
		top += '							<a href="http://guide.hiapk.com/jieyi/" target="_blank">故障答疑</a>';
		top += '							<a href="http://guide.hiapk.com/meihua/" target="_blank">美化学堂</a>';
		top += '						</p>';
		top += '					</div>';
		top += '				</div>';
		top += '				<div class="opcity_bg"></div>';
		top += '			</div>';
		top += '		</div>';
		top += '		<div class="top_r">';
		top += '			<span class="login_top_r" id="login_top_r">';
		top += '				<a href="http://manager.hiapk.com/member/register.php" target="_blank">注册</a>';
		top += '				<a href="http://manager.hiapk.com/member/" target="_blank">登录</a>';
		top += '			</span>';
		top += '			<span id="business_wrap" class="business_wrap">';
		top += '				<a id="business_btn" class="business_btn" href="javascript:;">商务合作</a>';
		top += '				<span id="business_con" class="business_con">';
		top += '					站点广告投放<br />';
		top += '					QQ:1072519061<br />';
                top += '					媒体内容合作<br />';
		top += '					QQ:3531895997<br />';
		top += '					QQ:24175037<br />';
		top += '				</span>';
		top += '			</span>';
		top += '			<a href="http://app.baidu.com/" target="_blank">开发者联盟</a>';
		top += '		</div>';
		top += '	</div>';
		top += '</div>';
		top += '';
		document.write(top);
		(function(){
			window.onload = function(){addScriptTag("http://manager.hiapk.com/account/ajaxinfo?callback=docallback")};
			/*网站导航*/
			function g(id){return document.getElementById(id);}
			function className(element,name){g(element).className = name;}
			function cssDisplay(element,state){g(element).style.display = state;}
			g("site_map").onmouseover = function(){
				cssDisplay("site_map_wrap","block");
				className("site_map_btn","site_map_btn on");
			};
			g("site_map").onmouseout = function(){
				cssDisplay("site_map_wrap","none");
				className("site_map_btn","site_map_btn");
			};
			g("business_wrap").onmouseover = function(){
				cssDisplay("business_con","block");
				className("business_btn","business_btn on");
			};
			g("business_wrap").onmouseout = function(){
				cssDisplay("business_con","none");
				className("business_btn","business_btn");
			};							
		})();
	}
	function footnav(){
		var footnav = '';
		footnav += '<ul class="footnav_con clearfix">';
		footnav += '			<li><a href="http://www.hiapk.com/" class="logo" title="安卓网">安卓网</a></li>';
		footnav += '			<li>';
		footnav += '				<dl>';
		footnav += '					<dt><a target="_blank" href="http://news.hiapk.com/">资讯</a></dt>';
		footnav += '					<dd><a target="_blank" href="http://news.hiapk.com/android/">安卓</a><a target="_blank" href="http://news.hiapk.com/mobile/">行业</a><a target="_blank" href="http://news.hiapk.com/internet/">移动</a><a target="_blank" href="http://news.hiapk.com/innovation/">科技</a><a target="_blank" href="http://news.hiapk.com/video/">视频</a><a target="_blank" href="http://news.hiapk.com/list_31_1.html">评测</a><a target="_blank" href="http://news.hiapk.com/yc/">原创</a></dd>';
		footnav += '				</dl>';
		footnav += '			</li>';
		footnav += '			<li>';
		footnav += '				<dl>';
		footnav += '					<dt><a target="_blank" href="http://mobile.hiapk.com/">手机</a></dt>';
		footnav += '					<dd><a target="_blank" href="http://mobile.hiapk.com/evaluate/">评测</a><a target="_blank" href="http://mobile.hiapk.com/guide/">导购</a><a target="_blank" href="http://mobile.hiapk.com/broke/">曝光</a><a target="_blank" href="http://mobile.hiapk.com/video/">视频</a><a target="_blank" href="http://mobile.hiapk.com/knowledge/common/">常识</a><a target="_blank" href="http://mobile.hiapk.com/rank/">热文</a><a target="_blank" href="http://mobile.hiapk.com/charts/">热机</a><a target="_blank" href="http://mobile.hiapk.com/topic/samsung/">三星</a></dd>';
		footnav += '				</dl>';
		footnav += '			</li>';
		footnav += '			<li>';
		footnav += '				<dl>';
		footnav += '					<dt><a target="_blank" href="http://product.hiapk.com/">手机大全</a></dt>';
		footnav += '					<dd><a target="_blank" href="http://product.hiapk.com/mobile/samsung/#filter_box">三星</a><a target="_blank" href="http://product.hiapk.com/mobile/htc/#filter_box">HTC</a><a target="_blank" href="http://product.hiapk.com/mobile/mi/#filter_box">小米</a><a target="_blank" href="http://product.hiapk.com/mobile/sony/#filter_box">索尼</a><a target="_blank" href="http://product.hiapk.com/mobile/zte/#filter_box">中兴</a><a target="_blank" href="http://product.hiapk.com/mobile/huawei/#filter_box">华为</a></dd>';
		footnav += '				</dl>';
		footnav += '			</li>';
		footnav += '			<li>';
		footnav += '				<dl>';
		footnav += '					<dt><a target="_blank" href="http://vr.hiapk.com/">VR频道</a></dt>';
		footnav += '					<dd><a target="_blank" href="http://vr.hiapk.com/news/">资讯</a><a target="_blank" href="http://vr.hiapk.com/videos/">视频</a><a target="_blank" href="http://vr.hiapk.com/devices/">设备</a><a target="_blank" href="http://vr.hiapk.com/games/reviews/">评测</a><a target="_blank" href="http://bbs.hiapk.com/forum-933-1.html">论坛</a></dd>';
		footnav += '				</dl>';
		footnav += '			</li>';
		footnav += '			<li>';
		footnav += '				<dl>';
		footnav += '					<dt><a target="_blank" href="http://game.hiapk.com/">游戏</a></dt>';
		footnav += '					<dd><a target="_blank" href="http://game.hiapk.com/collection/">专题</a><a target="_blank" href="http://game.hiapk.com/classified/">分类</a><a target="_blank" href="http://game.hiapk.com/special/">推荐</a><a target="_blank" href="http://game.hiapk.com/lab/">评测</a><a target="_blank" href="http://game.hiapk.com/handbook/">攻略</a><a target="_blank" href="http://game.hiapk.com/mobilegames/">手游</a><a target="_blank" href="http://news.hiapk.com/game/">资讯</a><a target="_blank" href="http://game.hiapk.com/paihang/">排行</a></dd>';
		footnav += '				</dl>';
		footnav += '			</li>';
		footnav += '			<li>';
		footnav += '				<dl>';
		footnav += '					<dt><a target="_blank" href="http://app.hiapk.com/">软件</a></dt>';
		footnav += '					<dd><a target="_blank" href="http://app.hiapk.com/topic/">合辑</a><a target="_blank" href="http://app.hiapk.com/category/">分类</a><a target="_blank" href="http://news.hiapk.com/app/">资讯</a><a target="_blank" href="http://app.hiapk.com/boutique/">精品</a><a target="_blank" href="http://app.hiapk.com/essential/">必备</a></dd>';
		footnav += '				</dl>';
		footnav += '			</li>';
		footnav += '			<li>';
		footnav += '				<dl>';
		footnav += '					<dt><a target="_blank" href="http://pic.hiapk.com/">图片</a></dt>';
		footnav += '					<dd><a target="_blank" href="http://pic.hiapk.com/zt/">专题</a><a target="_blank" href="http://pic.hiapk.com/xjmeinv/">香机</a><a target="_blank" href="http://pic.hiapk.com/jbjx/">机型</a><a target="_blank" href="http://pic.hiapk.com/bagua/">八卦</a><a target="_blank" href="http://pic.hiapk.com/sjbizhi/">手机壁纸</a><a target="_blank" href="http://pic.hiapk.com/zhoubian/">游戏周边</a></dd>';
		footnav += '				</dl>';
		footnav += '			</li>';
		footnav += '			<li>';
		footnav += '				<dl>';
		footnav += '					<dt><a target="_blank" href="http://bbs.hiapk.com/">论坛</a></dt>';
		footnav += '					<dd><a target="_blank" href="http://bbs.hiapk.com/forum-65-1.html">分享</a><a target="_blank" href="http://bbs.hiapk.com/forum-474-1.html">活动</a><a target="_blank" href="http://bbs.hiapk.com/forum-65-1.html">娱乐</a><a target="_blank" href="http://bbs.hiapk.com/forum-182-1.html">美化</a><a target="_blank" href="http://bbs.hiapk.com/forum.php?gid=40">壁纸</a></dd>';
		footnav += '				</dl>';
		footnav += '			</li>';
		footnav += '			<li>';
		footnav += '				<dl>';
		footnav += '					<dt><a target="_blank" href="http://joy.hiapk.com/">乐翻</a></dt>';
		footnav += '					<dd><a target="_blank" href="http://joy.hiapk.com/pic/">囧图</a><a target="_blank" href="http://joy.hiapk.com/talk/">段子</a><a target="_blank" href="http://joy.hiapk.com/story/">奇闻</a><a target="_blank" href="http://joy.hiapk.com/feel/">情感</a><a target="_blank" href="http://joy.hiapk.com/gossip/">八卦</a><a target="_blank" href="http://joy.hiapk.com/news/">社会</a><a target="_blank" href="http://joy.hiapk.com/vedio/">视频墙</a></dd>';
		footnav += '				</dl>';
		footnav += '			</li>';
		footnav += '			<li>';
		footnav += '				<dl>';
		footnav += '					<dt><a target="_blank" href="http://guide.hiapk.com/">教程</a></dt>';
		footnav += '					<dd><a target="_blank" href="http://guide.hiapk.com/xuangou/">选购</a><a target="_blank" href="http://guide.hiapk.com/jichu/">基础</a><a target="_blank" href="http://guide.hiapk.com/jinjie/">进阶</a><a target="_blank" href="http://guide.hiapk.com/jiqiao/">玩机</a><a target="_blank" href="http://guide.hiapk.com/jieyi/">答疑</a><a target="_blank" href="http://guide.hiapk.com/shuaji/">刷机</a><a target="_blank" href="http://guide.hiapk.com/meihua/">美化</a></dd>';
		footnav += '				</dl>';
		footnav += '			</li>';
		footnav += '			<li>';
		footnav += '				<dl>';
		footnav += '					<dt><a target="_blank" href="http://rom.hiapk.com/">刷机</a></dt>';
		footnav += '					<dd><a target="_blank" href="http://rom.hiapk.com/roms/">ROM</a><a target="_blank" href="http://rom.hiapk.com/drive/">驱动</a><a target="_blank" href="http://rom.hiapk.com/tools/">工具</a><a target="_blank" href="http://rom.hiapk.com/topic/">专题</a><a target="_blank" href="http://rom.hiapk.com/recovery/">Recovery</a><a target="_blank" href="http://rom.hiapk.com/root/">一键Root</a></dd>';
		footnav += '				</dl>';
		footnav += '			</li>';
		footnav += '			<li>';
		footnav += '				<dl>';
		footnav += '					<dt><a target="_blank" href="http://wearable.hiapk.com/">可穿戴设备</a></dt>';
		footnav += '					<dd><a target="_blank" href="http://wearable.hiapk.com/">资讯</a></dd>';
		footnav += '				</dl>';
		footnav += '			</li>';
		footnav += '			<li>';
		footnav += '				<dl>';
		footnav += '					<dt><a target="_blank" href="http://pj.hiapk.com/">配件</a></dt>';
		footnav += '					<dd><a target="_blank" href="http://pj.hiapk.com/newest/">新品</a><a target="_blank" href="http://pj.hiapk.com/evaluate/">评测</a><a target="_blank" href="http://pj.hiapk.com/market/">行情</a></dd>';
		footnav += '				</dl>';
		footnav += '			</li>';
		footnav += '			<li>';
		footnav += '				<dl>';
		footnav += '					<dt><a target="_blank" href="http://hao.hiapk.com/">发号中心</a></dt>';
		footnav += '					<dd><a target="_blank" href="http://hao.hiapk.com/game-list.html">手游库</a><a target="_blank" href="http://hao.hiapk.com/gift-list.html">礼包</a><a target="_blank" href="http://hao.hiapk.com/opening-list.html">开服表</a><a target="_blank" href="http://hao.hiapk.com/testing-list.html">测试表</a></dd>';
		footnav += '				</dl>';
		footnav += '			</li>';
		footnav += '		</ul>';
		document.write(footnav);
	}
	function footer(){
		var footer = '';
		footer += '<div class="footer clearfix mt10">';
		footer += '			<div class="public_footer"> <a href="http://www.hiapk.com" target="_blank">安卓网</a>┊ <a href="http://www.hiapk.com/about/aboutus.html" style="color: rgb(204, 51, 0);" target="_blank">关于我们</a>┊ <a href="http://www.hiapk.com/about/contactus.html" target="_blank">联系我们</a>┊ <a href="http://bbs.hiapk.com" target="_blank">安卓论坛</a>┊ <a href="http://talent.baidu.com/baidu/web/index/enterWeb91?urlCorpEdition=null&operational=1AA4DB29A255568E7BE9D2A866B1C9AD4E5B7140C92404272C8C6FC5F5521E060430716735356C4582DCD373022D95B59DB3B4033103467D02DE7D4D843EF813E4858169F989EFE1/" target="_blank" rel="nofollow">加入我们</a>┊ <a href="http://www.hiapk.com/about/link.html" target="_blank">友情链接</a> ┊ <a href="http://www.hiapk.com/about/map.html" target="_blank">网站地图</a> <br />';
		footer += '				ICP证闽 11018580号-1　 <a href="http://www.hiapk.com/about/Certificate1.html" target="_blank">增值电信业务经营许可证 闽B2-20120115</a>　 <a href="http://www.hiapk.com/about/Certificate2.html" target="_blank">闽网文『2014』1186-017号</a> <br />';
		footer += '				Copyright 1999-2017 &copy; <a href="http://www.hiapk.com/" target="_blank">hiapk.com</a> All rights reserved. 福建百度博瑞网络科技有限公司 版权所有 </div>';
		footer += '			<div class="iconpolice"> <a href="http://www.cyberpolice.cn/" rel="nofollow" target="_blank"><img width="120" height="50" src="http://p2.image.hiapk.com/uploads/images/iconpolice01.jpg" alt="福州网络警察报警平台" /></a> <a href="http://www.12377.cn/" rel="nofollow" target="_blank"><img width="120" height="50" src="http://p2.image.hiapk.com/uploads/images/iconpolice05.jpg" alt="中国互联网举报中心" /></a> <a href="http://www.miitbeian.gov.cn/" rel="nofollow" target="_blank"><img width="120" height="50" src="http://p2.image.hiapk.com/uploads/images/iconpolice02.jpg" alt="经营性网站备案信息" /></a> <a href="http://bbs.hiapk.com/forum-87-1.html" rel="nofollow" target="_blank"><img width="120" height="50" src="http://p2.image.hiapk.com/uploads/images/iconpolice03.jpg" alt="不良信息举报中心" /></a> <a href="http://www.wenming.cn/" rel="nofollow" target="_blank"><img width="120" height="50" src="http://p2.image.hiapk.com/uploads/images/iconpolice04.jpg" alt="中国文明网" /></a> </div>';
		footer += '		</div>';
		document.write(footer);
	}
	return {
		tops:top,
		footnav:footnav,
		foot:footer
	}
}();
var Top = { 
	GetPublicTop:function(){
		Pub.tops();
	}
};
var Footer = { 
	GetFooterNav:function(){
		Pub.footnav();
	},
	GetFooter:function(){
		Pub.foot();
		if (window.location.host!="bbs.hiapk.com") {document.write("<script src='http:\/\/hit.stat.hiapk.com\/plus\/ad_js.php?aid=95948'><\/script>");}
	}
};
var _czc = _czc || [];
_czc.push(["_setAccount", "30033867"]);
var _hasTrackFrom = _hasTrackFrom || false;

setTimeout(function(){
	var bp = document.createElement('script');
	bp.src = '//push.zhanzhang.baidu.com/push.js';
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(bp, s);
},10000);

function getUrlArgObject(hashType) {
    if (!hashType) hashType = 'search';
    var args = new Object();
    var query = (hashType == 'search') ? location.search.substring(1) : location.hash.substring(1);
    var pairs = query.split("&");
    for (var i = 0; i < pairs.length; i++) {
        var pos = pairs[i].indexOf('=');
        if (pos == -1) {
            continue;
        }
        var argname = pairs[i].substring(0, pos);
        var value = pairs[i].substring(pos + 1);
        args[argname] = unescape(value);
    }
    return args;
}

if (!_hasTrackFrom) {
    _hasTrackFrom = true;
    setTimeout(function() {
        var args = getUrlArgObject();
        if (args.from) {
            _czc.push(["_trackEvent", 'From', 'ref', args.from]);
        }
        if (args.id) {
            _czc.push(["_trackEvent", 'Id', 'ref', args.id]);
        }
    }, 3000);
}

+(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https'){
   bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
  }
  else{
  bp.src = 'http://push.zhanzhang.baidu.com/push.js';
  }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();