var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var stream = "";

  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(chunk) {
      console.log('Chunk recieved' + '\n');
      stream = stream + chunk;
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
}

getAndPrintHTML();