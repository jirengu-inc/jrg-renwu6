/*
const p=new Promise((resolve,reject)=>{
	reject(true)
	
})
const p1=Promise.resolve(true)
//以上p、p1等价
*/

/*
const p=new Promise((resolve,reject)=>{
	console.log(111)
	reject(222)
});
console.log(p)
p.then(r=>{
	console.log('成功resolve时的回调')
	console.log(r)
}).catch(e=>{
	console.log('reject时的回调')
	console.log(e)
});
console.log(999)
*/

const p=new Promise((resolve,reject)=>{
	reject(111)
});
p.then(resolve=>{
	console.log('resolve')
	console.log(resolve)
},reject=>{
	console.log('reject')
	console.log(reject)
	return Promise.resolve(222)
}).then(r=>{
	console.log('2resolve')
	console.log(r)
}).catch(e=>{
	console.log('异常')
	console.log(e)
})


// const p=new Promise((resolve,reject)=>{
// 	resolve(111)
// });	