$(document).ready(function() {

    //Enkel søkefunksjon
    $("#search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".abonnentPriser .col").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    //Lukk igjen alle andre collapsable når en collapsable åpnes
    $(".merInfoKnapp").click(function(e){
        $('.collapse').collapse('hide');
    });


});