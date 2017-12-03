//console.log('hello world')


/*
以下说明，
1、生成的promise的函数是被同步执行的,
2、promise的状态有三种，Promise{<pending>}、Promise{resolve内的值}、Promise{<rejected> reject内的值}
*/
/*
console.log(1)
const promise=new Promise((resolve,reject)=>{
	resolve('true')
	//reject('false')
	console.log(3)
})
console.log(promise)
console.log(2)
*/



/*
以下说明，
1、promise函数是被同步执行的，但是then方法和catch方法是被异步执行的
2、then方法一般是一个参数，此参数接收对应promise内的resolve
3、如果promise内为reject，是会被catch接收掉的.如果catch没注册（写），bush上会警告warming
 */
/*
console.log(1);
const p=new Promise((resolve,reject)=>{
	console.log(2);
	//resolve(223);
	reject(556)
});
p.then(r=>{
	console.log(3);
	console.log(r);
}).catch(e=>{
	console.log(4);
	console.log(e)
});
console.log(5);
*/



/*
以下说明，
then的方法一般是一个参数，但其实它是有两个参数的，第二个参数用于接收promise方法内的
reject，此种情况，reject不会被catch处理掉了
 */
/*
console.log(1)
const p=new Promise((resolve,reject)=>{
	console.log(2)
	resolve(889)
});
console.log(3)
p.then(r=>{
	console.log(4)
	console.log(r)
},err=>{
	console.log(5)
	console.log(err)
}).catch(e=>{
	console.log(6)
	console.log(e)
});
console.log(7)
*/

/*
以下说明，
1、如果执行到catch eee中，没有return出promise的resolve或者reject，
那么会默认执行到下面的then方法中，而不是catch方法中（只有上步return出promise为reject才走到这个方法中）
2、promise方法中的reject会被最近的catch抓住（就业原则）
 */
console.log(1)
const p=new Promise((resolve,reject)=>{
	console.log(2)
	resolve(112)
})
p.then(r=>{
	console.log(3)
	console.log(r)
	return new Promise((res,rej)=>{
		console.log(4)
		rej(223)
	})
}).catch(eee=>{
	console.log(5)
	console.log(eee)
	//return Promise.resolve(334)
	return Promise.reject(556)
})
.then(rrr=>{
	console.log(6)
	console.log(rrr)
})
.catch(e=>{
	console.log(7)
	console.log(e)
})
console.log(8)
