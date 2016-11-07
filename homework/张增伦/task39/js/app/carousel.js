define(['jquery'],function($){

	  function Carousel(){

		   this.$imgCnt = $('.img-cnt');
	       this.$imgs = this.$imgCnt.children('li');
	       this.$pre = $('.pre');
	       this.$next = $('.next');
	       this.$bullet = $('.bullet');

		   //var imgWidth = $imgs.width();
		   this.imgWidth = $(window).width();
	       this.imgCount = this.$imgs.size();
	       console.log('imgCount:'+this.imgCount);
	       console.log('imgWidth:'+this.imgWidth);

	       this.$imgCnt.prepend(this.$imgs.last().clone());
		   this.$imgCnt.append(this.$imgs.first().clone());

		   this.$imgCnt.find('li').css('width', this.imgWidth);
		   this.$imgCnt.find('.cover').css('width', this.imgWidth);
		   this.imgRealCount = this.$imgCnt.children('li').size();
		   this.$imgCnt.css({left: 0-this.imgWidth, width: this.imgRealCount*this.imgWidth})

		   this.curIdx = 0;
		   this.isAnimate = false;

		   this.initBullet();

		   this.autoPlay();

	   }


	Carousel.prototype = {
		initBullet:function initBullet(){
			var self = this;
			/*
	   		for(var i=0;i<this.imgCount;i++){
				self.$bullet.append('<li></li>');
			}
			*/

			self.$bullet.find('li').on('click', function(){
			var idx = $(this).index();
			if(idx > self.curIdx){
				self.playNext(idx - self.curIdx);
			}else if(idx < self.curIdx){
				self.playPre(self.curIdx - idx);
			}
		});
	   },
	   autoPlay:function autoPlay(){
	   		var self = this;
			self.setBg(1);
			clock = setInterval(function(){
				self.playNext();
			}, 3000);	
		},
		playNext:function playNext(idx){
			var self = this;
			var idx = idx || 1;
			if(!self.isAnimate){
				self.isAnimate = true;
				self.setBg(self.curIdx+2);
				self.$imgCnt.animate({left: '-='+(self.imgWidth*idx)},function(){
					self.curIdx = (self.curIdx + idx)%self.imgCount;
					if(self.curIdx === 0){
						self.$imgCnt.css({left: 0-self.imgWidth});;
					}
					self.isAnimate = false;
					self.setBullet();
				});
			}
		},
		playPre:function playPre(idx){
			var self = this;
			var idx = idx || 1;
			if(!self.isAnimate){
				self.isAnimate = true;
				self.setBg(self.curIdx);
				self.$imgCnt.animate({left: '+='+(self.imgWidth*idx)},function(){
					self.curIdx = (self.imgCount + self.curIdx - idx)%self.imgCount;
					if(self.curIdx === (self.imgCount - 1)){
						self.$imgCnt.css({left: 0-self.imgWidth*self.imgCount});;
					}
					self.isAnimate = false;
					self.setBullet();
				});
			}
		},
		setBg:function setBg(idx){
			var self = this;
			var idx = idx || 0,
				$node = self.$imgCnt.children('li').eq(idx)
			if($node.data('isBgSet')) return;
			$cover = $node.find('.cover'),
			imgUrl = $cover.attr('data-bg-img');
			$cover.css('background-image', 'url('+imgUrl+')');
			$node.data('isBgSet', true);
			
		},
		setBullet:function setBullet(){
			this.$bullet.children().removeClass('curr').eq(this.curIdx).addClass('curr');
		}


	}
  

  return Carousel;
})