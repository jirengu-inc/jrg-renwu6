//1. 下面的代码输出多少？修改代码让fnArr[i]() 输出 i。使用两种以上的方法
var fnArr = [];
for (var i = 0; i < 10; i ++) {
    fnArr[i] =  function(){
        return i;
    };
}
console.log( fnArr[3]() );  //输出10，因为访问的是全局的i，遍历完之后全局的i为10
//修改一
var fnArr = [];
for (var i = 0; i < 10; i ++) {
    fnArr[i] =  function(num){
        return function() {
            return num;
        };
    }(i);
}
console.log( fnArr[3]() );
//修改二
var fnArr = [];
for (var i = 0; i < 10; i ++) {
    (function (i) {
        fnArr[i] =  function(){
            return i;
        };
    })(i)
}
console.log( fnArr[3]() );






























//2. 使用闭包封装一个汽车对象，可以通过如下方式获取汽车状态
var Car = {
    speed: 0,
    setSpeed: function (s) {
        Car.speed = s;
    },
    getSpeed: function () {
        return Car.speed;
    },
    accelerate: function () {
        Car.speed+=10;
    },
    decelerate: function() {
        Car.speed-=10;
    },
    getStatus: function() {
        if (Car.speed===0) {
            return 'stop';
        }
        return 'running';
    }
};//todo
Car.setSpeed(30);
Car.getSpeed(); //30
Car.accelerate();
Car.getSpeed(); //40;
Car.decelerate();
Car.decelerate();
Car.getSpeed(); //20
Car.getStatus(); // 'running';
Car.decelerate();
Car.decelerate();
Car.getStatus();  //'stop';
//Car.speed;  //error






































//3. 写一个函数使用setTimeout模拟setInterval的功能
//两种写法，写法一
!function fn() {
    setTimeout(function () {
        console.log(1)
        fn()
    },1000)
}()

//写法二
setTimeout(function () {
    console.log(1)
    setTimeout(arguments.callee,1000)
},1000)
































//4. 写一个函数，计算setTimeout平均[备注：新加]最小时间粒度
//最小时间粒度
(function () {
    var arr = [5],//一开始先假设最小是5ms
        count = 0
    !function minFn() {
        var start = new Date()
        setTimeout(function () {
            var end = new Date(),
                minTime = end-start
            arr.sort(function (value1,value2) {
                return value1-value2
            })
            if (arr[0]>minTime) {
                arr.unshift(minTime)
            }
            count++;
            if (count === 100) {
                console.log(count+'次中的最小时间粒度是'+arr[0]+'ms')
                return
            }
            console.log('第'+count+'次测试的时间粒度为'+minTime+'ms')
            minFn()
        },0)
    }()
})()
//平均时间粒度
(function () {
    var count = 0,
        minTime = 0
    !function minFn() {
        var start = new Date()
        setTimeout(function () {
            var end = new Date();
            minTime+=(end-start)/100
            count++
            if (count === 100) {
                minTime = minTime.toFixed(2)
                console.log(count+'次中的平均时间粒度是'+minTime+'ms')
                return
            }
            minFn()
        },0)
    }()
})()






















//5. 下面这段代码输出结果是? 为什么?
var a = 1;
setTimeout(function(){
    a = 2;
    console.log(a);
}, 0);
var a ;
console.log(a);
a = 3;
console.log(a);
//输出1，3，2，因为js是单线程的，setTimeout的回调函数在任务队列中，
//只有当同步任务执行完以后才会执行任务队列的任务



















//6. 下面这段代码输出结果是? 为什么?
var flag = true;
setTimeout(function(){
    flag = false;
},0)
while(flag){}
console.log(flag);
//不会输出，进入死循环，因为setTimeout的回调函数会在while和console.log之后才执行
//因为只有当同步任务执行完以后才会执行队列任务的任务
















//7. 下面这段代码输出？如何输出delayer: 0, delayer:1...（使用闭包来实现）
for(var i=0;i<5;i++){
    setTimeout(function(){
         console.log('delayer:' + i );//delayer: 5, delayer: 5, ...
    }, 0);
    console.log(i);//1,2,3,4,5
}
//实现方法
for(var i=0;i<5;i++){
    setTimeout(function(i){
         console.log('delayer:' + i );
    }, 0, i);
    console.log(i);
}