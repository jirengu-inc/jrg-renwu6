define(['jquery'],function($){
  
    function GoTop(ct,target){
        this.ct = ct;
        this.target =target;
        this.createNode(this.target);
        this.bindEvent();
    }

    GoTop.prototype.createNode = function(node) {
        this.ct.append(node);
    }

    GoTop.prototype.bindEvent = function(){
        var self = this;
        $(window).on('scroll', function(e){
            var offsetTop = self.ct.scrollTop();
           // console.log(offsetTop);
            if(offsetTop>100){
                self.target.show();
            }else{
                self.target.hide();
            }
        })
        self.target.on('click', function(){
            $(window).scrollTop(0);
        });
    }

  return GoTop;
})