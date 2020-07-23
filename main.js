$(document).ready(function() {

    $('.next').click(function() {
        avanti();
    });

    $('.prev').click(function() {
        indietro();
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
        fotoAttiva.removeClass('active');
        if (fotoAttiva.hasClass('last')) {
            $('.images .first').addClass('active');
        } else {
            fotoAttiva.next().addClass('active');
        }
    };





});