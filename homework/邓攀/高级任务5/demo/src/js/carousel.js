var $imgCt = $(".img-ct"),
	$arrowPre = $(".arrow-pre"),
	$arrowNext = $(".arrow-next"),
	$bullet = $(".bullet"),
	curImgIndex = 0,
	isAnimate = false,
	imgCount = $imgCt.children().length;
	
	
var $firstImg = $imgCt.children("li").first(),
	$lastImg = $imgCt.children("li").last();	
$imgCt.prepend($lastImg.clone());
$imgCt.append($firstImg.clone());

var imgWidth = $firstImg.width(),
	imgCounts = $imgCt.children().length;
$imgCt.width(imgWidth * imgCounts);
$imgCt.css("left",-imgWidth);

function playNext(index){
	if(isAnimate){
		return;
	}
	isAnimate = true;
	$imgCt.animate({
		left: "-=" + index * imgWidth
	},1000,function(){
		curImgIndex += index;
		if(curImgIndex === imgCount){
			$imgCt.css("left",-imgWidth);
			curImgIndex = 0;
		}
		isAnimate = false;
		setBullet();
	});
}
function playPre(index){
	if(isAnimate){
		return;
	}
	isAnimate = true;
	$imgCt.animate({
		left: "+=" + index * imgWidth
	},1000,function(){
		curImgIndex -= index;
		if(curImgIndex < 0){
			$imgCt.css("left",-imgWidth * imgCount);
			curImgIndex = imgCount - 1;
		}
		isAnimate = false;
		setBullet();
	})
}
function setBullet(){
	$bullet.children("li").removeClass("active")
						  .eq(curImgIndex)
						  .addClass("active");
}
function autoPlay(){
	clock = setInterval(function(){
		playNext(1);
	},2500);
}

$arrowNext.on("click",function(event){
	event.preventDefault();
	playNext(1);
});
$arrowPre.on("click",function(event){
	event.preventDefault();
	playPre(1);
});
autoPlay();
$bullet.children('li').on("click",function(){
	var $index = $(this).index();
	if($index > curImgIndex){
		playNext($index - curImgIndex);
	}else if($index < curImgIndex){
		playPre(curImgIndex - $index);
	}
});