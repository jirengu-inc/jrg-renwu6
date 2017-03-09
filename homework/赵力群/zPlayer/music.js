var myAudio = $("audio")[0];
var lyricArr = [];
$(".btn1").click(function(){
	if (myAudio.paused) {
		play()
	} else {
		pause()
	}
});
$(".btn2").click(function(){
	getChannel();
});
$(".btn3").click(function(){
	getmusic();
	
});
function play(){
	myAudio.play();
    $('.btn1').removeClass('m-play').addClass('m-pause');
}
function pause(){
	myAudio.pause();
	$('.btn1').removeClass('m-pause').addClass('m-play');
}
function getChannel(){
	$.ajax({
		url: 'http://api.jirengu.com/fm/getChannels.php',
		dataType: 'json',
		Method: 'get',
		success: function(response){
			var channels = response.channels;
			var num = Math.floor(Math.random()*channels.length);
			var channelname = channels[num].name;
			var channelId = channels[num].channel_id;
			$('.record').text(channelname);
			$('.record').attr('title',channelname);
			$('.record').attr('data-id',channelId);
			getmusic();
		}
	})
}
function getmusic(){
	$.ajax({
		url: 'http://api.jirengu.com/fm/getSong.php',
		dataType: 'json',
		Method: 'get',
		data:{
		      'channel': $('.record').attr('data-id')
		    },
		success: function (ret) {
		   var resource = ret.song[0],
		       url = resource.url,
		       bgPic = resource.picture,
		       sid = resource.sid,//
		       ssid = resource.ssid,//
		       title = resource.title,
		       author = resource.artist;
	       $('audio').attr('src',url);
	       $('audio').attr('sid',sid);
	       $('audio').attr('ssid',ssid);
	       $('.musicname').text(title);
	       $('.musicname').attr('title',title)
	       $('.musicer').text(author);
	       $('.musicer').attr('title',author)
	       $(".background").css({
	       		'background':'url('+bgPic+')',
	       		'background-repeat': 'no-repeat',
				'background-position': 'center',
				'background-size': 'cover',
	 		});
	       play();
	       getlyric();
		}
	})
};
function getlyric(){
	var Sid = $('audio').attr('sid');
	var Ssid = $('audio').attr('ssid');
	$.post('http://api.jirengu.com/fm/getLyric.php', {ssid: Ssid, sid: Sid})
        .done(function (lyr){
        	console.log(lyr);
        	var lyr = JSON.parse(lyr);;
        	console.log(lyr);
        	if (!!lyr.lyric) {
	        	$('.music-lyric .lyric').empty();
	        	var line = lyr.lyric.split('\n');
                var timeReg = /\[\d{2}:\d{2}.\d{2}\]/g;
                var result = [];
                if(line != ""){
                    for(var i in line){
                        var time = line[i].match(timeReg);
                        if(!time)continue;
                        var value = line[i].replace(timeReg,"");
                        for(j in time){
                            var t = time[j].slice(1, -1).split(':');
                            var timeArr = parseInt(t[0], 10) * 60 + parseFloat(t[1]);
                            result.push([timeArr, value]);
                        }
                    }
                }
	            result.sort(function (a, b) {
	                return a[0] - b[0];
	            });
	            lyricArr = result;
	            renderLyric();
        	}
        }).fail(function(){
        	$('.music-lyric .lyric').html("<li>本歌曲无歌词</li>");
        })
}
function renderLyric(){
	var lyrLi = "";
    for (var i = 0; i < lyricArr.length; i++) {
        lyrLi += "<li data-time='"+lyricArr[i][0]+"'>"+lyricArr[i][1]+"</li>";
    }
    $('.music-lyric .lyric').append(lyrLi);
    setInterval(showLyric,100);
}
function showLyric(){
    var liH = $(".lyric li").eq(5).outerHeight()-3;
    for(var i=0;i< lyricArr.length;i++){
        var curT = $(".lyric li").eq(i).attr("data-time");
        var nexT = $(".lyric li").eq(i+1).attr("data-time");
        var curTime = myAudio.currentTime;
        if ((curTime > curT) && (curT < nexT)){
            $(".lyric li").removeClass("active");
            $(".lyric li").eq(i).addClass("active");
            $('.music-lyric .lyric').css('top', -liH*(i-2));
        }
    }

}
setInterval(present,500)
$(".basebar").mousedown(function(ev){
	var posX = ev.clientX;
	var targetLeft = $(this).offset().left;
	var percentage = (posX - targetLeft)/400*100;
	myAudio.currentTime = myAudio.duration * percentage/100;
});
function present(){
	var length = myAudio.currentTime/myAudio.duration*100;
	$('.progressbar').width(length+'%');
	if(myAudio.currentTime == myAudio.duration){
		getmusic()
	}
}
//icon
$('.m-star').on('click',function(){
	$(this).toggleClass('stared')
})
$('.m-heart').on('click',function(){
	$(this).toggleClass('loved')
})
$('.m-xunhuan').on('click',function(){
	$(this).toggleClass('recycleed').toggleClass('colored')
	if ($(this).hasClass('recycleed')) {
		$('audio').attr('loop','loop');
	}
	if($(this).hasClass('colored')){
		$('audio').removeAttr('loop','no-loop');
	}
})
$('.m-lyric').on('click',function(){
	$(this).toggleClass('lyriced');
	if ($(this).hasClass('lyriced')) {
		$('.background .music-lyric').css({'display':'block'})
	}else{
		$('.background .music-lyric').css({'display':'none'})
	}
})
$(document).ready(getChannel())
