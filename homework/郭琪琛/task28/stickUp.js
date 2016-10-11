/*
简单的stickUp插件,使用需要在CSS加上.stick-up
.stick-up {
    position: fixed;
    top: 0;
    z-index: 99;
}
*/

$.fn.stickUp = function() {
    var $nav = $(this),
        $navHeight = $nav.innerHeight(),
        $navOffset = $nav.offset()
    $nav.wrap('<div class="nav-wrapper" />').parent().css({
        height: $navHeight
    })


    $(document).on('scroll',function(){
        var curtentScrollTop = $(this).scrollTop(),
            $navWrapWidth = $nav.parent().innerWidth()
        if (curtentScrollTop >= $navOffset.top) {
            $nav.addClass('stick-up').css({
                width: $navWrapWidth
            })
        } else {
            $nav.removeClass('stick-up')
        }

    })
}