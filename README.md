Uses `icanhazip.com` to get your external IP address.

```javascript
var icanhazip = require('icanhazip');

icanhazip.IPv4().then(function(myIP) {
  console.log(myIP);
}).catch(function(e) {
  console.error(e.message);
});
```
