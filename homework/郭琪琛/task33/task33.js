//1. 以下代码输出什么?
var john = {
  firstName: "John"
}
function func() {
  alert(this.firstName + ": hi!")
}
john.sayHi = func
john.sayHi()
//输出"John: hi!"

//2. 下面代码输出什么，为什么
func()

function func() {
  alert(this)
}
//输出window, 因为func()是在全局环境下调用的, 全局环境绑定的是window对象

//3. 下面代码输出什么
function fn0(){
    function fn(){
        console.log(this);
    }
    fn();
}

fn0();//输出window对象


document.addEventListener('click', function(e){
    console.log(this);//输出dom节点document
    setTimeout(function(){
        console.log(this);//输出window对象
    }, 200);
}, false);

//4. 下面代码输出什么，why
var john = {
  firstName: "John"
}

function func() {
  alert( this.firstName )
}
func.call(john)
//"John"
//因为call的第一个参数指定this的值

//5. 代码输出？
var john = {
  firstName: "John",
  surname: "Smith"
}

function func(a, b) {
  alert( this[a] + ' ' + this[b] )
}
func.call(john, 'firstName', 'surname')
//输出"John Smith"

//6. 以下代码有什么问题，如何修改
var module= {
  bind: function(){
    $btn.on('click', function(){
      console.log(this) //this指什么, 当$btn被点击的时候, this指向$btn
      this.showMsg();
    })
  },

  showMsg: function(){
    console.log('饥人谷');
  }
}
//问题: this指向只有当函数调用是才确定, 当$btn点击的时候, this指的是$btn, 而不是module
//修改:
var module= {
  bind: function(){
    var that = this
    $btn.on('click', function(){
      console.log(that)
      that.showMsg();
    })
  },

  showMsg: function(){
    console.log('饥人谷');
  }
}