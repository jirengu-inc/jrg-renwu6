define(['jquery'],function($){
  function GoTop(){
    this.$node = $('<div id="GoTop">回到顶部</div>');
    this.addNode();
    this.bind();
  }
  GoTop.prototype = {
    constructor:GoTop,
    addNode:function(){
      this.$node.appendTo('body').css({
        "width":70,
        "height":40,
        "line-height":"40px",
        "text-align":"center",
        "background-color":"yellow",
        "position":"fixed",
        "bottom":30,
        "right":40,
        "border-radius":"20px",
        "z-index":"666",
        "box-shadow":"2px 2px 3px #ccc",
        "cursor":"pointer",
        "transition":"all 1s",
        "display":"none"
      }).data("visible",false);
    },
    bind:function(){
      var self = this;
      $(document).on("scroll",function(){
        var scrT = $(document).scrollTop();
        if(scrT > 200){
          if(self.$node.data("visible")) return;
          self.$node.show().data("visible",true);
        }else{
          if(!self.$node.data("visible")) return;
          self.$node.hide().data("visible",false);
        }
      });
      this.$node.on("click",function(){
        $("html,body").animate({"scrollTop":"0px"},400);
      })
    }
  }
  return GoTop;
})