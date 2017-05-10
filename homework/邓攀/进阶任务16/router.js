router.get('/getNews',function(req,res){
	var news = [
		{
			link: '//xw.qq.com/zt/20160817000464/SPO20160817000464WW',
			img: '//inews.gtimg.com/newsapp_ls/0/1529755710_150120/0',
			title: '欧冠-明2:45视频直播马竞vs皇马 床单军团需奇迹',
			brief: '腾讯体育5月9日讯北京时间5月11日凌晨2点4...'
		},
		{
			link: '//xw.qq.com/sports/20170510051450/SPO2017051005145009',
			img: '//inews.gtimg.com/newsapp_ls/0/1530106973_150120/0',
			title: '苏宁比济州联好对付？博阿斯反驳：当然不是',
			brief: '腾讯体育5月10日（文／李旭）亚冠小组赛最后一...'
		},
		{
			link: '//xw.qq.com/sports/20170510042033/SPO201705100420330O',
			img: '//inews.gtimg.com/newsapp_ls/0/1528828636_150120/0',
			title: 'GIF-武球王爆发！20秒闪击得分 上演C罗式过人',
			brief: '腾讯体育5月10日2017亚冠小组赛最后一轮继...'
		},
		{
			link: '//xw.qq.com/zt/201511170327595/SPO20151117032759M5',
			img: '//inews.gtimg.com/newsapp_ls/0/1526287073_150120/0',
			title: '男篮名单：阿联郭艾伦进杜锋队 周琦小丁入李楠队',
			brief: '杜锋李楠将分别执教男篮蓝队与男篮红队腾讯体育5...'
		},
		{
			link: '//xw.qq.com/sports/20170510033641/SPO201705100336410H',
			img: '//inews.gtimg.com/newsapp_ls/0/1527616801_150120/0',
			title: '比肩周琦！18岁新星未战CBA先进男篮 成历史第4人',
			brief: '朱荣振被破格选入国家队腾讯体育5月10日讯中国...'
		},
		{
			link: '//xw.qq.com/zt/2017050700898552/SPO2017050700898552',
			img: '//inews.gtimg.com/newsapp_ls/0/1525768806_150120/0',
			title: 'NBA-哈登三双 火箭加时负马刺2-3失天王山',
			brief: '腾讯体育5月10日讯马刺坐镇主场和火箭展开季后...'
		},
		{
			link: '//xw.qq.com/zt/20161107033105/SPO20161107033105HK',
			img: '//inews.gtimg.com/newsapp_ls/0/1527116056_150120/0',
			title: '红黑榜：20分钟的乔丹！这柄妖刀4次压哨斩巨星',
			brief: '北京时间5月10日，季后赛今天只有1场比赛。火...'
		},
		{
			link: '//xw.qq.com/zt/20170216036094/SPO20170216036094KE',
			img: '//inews.gtimg.com/newsapp_ls/0/1527315507_150120/0',
			title: '贵州：已就打人事件与上港沟通 黎兵认同处理结果',
			brief: '腾讯体育5月10日讯“胡尔克打人”事件闹得满城...'
		},
		{
			link: 'http://view.inews.qq.com/a/20170510A083B800',
			img: '//inews.gtimg.com/newsapp_ls/0/1530128514_150120/0',
			title: '如果中国举办世界杯，哪十座城市最可能成为举办地？',
			brief: '我选：沈阳，北京，天津，西安，重庆，武汉，南京...'
		},
		{
			link: '//xw.qq.com/zt/201607140264501/SPO201607140264501T',
			img: '//inews.gtimg.com/newsapp_ls/0/1528358357_150120/0',
			title: '37万镑周薪不止！伊布轰28球揽286万镑奖金',
			brief: '伊布腾讯体育5月10日讯英国《每日邮报》在昨天...'
		},
		{
			link: '//xw.qq.com/sports/20170510051397/SPO2017051005139703',
			img: '//inews.gtimg.com/newsapp_ls/0/1530082976_150120/0',
			title: '娱乐化影响训练？国乒憋足气盼世乒赛打脸日媒',
			brief: '上个月，国乒在亚锦赛上丢掉女单金牌引起了大众对...'
		},
		{
			link: '//xw.qq.com/sports/20170510048336/SPO2017051004833604',
			img: '//inews.gtimg.com/newsapp_ls/0/1529705432_150120/0',
			title: '【夜读】球衣的诱惑！J罗价值被榨干后遭甩卖',
			brief: '腾讯体育5月10日对于J罗来说，近一年半的时间...'
		},
		{
			link: '//xw.qq.com/sports/2017051004710404/SPO2017051004710404',
			img: '//inews.gtimg.com/newsapp_ls/0/1529553452_150120/0',
			title: '如何看“亚洲第1后卫”称号？郭艾伦这样回应',
			brief: '郭艾伦回应亚洲第1控卫称号腾讯体育5月10日讯（文...'
		},
		{
			link: '//xw.qq.com/sports/2017051004654604/SPO2017051004654604',
			img: '//inews.gtimg.com/newsapp_ls/0/1529553961_150120/0',
			title: '乔丹亲口欢迎郭艾伦 第1控卫感叹梦想照进现实',
			brief: '郭艾伦签约JordanBrand腾讯体育5月10日...'
		},
		{
			link: '//xw.qq.com/sports/2017051005579503/SPO2017051005579503',
			img: '//inews.gtimg.com/newsapp_ls/0/1530558922_150120/0',
			title: '马德里赛小德三盘险胜 辞退教练后首秀开门红',
			brief: '小德收获马德里开门红腾讯体育5月10日讯今天晚上，...'
		},
		{
			link: '//xw.qq.com/sports/2017051003899405/SPO2017051003899405',
			img: '//inews.gtimg.com/newsapp_ls/0/1530598129_150120/0',
			title: '<h2>曝国安2000万美金挖秘鲁球星 开全队第一年薪</h2>',
			brief: '腾讯体育5月10日虽然已经拥有伊尔马兹和索里亚诺两...'
		},
		{
			link: '//xw.qq.com/sports/201705100519180/SPO201705100519180A',
			img: '//inews.gtimg.com/newsapp_ls/0/1530420331_150120/0',
			title: '上港被绝杀促成中超德比 博阿斯真想碰苏宁？',
			brief: '腾讯体育5月10日本赛季亚冠中超三队进淘汰赛创造了...'
		},
		{
			link: '//xw.qq.com/sports/20170510000/20170510A0AWKI00',
			img: '//inews.gtimg.com/newsapp_ls/0/1529979095_150120/0',
			title: '上港末战输球败人品 亚冠淘汰赛“选”苏宁惹众怒',
			brief: '亚冠淘汰赛将上演中超德比惊奇哇声一片，生活不可能像...'
		},
		{
			link: '//xw.qq.com/sports/201705100504810/SPO201705100504810D',
			img: '//inews.gtimg.com/newsapp_ls/0/1529980474_150120/0',
			title: '武磊一战追平郝董神迹 20秒杀进亚冠闪击榜3甲',
			brief: '腾讯体育5月10日在亚冠小组赛末轮客场和西悉尼流浪...'
		},
		{
			link: '//xw.qq.com/sports/201705100505810/SPO201705100505810D',
			img: '//inews.gtimg.com/newsapp_ls/0/1529981324_150120/0',
			title: '中超创亚冠小组赛最佳战绩 场均超2分展霸气',
			brief: '腾讯体育5月10日亚冠小组赛尘埃落定，中超BIG3...'
		},
		{
			link: '//xw.qq.com/sports/2017051005527505/SPO2017051005527505',
			img: '//inews.gtimg.com/newsapp_ls/0/1530503978_150120/0',
			title: '切尔西3000万挖摩纳哥兽腰 孔蒂要夺穆帅猎物',
			brief: '腾讯体育5月10日讯英国《地铁报》消息，切尔西也加...'
		}
	];
	var pageIndex = req.query.page;
	var len = 3;
	var retNews = news.slice(pageIndex * len,pageIndex * len + len);
	res.send({
		status: 1,
		data: retNews
	});
});
