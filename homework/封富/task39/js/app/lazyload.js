define(["jquery"],function($){
  function Lazyload(){
    this.showImg();
    this.bind();
  }
  Lazyload.prototype = {
    constructor:Lazyload,
    showImg:function(){
      var self = this;
      $("img").each(function(){
        if(self.scrInstance($(this))){
          if($(this).data("loaded")) return;
          $(this).attr("src",$(this).attr("data-src")).data("loaded",true);
        }
      });
    },
    scrInstance:function($node){
      var scrT = $(document).scrollTop(),
          $top = $node.offset().top,
          $winH = $(window).height();
      if(scrT + $winH >= $top +100 && $top >= scrT - 100){  // 为上下各添加100px的余量，提前加载图片
        return true;
      }else{
        return false;
      }
    },
    bind:function(){
      var self = this;
      $(document).on("scroll",function(){
        self.showImg();
      });
    }
  }
  return Lazyload;
})
// #container>(#box>#hide)+#btn >>>>structor
// $.fn.Lazyload = function(){
//   var self = this;

// }



