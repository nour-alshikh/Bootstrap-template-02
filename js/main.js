$(window).ready(function(){
    $('.loading .loader').slideUp(3000,function(){
        $('.loading').slideUp(1000,function(){
            $(window).scrollTop(0)
            $('body').css('overflow', 'auto')
            $('.loading').remove()
        })
    })
})

$('.landing .icon').click(function(){
    $(window).scrollTop(0)
})

$(window).scroll(function(){
    if($(window).scrollTop() > 150){
        $('.icon').css('display', 'flex')
    }else{
        $('.icon').css('display', 'none')
    }
})