      var newCarousel=(function(){
            function Carousel(){
                this.init();//绑定目标对象的初始环境
                this.bind();//绑定目标对象的事件环境
          }
           
              Carousel.prototype.init=function(){//定义目标对象的初始环境，宽度，高度，node节点属性，设置节点CSS等
                this.windowWidth=$(window).width();
                this.windowHight=$(window).height();
                this.$ulcont=$(".ul-cont");
                this.$container=$("#container");
                this.$next=$(".next.arrow");
                this.$pre=$(".pre.arrow");
                this.$btn=$(".btn-cont");
                this.idx=0;//给this绑定值的时候直接写，不需要var
                this.$ulcont.css({"width":4*this.windowWidth,"height":this.windowHight})
                this.$ulcont.find("li").find("a").find("img").css({"width":this.windowWidth,"height":this.windowHight})
                this.$container.css({"overflow":"hidden","width":this.windowWidth,"height":this.windowHight})
              }

              Carousel.prototype.bind=function(){//定义目标节点的事件环境
                  var _this=this//转移this时用var
                  this.$next.on("click",function(){
                    console.log(_this.idx)
                      _this.idx=_this.idx+1//因为prototype.int上绑定有this.idx，所以在bind方法中通过prototype也可以访问操作到idx
                      if(_this.idx===4){
                          _this.idx=0
                      }
                      _this.playnext(_this.idx)
                  })

                  _this.$pre.on("click",function(){
                      _this.idx=_this.idx-1
                      if(_this.idx===-1){
                          _this.idx=3
                      }
                      _this.playpre(_this.idx)
                      console.log(_this.idx)
                  })

                  $(window).on("scroll",function(){/*滚动时消除轮播上的操作按钮*/
                     _this.scrollTop=$('body').scrollTop()
                    if(_this.scrollTop>50){
                      _this.$next.hide();
                      _this.$pre.hide();
                      _this.$btn.hide();
                    }
                    else{
                      _this.$next.show();
                      _this.$pre.show();
                      _this.$btn.show();
                    }
                  })

              }

              Carousel.prototype.playpre=function(idx){//这里定义playpre时的idx是个参数，只是占位符
                this.$ulcont.prepend(this.$ulcont.children().last())
                this.$ulcont.css({"left":0-this.windowWidth});
                this.$ulcont.animate({"left":0})
                this.setbnt(idx)
              }

              Carousel.prototype.playnext=function(idx){
                var _this=this
                this.$ulcont.animate({"left":0-this.windowWidth},function(){
                _this.$ulcont.append(_this.$ulcont.children().first())
                _this.$ulcont.css({"left":0}) 
                })
                this.setbnt(idx)
              }

              Carousel.prototype.setbnt=function(idx){
                this.$btn.find("li").removeClass("active").eq(idx).addClass("active")
              }

              return {
                newcarousel:function(){
                  new Carousel()
                }
              }

        })()
              //不用模块定义时，只在js文件中调用使用newCarousel.newcarousel() 即申明的立即执行函数.立即执行函数返回的对象方法
              //return newCarousel  equirejs加载时定义模块后返回的接口，这个接口会作为参数传入主模块加载后的回调函数内
              module.exports=newCarousel;//webpack压缩，所以使用commonjs规范导出接口