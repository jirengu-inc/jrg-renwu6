jQuery.fn.slide = function(o){
    var $slide = this,
        $img = $slide.children()
    $img.first().clone().appendTo($slide)
    $img.last().clone().prependTo($slide)
    var imgNumber = $slide.children().length

    $slide
        .css({
            'position': 'relative',
            'overflow': 'hidden',
            'width': o.width,
            'height': o.height
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
        index = 0,
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
        setTimeout(autoPlay,3000)
    }

    autoPlay()


    $slide.on('mouseenter mouseleave',function(){
        $(this).children('a').toggleClass('active')
    })
}