var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {

    respone.setEncoding('utf8');

    response.on('data', function(chunk) {
      console.log('Chunk recieved.' + '\n');
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
}