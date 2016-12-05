$.fn.stickup = function(){
  var $this = this.data("sticked",false),
      $hei = this.height(),
      $wid = this.width(),
      $left = this.offset().left,
      $top = this.offset().top,
      $font = parseInt(this.css("font-size"));
      // $clone = this.clone().css({
      //   "width":$wid,
      //   "height":$hei,
      //   "display":"none"
      // }).insertBefore(this);
  judgeStick();
  $(document).on("scroll",function(){
    judgeStick();
  });
  function judgeStick(){
    var scrT = $(document).scrollTop(),
        top = $(window).height();
    if(scrT >= 400){
      if($this.data("sticked")) return;
      stickUp();
    }else{
      if(!$this.data("sticked")) return;
      cancelStick();
    }
  }
  function stickUp(){
    $this.css({
      "background-color":"#000",
      "height":parseInt($hei) + 10,
      "font-size":$font + 3 + "px"

      // "position":"fixed",
      // "top":0,
      // // "left":$left,
      // "width":$wid,
      // "height":$hei,
      // "z-index":555,
    }).data("sticked",true);
    // $clone.show();
  }
  function cancelStick(){
    $this.removeAttr("style").data("sticked",false);
    // $clone.hide();
  }
}