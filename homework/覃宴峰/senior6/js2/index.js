var $=require('jQuery');//这里加载的jquery模块是webpack.config.js里定义的jquery插件名称
var carsoule=require('./app/carsoule');//./相对路径，相对当前index.js文件所在目录为起始目录，模块名为js文件名
var gotop=require('./app/gotop');
var waterfall=require('./app/waterfall');

carsoule.newcarousel();//这里是用定义的模块.js代码立即函数执行返回的函数名()
gotop.newgotop();//这里是用定义的模块.js代码立即函数执行返回的函数名()
waterfall.newwaterfall();//这里是用定义的模块.js代码立即函数执行返回的函数名()