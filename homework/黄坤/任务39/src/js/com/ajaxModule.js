 define(['jquery','com/waterfall'],function($,waterFall){        //waterfall文件目录要带com/，否则报错
  console.log(1);
   var ajaxModule = {
      init: function($load){
        this.$load = $load;
        this.curPage = 1;
        this.perPageCount =6;
        this.getSource();
        waterFall.init($('.portfolio .design'));
        waterFall.start();
      },
      getSource: function(){
        var $cur = this;
        this.$load.on('click',function(e){
          e.preventDefault();
          console.log(1);
          $.ajax({
            url:'http://platform.sina.com.cn/slide/album_tech',
            type:'get',
            dataType:'jsonp',
            jsonp:'jsoncallback',
            data:{
              app_key:'1271687855',
              format:'json',
              size:'img',
              num:$cur.perPageCount,
              page:$cur.curPage
            },
            success:function(ret){
              if (ret.status.code == 0) {
                $nodes = renderData(ret.data);
                waterFall.init($('.portfolio .design'));
                $cur.curPage++;
              }
            },
            error:function(){
              console.log("系统错误");
            }
          })
        })
      } 
    }

    function renderData(items){
      var tpl = '',
        $nodes;
      for(var i=0 ; i<items.length; i++){
        tpl += '<li class="itemList">';
        tpl += "<a href='"+ items[i].url+"'>";
        tpl += "<img src='"+items[i].img_url+"'></a>";
        tpl += '<h3>'+ items[i].short_name +'</h3>';
        tpl += '<p>'+items[i].short_intro+'</p>';
        tpl += '</li>';     
      }
      $nodes =$(tpl);
      $('.portfolio .design').append($nodes);
      return $nodes; 

      var defereds = [];
      $nodes.find('img').each(function(){
        var defer = $.Deferred();//创建一个新的deferred对象。
        $(this).on('load',function(){
          defer.resolve();
        })
        defereds.push(defer);
      });
      $.when.apply(null,defereds).done(function(){
        waterFall.init($('.portfolio .design'));
      })   
    }
      return ajaxModule;
    
 })
   //  ajaxModule.init($('.load-btn'));