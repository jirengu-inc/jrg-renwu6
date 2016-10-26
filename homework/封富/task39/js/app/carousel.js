// div#ct(.c-ct>.C-section*n)+div.C-up+div.c-down+div.C-index*n

  $.fn.Carousel = function(){
    var $ct = this.find(".C-ct"),
        Swidth = $ct.children().width(),
        $up = this.find(".C-up"),
        $down = this.find(".C-down"),
        $index = this.find(".C-index"),
        idxNum = $index.size(),
        $section = $ct.children(),
        $last = $section.last().clone(),
        $first = $section.first().clone(),
        clock,
        lock = false;
    $ct.append($first);
    $ct.prepend($last);
    var secNum = $ct.children().size();
    $ct.css({
      "width":Swidth * secNum,
      "left":-Swidth
  });
    function playNext(idx){
      if(lock) return;
      lock = true;
      var idx = idx || 1;
      var curIdx = activeIdx();
      $ct.animate({
        "left": "-=" + (idx * Swidth)},
        function(){
          var idxNow = (curIdx + idx)%idxNum;
          changeIndex(curIdx,idxNow);
          if((idx + curIdx)%idxNum === 0){
            $ct.css("left",-Swidth);
          }
        lock = false;
      });
    }
    function playPre(idx){
      if(lock) return;
      lock = true;
      var idx = idx || 1;
      var curIdx = activeIdx();
      $ct.animate({
        "left": "+=" + idx * Swidth},
        function(){
          var idxNow = (curIdx - idx + idxNum)%idxNum;
          changeIndex(curIdx,idxNow);
          if(curIdx - idx === -1){
            $ct.css("left",-idxNum * Swidth);
          }
        lock = false;
      });
    }
    function changeIndex(curIdx,idxNow){
      $index.removeClass('active');
      $index.eq(idxNow).addClass('active');
    }
    function activeIdx(){
      for(var i = 0;i < idxNum;i++){
        if($index.eq(i).hasClass('active')){
          return i;
        }
      }
    }
    $up.on("click",function(){
      playPre();
    })
    $down.on("click",function(){
      playNext();
    })
    $index.on("click",function(){
      var idx = $(this).index();
      var recIdx = activeIdx();
      if(recIdx > idx){
        playPre(recIdx - idx);
      }else if(idx > recIdx){
        playNext(idx - recIdx);
      }
    })
    function autoPlay(){
      clock = setInterval(function(){
        playNext();
      },3000);
    }
    function stopPlay(){
      clearInterval(clock);
    }
    autoPlay();

  };