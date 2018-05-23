var fs = require('fs');
var colors = require('colors');


fs.readdir('../task4', 'utf-8', function(err, files) {
    fs.writeFile('../task4/texts.txt', files, function(err) {
        console.log('Saved files!');
    });
});