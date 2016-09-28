$("#div-one").click(function(){
    $('#content-two, #content-three').fadeOut(500);
    $('#content-one').fadeIn(500);
});
    
    
$("#div-two").click(function(){
    $('#content-one, #content-three').fadeOut(500);
    $('#content-two').fadeIn(500);
});


$("#div-three").click(function(){
    $('#content-two, #content-one').fadeOut(500);
    $('#content-three').fadeIn(500);
});
    
    