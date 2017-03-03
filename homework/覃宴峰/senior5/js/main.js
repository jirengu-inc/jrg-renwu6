requirejs.config({
    baseUrl:"./js",//相对路径，相对于加载main.js（或merge.js）入口脚本的index.html页面所在的路径.不要使用/，一个扛是绝对路径
　　　　paths: {
　　　　　　"jquery":"lib/jquery-3.1.1.min"//定义基础路径后，这里定义后其他地址时都会用到基础路径
　　　　}
　　});

requirejs(["index"]);//定义基础路径后，加载模块是默认会在模块名前加基础路径