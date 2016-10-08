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
        progress = $progress.get(0);
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
      getMusic();
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
          var channels = response.channels;
          var num = Math.floor(Math.random()*channels.length);
          var channelId = channels[num].channel_id;
          $audio.attr('data-id',channelId);
          getMusic();
        }
      });
    }
    function getMusic(){
      $.ajax({
        url: 'http://api.jirengu.com/fm/getSong.php',
        dataType: 'json',
        Method: 'get',
        data:{
          'channel': $audio.attr('data-id')
        },
        success: function (ret){
          var resource = ret.song[0],
              url = resource.url,
              bgPic = resource.picture,
              sid = resource.sid,
              ssid = resource.ssid, // 歌词数据
              title = resource.title,
              author = resource.artist;
         $audio.attr('src',url);
         $audio.attr('sid',sid);
         $audio.attr('ssid',ssid);
         $title.text(title);
         $singer.text(author);
         $img.attr("src",bgPic);
         play();
         // getlyric();//获取歌词,留着数据，稍后做
        }
      })
    }
    var clock;
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
        getMusic();
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
