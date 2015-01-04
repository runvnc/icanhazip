var Promise = require('bluebird'),
    http = require('http');

var URL = 'http://icanhazip.com/';

IPv4 = function(cb) {
  var address = '';
  var request = http.get(URL, function(res) {
    res.on('data', function(data) {
      address = data.toString();
    });
    res.on('end', function() {
      return cb(null, address.replace(/\n/g, ''));
    });
  });
  request.on('error', function(e) {
    request.abort();
    return cb(e, null);
  });
  request.setTimeout(6000, function() {
    request.abort();
    return cb(new Error('Connection to ' + URL + ' timed out.'));
  });
}

module.exports = { IPv4: Promise.promisify(IPv4),
                   URL: URL };
