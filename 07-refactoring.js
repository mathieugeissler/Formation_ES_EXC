/* eslint-disable prefer-rest-params */
/* eslint-disable no-var */

var fetch = require('node-fetch');
var API = 'https://randomuser.me/api';


function generateRandomUser(userNationalities) {
  var nationalities = [];
  for (var i = 0; i < arguments.length; i++) {
    nationalities.push(arguments[i]);
  }

  if (nationalities.length > 0) {
    var request = [];
    for (var y = 0; y < nationalities.length; y++) {
      var criteria = { nat: nationalities[y] };
      request.push(getRandomUser(criteria));
    }
    Promise.all(request)
      .then(function (users) {
        console.log('DEBUG -- Users created:', users);
      });
  }
}

function getRandomUser(criterias) {
  console.log('DEBUG -- Generate user with criterias', criterias);
  if (criterias) {
    var criteriaKeys = Object.keys(criterias);
    var criteriaChain = '';
    for (var i = 0; i < criteriaKeys.length; i++) {
      var key = criteriaKeys[i];
      var value = criterias[key];
      if (key && value) {
        var prefix = '&';
        if (criteriaChain.length === 0) {
          prefix = '?';
        }
        criteriaChain = criteriaChain + prefix + key + '=' + value;
      }
    }
  }
  var url = API + '/' + criteriaChain;
  console.log('DEBUG -- Generate user with url', url);
  return fetch(url, { method: 'GET' })
    .then(function (res) {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.statusText);
      }
    })
    .then(function (json) { return json.results[0] })
    .catch(function (err) { console.error(err) });
}

generateRandomUser('FR', 'DE');
