function ajax(opts) {
    var xmlhttp;
    if(window.XMLHttpRequest) {           //IE7+,chrome,Safari,Opera,Firefox
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new AcitveXObject("Microsoft.XMLHTTP");  //IE5,IE6
    }
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function () {
        if(xmlhttp.readyState==4&&xmlhttp.status==200){
            var json=JSON.parse(xmlhttp.responseText);//解析json,将服务器返回的文本内容转为JSON格式
            opts.success(json);//执行这个json
        }
        if(xmlhttp.readyState==4&&xmlhttp.status==404){
            opts.error();
        }
    };
    //创建发送到服务器的数据，为了让数据附加到url上，必须为key/value格式
    var dataStr="";
    for(var key in opts.data){
        dataStr+=key+"="+opts.data[key]+"&";
    }
    dataStr=dataStr.substr(0,dataStr.length-1);//得到的结果就是把data变为key和value的形式
    //判断请求的方式是get/Post
    if(opts.type.toLowerCase()==="get"){
        xmlhttp.open("opts.type",opts.url+'?'+dataStr,true);
        xmlhttp.send();
    }
    if(opts.type.toLowerCase()==="post"){
        xmlhttp.open("opts.type",opts.url,true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send(dataStr);
    }
}
