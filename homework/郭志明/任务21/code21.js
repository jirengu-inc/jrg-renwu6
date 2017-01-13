//code 1：写一个函数trim(str)，去除字符串两边的空白字符：
function trim(str){
	var pattern=/^\s+|\s+$/g;
	if(pattern.test(str)){
		str=str.replace(pattern,"");
	}
	return str;
}
var word="  digjl dg df  ";
console.log(trim(word)); //返回"digjl dg df"


//code 2：使用实现 addClass(el, cls)、hasClass(el, cls)、removeClass(el,cls)，使用正则

function hasClass(el, cls) {
	var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)')
	return reg.test(el.className);
}

function addClass(el, cls) {
	if (!hasClass(el, cls)) {
		el.className += " " + cls;
	}
}

function removeClass(el, cls) {
	var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)'),
	tmp = node.className.replace(reg, '').replace(/\s{2,}/g, ' '); 
	el.className = trim(tmp);
}


//code 3：写一个函数isEmail(str)，判断用户输入的是不是邮箱：
function isEmail(str){
	var reg=/^\w+@{1}\w+\.{1}\w+/;
	if (reg.test(str)){

	}else{
		return "请仔细检查邮箱格式！";
	} ;
}
str="2_403,934@sdid.diddg";
console.log(isEmail(str));


//code 4：写一个函数isPhoneNum(str)，判断用户输入的是不是手机号
function isPhoneNum(num){
	var reg=/^1\d{10}$/g;
	return reg.test(num);
}
var a="12345678945";
console.log(isPhoneNum(a));


//code 5：写一个函数 isValidUsename(str)，判断用户输入的是不是合法的用户
//名（长度6-20个字符，只包括大写字母、小写字母、数字、下划线）
function isPhoneUsename(str){
	var reg=/^\w{6,20}$/g;
	if(reg.test(str)){

	}else{
		return "用户名长度为6-20，只包括大写字母、小写字母、数字、下划线";
	}
}


//code 6：写一个函数 isValidUsename(str)，判断用户输入的是不是合法的密码
//（长度6-20个字符，只包括大写字母、小写字母、数字、下划线，且至少包括两种）
function isValidPassword(str){
	var reg1=/^\w{6,20}$/g,
		 reg2=/^_{6,20}$|^[a-z]{6,20}$|^[A-Z]$|^\d{6,20}$/;
	if(reg1.test(str)&&(!reg2.test(str))){
		return "你对了";
	}else{
		return "密码长度6-20位，包括大写字母、小写字母、数字、下划线中的两种";
	}
}
var pw="ewe3dwr";
console.log(isValidPassword(pw));


//code 7：写一个正则表达式，得到如下字符串里所有的颜色（#121212）
var reg= /#[0-9a-zA-Z]{6}/g;
var subj="color: #121212; background-color: #AA00ef; width: 12px; bad-color: f#fddee #fd2";
alert(subj.match(reg)) ; //#121212 #AA00ef


//code 8：下面代码输出什么？为什么？改写代码，让其输出hunger，world
var str='hello "hunger" hello "world"';
var pat=/ ".*"/g;
str.match(pat);
// 输出[""hunger" hello "world""],

//修改为非贪婪模式
var str='hello "hunger" hello "world"';
var pat=/ ".*?"/g;
str.match(pat); //[" "hunger"", " "world""]


//code 9：补全如下正则表达式，输出字符串中的注释内容. (可尝试使用贪婪模式和非贪婪模式两种方法)
str = '.. <!-- My -- comment \n test --> ..  <!----> .. ';
re = /<!--[\s\S]*?-->/g;
str.match(re);  //非贪婪模式

str = '.. <!-- My -- comment \n test --> ..  <!----> .. ';
re = /<!--[^>]*-->/g;
str.match(re); //贪婪模式     如果遇到字符串中含有多余的">"就失效了，看了其他回答，也没有很好解决问题，请老师指正
//比如str1='.. <!-- My -- comment \n test a>b --> ..  <!----> .. ';

//code 10：补全如下正则表达式
var re = /<[^>]+>/g;
var str = '<> <a href="/"> <input type="radio" checked> <b>';
str.match(re);  // '<a href="/">', '<input type="radio" checked>', '<b>'
