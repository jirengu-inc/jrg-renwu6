define(['jquery','com/carousel','com/goTop','com/ajaxModule','com/waterfall','com/exposure'],function($,Carousel,goTop,ajaxModule,waterFall,Exposure){

	new goTop();
	Carousel.init($('.carousel'));
	ajaxModule.init($('.load-btn'));
	Exposure.one($('.about ul>li'),function(){
		var $this = $(this);
		$this.css({opacity:1});
	});
})





