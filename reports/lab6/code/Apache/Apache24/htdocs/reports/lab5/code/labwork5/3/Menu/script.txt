jQuery(document).ready(function($){
$('#slow_nav  ul li').hover(
            function () {
                $('ul', this).stop().slideDown(400);
            },
            function () {
                $('ul', this).stop().slideUp(400);
            }
        );
});
