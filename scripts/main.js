(function(){
  'use strict';

  $.getJSON('http://localhost:9000/beers.json').then(logBeers);

  function logBeers(beers) {
    console.log(beers);
  }

})();
