$("#div-one").click(function(){
    $('#image-two, #image-three, #title-image').fadeOut(500);
    $('#image-one').fadeIn(500);
});
    
    
$("#div-two").click(function(){
    $('#image-one, #image-three, #title-image').fadeOut(500);
    $('#image-two').fadeIn(500);
});


$("#div-three").click(function(){
    $('#image-two, #image-one, #title-image').fadeOut(500);
    $('#image-three').fadeIn(500);
});
    
    