
function ajax(o){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status ==200){
                //将服务器返回的文本内容转为JSON格式
                var json = JSON.parse(xhr.responseText);
                o.success(json);
            }
            if(xhr.status == 404){
                o.error();
            }   
    };
    //创建发送到服务器的数据，为了让数据附加到url上，必须为key/value格式
    var dataStr = "";
    for (var key in o.data){
        dataStr +=key + "=" +o.data[key]+"&";
    }
    dataStr = dataStr.substr(0,dataStr.length-1);
    //判断请求的方式为get
    if(o.type.toLowerCase() === "get"){
        xhr.open(o.type,o.url+'?'+dataStr,true);
        xhr.send();
    };
    //判断请求方式为post
    if(o.type.toLowerCase() === "post"){
        xhr.open(o.type,o.url,true);
        //设置http请求头部，按键值对解析
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.send(dataStr);
    }
}