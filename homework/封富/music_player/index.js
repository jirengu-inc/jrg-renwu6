// node > progress(进度条) .pre() .next() .play() .pause( ) .timer>.current()
// .all()
// (function($){
  $.fn.musicPlayer = function(){
    var $audio = this.find("audio"),
        audio = $audio.get(0),
        $turn = this.find(".turn"),
        $next = this.find(".next"),
        $play = this.find(".play"),
        $pause = this.find(".pause"),
        $current = this.find(".current"),
        $total = this.find(".all"),
        $title = this.find("header h1"),
        $singer = this.find(".singer"),
        $like = this.find(".like"),
        $img = this.find("main img"),
        $progress = this.find("progress"),
        $category = this.find(".category"),
        progress = $progress.get(0),
        clock;
    getChannel();
    $play.on("click",function(){
      play();
    });
    $pause.on("click",function(){
      pause();
    });
    $like.on("click",function(){
      var self = $(this);
      if(self.hasClass('active')){
        self.removeClass('active');
      }else{
        self.addClass('active');
      }
    });
    $turn.on("click",function(){
      getChannel();
    });
    $next.on("click",function(){
      getSong();
    });
    function play(){
      audio.play();
      $play.hide();
      $pause.show();
      playProgress();
    }
    function pause(){
      audio.pause();
      $play.show();
      $pause.hide();
      pauseProgress();
    }
    function getChannel(){
      $.ajax({
        url:'http://api.jirengu.com/fm/getChannels.php',
        dataType:'json',
        Method:'get',
        success:function(response){
          // var response = JSON.parse(response);
          var channels = response.channels;
          var num = Math.floor(Math.random()*channels.length);
          var channelId = channels[num].channel_id;
          $category.text(channels[num].name);
          $category.attr('data-id',channelId);
          getSong();
      console.log(audio)
        }
      });
    }
    function getSong(){
      $.ajax({
        url: "http://api.jirengu.com/fm/getSong.php",
        dataType: 'json',
        Method: 'get',
        data:{
          'channel': $category.attr('data-id')
          // 'version':100,
          // 'type':'n'
        },
        success: function (ret){
          var resource = ret.song[0],
              url = resource.url,
              bgPic = resource.picture,
              sid = resource.sid,
              ssid = resource.ssid, // 歌词数据
              title = resource.title,
              author = resource.artist;
         $audio.attr("src",url);
         $audio.attr('sid',sid);
         $audio.attr('ssid',ssid);
         $title.text(title);
         $singer.text(author);
         $img.attr("src",bgPic);
         play();
         // getlyric();
        }
      })
    }
    // function getlyric(){
    //   $.post('http://api.jirengu.com/fm/getLyric.php', {ssid: $audio.attr("ssid"), sid: $audio.attr("sid")}).done(function(response){
    //     console.log(response)
    //   })
    // }
    function setProgress(){
      var currentTime = audio.currentTime,
          curMin = Math.floor(currentTime/60),
          curSec = Math.round(currentTime%60),
          duration = audio.duration,
          allMin = Math.floor(duration/60),
          allSec = Math.round(duration%60);
      if(curSec < 10){
        curSec = "0" + curSec;
      }
      if(allSec < 10){
        allSec = "0" + allSec;
      }
      var allStr = allMin + ":" + allSec;
      var curStr = curMin + ":" + curSec;
      progress.value = audio.currentTime;
      progress.max = audio.duration;
      $current.text(curStr);
      if($total.text() !== allStr){
        $total.text(allStr);
      }
      if(progress.value >= progress.max){
        getSong();
      }
    }
    function playProgress(){
      clock = setInterval(function(){
        setProgress();
      },1000);
    }
    function pauseProgress(){
      clearInterval(clock);
    }
    $progress.on("click",function(e){
      var posX = e.clientX;
      var targetLeft = $(this).offset().left;
      var percentage = (posX - targetLeft)/260;
      audio.currentTime = audio.duration * percentage;
    });
  }

// })(jQuery)
$(".poster").musicPlayer();
