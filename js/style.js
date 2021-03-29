$(function () {
    $(window).scroll(function () {
        var winTop = $(window).scrollTop();
        var winBfore = 0;
        if (winTop >= 30) {
            $("body").addClass("sticky-header");
            $("nav").css("visibility", "visible");
            //$("main").css("position", "static");
            /*if (winBfore === 0) {
                $('html,body').animate({
                    //the 205 is a fixed header offset
                    scrollTop: $('#perfil').offset().top
                }, 300);
                return false;
            }*/

        } else {
            $("body").removeClass("sticky-header");
            $("nav").css("visibility", "hidden");
            //$("main").css("position", "relative");
            winBfore = 0;
        } //if-else
    }); //win func.
}); //ready func.

$(function () {
    $('.header__card--button').click(function () {
        $("body").addClass("sticky-header");
        $("nav").css("visibility", "visible");
        $('html,body').animate({
            //the 205 is a fixed header offset
            scrollTop: $('#perfil').offset().top
        }, 1);
    })
})


$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    //the 205 is a fixed header offset
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});