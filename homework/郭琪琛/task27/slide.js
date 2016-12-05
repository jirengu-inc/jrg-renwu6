/*
这是一个简单无限滚动的轮播插件,调用方法如下:
1. HTML结构已经写好,自己只需要写一个div.slide然后几个img就可以
3. 需要给上下翻页按钮和索引翻页按钮写样式,还有索引需要写一个selected背景色
2. 需要传入参数,传入的参数是一个对象,包括图片的宽高,不需要单位
*/


jQuery.fn.slide = function(o){
    var $slide = this,
        $img = $slide.children()
    $img.first().clone().appendTo($slide)
    $img.last().clone().prependTo($slide)
    var imgNumber = $slide.children().length

    if (o.fullScreen) {
        $slide
            .css({
                'height': '100vh'
            })
    } else {
        $slide
            .css({
                'width': o.width,
                'height': o.height
            })
    }

    $slide
        .css({
            'position': 'relative',
            'overflow': 'hidden'
        })
        .children().wrap('<a href="#!" />').end()
        .children().css({
            'text-decoration': 'none',
            'display': 'block',
            'float': 'left'
        }).end()
        .children().wrapAll('<div class="slide-img-wrap" />').end()
        .children().css({
            'position': 'absolute',
            'left': -o.width,
            'width': o.width*imgNumber
        }).end()

    $slide
        .append('<ul class="slide-btn-dot"></ul>')
        .children('ul').append(function(){
            var listStr = ''
            for (var i = 0; i < $img.length; i++) {
                listStr += '<li class="btn-dot-item"></li>'
            }
            return listStr
        }).end()
        .append('<a href="#!" class="slide-btn-move move-pre">&lt;</a><a href="#!" class="slide-btn-move move-next">&gt;</a>')


    var $imgWrap = $slide.children('.slide-img-wrap'),
        $btnDot = $slide.children('.slide-btn-dot'),
        $next = $slide.children('.move-next'),
        $pre = $slide.children('.move-pre'),
        index = -1,
        lock =false
    $btnDot.children().first().addClass('selected')
    function selected(index) {
        $btnDot.children().removeClass('selected').eq(index).addClass('selected')
    }

    function animate() {
        $imgWrap.stop(true,true).animate({
            left: -o.width*(index+1)
        },150,animateCallback)
    }

    function animateCallback() {
        if (index === $img.length) {
            index = 0
            $imgWrap.css('left',-o.width)
        } else if (index === -1) {
            index = $img.length-1
            $imgWrap.css('left',-o.width*$img.length)
        }
        lock = false
        selected(index)
    }


    function moveNext(dir) {
        if (lock) return
        lock = true
        if (dir) {
            index++
            animate()
        } else {
            index--
            animate()
        }
    }


    $next.on('click',function(){
        moveNext(true)
    })

    $pre.on('click',function(){
        moveNext(false)
    })

    $btnDot.on('click','li',function(){
        var index = $(this).index()
        $imgWrap.stop(true,true).animate({
            left: -o.width*(index+1)
        },150)
        selected(index)
    })

    function autoPlay() {
        moveNext(true)
        setTimeout(autoPlay,5000)
    }

    autoPlay()


    $slide.on('mouseenter mouseleave',function(){
        $(this).children('a').toggleClass('active')
    })
}