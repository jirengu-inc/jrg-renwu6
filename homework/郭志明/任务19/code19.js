//code 1：写一个函数getIntv，获取从当前时间到指定日期的间隔时间
function getIntv(str){
	var now = Date.now();
	var then = Date.parse(str);
	var getD=Math.floor((then-now)/(24*60*60*1000));
	var getH=Math.floor((then-now-getD*24*60*60*1000)/(60*60*1000));
	var getM=Math.floor((then-now-getD*24*60*60*1000-getH*60*60*1000)/(60*1000));
	var getS=Math.floor((then-now-getD*24*60*60*1000-getH*60*60*1000-getM*60*1000)/1000);
	var newStr='距离除夕还有'+getD+'天'+getH+'小时'+getM+'分'+getS+'秒';
	return newStr;
}
var str=getIntv('2017-1-27'); //'2017-01-01'返回的是标准时间，'2017-1-1'本地时间
console.log(str);

//code 2：把数字日期改成中文日期
function getChsDate(str){
   var map={ 0: "零",1: "一",2: "二",3: "三",4: "四",5: "五",6: "六",7: "七",8: "八",9: "九",10: "十",
           11: "十一",12: "十二",13: "十三",14: "十四",15: "十五",16: "十六",17: "十七",18: "十八",
           19: "十九",20: "二十",21: "二十一",22: "二十二",23: "二十三",24: "二十四",25: "二十五",
           26: "二十六", 27: "二十七", 28: "二十八", 29: "二十九",30: "三十", 31: "三十一"
         };
   var date = new Date(str);
   var year = date.getFullYear().toString();
   for( var i=0; i<year.length; i++){
      year=year.replace(year.charAt(i),map[year.charAt(i)]);
   } 
   year=year+'年';
   month=map[date.getMonth()+1] + '月';
   getdate=map[date.getDate()]+'日';
   var result=year+month+getdate;
   return result;
}
console.log(getChsDate('1040-10-22'));
	



//code 3：写一个函数获取n天前的日期
function getLastDate(val) {
	var today=Date.now();
	var then=new Date(today-val*24*60*60*1000);
	// return then.toLocaleDateString();  // 返回2016/11/5
	return then.getFullYear()+'-'+(then.getMonth()+1)+'-'+then.getDate();
}


//code 4：完善如下代码，用于获取执行时间：

var Runtime = (function(){
    var start,end,executeTime;  
    var obj = {
        start: function(){
            start=Date.now();
            return start;  // 开始时间
        },
        end: function(){
            end=Date.now(); 
            return end;  //  结束时间
        },
        get: function(){
            executeTime=end - start;
            return executeTime;   //  获取执行时间
        }
    };
return obj;  // 返回obj，怎么就把数字返回出来了？
}());
Runtime.start();
for(var i=0; i<1000; i++){
	console.log(1);
}   //todo somethint
Runtime.end();
console.log(  Runtime.get() ); //236



//code 5：楼梯有20级，每次走1级或是2级，从底走到定一共有多少种走法？用代码（递归）实现
function recursion(floorsteps){
	if(floorsteps<2){
		return 1;
	}else{
		return recursion(floorsteps-1)+recursion(floorsteps-2);
	}
}

//code 6:写一个json对象深拷贝的方法，json对象可以多层嵌套，值可以是字符串、数字、布尔值、json对象
//中的任意项（ PS:尝试另外一种方法 var obj2 = JSON.parse( JSON.stringify(obj1) ）
//递归深拷贝
function deepCopy(obj){
	var newObj={};
	for(var key in obj){
		if(typeof obj.key=='object'){
			newObj[key]=deepCopy(obj[key]);
		}else{
			newObj[key]=obj[key];
		}
	}
	return newObj;
}

//JSON实现深拷贝
function dCopy(obj){
	var newObj=JSON.parse(JSON.stringify(obj));
	return newObj;
}
var hill={
	"枯": "藤",
	"老": "树",
	"昏": "鸦",
	"nest": {
		"小": "桥",
		"流": "水",
		"人": "家"
	},
	"ab": function(){},
	"arr":[3,4,5,65]
};
var a=deepCopy(hill),
    b=dCopy(hill);
console.log(hill.ab); //function(){}
console.log(a.ab);   //function(){}
console.log(b.ab);  //undefined   JSON深拷贝不能复制方法，会丢失