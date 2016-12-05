/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-29 19:00:20
 * @version $Id$
 */

		//用正则表达式判断输入的用户名，只能是字母、数字、下划线，3-10个字符
		function isLegalUsername(str){
			var regExp = /^[a-zA-Z0-9_]{3,16}$/;
			return regExp.test(str);
		}
		//用正则表达式判断输入的密码，大写字母、小写、数字、下划线最少两种，6-15个字符
		function isLegalPassword(str){
			if(6>str.length || str.length>15){
        		return false;  //判断长度是否合法,不合法返回false
    		}  
    		if(/[^a-zA-Z0-9_]/.test(str)){
        		return false;  //如果字符串中值在给定的集合外，返回false
    		}
		    if(/(^[a-z]+$)|(^[A-Z]+$)|(^\d+$)|(^_+$)/g.test(str)){
		        return false;  //如果字符串只有其中的一种类型，返回false
		    }
		    return true;  //其他的情况都返回true
		}