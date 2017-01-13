//下面的代码输出多少？修改代码让fnArr[i]() 输出 i。使用两种以上的方法
// 法一
var fnArr = [];
for(var i=0; i<10; i++){
	(function(){
		var a=i;
		fnArr[i]=function(){
			return a;
		}
	})()
}
console.log ( fnArr[3]() )

// 法二

var fnArr=[];
for(var i=0; i<10; i++){
	var d=(function(a){
			fnArr[i]=function(){
				return a;
			}
		})(i)
}
console.log(fnArr[3]());  //函数表达式

//三
var fnArr=[];
for(var i=0; i<10; i++){
   fnArr[i]=(function(a){
      return a;
   }(i));
}
console.log ( fnArr[3]) 

//code2：使用闭包封装一个汽车对象，可以通过如下方式获取汽车状态
var Car=(function(){
	var speed;
	var obj={
		accelerate: function accelerate(){
			speed+=10;
		},
		decelerate: function decelerate(){
			speed-=10;
		},
		setSpeed: function setSpeed(v){
			speed=v;
		},
		getSpeed: function getSpeed(){
			console.log(speed);
			return speed;
		},
		getStatus: function getStatus(){
			if(speed>0){
				return console.log('running');
			}else{
				return console.log('stop');
			}
		}
	}
	return obj;
}());
Car.setSpeed(30);
Car.getSpeed(); //30
Car.accelerate();
Car.getSpeed();  //40
Car.decelerate();
Car.decelerate();
Car.getSpeed();  //20
Car.getStatus();  //'running'
Car.decelerate(); 
Car.decelerate();
Car.getStatus();  //'stop'

//code 3：写一个函数使用setTimeout模拟setInterval的功能
var a=setInterval("console.log(1)",1000),
	c;
function b(){
	console.log(2);
	c=setTimeout(b,1000);
};
b(); 
function stop(){
	clearInterval(a);
	clearTimeout(c);
}
setTimeout(stop,6000); //6次后停止


//code4：写一个函数，计算setTimeout平均最小时间粒度

function getMini(){
    var i = 0;
    var start = Date.now();
    var clock = setTimeout(function(){
        i++;
        if(i === 1000){
            clearTimeout(clock);
            var end = Date.now();
            console.log( (end-start) / i);
        }
        clock = setTimeout(arguments.callee,0);
    },0)
};


//code5：下面这段代码输出结果是？为什么？

var a=1;
setTimeout(function(){
	a=2;
	console.log(a);
},0);
var a;
console.log(a);
a=3;
console.log(a);
//输出结果：1	3	2；函数要等到其他代码执行完之后才会立即执行


//code 6：下面这段代码输出结果是？为什么？

var flag = true;
setTimeout(function(){
    flag = false;
},0)
while(flag){}
console.log(flag);
//没有结果，匿名函数最后执行，但是执行到 while(flag){} 时，陷入了死循环


//code 7： 下面这段代码输出？如何输出delayer: 0, delayer:1...（使用闭包来实现）

for(var i=0;i<5;i++){
    setTimeout(function(){
         console.log('delayer:' + i );
    }, 0);
    console.log(i);
}
//输出 0 1 2 3 4  delayer:5

for(var i=0;i<3;i++){
 	(function (n){
 		setTimeout(function(){
 			console.log('delayer:' + n);
 		}, 0);
 	})(i)    
}
//输出 delayer:0  delayer:1  delayer:2