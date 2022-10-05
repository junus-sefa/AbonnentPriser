$(document).ready(function() {





    $(".prisBoks tr").each(function(){
        var prisen = 0;
        var anna = $(this).find(".pris").attr('id');

        //Netflix
        if (anna == 'netflix1_pris'){prisen = 89} //Basis
        if (anna == 'netflix2_pris'){prisen = 109} //Standard
        if (anna == 'netflix3_pris'){prisen = 159} //Premium
        //DisneyPlus
        if (anna == 'disneyPlus1_pris'){prisen = 120} //Månedsabonnement
        if (anna == 'disneyPlus2_pris'){prisen = 74} //Årsabonnement
        //HBO Nordic
        if (anna == 'hboNordic_pris'){prisen = 109} //Standard
        //Viaplay
        if (anna == 'viaPlay1_pris'){prisen = 69} //Viaplay Nyheter
        if (anna == 'viaPlay2_pris'){prisen = 129} //Viaplay Filmer & Serier
        if (anna == 'viaPlay3_pris'){prisen = 329} //Viaplay Total
        //DiscoveryPlus
        if (anna == 'discoveryPlus1_pris'){prisen = 49} //Underholdning (med reklame)
        if (anna == 'discoveryPlus2_pris'){prisen = 79} //Underholdning
        if (anna == 'discoveryPlus3_pris'){prisen = 129} //Live
        if (anna == 'discoveryPlus4_pris'){prisen = 179} //Sport
        //TV2 Play
        if (anna == 'tv2Play1_pris'){prisen = 64} //Nyheter med reklame
        if (anna == 'tv2Play2_pris'){prisen = 104} //Nyheter
        if (anna == 'tv2Play3_pris'){prisen = 89} //Basis
        if (anna == 'tv2Play4_pris'){prisen = 139} //Film og serier
        if (anna == 'tv2Play5_pris'){prisen = 199} //Familie
        if (anna == 'tv2Play6_pris'){prisen = 229} //Familie og sport
        if (anna == 'tv2Play7_pris'){prisen = 399} //Total
        //Strim
        if (anna == 'strim1_pris'){prisen = 199} //Strim litt
        if (anna == 'strim2_pris'){prisen = 349} //Strim Mye
        if (anna == 'strim3_pris'){prisen = 399} //Strim Mest
        if (anna == 'strim4_pris'){prisen = 100} //Sport Basis
        if (anna == 'strim5_pris'){prisen = 649} //Sport Premium
        //VG
        if (anna == 'vg1_pris'){prisen = 99} //VG+
        if (anna == 'vg2_pris'){prisen = 119} //VG+ Sport
        if (anna == 'vg3_pris'){prisen = 119} //VG+ med Dine penger
        if (anna == 'vg4_pris'){prisen = 119} //VG+ med PodMe
        if (anna == 'vg5_pris'){prisen = 159} //VG+ Total
        if (anna == 'vg6_pris'){prisen = 329} //Full tilgang

        $('#' + anna).text(prisen);
    });


    //Oversettelse
    var SammenlignTXT = '<i class="bi bi-plus-lg"></i>';
    var FjernSammenlignTXT = '<i class="bi bi-dash-lg"></i>';

    $("button.sammenlignKnapp").each(function(){
        $(this).html(SammenlignTXT);
    });

    /////////////////////////////////////////////////////////////////////




    $("#resetKnapp").click(function(e){
        //Fjerner den lagrede totalen
        Totalt = 0;
        $('#SUM').html(Totalt);

        //Fjerner aktivert klasse og endrer tekst på alle aktiverte leverandør
        $(".aktivert").each(function(){
            $(this).removeClass('aktivert');
            $(this).find('.sammenlignKnapp').html(SammenlignTXT);           
        });

        //Lukk igjen alle andre collapsable når en collapsable åpnes
        $('.collapse').collapse('hide');

        //Fjern "Restart Knapp"
        $('#resetKnapp').removeClass('show');
        $('#resetKnapp').addClass('hide');
    });



    $(".sammenlignKnapp").click(function(e){

        //Lager variabel
        var leverandor = this.id;

        //Endrer klasse og tekst på knapp og container
        if (!$('.'+leverandor).hasClass("aktivert")) {
            $('.'+leverandor).addClass('aktivert');
            $(this).html(FjernSammenlignTXT);
        } else {
            $('.'+leverandor).removeClass('aktivert');
            $(this).html(SammenlignTXT);            
        }

        //Kjører kalkulerVisResultat funksjon
        kalkulerVisResultat();
    }); 



    //Global Variabel Holder
    function kalkulerVisResultat() {
        var Totalt = 0;
        $(".aktivert").each(function(){
            var finnElementPris = $(this).find(".pris").text();
            Totalt += parseInt(finnElementPris);
        });
        $('#SUM').html(Totalt);
        if(Totalt == 0){
            $('#resetKnapp').removeClass('show');
            $('#resetKnapp').addClass('hide');
        } else if (Totalt > 0){
            $('#resetKnapp').removeClass('hide');
            $('#resetKnapp').addClass('show');
        }
    }
    

});

