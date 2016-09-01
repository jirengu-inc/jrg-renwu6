//tab
$('.nav>li').on('click',function(){
    var $tab = $(this),
        index = $tab.index(),
        $content = $tab.parent().next().children()
    $tab.siblings().removeClass('ontab')
    $(this).addClass('ontab')
    $content.removeClass('active')
    $content.eq(index).addClass('active')
})
// hover
$('.cover').parent('li').on('mouseenter',function(){
    $(this).addClass('hover')
})
$('.cover').parent('li').on('mouseleave',function(){
    $(this).removeClass('hover')
})
