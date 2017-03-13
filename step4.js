var https = require('https');

function getHTML (options, callback) {

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

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);