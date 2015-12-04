#!/usr/bin/env node

if (process.argv.length < 3) {
  return console.error('You need to provide a file that should get the “proper typographic punctuation” treatment…');
}

var fs = require('fs');
var retext = require('retext');
var smartypants = require('retext-smartypants');
var filename = process.argv[2];

function fixPunctuation(doc) {
  return retext().use(smartypants).process(doc);
}

fs.readFile(filename, 'utf8', function(err, doc) {
  if (err) {
    return console.error(err.message);
  }

  console.log(fixPunctuation(doc));
});
