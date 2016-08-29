// 1.以下代码输出什么？ （难度**）
function getInfo(name, age, sex){
    console.log('name:',name);
    console.log('age:', age);
    console.log('sex:', sex);
    console.log(arguments);
    arguments[0] = 'valley';
    console.log('name', name);
}

getInfo('hunger', 28, '男');
//name: hunger，age: 28，sex: 男，['hunger',28,'男']，name: valley
getInfo('hunger', 28);
//name: hunger，age: 28，sex: undefined，['hunger',28]，name: valley
getInfo('男');
//name: 男，age: undefined，sex: undefined，[男']，name: valley














// 2. 写一个函数，返回参数的平方和？如 （难度**）
function sumOfSquares() {
    var result=0;
    for (var i = 0; i < arguments.length; i++) {
        if(typeof arguments[i]!=='number') {
            alert("请输入数字");
            return;
        }
        result+=Math.pow(arguments[i],2);
    }
    return result;
}

sumOfSquares(2,3,4); //29
sumOfSquares(1,3); //10














// 3.如下代码的输出？为什么 （难度*）
    console.log(a);//undefined，因为变量声明提升了
    var a = 1;
    console.log(b);//报错，因为b还没有被声明过
















// 4.如下代码的输出？为什么 （难度*）
    sayName('world');//hello  world，因为函数声明提升
    sayAge(10);//报错，函数表达式不会提升，所以sayAge不是很函数，会报错
    function sayName(name){
        console.log('hello ', name);
    }
    var sayAge = function(age){
        console.log(age);
    };














//5.如下代码的输出？为什么 （难度**）
    function fn(){}
    var fn = 3;
    console.log(fn);//3，因为js的变量是动态的，不需要规定所储存的数据类型，所以后面的
    //赋值就把前面的函数声明给盖过了
















// 6.如下代码的输出？为什么 （难度***）
function fn(fn2){
   console.log(fn2);//function fn2() {...}，在函数内部函数声明>参数
   var fn2 = 3;
   console.log(fn2);//3，变量fn2的值被重新赋值为3
   console.log(fn);//function fn(fn2) {...}
   function fn2(){
        console.log('fnnn2');//没有任何输出，因为函数fn2没被调用
    }
 }
fn(10);















// 7.如下代码的输出？为什么 （难度***）
var fn = 1;
function fn(fn){
     console.log(fn);
}
console.log(fn(fn)); //报错，因为函数声明提升，fn被1赋值，不是函数


















// 8.如下代码的输出？为什么 （难度**）
//作用域
console.log(j);//undefined，变量声明提升
console.log(i);//undefined，变量声明提升
for(var i=0; i<10; i++){
    var j = 100;
}
console.log(i);//10，js没有块级作用域，for循环执行完之后i=10
console.log(j);//100，js没有块级作用域














// 9.如下代码的输出？为什么 （难度****）
fn();
var i = 10;
var fn = 20;
console.log(i);//10，全局作用域下只有i=10
function fn(){
    console.log(i);//undefined，变量声明提升但是赋值没有提升
    var i = 99;
    fn2();
    console.log(i);//100，函数fn2已经执行，fn作用域下的i被改为100
    function fn2(){
        i = 100;
    }
}


















//10.如下代码的输出？为什么 （难度*****）
var say = 0;
(function say(n){
    console.log(n);//10,9,8,7,6,5,4,3,2，递归调用本身，当n=2时满足n<3的条件所以return
    if(n<3) return;
    say(n-1);
}( 10 ));
console.log(say);//0，因为say函数内部有参数n，不会引用全局作用域的变量say