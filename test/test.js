var icanhazip = require('../index.js');

icanhazip.IPv4().then(function(myIP) {
  console.log('**'+myIP+'**');
}).catch(function(e) {
  console.error(e.message);
});


