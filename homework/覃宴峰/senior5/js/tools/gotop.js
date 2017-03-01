define(["jquery"],function($){
        var newGotop=(function(){
              function Gotop(){
              this.newNode=$('<a href="#" title="gotop"><i class="fa fa-arrow-circle-up"></i></a>')
              this.createNode()
              this.bind()
            }
            
            Gotop.prototype.createNode=function(){
              $("body").append(this.newNode)
            }

            Gotop.prototype.bind=function(){
              var _this=this;
              $(window).on("scroll",function(){
              var scrollY=$(window).scrollTop()
              if(scrollY>300){
                _this.newNode.find(".fa.fa-arrow-circle-up").show()
              } else{
                _this.newNode.find(".fa.fa-arrow-circle-up").hide()
              }
            })
            }

            return {
              newgotop:function(){
                new Gotop()
              }
            }
          })()
            //不用模块定义时，只在JS文件中调用使用newGotop.newgotop()。即申明立即执行函数.立即执行函数返回的对象方法
            return newGotop//定义模块后返回的接口，这个接口名会作为参数传入主模块加载后的回调函数内
})
            

            // newGotop.newGotop()