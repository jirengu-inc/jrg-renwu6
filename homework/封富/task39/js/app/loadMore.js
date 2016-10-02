define(["jquery"],function($){
  function LoadMore($node){
    this.node = $node;
    this.box = $node.find(".box");
    this.btn = $node.find(".btn").data("loading",false);
    this.hide = this.box.find(".hide");
    this.item = this.box.find(".item");
    this.init();
  }
  LoadMore.prototype = {
    constructor:LoadMore,
    init:function(){
      this.page = 1;
      this.len = 8;
      this.bind();
      this.setItem();
      this.loadData();
    },
    bind:function(){
      var self = this,
          clock;
      this.btn.on("click",function(){
        self.loadData();
      })
      $(window).on("resize",function(){
        clearTimeout(clock);
        clock = setTimeout(function(){
          self.setItem();
          self.items = self.box.find("li.item");
          self.waterFlowResize(self.items);
        },500);

      })
    },
    setItem:function(){
      this.arr = [];
      this.$width = this.item.outerWidth(true);
      $allWidth = this.box.width();
      this.num = Math.floor($allWidth/this.$width);
      for(var i = 0;i < this.num;i++){
        this.arr.push(0);
      }
    },
    loadData:function(){
      var self = this;
      if(this.btn.data("loading")) return;
      this.btn.data("loading",true);
      $.ajax({
        url:"http://platform.sina.com.cn/slide/album_tech",
        type:"get",
        dataType:"jsonp",
        jsonp:"jsoncallback",
        data:{
          app_key:"1271687855",
          page:self.page,
          num:self.len
        }
      }).done(function(response){
        if(response && response.status.code === "0"){
          self.placeNode(response);
        }else{
          alert("请求数据失败，请稍后重试");
        }
        self.btn.data("loading",false);
      })
    },
    placeNode:function(ret){
      var self = this;
      var node = this.getNode(ret).appendTo(this.box);
      // node.find("img").on("load",function(){
        self.waterFlow(node);
      // })
      this.page += 1;
    },
    getNode:function(ret){
      node = "";
      for(var i = 0;i < ret.data.length;i++){
        node += '<li class="item"><a href="';
        node += ret.data[i].url + '" class="link"><img src="';
        node += ret.data[i].img_url + '" alt=""></a><h3 class="title">';
        node += ret.data[i].short_name + '</h3><p class="para">';
        node += ret.data[i].short_intro + '</p></li>';
      }
      $node = $(node);
      return $node;
    },
    waterFlow:function(node){
      var self = this;
      node.each(function(){
        var $this = $(this);
        $this.find("img").on("load",function(){
          var min = self.arr[0];
          idx = 0;
          for(var i = 0;i < self.arr.length;i++){
            if(min > self.arr[i]){
              min = self.arr[i];
              idx = i;
            }
          }
          $this.css({
            "top":min,
            "left":idx * self.$width,
            "opacity":"1"
          });
          self.arr[idx] += $this.outerHeight(true);
          self.hide.css("height",self.arr[idx]);
        })
      })
    },
    waterFlowResize:function(node){
      var self = this;
      node.each(function(){
        var $this = $(this);
          var min = self.arr[0];
          idx = 0;
          for(var i = 0;i < self.arr.length;i++){
            if(min > self.arr[i]){
              min = self.arr[i];
              idx = i;
            }
          }
          $this.css({
            "top":min,
            "left":idx * self.$width,
            "opacity":"1"
          });
          self.arr[idx] += $this.outerHeight(true);
          self.hide.css("height",self.arr[idx]);
        })
    }
  }
  return LoadMore;
})
