//1. 完成如下代码判断一个变量是否是数字、字符串、布尔、函数 （难度*）
function isNumber(el){
    // todo ...
    if (typeof el==='number') {
        return true;
    } else {
        return false;
    }
}
function isString(el){
    //todo ...
    if (typeof el==='string') {
        return true;
    } else {
        return false;
    }
}
function isBoolean(el){
    //todo ...
    if (typeof el==='boolean') {
        return true;
    } else {
        return false;
    }
}
function isFunction(el){
    //todo ...
    if (typeof el==='function') {
        return true;
    } else {
        return false;
    }
}

var a = 2,
    b = "jirengu",
    c = false;
alert( isNumber(a) );  //true
alert( isString(a) );  //false
alert( isString(b) );  //true
alert( isBoolean(c) ); //true
alert( isFunction(a)); //false
alert( isFunction( isNumber ) ); //true






// 2. 以下代码的输出结果是?（难度**）
console.log(1+1); //2
console.log("2"+"4");//24
console.log(2+"4"); //24
console.log(+new Date());//1470989850482
// new Date()创建的日期对象自动获取当前的日期和时间，'+'号会把其他类型转换成Number类型，而
// 1470989850482表示的是UTC1970年1月1日零时到现在这个时刻经过的毫秒数
console.log(+"4");//4






// 3. 以下代码的输出结果是? （难度***）
var a = 1;
a+++a;//3

typeof a+2;//'number2'





//4. 遍历数组，把数组里的打印数组每一项的平方 （难度**）
var arr = [3,4,5]
// todo..
for (var i = 0; i < arr.length; i++) {
    console.log(Math.pow(arr[i],2));
}
// 输出 9, 16, 25







// 5. 遍历 JSON, 打印里面的值 （难度**）
var obj = {
  name: 'hunger',
  sex: 'male',
  age: 28
}

for (var a in obj) {
    console.log(a+':'+obj[a]);
}
//todo ...
// 输出 name: hunger, sex: male, age:28






//6. 下面代码的输出是? 为什么 （难度***）
console.log(a);//undefined，因为变量声明提升，a已经声明过，会被提到全局作用域的开头
var a = 1;
console.log(a);//1，因为a=1赋值
console.log(b);//报错，因为b没有被var关键字声明过
