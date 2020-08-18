$(document).ready(function(){
   $('.counter').counterUp({
     delay: 10,
    time: 3000
});

    
    
   
});



     if($('.bar-progress').length) {
    $('.bar-progress').appear(function(){
        var el = $(this);
        var percent = el.data('width');
        $(el).css('width', percent+'%');
    }, {accY: 0});
   }