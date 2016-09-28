$("#div-one").click(function(){
    $('#content-two, #content-three, #content-four').fadeOut(500);
    $('#content-one').fadeIn(500);
});
    
    
$("#div-two").click(function(){
    $('#content-one, #content-three, #content-four').fadeOut(500);
    $('#content-two').fadeIn(500);
});


$("#div-three").click(function(){
    $('#content-two, #content-one, #content-four').fadeOut(500);
    $('#content-three').fadeIn(500);
});
    
    
$("#div-four").click(function(){
    $('#content-one, #content-three, #content-two').fadeOut(500);
    $('#content-four').fadeIn(500);
});