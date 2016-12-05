/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-29 18:56:50
 * @version $Id$
 */
		//把封装好的Ajax放进来
    	function ajax(opts){   //opts是传递的json对象
		  	var xmlhttp = new XMLHttpRequest();

		  	//将下面要传递的data中json参数转换为字符串格式
		  	var dataStr = "";
		  	for( var key in opts.data){ 
		      	dataStr += key + "=" +opts.data[key] +"&"
		  	}
		  	dataStr = dataStr.substr(0, dataStr.length-1);  //去掉字符串中最后一个&符号

		  	if(opts.type.toLowerCase()==="post"){
		      	xmlhttp.open(opts.type, opts.url, true );
		      	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		      	xmlhttp.send(dataStr);
		  	}
		  	if(opts.type.toLowerCase()==="get"){
		      	xmlhttp.open(opts.type, opts.url+"?"+dataStr, true );
		      	xmlhttp.send();
		  	}

		  	xmlhttp.onreadystatechange = function(){ 
		      	if( xmlhttp.readyState==4 && xmlhttp.status==200 ){ 
		         	var json = JSON.parse(xmlhttp.responseText);  //把返回的json格式的字符串解析成json对象
		          	opts.success(json);  //执行success函数
		      	}
		      	if( xmlhttp.readyState==4 && xmlhttp.status==404 ){ 
		          	opts.error()
		      	}
		  	}
		}
