$.fn.location = function(){
  var navbar = this.find("#header").find($(".nav")).children();
  var location = this.find(".location");
  var currentId = "";
  $(document).on("scroll",function(){
    location.each(function(){
      var $self = $(this);
      var top = $(document).scrollTop();
      if(top >= $self.offset().top){
        currentId = "#" + $self.attr("id");
      }
      // else{
      //   return false;
      // }
    });
    navbar.each(function(){
      var $this = $(this).find("a");
      if(currentId !== $this.attr("href") && $this.hasClass('active')){
        $this.removeClass('active');
      }else{
        if(currentId === $this.attr("href") && !$this.hasClass('active')){
          $this.addClass('active');
        }
      }
    })
  })
}