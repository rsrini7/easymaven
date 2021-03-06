#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var easymaven = require('./index.js');

var args = process.argv;
var cwd = process.cwd();

if(args.length != 3 && args.length != 4) {
  console.log('Wrong usage, you must inform the artifact, example "easymaven gson"');
} else {
  var pomPath = path.join(cwd, 'pom.xml');
  fs.open(pomPath, "r+", function(error) {
    if(!error) {
      var artifact = args[2];
      var rows = 20;
      if(args.length == 4){
        rows = args[3];
      }
      easymaven(pomPath, artifact, rows);
    } else {
      switch(error.code) {
        case "EACCES":
          console.error("Can't open", pomPath);
          break;
        default:
          console.error('This is not a Maven project')
      }
    }
  });
}


