requirejs.config({
	baseUrl:"src/js", //基础文件路径
	paths:{
		'jquery':'lib/bower_components/jquery/dist/jquery.min'
	}
})

require(['app/index']);