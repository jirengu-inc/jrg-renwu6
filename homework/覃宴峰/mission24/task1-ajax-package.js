function ajax(opts){        //opts即调用ajax函数时传入的参数，这里opts为对象{a:1,b:2,c:3......}
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState===4 && xmlhttp.status===200){
            var json=JSON.parse(xmlhttp.responseText);      //将服务器响应后传回的文本内容转换为JSON格式
            opts.success(json);     //rreadyState为4且状态为200时，表示服务器响应已就绪，执行success()函数
        } else if(xmlhttp.status===404){    
            opts.error();       //状态为404时执行error()函数
        }
    }
    

    var post_opt='';        //创建XHR.open()方法中传入的第二个参数即?username=zs&password=123.....
    for(var key in opts.data){      //opts.data即调用ajax函数时预先定义的data参数，这个预先定义的data参数必须是key:value形式
        post_opt += key+'='+opts.data[key]+'&';//opts.data[key]取出data对象中各成员key对应的value值
    }
    post_opt=post_opt.substr(0,post_opt.length-1);//去除生成的post_opt末尾的&符号


    if(opts.type.toLowerCase()==='get'){    //调用ajax函数传入的参数type为get时执行GET请求
        xmlhttp.open("GET",opts.url+'?'+post_opt,true);
        xmlhttp.send();
    } else if(opts.type.toLowerCase()==='post'){        //调用ajax函数传入的参数type为post时执行POST请求
        xmlhttp.open("POST",opts.url,true);
        xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xmlhttp.send(post_opt);
    }    
}

// 注意，事件调用ajax函数中用到的success()函数，error()函数可以不写在上面封装代码中，为的是让上面封装的代码复用性
// 更高，因为不同事件调用ajax函数后，其执行的success函数和error函数的功能并不一样
