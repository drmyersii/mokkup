var connect = require('connect');
var serve = require('serve-static');

connect().use(serve(__dirname + '/app')).listen(1337);
console.log('server is listening on port 1337...');
