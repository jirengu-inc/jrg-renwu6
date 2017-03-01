define(["jquery","tools/carsoule","tools/waterfall","tools/gotop"],function($,Carsoule,Waterfall,Gotop){
    //这里的回调函数中的参数只是个占位符，定义模块时必须要return内容（接口）后，这里的主模块加载后才能调用对应的模块，如果定义模块不返回内容
    //主模块加载后会提示找不到模块
    Carsoule.newcarousel()//调用对应模块中立即执行函数返回的方法，carsoule模块定义时的立即执行函数是newCarousel，返回的对象方法是newcarousel（注意大小写区别）
    //所以主模块加载carsoule.js后调用模块中的方法还是用.newcarousel(),而不是newGotop()。模块中return的newGotop是模块定义后返回的接口
    Waterfall.newwaterfall()
    Gotop.newgotop()
})