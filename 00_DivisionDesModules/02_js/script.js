/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Gestion des évènements d'interaction
 * 
 */

 $(function(){
     $('div.btn1').on('click', function(){
         $('h1').addClass('grosTexte').removeClass('petitTexte');
    });
     $('div.btn2').on('click', function(){
         $('h1').removeClass('grosTexte').removeClass('petitTexte');
     });
     $('div.btn3').on('click', function(){
         $('h1').addClass('petitTexte').removeClass('grosTexte');
     });
 });