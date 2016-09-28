$(document).ready(function() {
    $("body").css("display", "none");
    $("html").css("background-color", "black");
 
    $("body").fadeIn(1000);
 
 $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(300, redirectPage);      
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }
});