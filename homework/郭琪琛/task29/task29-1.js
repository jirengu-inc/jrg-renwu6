$.fn.isVisible = function(){
    var nodeT = $(this).offset().top,
        screenH = $(window).height(),
        scrollT = $(document).scrollTop()
    if(nodeT > scrollT&&nodeT<screenH+scrollT){
        return true
    };
    return false
}