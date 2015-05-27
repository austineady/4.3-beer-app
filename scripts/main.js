(function(){
  'use strict';

  $(document).ready(function(){
    $.getJSON('http://localhost:9000/beers.json').then(app);
  });

  function app(beers){
    logBeers(beers);
    renderApp(beers);
  }

  function logBeers(beers) {
    console.log(beers);
  }

  function renderApp(beers){
    // get the application template and put it in the body
    $('body').prepend(JST['application']({
      beer: _.first(beers)
    }));

    _.each(beers, function(beer) {
      var $beer = $('.beers-list').append(JST['beer'](beer));
    });
  }

})();
