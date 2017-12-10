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

$(document).ready(function(){

    var slider = $('.slider');
    slider.bxSlider();

});

