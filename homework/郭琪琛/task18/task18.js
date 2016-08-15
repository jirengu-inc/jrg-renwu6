// 1. 用 splice 实现 push、pop、shift、unshift方法 （***）
//push方法
(function arrPush(arr,item) {
    arr.splice(arr.length,0,item);
    for (var i = 2; i < arguments.length; i++) {
            arrPush(arr,arguments[i]);
    }
    return arr.length;
})()
//pop
(function arrPop(arr) {
     var newArr = arr.splice(arr.length-1,1);
     return newArr[0];
})()
//shift
(function arrShift(arr) {
    var newArr = arr.splice(0,1);
    return newArr[0];
})()
//unshift
(function arrUnshift(arr,item) {
    arr.splice(0,0,item);
    for (var i = 2; i < arguments.length; i++) {
        arrUnshift(arr,arguments[i]);
    }
    return arr.length;
})()


//2. 使用数组拼接出如下字符串 （***）
var prod = {
    name: '女装',
    styles: ['短款', '冬季', '春装']
};
function getTplStr(data){
//todo...
    var dlStr,dtStr,ddStr;
    dlStr="<dl class='product'>"
    dtStr="<dt>"+data.name+"</dt>"
    ddStr=""
    for (var i = 0,len = prod.styles.length; i < len; i++) {
        ddStr+="<dd>"+prod.styles.shift()+"</dd>"
    }
    return dlStr+dtStr+ddStr+"</dl>"

}
var result = getTplStr(prod);  //result为下面的字符串
/*<dl class="product">
    <dt>女装</dt>
    <dd>短款</dd>
    <dd>冬季</dd>
    <dd>春装</dd>
</dl>*/



//3. 写一个find函数，实现下面的功能 （***）
function find(arr,item) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]===item) {
            return i;
        }
    }
    return -1;
}
var arr = [ "test", 2, 1.5, false ]
find(arr, "test") // 0
find(arr, 2) // 1
find(arr, 0) // -1


/*4. 写一个函数filterNumeric，把数组 arr 中的数字过滤出来赋值给新数组newarr，
原数组arr不变 （****）*/
function filterNumberic(arr) {
    var result=[];
    for (var i = 0; i < arr.length; i++) {
        if(typeof arr[i]==='number') {
            result.push(arr[i]);
        }
    }
    return result;
}
arr = ["a", "b", 1, 3, 5, "b", 2];
newarr = filterNumberic(arr);  //   [1,3,5,2]


/*5. 对象obj有个className属性，里面的值为的是空格分割的字符串(和html元素的class特性类似)，
写addClass、removeClass函数，有如下功能：(****)*/
function addClass(obj,item) {
    var arr = obj.className.split(" ");
    if (arr.indexOf(item) === -1) {
        arr.push(item);
    }
    obj.className = arr.join(" ");
    return obj.className;
}
function removeClass(obj,item) {
    var arr = obj.className.split(" ");
    var itemIndex = arr.indexOf(item);
    if (itemIndex !== -1) {
        arr.splice(itemIndex,1)
    }
    obj.className = arr.join(" ");
    return obj.className;
}
var obj = {
  className: 'open menu'
}
addClass(obj, 'new') // obj.className='open menu new'
addClass(obj, 'open')  // 因为open已经存在，所以不会再次添加open
addClass(obj, 'me') // me不存在，所以 obj.className变为'open menu new me'
console.log(obj.className)  // "open menu new me"

removeClass(obj, 'open') // 去掉obj.className里面的 open，变成'menu new me'
removeClass(obj, 'blabla')  // 因为blabla不存在，所以此操作无任何影响


/*6. 写一个camelize函数，把my-short-string形式的字符串转化成myShortString形式的字符串，
如 (***)*/
function camelize(str) {
    var arr = str.split("-"),
        strItem = arr[0];
    for (var i = 1; i < arr.length; i++) {
        strItem += arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
    }
    return strItem;
}
camelize("background-color") == 'backgroundColor'
camelize("list-style-image") == 'listStyleImage'


//7. 如下代码输出什么？为什么? (***)
arr = ["a", "b"];
arr.push( function() { alert(console.log('hello hunger valley')) } );
arr[arr.length-1]()
/*会调用这个函数，alert输出undefined，因为console.log()返回的是undefined
控制台会输出hello hunger valley*/



/*8. 写一个函数filterNumericInPlace，过滤数组中的数字，
删除非数字。要求在原数组上操作 (****)*/
//第一种方法，但是改变了原数组项的顺序
function filterNumericInPlace(arr) {
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            arr.splice(i,arr.length-i);
        }
    }
}
//第二种方法，利用队列
function filterNumericInPlace(arr) {
    var arrItem;
    for (var i = 0,len = arr.length; i < len; i++) {
        arrItem = arr.pop();
        if (typeof arrItem === 'number') {
            arr.unshift(arrItem);
        }
    }
}
//第三种，反着遍历数组的方法
function filterNumericInPlace(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (typeof arr[i] !== "number") {
            arr.splice(i,1);
        }
    }
}
arr = ["a", "b", 1, 3, 4, 5, "b", 2];
//对原数组进行操作，不需要返回值
filterNumericInPlace(arr);
console.log(arr)  // [1,3,4,5,2]



//9. 写一个ageSort函数实现数组中对象按age从小到大排序 （***）
function ageSort(arr) {
    function compare(value1,value2) {
        if (value1.age<value2.age) {
            return -1;
        } else if (value1.age>value2.age) {
            return 1;
        } else {
            return 0;
        }
    }
    arr.sort(compare);
    return arr;
}
var john = { name: "John Smith", age: 23 }
var mary = { name: "Mary Key", age: 18 }
var bob = { name: "Bob-small", age: 6 }
var people = [ john, mary, bob ]
ageSort(people) // [ bob, mary, john ]



/*10. 写一个filter(arr, func) 函数用于过滤数组，接受两个参数，
第一个是要处理的数组，第二个参数是回调函数(回调函数遍历接受每一个数组元素，
当函数返回true时保留该元素，否则删除该元素)。实现如下功能： （****）
*/
function filter(arr,func) {
    var arrItem;
    for (var i = 0, len = arr.length; i < len; i++) {
        arrItem = arr.pop();
        if (func(arrItem)) {
            arr.unshift(arrItem);
        }
    }
    return arr;
}
function isNumeric (el){
    return typeof el === 'number';
}
arr = ["a",3,4,true, -1, 2, "b"]

arr = filter(arr, isNumeric) ; // arr = [3,4,-1, 2],  过滤出数字
arr = filter(arr, function(val) { return  typeof val === "number" && val > 0 });
// arr = [3,4,2] 过滤出大于0的整数



//字符串
//1.写一个 ucFirst函数，返回第一个字母为大写的字符 （***）
function ucFirst(str) {
    return str[0].toUpperCase()+str.slice(1);
}
ucFirst("hunger") == "Hunger"

/*2.写一个函数truncate(str, maxlength), 如果str的长度大于maxlength，
会把str截断到maxlength长，并加上...，如 （****）*/
function truncate(str,maxlength) {
    if (str.length <= maxlength) {
        return str;
    }
    return str.slice(0,maxlength)+"...";
}
truncate("hello, this is hunger valley,", 10) == "hello, thi...";
truncate("hello world", 20) == "hello world"

//数学函数
//1. 写一个函数，获取从min到max之间的随机整数，包括min不包括max （***）
function randomNum(min,max) {
    var dif=max-min;
    return Math.floor(Math.random()*dif+min);
}

//2. 写一个函数，获取从min都max之间的随机整数，包括min包括max （***）
function randomNum(min,max) {
    var dif=max-min+1;
    return Math.round(Math.random()*dif+min);
}

//3. 写一个函数，获取一个随机数组，数组中元素为长度为len，最小值为min，最大值为max(包括)的随机整数 （***）
function randomArr(len,min,max) {
    var arr = [];
    function randomNum(min,max) {
        var dif=max-min+1;
        return Math.round(Math.random()*dif+min);
    }
    for (var i = 0; i < len; i++) {
        arr.push(randomNum(min,max));
    }
    return arr;
}

//4. 写一个函数，生成一个长度为 n 的随机字符串，字符串字符的取值范围包括0到9，a到 z，A到Z。
function getRandStr(len){
  //todo...
    var arr = [],
        str = "";
    function randomNum(min,max) {
        var dif=max-min+1;
        return Math.round(Math.random()*dif+min);
    }
    function randomArr(arr) {
        return arr[Math.floor(Math.random()*arr.length)];
    }
    for (var i = 0; i < len; i++) {
        arr = [];
        arr.push(randomNum(48,57),randomNum(97,122),randomNum(65,90));
        str += String.fromCharCode(randomArr(arr));
    }
    return str;
}
var str = getRandStr(10); // 0a3iJiRZap
