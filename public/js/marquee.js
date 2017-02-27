
(function($){

	$.fn.kxbdSuperMarquee = function(options){
		var opts = $.extend({},$.fn.kxbdSuperMarquee.defaults, options);
		
		return this.each(function(){
			var $marquee = $(this);//\u6eda\u52a8\u5143\u7d20\u5bb9\u5668
			var _scrollObj = $marquee.get(0);//\u6eda\u52a8\u5143\u7d20\u5bb9\u5668DOM
			var scrollW = $marquee.width();//\u6eda\u52a8\u5143\u7d20\u5bb9\u5668\u7684\u5bbd\u5ea6
			var scrollH = $marquee.height();//\u6eda\u52a8\u5143\u7d20\u5bb9\u5668\u7684\u9ad8\u5ea6
			var $element = $marquee.children(); //\u6eda\u52a8\u5143\u7d20
			var $kids = $element.children();//\u6eda\u52a8\u5b50\u5143\u7d20
			var scrollSize=0;//\u6eda\u52a8\u5143\u7d20\u5c3a\u5bf8
			var _type = (opts.direction == 'left' || opts.direction == 'right') ? 1:0;//\u6eda\u52a8\u7c7b\u578b\uff0c1\u5de6\u53f3\uff0c0\u4e0a\u4e0b
			var scrollId, rollId, isMove, marqueeId;
			var t,b,c,d,e; //\u6eda\u52a8\u52a8\u753b\u7684\u53c2\u6570,t:\u5f53\u524d\u65f6\u95f4\uff0cb:\u5f00\u59cb\u7684\u4f4d\u7f6e\uff0cc:\u6539\u53d8\u7684\u4f4d\u7f6e\uff0cd:\u6301\u7eed\u7684\u65f6\u95f4\uff0ce:\u7ed3\u675f\u7684\u4f4d\u7f6e
			var _size, _len; //\u5b50\u5143\u7d20\u7684\u5c3a\u5bf8\u4e0e\u4e2a\u6570
			var $nav,$navBtns;
			var arrPos = []; 
			var numView = 0; //\u5f53\u524d\u6240\u770b\u5b50\u5143\u7d20
			var numRoll=0; //\u8f6e\u6362\u7684\u6b21\u6570
			var numMoved = 0;//\u5df2\u7ecf\u79fb\u52a8\u7684\u8ddd\u79bb

			//\u9632\u6b62\u6eda\u52a8\u5b50\u5143\u7d20\u6bd4\u6eda\u52a8\u5143\u7d20\u5bbd\u800c\u53d6\u4e0d\u5230\u5b9e\u9645\u6eda\u52a8\u5b50\u5143\u7d20\u5bbd\u5ea6
			$element.css(_type?'width':'height',10000);
			//\u83b7\u53d6\u6eda\u52a8\u5143\u7d20\u7684\u5c3a\u5bf8
			var navHtml = '<ul>';
			if (opts.isEqual) {
				_size = $kids[_type?'outerWidth':'outerHeight']();
				_len = $kids.length;
				scrollSize = _size * _len;
				for(var i=0;i<_len;i++){
					arrPos.push(i*_size);
					navHtml += '<li>'+ (i+1) +'</li>';
				}
			}else{
				$kids.each(function(i){
					arrPos.push(scrollSize);
					scrollSize += $(this)[_type?'outerWidth':'outerHeight']();
					navHtml += '<li>'+ (i+1) +'</li>';
				});
			}
			navHtml += '</ul>';
			
			//\u6eda\u52a8\u5143\u7d20\u603b\u5c3a\u5bf8\u5c0f\u4e8e\u5bb9\u5668\u5c3a\u5bf8\uff0c\u4e0d\u6eda\u52a8
			if (scrollSize<(_type?scrollW:scrollH)) return; 
			//\u514b\u9686\u6eda\u52a8\u5b50\u5143\u7d20\u5c06\u5176\u63d2\u5165\u5230\u6eda\u52a8\u5143\u7d20\u540e\uff0c\u5e76\u8bbe\u5b9a\u6eda\u52a8\u5143\u7d20\u5bbd\u5ea6
			$element.append($kids.clone()).css(_type?'width':'height',scrollSize*2);
			
			//\u8f6e\u6362\u5bfc\u822a
			if (opts.navId) {
				$nav = $(opts.navId).append(navHtml).hover( stop, start );
				$navBtns = $('li', $nav);
				$navBtns.each(function(i){
					$(this).bind(opts.eventNav,function(){
						if(isMove) return;
						if(numView==i) return;
						rollFunc(arrPos[i]);
						$navBtns.eq(numView).removeClass('navOn');
						numView = i;
						$(this).addClass('navOn');
					});
				});
				$navBtns.eq(numView).addClass('navOn');
			}
			
			//\u8bbe\u5b9a\u521d\u59cb\u4f4d\u7f6e
			if (opts.direction == 'right' || opts.direction == 'down') {
				_scrollObj[_type?'scrollLeft':'scrollTop'] = scrollSize;
			}else{
				_scrollObj[_type?'scrollLeft':'scrollTop'] = 0;
			}
			
			if(opts.isMarquee){
				//\u6eda\u52a8\u5f00\u59cb
				//marqueeId = setInterval(scrollFunc, opts.scrollDelay);
				marqueeId = setTimeout(scrollFunc, opts.scrollDelay);
				//\u9f20\u6807\u5212\u8fc7\u505c\u6b62\u6eda\u52a8
				$marquee.hover(
					function(){
						clearInterval(marqueeId);
					},
					function(){
						//marqueeId = setInterval(scrollFunc, opts.scrollDelay);
						clearInterval(marqueeId);
						marqueeId = setTimeout(scrollFunc, opts.scrollDelay);
					}
				);
				
				//\u63a7\u5236\u52a0\u901f\u8fd0\u52a8
				if(opts.controlBtn){
					$.each(opts.controlBtn, function(i,val){
						$(val).bind(opts.eventA,function(){
							opts.direction = i;
							opts.oldAmount = opts.scrollAmount;
							opts.scrollAmount = opts.newAmount;
						}).bind(opts.eventB,function(){
							opts.scrollAmount = opts.oldAmount;
						});
					});
				}
			}else{
				if(opts.isAuto){
					//\u8f6e\u6362\u5f00\u59cb
					start();
					
					//\u9f20\u6807\u5212\u8fc7\u505c\u6b62\u8f6e\u6362
					$marquee.hover( stop, start );
				}
			
				//\u63a7\u5236\u524d\u540e\u8d70
				if(opts.btnGo){
					$.each(opts.btnGo, function(i,val){
						$(val).bind(opts.eventGo,function(){
							if(isMove == true) return;
							opts.direction = i;
							rollFunc();
							if (opts.isAuto) {
								stop();
								start();
							}
						});
					});
				}
			}
			
			function scrollFunc(){
				var _dir = (opts.direction == 'left' || opts.direction == 'right') ? 'scrollLeft':'scrollTop';
				
				if(opts.isMarquee){
					if (opts.loop > 0) {
						numMoved+=opts.scrollAmount;
						if(numMoved>scrollSize*opts.loop){
							_scrollObj[_dir] = 0;
							return clearInterval(marqueeId);
						} 
					}
					var newPos = _scrollObj[_dir]+(opts.direction == 'left' || opts.direction == 'up'?1:-1)*opts.scrollAmount;
				}else{
					if(opts.duration){
						if(t++<d){
							isMove = true;
							var newPos = Math.ceil(easeOutQuad(t,b,c,d));
							if(t==d){
								newPos = e;
							}
						}else{
							newPos = e;
							clearInterval(scrollId);
							isMove = false;
							return;
						}
					}else{
						var newPos = e;
						clearInterval(scrollId);
					}
				}
				
				if(opts.direction == 'left' || opts.direction == 'up'){
					if(newPos>=scrollSize){
						newPos-=scrollSize;
					}
				}else{
					if(newPos<=0){
						newPos+=scrollSize;
					}
				}
				_scrollObj[_dir] = newPos;
				
				if(opts.isMarquee){
					marqueeId = setTimeout(scrollFunc, opts.scrollDelay);
				}else if(t<d){
					if(scrollId) clearTimeout(scrollId);
					scrollId = setTimeout(scrollFunc, opts.scrollDelay);
				}else{
					isMove = false;
				}
				
			};
			
			function rollFunc(pPos){
				isMove = true;
				var _dir = (opts.direction == 'left' || opts.direction == 'right') ? 'scrollLeft':'scrollTop';
				var _neg = opts.direction == 'left' || opts.direction == 'up'?1:-1;

				numRoll = numRoll +_neg;
				//\u5f97\u5230\u5f53\u524d\u6240\u770b\u5143\u7d20\u5e8f\u53f7\u5e76\u6539\u53d8\u5bfc\u822aCSS
				if(pPos == undefined&&opts.navId){
					$navBtns.eq(numView).removeClass('navOn');
					numView +=_neg;
					if(numView>=_len){
						numView = 0;
					}else if(numView<0){
						numView = _len-1;
					}
					$navBtns.eq(numView).addClass('navOn');
					numRoll = numView;
				}

				var _temp = numRoll<0?scrollSize:0;
				t=0;
				b=_scrollObj[_dir];
				//c=(pPos != undefined)?pPos:_neg*opts.distance;
				e=(pPos != undefined)?pPos:_temp+(opts.distance*numRoll)%scrollSize;
				if(_neg==1){
					if(e>b){
						c = e-b;
					}else{
						c = e+scrollSize -b;
					}
				}else{
					if(e>b){
						c =e-scrollSize-b;
					}else{
						c = e-b;
					}
				}
				d=opts.duration;
				
				//scrollId = setInterval(scrollFunc, opts.scrollDelay);
				if(scrollId) clearTimeout(scrollId);
				scrollId = setTimeout(scrollFunc, opts.scrollDelay);
			}
			
			function start(){
				rollId = setInterval(function(){
					rollFunc();
				}, opts.time*1000);
			}
			function stop(){
				clearInterval(rollId);
			}
			
			function easeOutQuad(t,b,c,d){
				return -c *(t/=d)*(t-2) + b;
			}
			
			function easeOutQuint(t,b,c,d){
				return c*((t=t/d-1)*t*t*t*t + 1) + b;
			}

		});
	};
	$.fn.kxbdSuperMarquee.defaults = {
		isMarquee:false,//\u662f\u5426\u4e3aMarquee
		isEqual:true,//\u6240\u6709\u6eda\u52a8\u7684\u5143\u7d20\u957f\u5bbd\u662f\u5426\u76f8\u7b49,true,false
		loop: 0,//\u5faa\u73af\u6eda\u52a8\u6b21\u6570\uff0c0\u65f6\u65e0\u9650
		newAmount:3,//\u52a0\u901f\u6eda\u52a8\u7684\u6b65\u957f
		eventA:'mousedown',//\u9f20\u6807\u4e8b\u4ef6\uff0c\u52a0\u901f
		eventB:'mouseup',//\u9f20\u6807\u4e8b\u4ef6\uff0c\u539f\u901f
		isAuto:true,//\u662f\u5426\u81ea\u52a8\u8f6e\u6362
		time:5,//\u505c\u987f\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2
		duration:50,//\u7f13\u52a8\u6548\u679c\uff0c\u5355\u6b21\u79fb\u52a8\u65f6\u95f4\uff0c\u8d8a\u5c0f\u901f\u5ea6\u8d8a\u5feb\uff0c\u4e3a0\u65f6\u65e0\u7f13\u52a8\u6548\u679c
		eventGo:'click', //\u9f20\u6807\u4e8b\u4ef6\uff0c\u5411\u524d\u5411\u540e\u8d70
		direction: 'left',//\u6eda\u52a8\u65b9\u5411\uff0c'left','right','up','down'
		scrollAmount:1,//\u6b65\u957f
		scrollDelay:10,//\u65f6\u957f
		eventNav:'click'//\u5bfc\u822a\u4e8b\u4ef6
	};
	
	$.fn.kxbdSuperMarquee.setDefaults = function(settings) {
		$.extend( $.fn.kxbdSuperMarquee.defaults, settings );
	};
	
})(jQuery);

