/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Gestion des évènements d'interaction
 * 
 */

 $(function(){
    /* script pour l'ouverture et la fermeture de la navigation mobile*/
    if(window.outerWidth >= 1920) {
        document.getElementById('navigation').className = 'ouvert';
    } else if(window.outerWidth < 1920) {
        $('i.menu').on('click', function(){
            $('nav').removeClass('fermer').addClass('ouvert');
            $('body').addClass('unscrollable');
            $("html, body").animate({scrollTop: 0}, 0);
        });
        $('i.close').on('click', function(){
            $('nav').removeClass('ouvert').addClass('fermer');
            $('body').removeClass('unscrollable');
        });
    }
    /* fin du script pour l'ouverture et la fermeture de la navigation mobile */
});


