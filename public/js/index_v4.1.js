/*Use for:	www.hiapk.com*/

!(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 0,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "show",
            container       : window,
            data_attribute  : "original",
            skip_invisible  : true,
            appear          : null,
            load            : null
        };

        function update() {
            var counter = 0;
      
            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                        /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                        $this.trigger("appear");
                        /* if we found an image we'll load, reset the counter */
                        counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit; 
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed; 
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.bind(settings.event, function(event) {
                return update();
            });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .bind("load", function() {
                            $self
                                .hide()
                                .attr("src", $self.data(settings.data_attribute))
                                [settings.effect](settings.effect_speed);
                            self.loaded = true;

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.data(settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.bind(settings.event, function(event) {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.bind("resize", function(event) {
            update();
        });
              
        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
            $window.bind("pageshow", function(event) {
                if (event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(window).load(function() {
            update();
        });
        
        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;
        
        if (settings.container === undefined || settings.container === window) {
            fold = $window.height() + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };
    
    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };
        
    $.abovethetop = function(element, settings) {
        var fold;
        
        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };
    
    $.leftofbegin = function(element, settings) {
        var fold;
        
        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[':'], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);

$.fn.lazyLoadImg = function(setting){
	var defaults = {
		lazySrc:'data-original',	
		blank:'http://p3.image.hiapk.com/uploads/images/index/v2/grey.gif'	
	}
	setting = $.extend({},defaults,setting);
	return this.each(function(i){
		if(!$(this).attr(setting.lazySrc)){
			return;
		}
		if($(this).attr("src")=='' || $(this).attr("src")==setting.blank){
			$(this).attr("src",$(this).attr(setting.lazySrc));
		}
	});
}
/*切换*/
var cTab=function(opt){
	//settings
	var settings=jQuery.extend(true,{
		tabHandleList:"#tabHnadle > li",//标签头
		tabBodyList:"#tabBody > li",//标签内容体序列
		//isAutoPlay:{time:3000},//是否自动播放
		isAutoPlay:false,
		bind:"mouseover",//标签绑定事件
		defIndex:0,//默认选中标签下标tabHnadle
		//tabOnCssList:"#tabHnadle > li",//标签on样式添加点
		tabOnCssName:"on"//选中标签样式
	},opt);
	var isAutoPlay=settings.isAutoPlay,
		bind=settings.bind,
		defIndex=settings.defIndex,
		$tabHandleList=$(settings.tabHandleList),
		tabOnCssName=settings.tabOnCssName,
		$tabOnCssList=$(settings.tabHandleList),
		$tabBodyList=$(settings.tabBodyList);
	var maxSize=$tabHandleList.size();
	var gotoIndex=function(i){
		if(i>=maxSize){i=0;}else if(i<0){i=maxSize-1;}
		$tabOnCssList.eq(defIndex).removeClass(tabOnCssName);
		$tabOnCssList.eq(i).addClass(tabOnCssName);
		$tabBodyList.eq(defIndex).hide();
		$tabBodyList.eq(i).show()/*.fadeIn(500);*/
		$tabBodyList.eq(i).find("img").lazyLoadImg();
		defIndex=i;
		return false;
	};
	gotoIndex(defIndex);
	$tabHandleList.each(function(i){
		$(this).bind(bind,function(){gotoIndex(i);});
	});
	//auto
	var timerID;
	var autoPlay=function(){
		timerID=window.setInterval(function(){
			var temp=defIndex+1;
			gotoIndex(temp);
		},isAutoPlay.time);
	};
	var autoStop=function(){
		window.clearInterval(timerID);
	};
	if(isAutoPlay){
		autoPlay();
		$tabHandleList.hover(autoStop,autoPlay);
		$tabBodyList.hover(autoStop,autoPlay);
	}
	//return
	return {gotoIndex:gotoIndex,defIndex:defIndex};
};
//设置搜索
function Search(title,box,btn){
	var searchList,
	url_0 = 9,
	url_1 = 3,
	url_2 = 4,
	url_3 = 10,
	url_4 = 2;
	url_5 = 6;
	if(title){
		searchList = $(title).find("li");
		searchList.click(function(){
		 searchList.removeClass("on");
		 $(this).addClass("on");
		 $('#search_drop').html($(this).html());
		 $('#search_title').hide();
         $(box).attr("name",searchList.index($(this)));
		})
	}
	$(box).attr("name",0);
	searchBox(box);
	var btnclick = function(){
		var val = $(box).attr("value"),
		     num = $(box).attr("name"),url; 
		if(val == ""||val == "输入您要搜索的内容"){alert("请输入关键词");return false}
		else{
			switch(num){
				case "0": url = "http://search.hiapk.com/cse/search?q="+ val +"&s=12052907993487091575&nsid="+ url_0 +"&"; break;
			    case "1": url = "http://search.hiapk.com/cse/search?q="+ val +"&s=12052907993487091575&nsid="+ url_1 +"&"; break;
				case "2": url = "http://search.hiapk.com/cse/search?q="+ val +"&s=12052907993487091575&nsid="+ url_2 +"&"; break;
				case "3": url = "http://search.hiapk.com/cse/search?q="+ val +"&s=12052907993487091575&nsid="+ url_3 +"&"; break;
				case "4": url = "http://search.hiapk.com/cse/search?q="+ val +"&s=12052907993487091575&nsid="+ url_4 +"&"; break;
				case "5": url = "http://search.hiapk.com/cse/search?q="+ val +"&s=12052907993487091575&nsid="+ url_5 +"&"; break;
				}
				window.open(url);
			}
	}
	$(btn).click(function(){
		btnclick();				  
	});
	document.onkeydown=function(b){
		b=(b)?b:window.event;                     
		if(b.keyCode=="13"){
			btnclick();
		}
    }
	$('.search_drop').hover(function(){
		$('.dropon').addClass('dropoff');
		$('#search_title').show();
	},function(){
		$('.dropon').removeClass('dropoff');
		$('#search_title').hide();
	});
}	

$('.st_baidu').click(function(){
	var val = $('.st_box').attr("value"); 
	if(val == ""||val == "输入您要搜索的内容"){alert("请输入关键词");return false}
	_czc.push(["_trackEvent", 'search', 'st_baidu', val]);
	window.open("http://www.baidu.com/baidu?&word="+ val +"&s=12052907993487091575&tn=SE_hldp04152_m0x14zb4");
});
//搜索框事件
function searchBox(obj){
	var s_box = $(obj)
	for(var i=0;i<s_box.length;i++){
	s_box.eq(i).attr("value","输入您要搜索的内容");
	s_box.eq(i).focus(function(){
		if($(this).attr("value") =='输入您要搜索的内容')	{
			$(this).attr("value","");
			}
		$(this).addClass("selected");
	  });
	s_box.eq(i).blur(function(){
		if($(this).attr("value") =='')	{
			$(this).attr("value","输入您要搜索的内容");
			}	
		$(this).removeClass("selected");
	  });
	}
}
/*滚动*/
(function($) {
	$.fn.rglSlide=function(opt){
		//settings
		var settings=jQuery.extend(true,{
			productScrollWitch:"ul",//相对this选择器，产生滚动条的大div
			list:"ul > li",//相对this选择器，list对象
			row:1,//分组，即行数（垂直滚动的地方用到，之里只为保持代码同步，所以请先修改垂直滚动）
			seeColumn:1,//可视范围分列数目
			step:1,//滚动步长
			speed:"normal",//滚动速度
			orientation:"left",//自动轮播开启时会以设定方向滚动，否则只作为待滚定位，只有左右，left,right
			isAutoPlay:{
				timer:3000,//间隔时间
				rescrollTime:2000,//回滚时间
				reboundState:true//回弹状态，默认回滚开启时自动关闭回弹事件，回滚关闭时自动开启回弹事件，如果要同时关闭请手工关闭
			},//自动播放树配置，false时禁用自动播放功能
			isBtn:{
				step:1,//步长增值
				left:"#left",//向左按钮
				right:"#right",//向右按钮
				disableCss:"disable",//按钮失效css
				isChangeState:true//按钮事件是否触发滚动方向状态
			},//按钮树配置，false时禁用按钮控制功能
			bugD1Width:0,//table布局情况下经常有取不到width值情况，针对此可进行的补丁操作,正常情况下无需启用该补丁
			callback:false//callback:function($this,sTop,splitWidth,d1Width,d2Width){}
		},opt);
		//settings
		var productScrollWitch=settings.productScrollWitch,
			list=settings.list,
			row=settings.row,
			seeColumn=settings.seeColumn,
			step=settings.step,
			speed=settings.speed,
			orientation=settings.orientation,
			aut=settings.isAutoPlay,
			autTimer=aut.timer,
			autRescrollTime=aut.rescrollTime,
			autReboundState=aut.reboundState,
			btn=settings.isBtn,
			btnStep=btn.step,
			btnLeft=$(btn.left),
			btnRight=$(btn.right),
			btnDisableCss=btn.disableCss,
			btnIsChangeState=btn.isChangeState,
			bugD1Width=settings.bugD1Width,
			callback=settings.callback;
		//div
		var $this=$(this);
		var thisselector=$this.selector;
		var d1=$this,
			d2=d1.find(productScrollWitch),
			d3=d1.find(list);
		//d1Width
		var d1Width=d1.width();
		if(bugD1Width!=0){
			d1Width=bugD1Width;
		}else{
			if(d1Width==0){
				alert("Err:d1Width==0");
			}
		}
		//other width size ...
		var d3Size=d3.size();
		var splitWidth=d1Width/seeColumn;
		var stepWidth=step*splitWidth;
		var stepWidthBtn=btnStep*splitWidth;
		var d2Width=splitWidth*Math.ceil(d3Size/row);
		//fall short of nmuber,return false
		if(d2Width<d1Width)return false;
		//bear with
		d2.width(d2Width+100);
		//
		var flag=true;
		//left
		var left=function(e){
			if(!flag)return false;
			flag=false;
			if(btnIsChangeState){
				orientation="left";
			}
			var _stepWidth=stepWidth;
			if(e){
				_stepWidth=stepWidthBtn;
			}else{
				_stepWidth=stepWidth;
			}
			if((d1Width+d1.scrollLeft())==d2Width){
				btnLeft.addClass(btnDisableCss);
				if(e){
					flag=true;
				}else{
					if(autRescrollTime){
						d1.animate({scrollLeft:0},autRescrollTime,function(){
							btnLeft.removeClass(btnDisableCss);
							btnRight.addClass(btnDisableCss);
							if(callback)callback($this,0,splitWidth,d1Width,d2Width);
							flag=true;
						});
					}else{
						if(autReboundState){
							orientation="right";
							if(aut){
								autoStop();
								autoPlay();
							}
						}
						flag=true;
					}
				}
			}else if(_stepWidth+d1.scrollLeft()>=d2Width-d1Width){
				d1.animate({scrollLeft:d2Width-d1Width},speed,function(){
					btnLeft.addClass(btnDisableCss);
					btnRight.removeClass(btnDisableCss);
					if(callback)callback($this,d2Width-d1Width,splitWidth,d1Width,d2Width);
					flag=true;
				});
			}else{
				d1.animate({scrollLeft:d1.scrollLeft()+_stepWidth},speed,function(){
					btnRight.removeClass(btnDisableCss);
					if(callback)callback($this,d1.scrollLeft(),splitWidth,d1Width,d2Width);
					flag=true;
				});
			}
			return false;
		};
		//right
		var right=function(e){
			if(!flag)return false;
			flag=false;
			if(btnIsChangeState){
				orientation="right";
			}
			var _stepWidth=stepWidth;
			if(e){
				_stepWidth=stepWidthBtn;
			}else{
				_stepWidth=stepWidth;
			}
			if(d1.scrollLeft()==0){
				btnRight.addClass(btnDisableCss);
				if(e){
					flag=true;
				}else{
					if(autRescrollTime){
						d1.animate({scrollLeft:d2Width-d1Width},autRescrollTime,function(){
							btnRight.removeClass(btnDisableCss);
							btnLeft.addClass(btnDisableCss);
							if(callback)callback($this,d2Width-d1Width,splitWidth,d1Width,d2Width);
							flag=true;
						});
					}else{
						if(autReboundState){
							orientation="left";
							if(aut){
								autoStop();
								autoPlay();
							}
						}
						flag=true;
					}
				}
			}else if((d1.scrollLeft())<=_stepWidth){
				d1.animate({scrollLeft:0},speed,function(){
					btnRight.addClass(btnDisableCss);
					btnLeft.removeClass(btnDisableCss);
					if(callback)callback($this,0,splitWidth,d1Width,d2Width);
					flag=true;
				});
			}else{
				d1.animate({scrollLeft:d1.scrollLeft()-_stepWidth},speed,function(){
					btnLeft.removeClass(btnDisableCss);
					if(callback)callback($this,d1.scrollLeft(),splitWidth,d1Width,d2Width);
					flag=true;
				});
			}
			return false;
		};
		//gotoscroll
		var gotoscroll=function(xy){
			if(!flag)return false;
			flag=false;
			d1.animate({scrollLeft:xy},speed,function(){
				if(callback)callback($this,xy,splitWidth,d1Width,d2Width);
				if(xy==0){
					btnRight.addClass(btnDisableCss);
					btnLeft.removeClass(btnDisableCss);
				}else if(xy==(d2Width-d1Width)){
					btnRight.removeClass(btnDisableCss);
					btnLeft.addClass(btnDisableCss);
				}else{
					btnRight.removeClass(btnDisableCss);
					btnLeft.removeClass(btnDisableCss);
				}
				flag=true;
			});
			return false;
		};
		//timer
		var timerID;
		var autoPlay=function(){
			switch(orientation)
			{
				case "left":timerID=window.setInterval(left,autTimer);break;
				case "right":timerID=window.setInterval(right,autTimer);break;
			}
			return false;
		};
		var autoStop = function(){
			window.clearInterval(timerID);
			return false;
		};
		if(aut){
			//ready autoPlay
			autoPlay();
			//
			$this.hover(autoStop,autoPlay);
			if(btn){
				btnLeft.hover(autoStop,autoPlay);
				btnRight.hover(autoStop,autoPlay);
			}
		}
		//btn
		if(btn){
			btnLeft.click(left);
			btnRight.click(right);
			switch(orientation)
			{
				case "left":
					//避免动画的同时初始化callback
					d1.scrollLeft(0);gotoscroll(0);
					btnRight.addClass(btnDisableCss);
					break;
				case "right":
					//避免动画的同时初始化callback
					d1.scrollLeft(d2Width-d1Width);gotoscroll(d2Width-d1Width);
					btnLeft.addClass(btnDisableCss);
					break;
			}
		}
		if(!aut){
			return {$this:$this,autoStop:false,autoPlay:false,gotoscroll:gotoscroll};
		}
		return {$this:$this,autoStop:autoStop,autoPlay:autoPlay,gotoscroll:gotoscroll};
	};
})(jQuery);
//返回顶部
function goTopEx(){
	var obj=$("#goTopBtn");
	obj.hide();  
	window.onscroll=function(){
		if(document.documentElement.scrollTop >0 ||document.body.scrollTop>0){
			obj.show();
		}else{
			obj.hide();
		}
	}
	obj.click(function(){
	   $('html,body').animate({scrollTop: '0px'}, 400);
	});
}
/*背景*/
function setBg(img_left,img_right,url){
	if($(window).width()>1300 && $('.floata').size()!=2){
		$('body').append('<a class="floata floata_left" href="'+ url +'" target="_blank" style="background-image:url('+ img_left +');"></a><a class="floata floata_right" href="'+ url +'" target="_blank" style="background-image:url('+ img_right +');"></a>');
	}
}
$(document).ready(function(){
	/*微信*/
	$(".funzone p").hover(function(){$(this).find("em").show();},function(){$(this).find("em").hide();});
	/*搜索*/
    Search("#search_title",".st_box",".st_btn");
	searchBox(".s_box");	
	/*轮播*/
	cTab({tabHandleList:"#tabHnadle1 > li",tabBodyList:"#tabBody1 > li",isAutoPlay:{time:3000}});	
	$('.slide').hover(function(){$(".prev,.next").show();},function(){$(".prev,.next").hide();});
	$(".prev").click(function(e) {
		var on = $(this).parent().find("li.on");
		if (on.prev().length != 0) {
			on.prev().mouseover();
		} else {
			on.parent().find("li:last-child").mouseover();
		}
	});
	$(".next").click(function(e) {
		var on = $(this).parent().find("li.on");
		if (on.next().length != 0) {
			on.next().mouseover();
		} else {
			on.parent().find("li:first-child").mouseover();
		}
	});	
	/*APP推荐*/
	cTab({tabHandleList:"#tabHnadle8 > li",tabBodyList:"#tabBody8 > div.con"});	
	/*最新 热门*/
	cTab({tabHandleList:"#tabHnadle9 > li",tabBodyList:"#tabBody9 > div.con"});
	/*安卓早报*/
	cTab({tabHandleList:"#tabHnadle_azzb > a",tabBodyList:"#tabBody_azzb > div.con"});	
	/*评论聚集*/
	cTab({tabHandleList:"#tabHnadle_pljj > a",tabBodyList:"#tabBody_pljj > div.con"});
	/*金评媒*/
	cTab({tabHandleList:"#tabHnadle_jpm > a",tabBodyList:"#tabBody_jpm > div.con"});
	$('#rmhd_slide').kxbdSuperMarquee({
		time:6,
		distance:375,
		btnGo:{left:'#rmhd_prev',right:'#rmhd_next'},
		direction:'left'
	});
	/*游戏频道*/
	$('#game_c li').hover(function(){
		$('#game_c li').removeClass('on');
		$(this).addClass('on').find("img").lazyLoadImg();;
	},function(){
	});
	/*游戏*/
	cTab({tabHandleList:"#tabHnadle_game2 > li",tabBodyList:"#tabBody_game2 > div.con"});
	/*游戏下载*/
	cTab({tabHandleList:"#tabHnadle3 > a",tabBodyList:"#tabBody3 > ul",bind:"click"});	
	/*vr*/
	cTab({tabHandleList:"#tabHnadle_vr > a",tabBodyList:"#tabBody_vr > li"});
	$(".prev_vr").click(function(e) {
		var on = $('#tabHnadle_vr').find("a.on");
		if (on.prev().length != 0) {
			on.prev().mouseover();
		} else {
			$('#tabHnadle_vr').find("a:last-child").mouseover();
		}
	});
	$(".next_vr").click(function(e) {
		var on = $('#tabHnadle_vr').find("a.on");
		if (on.next().length != 0) {
			on.next().mouseover();
		} else {
			$('#tabHnadle_vr').find("a:first-child").mouseover();
		}
	});

	cTab({tabHandleList:"#tabHnadle4 > li",tabBodyList:"#tabBody4 > div.con"});
	/*手机大全*/
	cTab({tabHandleList:"#tabHnadle5 > li",tabBodyList:"#tabBody5 > ul"});	
	/*软件频道*/
	cTab({tabHandleList:"#tabHnadle6 > a",tabBodyList:"#tabBody6 > ul",bind:"click"});	
	/*图库中心*/
	$(".gallery .blocks").hover(function(){$(this).find(".link_layer").animate({top: '0'}, "fast");},function(){$(this).find(".link_layer").animate({top: '100%'}, "fast");});
	/*精彩看点*/
	cTab({tabHandleList:"#tabHnadle7 > li",tabBodyList:"#tabBody7 > ul"});	
	/*lazyload*/
	$("img.lazy").lazyload({effect:"fadeIn"});
	/*友情链接*/
	$("#partner").rglSlide({productScrollWitch:"ul",ast:"ul > li",row:5,seeColumn:8,step:1,isAutoPlay:{timer:3000,rescrollTime:false,orientation:"left"},isBtn:{step:2,left:"#partnerPrev",right:"#partnerNext",disableCss:"disable"}});
	/*回到顶部*/
	goTopEx();
});

