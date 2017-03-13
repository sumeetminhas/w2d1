var https = require('https');

function getAndPrintHTML (options) {

  https.get(options, function(response) {

    var stream = "";

    response.setEncoding('utf8');

    response.on('data', function(chunk) {
      console.log(chunk);
      console.log('Chunk recieved.' + '\n');
      stream = stream + chunk;
    });

    response.on('end', function() {
      console.log(stream);
      console.log('Response stream complete.');
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);