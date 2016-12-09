$(window).scroll(function (event) {
    // A chaque fois que l'utilisateur va scroller (descendre la page)
    var y = $(this).scrollTop(); // On récupérer la valeur du scroll vertical
 
    //si cette valeur > à 200 on ajouter la class
    if (y >= 400) {
      $('.nav').addClass('fixed');
    } else {
      // sinon, on l'enlève
      $('.nav').removeClass('fixed');
    }
  });