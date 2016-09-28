$("#div-one").click(function(){
    $('#image-two, #image-three, #image-four, #image-five, #image-six').fadeOut(500);
    $('#image-one').fadeIn(500);
});
    
    
$("#div-two").click(function(){
    $('#image-one, #image-three,#image-four, #image-five, #image-six').fadeOut(500);
    $('#image-two').fadeIn(500);
});


$("#div-three").click(function(){
    $('#image-two, #image-one,#image-four, #image-five, #image-six').fadeOut(500);
    $('#image-three').fadeIn(500);
});


$("#div-four").click(function(){
    $('#image-two, #image-one,#image-three, #image-five, #image-six').fadeOut(500);
    $('#image-four').fadeIn(500);
});


$("#div-five").click(function(){
    $('#image-two, #image-one,#image-four, #image-three, #image-six').fadeOut(500);
    $('#image-five').fadeIn(500);
});


$("#div-six").click(function(){
    $('#image-two, #image-one,#image-four, #image-five, #image-three').fadeOut(500);
    $('#image-six').fadeIn(500);
});
    
    