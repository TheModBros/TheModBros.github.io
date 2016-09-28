var main = function () {
  /* Push the body and the nav over by 285px over */
  $('.icon-submenu').click(function() {
    $('.submenu').animate({
		right: "0px"
    }, 200);

    $('body').animate({
      right: "285px"
    }, 200);   
  });

  /* Then push them back */
  $('.icon-subclose').click(function() {
    $('.submenu').animate({
      right: "-285px"
    }, 200);

    $('body').animate({
      right: "0px"
    }, 200);
  });
    


};


$(document).ready(main);