define(['jquery'],function($) {
  
  // define(function(require,exports){})  //CMD写法
  // var $ = require('jquery');           //CMD写法

    var Carousel = {
      init: function($carousel){
        this.curIdx = 0;
        this.$carousel = $carousel;
        var $ct = this.$ct = $carousel.find('.img-ct');
        $items = this.$items = $ct.children();
        this.$pre = $carousel.find('.pre');
        this.$next = $carousel.find('.next');
        this.$bullet = $carousel.find('.bullet');
        this.imgWidth = $(window).width();
        this.imgSize = $items.size();
        this.bind();
        this.show(0);
        this.setBg(0);
        this.autoPlay();
      },
      bind: function() {
        var _this = this;
        this.$pre.on('click', function() {
          _this.showPre();
        });
        this.$next.on('click', function() {
          _this.showNext();
        });
        this.$bullet.find('li').on('click',function(){
          var idx = $(this).index();
          _this.show(idx);
          _this.setBg(idx);
        })
      },
      showNext: function(idx){
        this.show((this.curIdx+1)%this.imgSize);
      },
      showPre: function(idx){
        this.show((this.curIdx+this.imgSize-1)%this.imgSize);
      },
      show: function(idx){
        this.setBg(idx);
        this.$items.eq(this.curIdx).fadeOut(100);
        this.$items.eq(idx).fadeIn(100);
        this.curIdx = idx;
        this.setBullet();
      },
      setBg:function(idx){
        var idx = idx || 0;
            $li = this.$items.eq(idx);
            $cover = $li.children();
            imgUrl = $cover.attr('data-img');
        if ($li.data('isBgSet')) return;
        else{
          $cover.css({backgroundImage:'url('+imgUrl+')'});
          $li.data('isBgSet',true);
        }
      },
      setBullet: function(){
        this.$bullet.find('li').removeClass('active').eq(this.curIdx).addClass('active');
      },
      autoPlay: function(){
        var me = this;
        this.clock = setInterval( function(){
          me.showNext();
        }, 3000 );
      },
      stopPlay: function(){
        clearInterval(this.clock);
      }
    };

	return Carousel;
});

//Carousel.init($('.carousel'));