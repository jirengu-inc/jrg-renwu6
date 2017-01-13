// 代码1:用 splice 实现 push、pop、shift、unshift方法
function push(arr,val){
	arr.splice(arr.length,0,val);
	return a.length;
}

function pop(arr){
	return arr.splice(arr.length-1,1)[0];
}

function shift(arr){
	return arr.splice(0,1)[0];
}

function unshift(arr,val){
	arr.splice(0,0,val);
	return a.length;
}


// code2：使用数组拼接出如下字符串
var prod={
	name:'女装',
	styles:['短款','冬季','春装']
};
function getTplStr(data){
	var clothes=[];
	clothes.push( '<dl class="product">');
	clothes.push(     '<dt>data.name</dt>');
	for(var i=0;i<data.styles.length;i++){
		clothes.push(     '<dd>'+data.styles[i]+'</dd>')
	};
	clothes.push( '</dl>' );
	return clothes.join('');
}
var result=getTplStr(prod);
// console.log(result);


//code3:写一个find函数，实现下面的功能 
function find(arr,val) {
	for(var i=0;i<arr.length;i++){
		if(arr[i]==val){
			return i;
		}
	}
	return -1;
}

var a = [ "test", 2, 1.5, false ]
find(a, "test") // 0
find(a, 2) // 1
find(a, 0) // 3

function find(arr,val){
	return arr.indexOf(val);
}
var b = [ "test", 2, 1.5, false ]
find(b, "test") // 0
find(b, 2) // 1
find(b, 0) // -1


//code 4:写一个函数filterNumeric，把数组 arr 中的数字过滤出来赋值给新数组newarr， 原数组arr不变
function filterNumeric(arr) {
	var newArr=arr.filter(function(e){
		return !isNaN(e);
	});
	return newArr;
}

//code 5:对象obj有个className属性，里面的值为的是空格分割的字符串(和html元素的class特性类似)，写addClass、removeClass函数
function addClass(obj,val){
	var a=obj.className.split(' ');
	if(a.some(function(e,i,arr){
			return e==val;
		}) == true){
		return;
	}else{
		a.push(val);
		obj.className=a.join(' ');
	}
}

function removeClass(obj,val){
	var arr=obj.className.split(' ');
	while(arr.indexOf(val)!=-1){
		arr.splice(arr.indexOf(val),1);
		obj.className=arr.join(' ');
	}
}


//code 6:写一个camelize函数，把my-short-string形式的字符串转换成myShortString形式的字符串
function camelize(str){
   var arr=str.split('-');   
   for(var i=0; i<arr.length; i++){
      var word=arr[i];
      var upLetter=word.charAt(0).toUpperCase();
      arr[i]=word.replace(word.charAt(0),upLetter);  //arr[i]不能用word代替  ;体会str.replace(str.charAt(),参数)，的写法
   }
   return arr.join('');
}

// code 7:如下代码输出什么?为什么？
arr = ["a","b"];
arr.push( function() { alert(console.log('hello hunger vally'))});
arr[arr.length-1]();
/*弹窗显示undefined，控制台出现hello hunger vally。
数组最后一个元素是一个函数，arr[arr.length-1]()会立即调用该函数，console.log()返回undefined，
alert(undefined)显示弹窗undefined；console.log('hello hunger vally')会在控制台显示hello hunger vally。*/


//code 8:写一个isPalindrome,判断一个字符串是不是回文字符串(正读和反读一样)

function isPalindrome(str){
	var arr=str.split('');
	var judge=arr.every( function(e,i,arr){
		return e==arr[arr.length-1-i];
	} )
	return judge;
}


//code 9:写一个ageSort 函数实现数组中对象按age从小到大排序
function ageSort(arr){
	arr.sort(function(v1,v2){
		return v1.age-v2.age;
	})
}
var john = { name: "John Smith", age: 23 };
var mary = { name: "Mary Key", age: 18 };
var bob = { name: "Bob-small", age: 6 };
var people = [ john, mary, bob ];
console.log(ageSort(people));


//code 10: 写一个 fliter(arr,func) 函数用于过滤数组，介绍两个参数，第一个是要处理的数组，第二个参数是
// 回调函数（回调函数便利接受每一个数组元素，当函数返回true时保留该元素，否则删除该元素）。实现如下功能
function filter(arr,func){
	return arr.filter(func); 
}
function isNumeric (el){
    return typeof el === 'number'; 
}
var arr = ["a",3,4,true, -1, 2, "b"];
filter(arr,isNumeric); //返回[3,4,-1,2]


//字符串：
//code 1：写一个ucFirst 函数，返回第一个字母为大写的字符
function ucFirst(str){
	var upLetter = str.charAt(0).toUpperCase();
	str = str.replace(str.charAt(0),upLetter);
	return str;
}


//code 2: 写一个函数 truncate(str,maxlength), 如果str 的长度大于 maxlength 长，并加上... 
function truncate(str,maxlength){
	var newStr= str.substr(0,maxlength) + '...'; //str.sunstr 的s时小写
	return newStr;
}


// 数学函数：
//code 1：写一个函数，获取从min到max之间的随机整数，包括min不包括max
function getRandomNumber(min,max) {
	return Math.floor( Math.random()*(max - min) + min);
}

//code 2:写一个函数，获取从min都max之间的随机整数，包括min包括max
function getInteger(min,max) {
	return Math.floor(Math.random()*(max-min+1) + min); 
}

//code 3:写一个函数，获取一个随机数组，数组中元素为长度为len，最小值为min，最大值为max(包括)的随机整数 
function getRandomArr(len,min,max) {
	var arr=[];
	for(var i=0; i<len; i++){
		var val=min + Math.floor(Math.random()*(max-min+1));
		arr.push(val);
	}
	return arr;
}  

// code 4:写一个函数，生成一个长度为 n 的随机字符串，字符串字符的取值范围包括0到9，a到 z，A到Z
function getRandStr(len){
	var str='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var result='';
	for(var i=0; i<len; i++){
		result += str[Math.floor(Math.random()*str.length)];
	}
	return result;
}
var str=getRandStr(10);
