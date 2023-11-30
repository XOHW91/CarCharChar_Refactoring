$(document).ready(function () {
    $(window).scroll(function () {
        var scrollY = $(window).scrollTop();

        // nav-menu
        var navElem = $('.nav-menu');
        if (scrollY > 100) {
            navElem.addClass('nav-action');
        } else {
            navElem.removeClass('nav-action');
        }

        // log-bar
        var navElem2 = $('.log-bar');
        if (scrollY > 100) {
            navElem2.addClass('log-action');
        } else {
            navElem2.removeClass('log-action');
        }

        // sct02
        var navElem3 = $('.sct02');
        if (scrollY < 300) {
            navElem3.removeClass('sct02-action');
        } else {
            navElem3.addClass('sct02-action');
        }

        // scroll_circle
        var navElem4 = $('.scroll_circle');
        if (scrollY > 300) {
            navElem4.addClass('scroll_circle_action1');
        } else {
            navElem4.removeClass('scroll_circle_action1');
        }

        // scroll_circle_action1
        var navElem5 = $('.scroll_circle_action1');
        if (scrollY > 500) {
            navElem5.addClass('scroll_circle_action2');
        } else {
            navElem5.removeClass('scroll_circle_action2');
        }

        // main_scrl1
        var navElem6 = $('.main_scrl1');
        if (scrollY > 350) {
            navElem6.addClass('main_scrl1_after');
        } else {
            navElem6.removeClass('main_scrl1_after');
        }

        // main_scrl2
        var navElem7 = $('.main_scrl2');
        if (scrollY > 350) {
            navElem7.addClass('main_scrl2_after');
        } else {
            navElem7.removeClass('main_scrl2_after');
        }

        // main_scrl3
        var navElem8 = $('.main_scrl3');
        if (scrollY > 350) {
            navElem8.addClass('main_scrl3_after');
        } else {
            navElem8.removeClass('main_scrl3_after');
        }
    });
});
