$(document).ready(function() {

    $('.next').click(function() {
        avanti();
    });

    $('.prev').click(function() {
        indietro();
    });

    $('.nav i').click(function() {
        $('.nav i').removeClass('active');
        $(this).addClass('active');
        var trovato = false;
        var i = 0;
        while (trovato == false) {
            if ($('.images').eq(i).hasClass('active')){
                trovato = true;
            } else {
                i++;
            }
        }
        trovato = false;
        console.log(i);
        $('.images .img').removeClass('active');
        $('.images .img').eq(i).addClass('active');
    });















    // FUNZIONI
    function avanti() {
        var fotoAttiva = $('.images .active');
        var tondoAttivo = $('.nav .active');
        fotoAttiva.removeClass('active');
        tondoAttivo.removeClass('active');
        if (fotoAttiva.hasClass('last')) {
            $('.images .first').addClass('active');
            $('.nav .first').addClass('active');
        } else {
            fotoAttiva.next().addClass('active');
            tondoAttivo.next().addClass('active');
        }
    };

    function indietro() {
        var fotoAttiva = $('.images .active');
        var tondoAttivo = $('.nav .active');
        fotoAttiva.removeClass('active');
        tondoAttivo.removeClass('active');
        if (fotoAttiva.hasClass('first')) {
            $('.images .last').addClass('active');
            $('.nav .last').addClass('active');
        } else {
            fotoAttiva.prev().addClass('active');
            tondoAttivo.prev().addClass('active');
        }
    };
    // function avanti() {
    //     var fotoAttiva = $('.images .active');
    //     var tondoAttivo = $('.nav .active');
    //     fotoAttiva.removeClass('active');
    //     tondoAttivo.removeClass('active');
    //     if (fotoAttiva.hasClass('last')) {
    //         $('.images .first').addClass('active');
    //         $('.nav .first').addClass('active');
    //     } else {
    //         fotoAttiva.next().addClass('active');
    //         tondoAttivo.next().addClass('active');
    //     }
    // };
    //
    // function indietro() {
    //     var fotoAttiva = $('.images .active');
    //     var tondoAttivo = $('.nav .active');
    //     fotoAttiva.removeClass('active');
    //     tondoAttivo.removeClass('active');
    //     if (fotoAttiva.hasClass('first')) {
    //         $('.images .last').addClass('active');
    //         $('.nav .last').addClass('active');
    //     } else {
    //         fotoAttiva.prev().addClass('active');
    //         tondoAttivo.prev().addClass('active');
    //     }
    // };






});
