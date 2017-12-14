console.log("common.js");

$(document).ready(function() {
    $('select').material_select();
    // Initialize collapse button


    $(".button-collapse").sideNav();


});

/**********************  number  ****************************/
$('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});
/**********************end  number  ****************************/

/**********************  faq  ****************************/
$('dl .dl').click(function(){

    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    }else {
        $(this).addClass('active');
    }

});
/**********************end  faq  ****************************/

/**********************end  how  ****************************/
var h = 0;
$('.how .step').each(function() {
    var h1 = $(this).height();
    if (h1 > h) h = h1;
});
$('.how .step').height(h);
/**********************end  how  ****************************/

$(document).ready(function(){

    var slider = $('.slider');
    slider.bxSlider();

});

