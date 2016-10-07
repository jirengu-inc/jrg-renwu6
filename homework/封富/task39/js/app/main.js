define(["jquery","carousel","stickup","location"],function($){
  $(function(){
    $("#carousel").Carousel();
    $("#header").stickup();
    $("body").location();
  })
})