define(['jquery'],function($){


	function Waterfall(){
	  this.picCt = '#pic-ct';
	  this.curPage = 1;
	  this.pageSize = 8;

	   // 瀑布流
       this.colSumHeight = [];
       this.nodeWidth = $('#pic-ct li').outerWidth(true);
       this.colNum = parseInt($(this.picCt).width()/this.nodeWidth);

        for(var i=0; i<this.colNum; i++){
            this.colSumHeight.push(0)
        }

        console.log('--init start----');

       this.init();


	}

	Waterfall.prototype = {

		isShow:function($el){
            var scrollH = $(window).scrollTop(),
                    winH = $(window).height(),
                    top = $el.offset().top;

            if(top < winH + scrollH){
                return true;
            }else{
                return false;
            }
        },
        load:function(){
            var self = this;
            console.log('--load-start---');
            $.ajax({
                url: 'http://platform.sina.com.cn/slide/album_tech',
                dataType: 'jsonp',
                jsonp:"jsoncallback",
                data: {
                    app_key: '1271687855',
                    num: self.pageSize,
                    page: self.curPage++
                }
            }).done(function(ret){
            	console.log('--load-done---');
                if(ret && ret.status && ret.status.code === "0"){
                   self.place(ret.data);
                   console.log(ret.data);
                }else{
                    console.log('get error data');
                }
            });
        },
        place:function(nodeList){
        	var self = this;
            console.log(nodeList);
            var $nodes = this.renderData(nodeList);

            var defereds = [];
            $nodes.find('img').each(function(){
                var defer = $.Deferred();
                $(this).load(function(){
                    defer.resolve();
                });
                defereds.push(defer);
            });
            $.when.apply(null,defereds).done(function() {
                console.log('new images all loaded ...');
                self.waterFallPlace($nodes);
            });
        },
        waterFallPlace:function($nodes){
        	var self = this;
            $nodes.each(function(){
                var $cur = $(this);
                var idx = 0,
                        minSumHeight = self.colSumHeight[0];

                for(var i=0;i<self.colSumHeight.length; i++){
                    if(self.colSumHeight[i] < minSumHeight){
                        idx = i;
                        minSumHeight = self.colSumHeight[i];
                    }
                }

                $cur.css({
                    left: self.nodeWidth*idx,
                    top: minSumHeight,
                    opacity: 1
                });

                self.colSumHeight[idx] = $cur.outerHeight(true) + self.colSumHeight[idx];
                $(self.picCt).height(Math.max.apply(null,self.colSumHeight));
            });

        },
        renderData:function(items){
            var tpl = '';
            for(var i = 0;i<items.length;i++){
                tpl += '<li class="'+ items[i].url +'">';
                tpl += '        <a href="#">';
                tpl += '        <img src="'+ items[i].img_url +'" alt="">';
                tpl += '       </a>';
                tpl += '<h4>'+ items[i].short_name +'</h4>';
                tpl += '<p>';
                tpl += ''+items[i].short_intro+'';
                tpl += '</p>';
                tpl += '</li>';
            }
            var $nodes = $(tpl);
            $(this.picCt).append($nodes);
            return $nodes;
        },
		checkShow:function(){
            if(this.isShow($('#load'))){
                this.load();
                if(this.isShow($('#load'))){
                    this.load();
                }
            }else{
            	console.log('---load btn not show--');
            }
        },
        init:function() {
        	var self = this;
        	/*
            var clock;           
            $(window).on('scroll', function(){                
                if(clock){
                    clearTimeout(clock);
                }
                clock = setTimeout(function(){
                    self.checkShow();
                }, 100);
            });

            self.checkShow();
            */
            $('#load').on('click',function(e){
            	//e.stopPropagation();
            	e.preventDefault(); 
            	self.load();
            });

           this.load();
        }

	}
        
        

  return Waterfall;
})