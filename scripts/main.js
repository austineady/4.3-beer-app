(function(){
  'use strict';

  $.getJSON('http://localhost:9000/beers.json').then(app);

  function app(beers){
    logBeers(beers);
    renderContainers();
  }

  function logBeers(beers) {
    console.log(beers);
  }

  function renderContainers(){
    // get the application template and put it in the body
    $('body').prepend(JST['application']());
  }

})();
