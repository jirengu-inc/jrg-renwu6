function ajax(opts){
    //创建ajax对象
    var xmlhttp = new XMLHttpRequest();
    //对ajax进行事件监听
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState ===4 && xmlhttp.status === 200){
            //将服务器返回的文本内容转为JSON格式
            var json = JSON.parse(xmlhttp.responseText);
            opts.success(json);;
        }
        if(xmlhttp.status === 404){
            opts.error()
        }
    };
    //创建发送到服务器的数据，为了数据附加到url上，必须为key/value格式。
    var dataStr = "";
    for (var key in opts.data) {
        dataStr += key + '=' +opts.data[key]+'&';
    }
    dataStr = dataStr.substr(0,dataStr.length-1);
    //判断请求的方式为get
    if(opts.type.toLowerCase() === "get"){
        //链接服务器
        xmlhttp.open('GET',opts.url+'?' +dataStr,true);
        //发送请求
        xmlhttp.send();
    }
    //判断请求方式为post
    if(opts.type.toLowerCase() === "post"){
        //链接服务器
        xmlhttp.open('POST',opts.url,true);
        //为了使post请求与提交web表单相同，将 Content-Type 头部信息设置为 application/x-www-form-urlencoded来模仿表单提交功能。
        xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
        xmlhttp.send(dataStr);
    }
}

