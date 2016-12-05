requirejs.config({
    baseUrl: './js/app',
    paths: {
        lib: '../lib',
        jquery: '../lib/jquery-1.11.3.min'
    }
});


requirejs(['jquery','person','carousel','gotop','exposure','waterfall'],function   ($,Person,Carousel,GoTop,Exposure,Waterfall) {

    var p = new Person('skylun');
    p.sayName();

    new Carousel();
    new GoTop($('body'),$('<div id="go-top">回到顶部</div>'));
    new Exposure($(".timeline li"));
    var waterfall = new Waterfall();
	//waterfall.init();


});
