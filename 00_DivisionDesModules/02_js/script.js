/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Gestion des évènements d'interaction
 * 
 */

 $(function(){
    /* script pour l'ouverture et la fermeture de la navigation mobile*/
    $('i.menu').on('click', function(){
        $('nav').removeClass('fermer').addClass('ouvert');
        $('body').addClass('unscrollable');
    });
    $('i.close').on('click', function(){
        $('nav').removeClass('ouvert').addClass('fermer');
        $('body').removeClass('unscrollable');
    });
    
    /* fin du script pour l'ouverture et la fermeture de la navigation mobile */


});