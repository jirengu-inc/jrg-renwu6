
app.get('/loadmore', function(req, res) {
	var len=parseInt(req.query.length);
	var newarr=[];
	var curb=parseInt(req.query.cur);//获取前台在每次点击后传入的li数量，获取到的内容是字符串格式注意转成数值形式
	if(req.query.status=="start"){
		for(var i=curb+1;i<len+curb;i++){
			newarr.push(i)
		}
	}

	res.send({
		data: newarr
	});
});


