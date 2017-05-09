app.get('/getData',function(req,res){
	var index = req.query.start;
	var lengths = req.query.len;
	var datas = [];
	for(var i = 0; i < lengths; i++){
		datas.push('内容' + (parseInt(index) + i));
	}
	setTimeout(function(){
		res.send({
			status: 1,
			data: datas
		});
	});
});