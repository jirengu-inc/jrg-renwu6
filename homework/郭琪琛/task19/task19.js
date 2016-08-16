// 1. 写一个函数getIntv，获取从当前时间到指定日期的间隔时间
function getIntv(str) {
    var getTime = new Date(str),
        setTime = new Date(2016,1,7),
        dif = new Date(setTime-getTime),
        date = dif.getDate(),
        hour = dif.getHours(),
        min = dif.getMinutes(),
        sec = dif.getSeconds();

    return "距离除夕还有"+date+"天"+hour+"小时"+min+"分"+sec+"秒"
}
var str = getIntv("2016-01-08");
console.log(str);  // 距除夕还有 20 天 15 小时 20 分 10 秒

//2. 把数字日期改成中文日期
function getChsDate(str) {
    var num = ['零','一','二','三','四','五','六','七','八','九','十','十一'
    ,'十二','十三','十四','十五','十六','十七','十八','十九','二十'
    ,'二十一','二十二','二十三','二十四','二十五','二十六','二十七'
    ,'二十八','二十九','三十','三十一'],
        date = new Date(str),
        result = '';
    result = num[Math.floor(date.getFullYear()/1000)]
            +num[Math.floor(date.getFullYear()%1000/100)]
            +num[Math.floor(date.getFullYear()%1000%100/10)]
            +num[date.getFullYear()%1000%100%10]+'年';
    result+=num[date.getMonth()+1]+'月';
    result+=num[date.getDate()]+'日';
    return result;

}
var str = getChsDate('2015-01-08');
console.log(str);  // 二零一五年一月八日


//3. 写一个函数获取n天前的日期
function getLastNDays(num) {
    var now = new Date(),
        result = new Date(now.setDate(now.getDate()-num));
   return result.toLocaleDateString()
}
var lastWeek =  getLastNDays(7); // ‘2016-01-08’
var lastMonth = getLastNDays(30); //'2015-12-15'


//4. 完善如下代码，用于获取执行时间如：
var Runtime = (function(){
    //code here ...
    var st,et,hint;
    var obj = {
        start: function(){
              //code here ...， 当前时间
             hint = setInterval(function () {
                console.log("开始执行，我是秒表")
             },1000)
             st = Date.now()
            return st;
        },
        end: function(){
             //code here ...  结束时间
             clearInterval(hint);
             et = Date.now()
            return et
        },
        get: function(){
             //code here ...  获取执行时间
            var runTime = et-st,
                date = new Date(runTime),
                result = "执行了";
            result += date.getUTCHours()+'小时'+date.getMinutes()+'分钟'+date.getSeconds()+'秒'
            return result
        }
    };
return obj;
}());
Runtime.start();
//todo somethint
Runtime.end();
console.log(  Runtime.get() );

//5. 楼梯有200级，每次走1级或是2级，从底走到顶一共有多少种走法？用代码（递归）实现
//数列为1,2,3,5,8,13,21,...是一个第二项为2的斐波那契数列，即a(1)=1,a(2)=2,当n>3时，a(n)=a(n-1)+(n-2);
function fn(num) {
    var result;
    if (num===1) {
        result=1;
    } else if (num===2) {
        result=2;
    } else if (num>2) {
        result=fn(num-1)+fn (num-2);
    }
    return result
}

//6. 写一个json对象深拷贝的方法，json对象可以多层嵌套，值可以是字符串、数字、布尔、json对象中的任意项
function copyJson(obj) {
    var result = {};
    for(var i in obj) {
        if (typeof i === 'object') {
            result[i] = (Object.prototype.toString.call(i) === '[object Array]')?[]:{}
            copyJson(i);
        } else {
            result[i] = obj[i]
        }
    }
    return result;
}
// 测试用例
var a = {
    name: 'gqc',
    age: 23,
    school: [
        'dhyz',
        'zucc'
    ],
    friendTom: {
        name: 'Tom',
        age: 23,
        school: [
            'dhyz',
            'zucc'
        ]
    }
};
a = JSON.parse(JSON.stringify(a));
var b = copyJson(a);
console.log(b)
a.name = 'jrg'
console.log(b.name)
