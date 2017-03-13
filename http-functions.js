var https = require('https');

module.exports = function getHTML (options, callback) {
    https.get(options, function(response) {

    var stream = "";

    response.setEncoding('utf8');

    response.on('data', function(chunk) {
      console.log(chunk);
      console.log('Chunk recieved.' + '\n');
      stream = stream + chunk;
    });

    response.on('end', function() {
      callback(stream);
    });
  });
} //end