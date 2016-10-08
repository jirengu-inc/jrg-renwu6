// 显示时，动画的形式设置透明度为1
define(['jquery'],function($){
  function FadeIn($node){
    this.node = $node;
    this.li = $node.find("li").data("loaded",false);
    this.bind();
  }
  FadeIn.prototype = {
    constructor:FadeIn,
    bind:function(){
      var self = this;
      $(document).on("scroll",function(){
        self.li.each(function(){
          if(self.visible(this) && !$(this).data("loaded")){
            $(this).css("opacity",1);
          }
        })
      })
    },
    visible:function(node){
      var $top = $(node).offset().top,
          $scrT = $(document).scrollTop(),
          $winH = $(window).height();
      if($top < $scrT + $winH && $scrT < $top){
        return true;
      }else{
        return false;
      }
    }
  }
  return FadeIn;
})