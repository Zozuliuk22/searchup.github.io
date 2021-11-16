$(document).ready(function(){
    makeAccordion();

    $('.accordion .label').click(function(){        
        $('.accordion').each(function(){
            $(this).removeClass('active');
        });
        $(this).parent().addClass('active');
        makeAccordion();
    });
});

function makeAccordion(){
    var speed = 300; // швидкість анімації
    // перебираємо всі блоки
    $('.accordion').each(function(){
        if($(this).hasClass('active')){
            // якщо находимо активний - то розгортаємо
            $(this).find('.content').slideDown(speed);
        }else{
            // не активний - згортаємо
            $(this).find('.content').slideUp(speed);
        }
    });
}
